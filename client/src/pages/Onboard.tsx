import { useState, useCallback } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  FileText,
  X,
  Building2,
  Loader2
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buildingFormSchema, type BuildingFormData } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const buildingTypes = [
  { value: "residential-block", label: "Residential block of flats" },
  { value: "mixed-use", label: "Mixed-use (residential + commercial)" },
  { value: "converted-house", label: "Converted house" },
  { value: "purpose-built", label: "Purpose-built apartments" },
  { value: "retirement", label: "Retirement/sheltered housing" },
  { value: "other", label: "Other" },
];

const yearBuiltOptions = [
  { value: "pre-1900", label: "Before 1900" },
  { value: "1900-1945", label: "1900 - 1945" },
  { value: "1946-1970", label: "1946 - 1970" },
  { value: "1971-1990", label: "1971 - 1990" },
  { value: "1991-2010", label: "1991 - 2010" },
  { value: "post-2010", label: "After 2010" },
  { value: "unknown", label: "Not sure" },
];

const heightBands = [
  { value: "under-11m", label: "Under 11 metres (up to ~4 storeys)" },
  { value: "11-18m", label: "11 - 18 metres (~4-6 storeys)" },
  { value: "over-18m", label: "Over 18 metres (7+ storeys)" },
  { value: "unknown", label: "Not sure" },
];

type Step = 1 | 2 | 3;

export default function Onboard() {
  const [step, setStep] = useState<Step>(1);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const form = useForm<BuildingFormData>({
    resolver: zodResolver(buildingFormSchema),
    defaultValues: {
      address: "",
      buildingType: "",
      yearBuilt: "",
      heightBand: "",
      numberOfUnits: 1,
      hasLifts: false,
      hasCommercialUnits: false,
      email: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const goToStep = (newStep: Step) => {
    if (newStep === 2) {
      form.trigger(["address", "buildingType", "yearBuilt", "heightBand", "numberOfUnits"]).then(isValid => {
        if (isValid) setStep(newStep);
      });
    } else {
      setStep(newStep);
    }
  };

  const onSubmit = async (data: BuildingFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStep(3);
        setIsComplete(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us for help.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueToStep3 = () => {
    form.trigger("email").then(isValid => {
      if (isValid) {
        form.handleSubmit(onSubmit)();
      }
    });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <SEO 
        title="Check Your Building" 
        description="Start your compliance journey. Upload what you have and we'll tell you what's missing, what matters, and what's next."
        path="/onboard"
      />
      {/* Header */}
      <section className="py-8 md:py-12 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" data-testid="text-page-title">
              Check your building
            </h1>
            <p className="text-muted-foreground" data-testid="text-page-subtitle">
              Upload what you have. We'll tell you what's missing, what matters, and what's next.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`} data-testid="step-indicator-1">
                  {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
                </div>
                <span className={`text-sm font-medium ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Building details</span>
              </div>
              <div className="flex-1 h-px bg-border mx-4" />
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`} data-testid="step-indicator-2">
                  {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : "2"}
                </div>
                <span className={`text-sm font-medium ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Documents</span>
              </div>
              <div className="flex-1 h-px bg-border mx-4" />
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`} data-testid="step-indicator-3">
                  {isComplete ? <CheckCircle2 className="h-5 w-5" /> : "3"}
                </div>
                <span className={`text-sm font-medium ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8 md:py-12 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form>
                {/* Step 1: Building Details */}
                {step === 1 && (
                  <Card className="bg-card" data-testid="step-1-form">
                    <CardContent className="p-6 md:p-8 space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-semibold">Building details</h2>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Tell us about your building so we can assess what compliance requirements apply.
                      </p>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Building address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Start typing the address..." 
                                {...field}
                                data-testid="input-address"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="buildingType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Building type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-building-type">
                                  <SelectValue placeholder="Select building type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {buildingTypes.map(type => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="yearBuilt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Approximate year built</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-year-built">
                                    <SelectValue placeholder="Select era" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {yearBuiltOptions.map(opt => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="heightBand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Building height</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-height">
                                    <SelectValue placeholder="Select height" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {heightBands.map(band => (
                                    <SelectItem key={band.value} value={band.value}>
                                      {band.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="numberOfUnits"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of residential units</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min={1}
                                {...field}
                                onChange={e => field.onChange(parseInt(e.target.value) || 1)}
                                data-testid="input-units"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="hasLifts"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-md border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Lifts</FormLabel>
                                <p className="text-sm text-muted-foreground">Does the building have lifts?</p>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="switch-lifts"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="hasCommercialUnits"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-md border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Commercial units</FormLabel>
                                <p className="text-sm text-muted-foreground">Any shops or offices?</p>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="switch-commercial"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button type="button" onClick={() => goToStep(2)} data-testid="button-next-step-1">
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Document Upload */}
                {step === 2 && (
                  <Card className="bg-card" data-testid="step-2-form">
                    <CardContent className="p-6 md:p-8 space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Upload className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-semibold">Upload documents</h2>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Upload any compliance documents you have — certificates, reports, invoices. Don't worry about organising them; we'll handle that.
                      </p>

                      {/* Drop Zone */}
                      <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className="border-2 border-dashed rounded-md p-8 md:p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => document.getElementById('file-input')?.click()}
                        data-testid="dropzone"
                      >
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="font-medium mb-1">Drop files here or click to browse</p>
                        <p className="text-sm text-muted-foreground">
                          PDF, images, Word documents — anything you have
                        </p>
                        <input
                          id="file-input"
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                          data-testid="input-files"
                        />
                      </div>

                      {/* File List */}
                      {files.length > 0 && (
                        <div className="space-y-2" data-testid="file-list">
                          <Label>Uploaded files ({files.length})</Label>
                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {files.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                                <div className="flex items-center gap-3 min-w-0">
                                  <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                                  <span className="text-sm truncate">{file.name}</span>
                                  <span className="text-xs text-muted-foreground shrink-0">
                                    ({(file.size / 1024).toFixed(0)} KB)
                                  </span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFile(index)}
                                  data-testid={`button-remove-file-${index}`}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-sm text-muted-foreground">
                        No documents yet? No problem. You can skip this step and we'll identify what you need.
                      </p>

                      {/* Email for step 2 */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="you@example.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <p className="text-xs text-muted-foreground mt-1">
                              We'll send your compliance profile here.
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} data-testid="button-back-step-2">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={handleContinueToStep3}
                          disabled={isSubmitting}
                          data-testid="button-submit"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <Card className="bg-card" data-testid="step-3-confirmation">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-3" data-testid="text-confirmation-title">
                        We're analysing your building
                      </h2>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed" data-testid="text-confirmation-desc">
                        Thanks for submitting your building details. Our team is now reviewing the information and building your compliance profile.
                      </p>

                      <div className="bg-muted/50 rounded-md p-6 text-left max-w-md mx-auto mb-8">
                        <h3 className="font-semibold mb-3">What happens next</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>We'll review your documents and building details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>You'll receive your initial compliance profile by email</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>We'll highlight any gaps and next steps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>Expected turnaround: 2-3 business days</span>
                          </li>
                        </ul>
                      </div>

                      <Link href="/">
                        <Button variant="outline" data-testid="button-back-home">
                          Back to home
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

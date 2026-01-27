import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Send
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact Us" 
        description="Questions about building compliance? Get in touch with our team. We're here to help you understand your requirements."
        path="/contact"
      />
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-page-title">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-subtitle">
              Questions about how we can help with your building? We're here to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-6" data-testid="text-contact-title">
                  Contact us
                </h2>
                
                <Card className="bg-card mb-6" data-testid="card-email">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email us</h3>
                        <a 
                          href="mailto:hello@complyflow.co.uk" 
                          className="text-primary hover:underline"
                          data-testid="link-email"
                        >
                          hello@complyflow.co.uk
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          We typically respond within one business day.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4" data-testid="text-about-title">Who we are</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-about-1">
                    We're a team of compliance professionals and technologists who believe building safety shouldn't be this complicated.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-about-2">
                    Our team has decades of combined experience in property management, fire safety, and building regulations. We've seen first-hand how duty holders struggle with the administrative burden of compliance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-about-3">
                    That's why we built ComplyFlow — to bring clarity and simplicity to a complex area, without cutting corners on safety or accountability.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6" data-testid="text-form-title">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <Card className="bg-card" data-testid="card-success">
                    <CardContent className="p-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message sent</h3>
                      <p className="text-muted-foreground mb-6">
                        Thanks for getting in touch. We'll get back to you within one business day.
                      </p>
                      <Link href="/">
                        <Button variant="outline" data-testid="button-back-home">
                          Back to home
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-card" data-testid="card-form">
                    <CardContent className="p-6">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your name" 
                                    {...field} 
                                    data-testid="input-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="you@example.com" 
                                    {...field}
                                    data-testid="input-email" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="How can we help?" 
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                    data-testid="input-message"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full"
                            disabled={form.formState.isSubmitting}
                            data-testid="button-submit"
                          >
                            {form.formState.isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                Send message
                                <Send className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              Ready to start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Skip the conversation and go straight to checking your building. You can always reach out if you have questions.
            </p>
            <Link href="/onboard">
              <Button size="lg" className="text-base px-8" data-testid="button-cta">
                Check your building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

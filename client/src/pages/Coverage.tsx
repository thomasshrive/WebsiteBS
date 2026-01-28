import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Flame, 
  Zap, 
  Droplets, 
  ArrowUpDown, 
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const coverageAreas = [
  {
    id: "fire",
    icon: Flame,
    title: "Fire Safety",
    description: "Fire risk assessments, alarm systems, emergency lighting, compartmentation, fire doors, and evacuation procedures.",
    items: [
      "Fire risk assessments and reviews",
      "Fire detection and alarm systems",
      "Emergency lighting",
      "Fire doors and compartmentation",
      "Evacuation plans and signage",
      "Firefighting equipment"
    ]
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Safety",
    description: "Electrical installation condition reports, portable appliance testing, and electrical safety standards.",
    items: [
      "Electrical installation condition reports (EICR)",
      "Periodic inspection and testing",
      "Portable appliance testing (PAT)",
      "Emergency lighting testing",
      "RCD protection verification"
    ]
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Hygiene",
    description: "Legionella risk assessments, water testing, tank inspections, and water management.",
    items: [
      "Legionella risk assessments",
      "Water temperature monitoring",
      "Tank inspections and cleaning",
      "Water testing and sampling",
      "Written control schemes"
    ]
  },
  {
    id: "lifts",
    icon: ArrowUpDown,
    title: "Lifts & Lifting Equipment",
    description: "Lift thorough examinations, maintenance records, and LOLER compliance.",
    items: [
      "Thorough examinations (LOLER)",
      "Six-monthly inspections",
      "Maintenance records",
      "Lift safety certifications",
      "Trapped passenger procedures"
    ]
  },
  {
    id: "emergency-lighting",
    icon: Lightbulb,
    title: "Emergency Lighting",
    description: "Testing schedules, maintenance records, and compliance with BS 5266.",
    items: [
      "Monthly functional tests",
      "Annual full duration tests",
      "Maintenance and repair records",
      "Photometric testing",
      "BS 5266 compliance"
    ]
  },
  {
    id: "asbestos",
    icon: AlertTriangle,
    title: "Asbestos Management",
    description: "Surveys, management plans, and ongoing monitoring for buildings constructed before 2000.",
    items: [
      "Asbestos surveys and registers",
      "Management plans",
      "Condition monitoring",
      "Contractor briefings",
      "Removal and remediation records"
    ]
  }
];

export default function Coverage() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Compliance Coverage" 
        description="We manage fire safety, electrical, water hygiene, lifts, emergency lighting, and asbestos compliance for residential and mixed-use buildings."
        path="/coverage"
      />
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-page-title">
              Compliance coverage
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-subtitle">
              We manage the major safety and compliance categories that apply to residential and mixed-use buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {coverageAreas.map((area) => (
              <Card key={area.id} className="bg-card" data-testid={`card-${area.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-1">{area.title}</h2>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {area.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" data-testid="text-note-title">
                      Coverage depends on your building
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-note-content">
                      Not all buildings require the same compliance. What applies to you depends on several factors:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Building type:</strong> Residential, mixed-use, or commercial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Height:</strong> Different rules apply to buildings over 11m and 18m</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Age:</strong> Older buildings may have additional requirements (e.g., asbestos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Features:</strong> Lifts, car parks, communal areas all affect requirements</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      During onboarding, we assess exactly what applies to your building and build a tailored compliance profile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Don't Cover */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-exclude-title">
              What we don't cover
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-exclude-subtitle">
              We focus on building safety and compliance. Some areas are outside our scope:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <Card className="bg-muted/30 border-0">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Individual flat contents and tenant responsibilities</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-0">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Planning permissions and building regulations</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-0">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Insurance claims and disputes</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-0">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Service charge and leasehold management</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              Find out what applies to you
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Enter your building details and we'll assess exactly what compliance requirements apply.
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

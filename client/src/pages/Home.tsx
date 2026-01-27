import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  FileCheck, 
  Clock, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Upload,
  BarChart3,
  Calendar,
  Factory
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Building Compliance, Handled For You" 
        description="We manage your building's compliance end-to-end. We track requirements, arranging inspections, and keeping the evidence audit-ready."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight" data-testid="text-hero-title">
              Building compliance,<br />
              <span className="text-primary">handled for you</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
              We manage your building's compliance end-to-end. We track requirements, arranging inspections, and keeping the evidence audit-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/onboard">
                <Button size="lg" className="text-base px-8" data-testid="button-hero-cta">
                  Check your building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="text-base px-8" data-testid="button-hero-learn">
                  Learn how it works
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6" data-testid="text-hero-promise">
              Upload what you have. We'll tell you what's missing, what matters, and what's next.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-problem-title">
              Compliance shouldn't be this hard
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-problem-subtitle">
              Managing building safety is complex, time-consuming, and high-stakes. One missed deadline could mean serious consequences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card" data-testid="card-problem-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-destructive/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Missed deadlines</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Certificates expire. Inspections come due. Keeping track of it all is a full-time job nobody signed up for.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card" data-testid="card-problem-2">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-destructive/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Liability risk</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Non-compliance doesn't just mean fines. It means personal liability for directors and duty holders.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card" data-testid="card-problem-3">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-destructive/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Admin burden</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Chasing contractors, hunting for certificates, preparing for inspections. It never ends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section - 3 Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-solution-title">
              Three steps to peace of mind
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-solution-subtitle">
              We've simplified building compliance down to what actually matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-testid="step-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">Step 1</div>
              <h3 className="font-semibold text-xl mb-3">Upload your documents</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send us whatever you have — certificates, reports, invoices. We'll work with it.
              </p>
            </div>

            <div className="text-center" data-testid="step-2">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">Step 2</div>
              <h3 className="font-semibold text-xl mb-3">Get your compliance profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                We analyse everything and build a clear picture of where you stand right now.
              </p>
            </div>

            <div className="text-center" data-testid="step-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">Step 3</div>
              <h3 className="font-semibold text-xl mb-3">Stay compliant, always</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your live 2-year timeline keeps everything on track. We handle the updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-why-title">
                  Technology meets expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-why-subtitle">
                  We combine smart document analysis with human oversight. Every output is reviewed by compliance professionals before it reaches you.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3" data-testid="why-point-1">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Intelligent document extraction identifies what matters</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="why-point-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Human review ensures accuracy on every assessment</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="why-point-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Continuous monitoring catches issues before they become problems</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="why-point-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Full audit trail for every action and decision</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card" data-testid="card-stat-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Human reviewed</div>
                  </CardContent>
                </Card>
                <Card className="bg-card" data-testid="card-stat-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">2 years</div>
                    <div className="text-sm text-muted-foreground">Forward planning</div>
                  </CardContent>
                </Card>
                <Card className="bg-card" data-testid="card-stat-3">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </CardContent>
                </Card>
                <Card className="bg-card" data-testid="card-stat-4">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">Full</div>
                    <div className="text-sm text-muted-foreground">Audit trail</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-who-title">
              Built for people who manage buildings
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-who-subtitle">
              Whether you're responsible for one building or a hundred, we've got you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card hover-elevate" data-testid="card-who-1">
              <CardContent className="p-6">
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Freeholders</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ultimate responsibility, without the headache.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover-elevate" data-testid="card-who-2">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">RTMs & RMCs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Volunteer directors, professional support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover-elevate" data-testid="card-who-3">
              <CardContent className="p-6">
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Landlords</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Single property or portfolio — we scale with you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover-elevate" data-testid="card-who-4">
              <CardContent className="p-6">
                <FileCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Managing Agents</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deliver compliance excellence to your clients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover-elevate" data-testid="card-who-5">
              <CardContent className="p-6">
                <Factory className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Facilities Managers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Commercial compliance, centralised and controlled.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/who">
              <Button variant="outline" data-testid="button-who-learn">
                Learn more about who we help
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Risk & Reassurance Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-risk-title">
                Your protection is our priority
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-risk-subtitle">
                We understand the stakes. That's why we've built in safeguards at every level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card" data-testid="card-risk-1">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Clear liability structure</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Legal responsibility remains with the duty holder. We manage the compliance process end-to-end, providing you with everything you need to fulfil your obligations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-risk-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Professional indemnity</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We carry comprehensive professional indemnity insurance, giving you additional protection and peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-risk-3">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Human oversight</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every assessment includes human sign-off from qualified compliance professionals. Technology assists; people decide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-risk-4">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Complete audit trail</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every document, decision, and action is logged and retained. Full evidence chain for inspections and legal requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Link href="/risk">
                <Button variant="outline" data-testid="button-risk-learn">
                  Read our full approach to risk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              Ready to simplify compliance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Start with your building. Upload what you have and we'll show you what's next.
            </p>
            <Link href="/onboard">
              <Button size="lg" className="text-base px-8" data-testid="button-cta-final">
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

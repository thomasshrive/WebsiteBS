import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Upload, 
  BarChart3, 
  Calendar, 
  ArrowRight, 
  FileText,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
  CircleDot
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="How It Works" 
        description="From chaos to clarity in three simple steps. Upload documents, get your compliance profile, and stay audit-ready with our live timeline."
        path="/how-it-works"
      />
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-page-title">
              How it works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-subtitle">
              From chaos to clarity in three simple steps. No expertise required — just upload what you have.
            </p>
          </div>
        </div>
      </section>

      {/* Three Steps Detailed */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20" data-testid="section-step-1">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  Step 1
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Upload what you have
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Don't worry about organising everything first. Send us whatever documents you have — certificates, reports, invoices, emails, photos. We accept PDFs, images, and common document formats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">No special format required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Upload multiple files at once</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Secure, encrypted storage</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <Card className="bg-card">
                  <CardContent className="p-8 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="h-16 w-16 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20" data-testid="section-step-2">
              <div>
                <Card className="bg-card">
                  <CardContent className="p-8 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  Step 2
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  We build your compliance profile
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team analyses your documents and building details to create a comprehensive compliance profile. You'll see exactly where you stand across all major safety categories.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Smart document extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Human review of every assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Clear gap identification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" data-testid="section-step-3">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  Step 3
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Stay compliant with your live timeline
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your personalised 2-year compliance timeline shows everything coming up. We keep it updated automatically and alert you to what needs attention, when.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Real-time status updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Proactive deadline reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Always audit-ready</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <Card className="bg-card">
                  <CardContent className="p-8 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI + Human Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-ai-title">
                Technology + expertise
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-ai-subtitle">
                We combine intelligent automation with human oversight for the best of both worlds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card" data-testid="card-ai">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">What technology does</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Extracts key dates and information from documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Identifies certificate types and categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Calculates upcoming deadlines and renewals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Monitors for regulatory changes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-human">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">What humans do</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Review and verify every automated assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Handle edge cases and unusual situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Provide expert guidance on complex issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDot className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>Sign off on final compliance assessments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Status Meanings */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-status-title">
                Understanding your status
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-status-subtitle">
                We use a simple traffic light system to show where you stand.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-card" data-testid="card-status-green">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Green — Compliant</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Everything is in order. Valid certificates are in place and no action is needed right now.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-status-amber">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Amber — Attention needed</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Something is coming up or requires action soon. A certificate may be expiring, or documentation is needed.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-status-red">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Red — Urgent action required</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A compliance issue needs immediate attention. A certificate has expired, or a required inspection is overdue.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missing Docs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-missing-title">
              What if documents are missing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-missing-subtitle">
              That's exactly what we're here to help with. When documents are missing, we'll:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">1</div>
                  <p className="text-muted-foreground text-sm">
                    Identify what's missing based on your building type and requirements
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">2</div>
                  <p className="text-muted-foreground text-sm">
                    Explain what you need and why it matters for your compliance
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <p className="text-muted-foreground text-sm">
                    Help you get the right documentation in place, step by step
                  </p>
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
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Tell us about your building and upload what you have. We'll take it from there.
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

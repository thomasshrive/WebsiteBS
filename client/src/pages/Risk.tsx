import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  FileCheck, 
  Scale,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function Risk() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Risk & Liability" 
        description="Clear information about liability, professional indemnity, human oversight, and audit trails for duty holders, directors, lawyers, and insurers."
        path="/risk"
      />
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-page-title">
              Risk & liability
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-subtitle">
              Clear information for duty holders, directors, lawyers, and insurers about how we manage risk and liability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card" data-testid="card-liability">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Legal liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Legal liability for building safety and compliance remains with the duty holder, typically the freeholder, RTM, or responsible person under fire safety legislation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We do not assume or transfer this liability. What we do is give you the tools, information, and support to meet your obligations effectively.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-process">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Our role</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We manage the compliance process end-to-end: document analysis, deadline tracking, gap identification, and ongoing monitoring.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Think of us as your compliance operations team, handling the administration while you retain decision-making authority and legal responsibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-human">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Human oversight</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every compliance assessment includes human review and sign-off by qualified professionals. Automated analysis assists our team but does not make final determinations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We never rely solely on technology for compliance decisions that affect your building's safety status.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="card-insurance">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Professional indemnity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain comprehensive professional indemnity insurance covering our advice and services. Details are available on request for your legal or insurance teams.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    This provides an additional layer of protection beyond your own insurance arrangements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Trail */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-audit-title">
                  Complete audit trail
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-audit-desc">
                  Every action, decision, and document is logged with timestamps and user attribution. This comprehensive record supports:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3" data-testid="audit-point-1">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Regulatory inspections and audits</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="audit-point-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Insurance renewals and claims</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="audit-point-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Legal due diligence and transactions</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="audit-point-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Board and director accountability</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="audit-point-5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Historical record keeping</span>
                  </li>
                </ul>
              </div>
              
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">What we record</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>Document uploads with timestamps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>Compliance assessments and reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>Notifications sent and acknowledged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>Status changes and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>User actions and approvals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>System-generated alerts and responses</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                    Records are retained for a minimum of 7 years and can be exported on request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Clarification */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-amber-500/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3" data-testid="text-clarify-title">
                      Important clarification
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p data-testid="text-clarify-1">
                        <strong>We are not insurers.</strong> We do not provide building insurance, liability insurance, or any insurance products. Your existing insurance arrangements should remain in place.
                      </p>
                      <p data-testid="text-clarify-2">
                        <strong>We are not contractors.</strong> We do not carry out inspections, testing, or remediation work. We help you manage the process of ensuring these are done by qualified professionals.
                      </p>
                      <p data-testid="text-clarify-3">
                        <strong>We are not legal advisers.</strong> While our team understands building safety regulations, we do not provide legal advice. For complex legal questions, you should consult a qualified solicitor.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-prof-title">
              For lawyers and insurers
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-prof-subtitle">
              If you're advising a client who uses our services, or conducting due diligence, we're happy to provide:
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 text-left mb-8">
              <Card className="bg-card">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Details of our professional indemnity insurance</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Service level agreements and terms of service</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Data security and retention policies</p>
                </CardContent>
              </Card>
            </div>

            <Link href="/contact">
              <Button variant="outline" data-testid="button-contact-prof">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              Ready to simplify compliance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Start with your building details. We'll show you how we can help manage your compliance requirements.
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

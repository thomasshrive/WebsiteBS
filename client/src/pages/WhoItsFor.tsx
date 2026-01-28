import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Building2, 
  Users, 
  Home, 
  Briefcase,
  Factory,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import georgeFryImage from "@assets/F&CHS(LR)-14_1769608323483.webp";

const audiences = [
  {
    id: "agents",
    icon: Briefcase,
    title: "Managing Agents",
    description: "Your clients trust you to keep their buildings safe and compliant. But with multiple buildings and competing demands, maintaining that standard is a constant challenge.",
    challenges: [
      "Managing compliance across many buildings",
      "Meeting client expectations consistently",
      "Demonstrating value to building owners",
      "Keeping on top of regulatory changes"
    ],
    solution: "Deliver compliance excellence at scale. Show your clients exactly where each building stands, with professional reports that demonstrate the value you provide. We make you look good."
  },
  {
    id: "freeholders",
    icon: Building2,
    title: "Freeholders",
    description: "You own the building and bear ultimate responsibility for safety and compliance. But managing everything while running a business or living your life? That's the hard part.",
    challenges: [
      "Ultimate legal liability for building safety",
      "Complex regulations that change frequently",
      "Coordinating with leaseholders and contractors",
      "Keeping records organised and accessible"
    ],
    solution: "We take the compliance burden off your shoulders. You get a clear dashboard showing exactly where you stand, with proactive alerts before anything becomes urgent. Your liability stays with you — but we make sure you're always in a position to meet it."
  },
  {
    id: "rtms",
    icon: Users,
    title: "RTMs & RMCs",
    description: "Running a building as volunteer directors is rewarding but demanding. You took on responsibility for your home, not a second career in compliance management.",
    challenges: [
      "Volunteer directors juggling day jobs",
      "Knowledge gaps around technical requirements",
      "Turnover means reinventing the wheel",
      "Personal liability for the board"
    ],
    solution: "We give you professional-grade compliance management without the professional price tag. Your board gets peace of mind knowing nothing will slip through the cracks, with clear records that survive director changes."
  },
  {
    id: "landlords",
    icon: Home,
    title: "Landlords",
    description: "Whether you have one property or a hundred, you need the same thing: certainty that everything is compliant, without it consuming all your time.",
    challenges: [
      "Juggling requirements across multiple properties",
      "Keeping track of different certificate expiry dates",
      "Finding reliable contractors",
      "Preparing for inspections at short notice"
    ],
    solution: "One place to manage compliance across your whole portfolio. We scale with you — same process, same clarity, whether you're adding your first rental or your fiftieth."
  },
  {
    id: "facilities",
    icon: Factory,
    title: "Facilities & Asset Managers (Commercial)",
    description: "You're responsible for keeping complex buildings compliant — offices, retail, industrial, mixed-use — while juggling audits, insurers, and internal stakeholders.",
    challenges: [
      "Multiple regulations across different asset types",
      "Audit and insurer scrutiny",
      "Disconnected contractors and certificates",
      "Proving compliance to boards, tenants, and regulators"
    ],
    solution: "One system of record for building compliance. Clear timelines, complete evidence, and audit-ready reporting across your portfolio — so you can demonstrate control, not just activity."
  }
];

export default function WhoItsFor() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Who It's For" 
        description="Built for freeholders, RTMs, RMCs, landlords, managing agents, and facilities managers. If you're responsible for building safety and compliance, we're here to help."
        path="/who"
      />
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-page-title">
              Who it's for
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-subtitle">
              If you're responsible for a building's safety and compliance, we built this for you.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {audiences.map((audience, index) => (
              <div 
                key={audience.id}
                className={`py-12 ${index < audiences.length - 1 ? 'border-b' : ''}`}
                data-testid={`section-${audience.id}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-md bg-primary/10 flex items-center justify-center">
                    <audience.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{audience.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {audience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-muted/30 border-0">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                        The challenge
                      </h3>
                      <ul className="space-y-3">
                        {audience.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-0">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-primary">
                        How we help
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {audience.solution}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Quote for Managing Agents */}
                {audience.id === "agents" && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary" data-testid="quote-managing-agents">
                    <blockquote className="text-foreground leading-relaxed italic">
                      "Property managers have always been jack-of-all-trades... part customer service, part building expert, part compliance officer, part legal interpreter. Taking compliance off their plate lets them focus on what residents actually feel day to day: leaks, repairs, and looking after the fabric of the building."
                    </blockquote>
                    <div className="mt-4 flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={georgeFryImage} alt="George Fry" />
                        <AvatarFallback>GF</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">George Fry, ACA</p>
                        <p className="text-sm text-muted-foreground">Operations Director, Fry & Co</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-benefits-title">
              What everyone gets
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-benefits-subtitle">
              Regardless of your role, here's what you can expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Complete visibility</h3>
                <p className="text-sm text-muted-foreground">
                  See exactly where your building stands at any moment, across all compliance categories.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Proactive alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Never miss a deadline. We alert you well before anything becomes urgent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Audit-ready records</h3>
                <p className="text-sm text-muted-foreground">
                  Everything documented and organised. Ready for inspections whenever they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Expert support</h3>
                <p className="text-sm text-muted-foreground">
                  Access to compliance professionals when you need guidance or have questions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Peace of mind</h3>
                <p className="text-sm text-muted-foreground">
                  Stop worrying about what you might have missed. We're watching everything.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Time back</h3>
                <p className="text-sm text-muted-foreground">
                  Hours you'd spend chasing certificates and contractors, reclaimed for what matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              See how it works for you
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
              Start with your building. We'll show you exactly what compliance looks like for your situation.
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

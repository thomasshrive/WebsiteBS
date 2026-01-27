import { Link } from "wouter";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">BUILT<span className="text-primary">SERVE</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building compliance, simplified. We manage the process so you can focus on what matters.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-how">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-coverage">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/onboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-onboard">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/who" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-who">
                  Who It's For
                </Link>
              </li>
              <li>
                <Link href="/risk" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-risk">
                  Risk & Liability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@builtserve.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  hello@builtserve.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BUILTSERVE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

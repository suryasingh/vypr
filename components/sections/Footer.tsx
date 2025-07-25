"use client";

import { Separator } from "@/components/ui/separator";
import { BetaAccessModal } from "../BetaAccessModal";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-20 pb-8 border-t border-border/40", className)}>
        <div className="grid md:grid-cols-4 gap-8 mb-12 px-14">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-black"></div>
              </div>
              <div className="text-xl font-medium text-white">VibePay</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Credit systems with global compliance built-in. As your Merchant 
              of Record, we handle taxes across 180+ countries so you can focus 
              on building.
            </p>
            <div className="text-xs text-gray-500">
              © 2025 VibePay. All rights reserved.
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/global-coverage" className="hover:text-white transition-colors">
                  Global Coverage
                </a>
              </li>
              <li>
                <a href="/mor-benefits" className="hover:text-white transition-colors">
                  MoR Benefits
                </a>
              </li>
              <li>
                <BetaAccessModal>
                  <a className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </BetaAccessModal>
              </li>
              <li>
                <BetaAccessModal>
                  <a className="hover:text-white transition-colors">
                    Tax Dashboard
                  </a>
                </BetaAccessModal>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:team@vibepay.sh" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/40" />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-gray-500 px-14">
          <div>Built with ❤️ for global developers</div>
          <div className="flex items-center space-x-6">
            <span>180+ Countries</span>
            <span>100% Tax Compliant</span>
            <span>MoR Certified</span>
          </div>
        </div>
    </footer>
  );
} 
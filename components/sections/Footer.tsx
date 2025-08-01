"use client";

import { Separator } from "@/components/ui/separator";
import { BetaAccessModal } from "../BetaAccessModal";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-12 sm:py-16 lg:py-20 pb-8 border-t border-border/40", className)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12 px-4 sm:px-8 lg:px-14">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-black"></div>
              </div>
              <div className="text-xl font-medium text-white">VibePay</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
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
                <Link href="/global-coverage" className="hover:text-white transition-colors">
                  Global Coverage
                </Link>
              </li>
              <li>
                <Link href="/mor-benefits" className="hover:text-white transition-colors">
                  MoR Benefits
                </Link>
              </li>
              <li>
                <BetaAccessModal>
                  <a className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </BetaAccessModal>
              </li>
              {/* <li>
                <BetaAccessModal>
                  <a className="hover:text-white transition-colors">
                    Tax Dashboard
                  </a>
                </BetaAccessModal>
              </li> */}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li> */}
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li> */}
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
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Compliance
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/40" />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-gray-500 px-4 sm:px-8 lg:px-14 gap-4 md:gap-0">
          <div className="text-center md:text-left">Built with ❤️ for global developers</div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 lg:gap-6">
            <span>180+ Countries</span>
            <span>100% Tax Compliant</span>
            <span>MoR Certified</span>
          </div>
        </div>
    </footer>
  );
} 
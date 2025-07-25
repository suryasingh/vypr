"use client";

import { Button } from "@/components/ui/button";
import { BetaAccessModal } from "../BetaAccessModal";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Simple Logo Icon */}
            <div className="w-6 h-6 bg-white border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>

            {/* Brand Name */}
            <div className="flex items-center space-x-2">
              <div className="text-xl font-medium text-white">VibePay</div>
              <div className="hidden sm:block px-2 py-0.5 bg-white/10 border border-white/20 text-xs text-gray-300 font-medium">
                BETA
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/blog"
              className="hidden sm:flex text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <a 
              href="https://cal.com/vibepay" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 h-9 px-4 text-sm transition-all duration-200"
              >
                Book a Demo
              </Button>
            </a>
            <BetaAccessModal>
              <Button
                size="sm"
                className="cursor-pointer h-9 px-5 text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                Request Beta
              </Button>
            </BetaAccessModal>
          </div>
        </div>
      </div>
    </nav>
  );
}

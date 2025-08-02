"use client";

import { Button } from "@/components/ui/button";
import { BetaAccessModal } from "../BetaAccessModal";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/80 backdrop-blur-md">
      <div className="w-full sm:max-w-7xl sm:mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
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
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
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
                  className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 h-9 px-4 text-sm transition-all duration-200"
                >
                  Book a Demo
                </Button>
              </a>
            </div>

            {/* Request Beta Button - Desktop only */}
            <div className="hidden sm:block">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-border/40 mt-3 pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://cal.com/vibepay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </a>
              <div className="pt-2">
                <BetaAccessModal>
                  <Button
                    size="sm"
                    className="w-full cursor-pointer h-10 text-sm font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Beta Access
                  </Button>
                </BetaAccessModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

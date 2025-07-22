"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BetaAccessModalProps {
  children: React.ReactNode;
}

export function BetaAccessModal({ children }: BetaAccessModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 2 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl font-medium text-center">
            Join the Beta
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400 text-lg">
            Get early access to VibePay and start monetizing your AI app with{" "}
            <span className="text-purple-400">credits</span> +{" "}
            <span className="text-green-400">gamification</span>.
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">
              You&apos;re on the list!
            </h3>
            <p className="text-gray-400 text-lg">
              We&apos;ll be in touch with beta access soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 mt-2"
              />
            </div>
            
            <div className="space-y-4">
              <Button 
                type="submit" 
                className="w-full h-12 font-medium text-base transition-all duration-200"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Requesting Access...</span>
                  </div>
                ) : (
                  "Request Beta Access"
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                No spam. We&apos;ll only email you about beta access and important updates.
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
} 
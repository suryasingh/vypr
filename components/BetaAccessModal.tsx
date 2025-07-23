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
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch('https://api.tryinloop.com/api/newsletter', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit email';
        
        try {
          const errorData = await response.json();
          if (errorData.message && errorData.message.toLowerCase().includes("exists")) {
            errorMessage = 'You\'re already on our beta list! We\'ll be in touch soon.';
          }
        } catch (parseError) {
          // If we can't parse the response, keep the default error message
        }
        
        throw new Error(errorMessage);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setError("");
        setOpen(false);
      }, 3000);
      
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        // Clear form when modal closes
        setError("");
      }
    }}>
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
            <span className="text-green-400">growth</span>.
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                required
                className="w-full h-12 mt-2"
              />
              {error && (
                <p className="text-sm text-red-400 mt-2">{error}</p>
              )}
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
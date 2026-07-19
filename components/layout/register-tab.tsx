"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

export function RegisterTab() {
  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-open-sans">
      <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
            Welcome Back
          </h1>
          <p className="text-white/80 mt-2 text-sm font-semibold">
            Sign in to your account to track your applications
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in font-open-sans">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm max-w-4xl mx-auto overflow-hidden">
          <div className="p-6 md:p-8 bg-white">
            <div className="flex flex-col items-center justify-center py-4">
              <SignIn
                fallbackRedirectUrl="/dashboard"
                signUpUrl="/sign-up"
                appearance={{
                  variables: {
                    colorPrimary: "#0ca581",
                    colorBackground: "#ffffff",
                    colorForeground: "#0f172a",
                    colorInput: "#ffffff",
                    colorInputForeground: "#0f172a",
                    borderRadius: "0.75rem",
                    fontFamily: "'Open Sans', system-ui, sans-serif",
                  },
                  elements: {
                    card: "shadow-none border border-slate-100 rounded-3xl",
                    headerTitle: "font-open-sans font-black text-slate-950",
                    headerSubtitle: "font-open-sans font-medium text-slate-700",
                    formFieldLabel: "font-open-sans font-semibold text-slate-950 text-xs",
                    formFieldInput: "font-open-sans font-medium text-slate-950 border-slate-200 rounded-xl focus:border-[#0ca581] focus:ring-[#0ca581]",
                    formButtonPrimary: "bg-[#0ca581] hover:bg-[#0a8769] font-open-sans font-extrabold rounded-xl shadow-sm",
                    footerActionLink: "text-[#0ca581] hover:text-[#0a8567] font-semibold",
                    identityPreviewEditButton: "text-[#0ca581]",
                    dividerLine: "bg-slate-100",
                    dividerText: "font-open-sans font-medium text-slate-700 text-xs",
                    socialButtonsBlockButton: "border border-slate-200 rounded-xl font-open-sans font-medium hover:bg-slate-50",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    id: "goal",
    label: "What are you trying to achieve?",
    options: [
      "Automate a process or workflow",
      "Build a software product or platform",
      "Set up AI for my business",
      "Get cloud/infrastructure sorted",
      "Understand my technology options",
      "Manage and maintain existing systems",
      "Something else",
    ],
  },
  {
    id: "industry",
    label: "Which best describes your organization?",
    options: [
      "Startup / Early-stage",
      "SMB (under 200 people)",
      "Mid-size company",
      "Enterprise",
      "Non-profit",
      "Government",
      "Other",
    ],
  },
  {
    id: "timeline",
    label: "What\u2019s your timeline?",
    options: [
      "As soon as possible (under 1 month)",
      "1\u20133 months",
      "3\u20136 months",
      "6+ months / longer term",
      "Just exploring for now",
    ],
  },
  {
    id: "challenge",
    label: "Briefly describe the challenge",
    type: "textarea",
    placeholder:
      "Tell us what the problem is, what you\u2019ve tried, and what a successful outcome looks like. The more specific, the more useful our response.",
  },
  {
    id: "contact",
    label: "How should we reach you?",
    type: "contact",
  },
];

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textValue, setTextValue] = useState("");

  const step = steps[currentStep];
  const progress = (currentStep / steps.length) * 100;

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: option }));
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 150);
    }
  };

  const handleTextNext = () => {
    if (!textValue.trim()) return;
    setAnswers((prev) => ({ ...prev, [step.id]: textValue }));
    setCurrentStep((s) => s + 1);
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0A0D14] min-h-screen flex items-center justify-center px-6 pt-[72px]">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-[#FFBE0B]/30 bg-[#FFBE0B]/10 mb-8">
            <CheckCircle className="w-8 h-8 text-[#FFBE0B]" />
          </div>
          <h1 className="font-heading text-4xl text-white mb-4">We&apos;ll be in touch.</h1>
          <p className="text-[#8A95A3] text-lg leading-relaxed mb-8">
            Thanks, {name.split(" ")[0]}. We&apos;ve received your message and will respond within 24 hours with an honest read on your situation.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#FFBE0B] hover:text-[#FB5607] transition-colors"
          >
            Back to home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0D14] min-h-screen flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-[72px] left-0 right-0 z-40 h-px bg-[#1E2430]">
        <div
          className="h-full bg-[#FFBE0B] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 pt-[160px]">
        <div className="w-full max-w-xl">
          {/* Step counter */}
          <div className="flex items-center gap-3 mb-10">
            <Badge pillar="ai" dot>
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>

          {/* Question */}
          <h1 className="font-heading text-3xl md:text-4xl text-white mb-8 leading-snug">
            {step.label}
          </h1>

          {/* Answer type */}
          {step.type === "contact" ? (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#0D1018] border border-[#1E2430] text-white font-mono text-sm placeholder-[#8A95A3]/40 focus:border-[#FFBE0B]/40 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#0D1018] border border-[#1E2430] text-white font-mono text-sm placeholder-[#8A95A3]/40 focus:border-[#FFBE0B]/40 focus:outline-none transition-colors"
              />
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !email.trim()}
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
              >
                Send message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : step.type === "textarea" ? (
            <div className="space-y-4">
              <textarea
                rows={5}
                placeholder={step.placeholder}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#0D1018] border border-[#1E2430] text-white font-mono text-sm placeholder-[#8A95A3]/40 focus:border-[#FFBE0B]/40 focus:outline-none transition-colors resize-none"
              />
              <button
                onClick={handleTextNext}
                disabled={!textValue.trim()}
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 border border-[#FFBE0B] text-[#FFBE0B] font-mono text-sm hover:bg-[#FFBE0B] hover:text-[#0A0D14] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
              >
                Continue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {step.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`group w-full text-left px-5 py-4 border font-mono text-sm transition-all duration-200 ${
                    answers[step.id] === option
                      ? "border-[#FFBE0B]/60 bg-[#FFBE0B]/10 text-[#FFBE0B]"
                      : "border-[#1E2430] text-[#8A95A3] hover:border-[#FFBE0B]/30 hover:text-white"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    {option}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Back button */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="mt-8 font-mono text-xs text-[#8A95A3] hover:text-white transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

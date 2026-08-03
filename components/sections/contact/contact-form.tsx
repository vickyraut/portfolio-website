"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Check, Send, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type StatusState = "idle" | "submitting" | "success" | "error";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject for your message.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate network request / API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while sending your message. Please try again or reach out directly via email.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrors({});
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-10 rounded-lg border border-border bg-card space-y-6">
        <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
          <Check className="size-6 stroke-[2]" />
        </div>

        <div className="space-y-2">
          <h3 className="text-h3 font-bold text-foreground tracking-tight">
            Message Sent Successfully
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            Thank you for reaching out. I have received your message and will get back to you within 24–48 hours.
          </p>
        </div>

        <Button variant="secondary" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-md border border-border bg-background-secondary text-foreground text-body-sm flex items-start gap-3"
        >
          <AlertCircle className="size-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name Input */}
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="text-body-sm font-medium text-foreground block"
        >
          Name <span className="text-muted-foreground">*</span>
        </label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          disabled={status === "submitting"}
          error={!!errors.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-meta text-foreground font-mono">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-body-sm font-medium text-foreground block"
        >
          Email <span className="text-muted-foreground">*</span>
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          disabled={status === "submitting"}
          error={!!errors.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="text-meta text-foreground font-mono">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject Input */}
      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="text-body-sm font-medium text-foreground block"
        >
          Subject <span className="text-muted-foreground">*</span>
        </label>
        <Input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project inquiry / Collaboration opportunity"
          disabled={status === "submitting"}
          error={!!errors.subject}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
        />
        {errors.subject && (
          <p id="contact-subject-error" className="text-meta text-foreground font-mono">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-body-sm font-medium text-foreground block"
        >
          Message <span className="text-muted-foreground">*</span>
        </label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project scope, timeline, and goals..."
          disabled={status === "submitting"}
          error={!!errors.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-meta text-foreground font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="size-4 mr-2" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

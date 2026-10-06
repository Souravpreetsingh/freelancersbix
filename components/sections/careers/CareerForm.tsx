"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const DISCIPLINES = [
  { value: "research", label: "Academic & Research" },
  { value: "business", label: "Business & Strategy Consulting" },
  { value: "accounting", label: "Foreign Accounting & Bookkeeping" },
  { value: "data", label: "Data Analysis & Visualization" },
  { value: "content", label: "Content Writing & Editorial" },
  { value: "digital", label: "Digital Operations / VA" },
  { value: "tech", label: "Technology & Infrastructure" },
  { value: "other", label: "Other Interdisciplinary" },
];

const EXPERIENCE_LEVELS = [
  { value: "entry", label: "Entry Level / Emerging Professional" },
  { value: "1-3", label: "1 to 3 Years" },
  { value: "3-5", label: "3 to 5 Years" },
  { value: "5+", label: "5+ Years Senior Specialist" },
];

export function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
      id="general-application"
    >
      <div className="max-w-4xl mx-auto bg-surface-container p-space-xl md:p-space-2xl rounded-xl shadow-2xl">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            Don’t See the Right Role?
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Tell us where your expertise can make a difference.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            If you believe your skills could contribute to FreelancersBix, submit your profile for ongoing and future
            global opportunities.
          </p>
        </div>
        <form
          className="flex flex-col gap-space-lg"
          id="talent-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-name"
              >
                Full Name <span className="text-signal-blue">*</span>
              </label>
              <input
                id="talent-name"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
                placeholder="e.g. Eleanor Vance"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-email"
              >
                Email Address <span className="text-signal-blue">*</span>
              </label>
              <input
                id="talent-email"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
                placeholder="eleanor@domain.com"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-phone"
              >
                Phone / WhatsApp
              </label>
              <input
                id="talent-phone"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-discipline"
              >
                Area of Expertise <span className="text-signal-blue">*</span>
              </label>
              <select
                id="talent-discipline"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue"
                required
                defaultValue=""
              >
                <option disabled value="">
                  Select Primary Discipline
                </option>
                {DISCIPLINES.map((discipline) => (
                  <option key={discipline.value} value={discipline.value}>
                    {discipline.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-experience"
              >
                Experience Level
              </label>
              <select
                id="talent-experience"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue"
                defaultValue="entry"
              >
                {EXPERIENCE_LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-role"
              >
                Preferred Role or Title
              </label>
              <input
                id="talent-role"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
                placeholder="e.g. Senior Financial Analyst"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="talent-portfolio"
            >
              Portfolio, GitHub, or LinkedIn URL
            </label>
            <input
              id="talent-portfolio"
              className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
              placeholder="https://linkedin.com/in/yourprofile"
              type="url"
            />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="file-upload"
            >
              Resume / CV Document <span className="text-signal-blue">*</span>
            </label>
            <label
              className="p-space-lg rounded-xl bg-surface-container-high/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high transition-colors"
              htmlFor="file-upload"
            >
              <MaterialIcon name="upload_file" className="text-signal-blue text-4xl mb-space-xs" />
              <span className="font-label-lg text-label-lg text-primary font-medium" id="file-label">
                {fileName ? `Selected: ${fileName}` : "Click to upload or drag & drop file here"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">PDF, DOCX up to 10MB</span>
              <input
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="file-upload"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setFileName(file ? file.name : null);
                }}
              />
            </label>
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="talent-summary"
            >
              Brief Summary / How You Can Contribute
            </label>
            <textarea
              id="talent-summary"
              className="p-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-blue placeholder:text-outline"
              placeholder="Briefly highlight your core technical skills, primary software competencies, or notable project accomplishments..."
              rows={4}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              By submitting, you agree to our standard talent confidentiality guidelines.
            </p>
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg text-ink bg-whiteout hover:bg-whiteout/90 font-bold transition-all shrink-0"
              type="submit"
            >
              Submit Application
            </button>
          </div>
          {submitted && (
            <div
              className="p-space-md rounded-lg bg-twilight-blue/20 text-secondary-fixed font-body-sm text-body-sm flex items-center gap-space-sm"
              id="form-success-banner"
              role="status"
            >
              <MaterialIcon name="task_alt" className="text-signal-blue" />
              <span>
                Thank you. Your candidate specimen has been recorded. Our talent team reviews incoming submissions
                weekly.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { DesertHorizonLines } from '../components/DesertGeometry';

const SERVICE_OPTIONS = [
  'AI Automation',
  'Business Process Automation',
  'AI Chatbots',
  'Workflow Integration',
  'Other',
] as const;

interface FormValues {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceOfInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  serviceOfInterest?: string;
  message?: string;
}

type SubmissionState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'unconfigured' }
  | { status: 'error'; message: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const routeState = location.state as { selectedService?: string } | null;

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceOfInterest:
      routeState?.selectedService &&
      SERVICE_OPTIONS.includes(
        routeState.selectedService as (typeof SERVICE_OPTIONS)[number]
      )
        ? routeState.selectedService
        : '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({
    status: 'idle',
  });

  useEffect(() => {
    if (
      routeState?.selectedService &&
      SERVICE_OPTIONS.includes(
        routeState.selectedService as (typeof SERVICE_OPTIONS)[number]
      )
    ) {
      setValues((prev) => ({
        ...prev,
        serviceOfInterest: routeState.selectedService as string,
      }));
    }
  }, [routeState?.selectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.businessEmail.trim()) {
      nextErrors.businessEmail = 'Please enter your business email address.';
    } else if (!EMAIL_REGEX.test(values.businessEmail.trim())) {
      nextErrors.businessEmail =
        'Please enter a valid email address (for example, name@company.com).';
    }

    if (!values.serviceOfInterest) {
      nextErrors.serviceOfInterest = 'Please select a service of interest.';
    }

    if (!values.message.trim()) {
      nextErrors.message =
        'Please tell us a bit about your project or workflow challenges.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message =
        'Please include at least 10 characters so we can understand your needs.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submission.status !== 'idle' && submission.status !== 'submitting') {
      setSubmission({ status: 'idle' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const endpoint = SITE_CONFIG.formspreeEndpoint.trim();

    if (!endpoint) {
      setSubmission({ status: 'unconfigured' });
      return;
    }

    setSubmission({ status: 'submitting' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.businessEmail.trim(),
          companyName: values.companyName.trim() || 'Not provided',
          serviceOfInterest: values.serviceOfInterest,
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        let errorMessage =
          'We could not submit your inquiry right now. Please try again or reach out using the contact details on this page.';
        try {
          const data = (await response.json()) as {
            errors?: { message?: string }[];
          };
          if (data.errors && data.errors.length > 0 && data.errors[0].message) {
            errorMessage = data.errors[0].message;
          }
        } catch {
          // Keep friendly fallback error message
        }
        setSubmission({ status: 'error', message: errorMessage });
        return;
      }

      setSubmission({ status: 'success' });
      setValues({
        fullName: '',
        businessEmail: '',
        companyName: '',
        serviceOfInterest: '',
        message: '',
      });
      setErrors({});
    } catch {
      setSubmission({
        status: 'error',
        message:
          'A network error prevented submitting your inquiry. Please check your connection and try again.',
      });
    }
  };

  return (
    <div>
      {/* A. Hero Section */}
      <section className="relative overflow-hidden bg-[#402015] text-white border-b border-white/10">
        <DesertHorizonLines
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-40"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#E9A04A]" aria-hidden="true" />
              <p className="text-sm font-bold text-[#E9A04A]">
                Contact ArizoTek
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Let’s Talk About Your Automation Needs
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Have repetitive tasks or business processes you’d like to
              automate? Tell us about your challenges, and let’s explore how
              ArizoTek can help.
            </p>
          </div>
        </div>
      </section>

      {/* B & C. Contact Directory + Form */}
      <section className="py-16 sm:py-20 bg-[#FBF9F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* B. Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white border border-[#402015]/12 p-7 sm:p-8 space-y-6">
                <div className="space-y-2 pb-5 border-b border-[#402015]/10">
                  <h2 className="text-2xl font-bold text-[#402015]">
                    Contact Information
                  </h2>
                  <p className="text-sm text-[#626262] leading-relaxed">
                    Editable placeholder details configured in{' '}
                    <code className="text-xs font-mono bg-[#FBF9F6] px-1.5 py-0.5 rounded border border-[#402015]/10 text-[#402015]">
                      src/config/siteConfig.ts
                    </code>
                    .
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#FBF9F6] border border-[#E9A04A]/35 text-[#D66A25] shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#402015]">
                        Email Address
                      </h3>
                      <p className="text-base font-semibold text-[#402015] mt-0.5 break-all">
                        {SITE_CONFIG.contact.email}
                      </p>
                      <p className="text-xs text-[#626262] mt-0.5">
                        {SITE_CONFIG.contact.emailLabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-5 border-t border-[#402015]/10">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#FBF9F6] border border-[#E9A04A]/35 text-[#D66A25] shrink-0">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#402015]">
                        Phone Number
                      </h3>
                      <p className="text-base font-semibold text-[#402015] mt-0.5">
                        {SITE_CONFIG.contact.phone}
                      </p>
                      <p className="text-xs text-[#626262] mt-0.5">
                        {SITE_CONFIG.contact.phoneLabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-5 border-t border-[#402015]/10">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#FBF9F6] border border-[#E9A04A]/35 text-[#D66A25] shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#402015]">
                        Business Location
                      </h3>
                      <p className="text-base font-semibold text-[#402015] mt-0.5">
                        {SITE_CONFIG.contact.location}
                      </p>
                      <p className="text-xs text-[#626262] mt-0.5">
                        {SITE_CONFIG.contact.locationLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Consultation Overview */}
              <div className="rounded-2xl bg-[#402015] text-white p-7 sm:p-8 space-y-4">
                <p className="text-xs font-bold text-[#E9A04A]">
                  What Happens Next
                </p>
                <ol className="space-y-3 text-sm text-white/85">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#E9A04A] tabular-nums">
                      01.
                    </span>
                    <span>
                      We review the workflow bottlenecks and software tools you
                      share.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#E9A04A] tabular-nums">
                      02.
                    </span>
                    <span>
                      We schedule a focused conversation to understand your
                      daily process.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#E9A04A] tabular-nums">
                      03.
                    </span>
                    <span>
                      You receive a clear, practical automation recommendation
                      with zero obligation.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* C. Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-[#402015]/12 p-7 sm:p-10 shadow-sm">
                <div className="mb-8 pb-5 border-b border-[#402015]/10 space-y-1.5">
                  <h2 className="text-2xl font-bold text-[#402015]">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-sm text-[#626262]">
                    Fields marked with <span className="text-[#D66A25]">*</span>{' '}
                    are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-[#402015] mb-2"
                      >
                        Full Name <span className="text-[#D66A25]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.fullName}
                        onChange={(e) =>
                          handleChange('fullName', e.target.value)
                        }
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? 'fullName-error' : undefined
                        }
                        placeholder="Jane Doe"
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#402015] bg-white placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25] transition-colors ${
                          errors.fullName
                            ? 'border-red-600'
                            : 'border-[#402015]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                        >
                          <AlertCircle
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessEmail"
                        className="block text-sm font-semibold text-[#402015] mb-2"
                      >
                        Business Email <span className="text-[#D66A25]">*</span>
                      </label>
                      <input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.businessEmail}
                        onChange={(e) =>
                          handleChange('businessEmail', e.target.value)
                        }
                        aria-invalid={Boolean(errors.businessEmail)}
                        aria-describedby={
                          errors.businessEmail
                            ? 'businessEmail-error'
                            : undefined
                        }
                        placeholder="jane@yourcompany.com"
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#402015] bg-white placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25] transition-colors ${
                          errors.businessEmail
                            ? 'border-red-600'
                            : 'border-[#402015]/20'
                        }`}
                      />
                      {errors.businessEmail && (
                        <p
                          id="businessEmail-error"
                          className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                        >
                          <AlertCircle
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{errors.businessEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-semibold text-[#402015] mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={values.companyName}
                        onChange={(e) =>
                          handleChange('companyName', e.target.value)
                        }
                        placeholder="Your Company LLC"
                        className="w-full rounded-lg border border-[#402015]/20 px-4 py-3 text-sm text-[#402015] bg-white placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="serviceOfInterest"
                        className="block text-sm font-semibold text-[#402015] mb-2"
                      >
                        Service of Interest{' '}
                        <span className="text-[#D66A25]">*</span>
                      </label>
                      <select
                        id="serviceOfInterest"
                        name="serviceOfInterest"
                        required
                        value={values.serviceOfInterest}
                        onChange={(e) =>
                          handleChange('serviceOfInterest', e.target.value)
                        }
                        aria-invalid={Boolean(errors.serviceOfInterest)}
                        aria-describedby={
                          errors.serviceOfInterest
                            ? 'serviceOfInterest-error'
                            : undefined
                        }
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#402015] bg-white focus:outline-none focus:ring-2 focus:ring-[#D66A25] transition-colors ${
                          errors.serviceOfInterest
                            ? 'border-red-600'
                            : 'border-[#402015]/20'
                        }`}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.serviceOfInterest && (
                        <p
                          id="serviceOfInterest-error"
                          className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                        >
                          <AlertCircle
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{errors.serviceOfInterest}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#402015] mb-2"
                    >
                      Project Details / Message{' '}
                      <span className="text-[#D66A25]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'message-error' : undefined
                      }
                      placeholder="Describe the repetitive tasks, software tools, or workflows you would like to automate..."
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-[#402015] bg-white placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25] transition-colors resize-y ${
                        errors.message
                          ? 'border-red-600'
                          : 'border-[#402015]/20'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                      >
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {submission.status === 'unconfigured' && (
                    <div
                      role="status"
                      className="rounded-xl bg-[#FBF9F6] border border-[#E9A04A] p-4 flex items-start gap-3"
                    >
                      <Info
                        className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-sm text-[#402015] space-y-1">
                        <p className="font-bold">
                          Contact Form Endpoint Not Yet Connected
                        </p>
                        <p className="text-[#626262] leading-relaxed">
                          Your form entries passed validation, but this static
                          site does not yet have a Formspree endpoint
                          configured. To enable live submissions on GitHub Pages,
                          add your Formspree URL to{' '}
                          <code className="text-xs font-mono bg-white px-1.5 py-0.5 rounded border border-[#402015]/15 text-[#402015]">
                            formspreeEndpoint
                          </code>{' '}
                          in{' '}
                          <code className="text-xs font-mono bg-white px-1.5 py-0.5 rounded border border-[#402015]/15 text-[#402015]">
                            src/config/siteConfig.ts
                          </code>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  {submission.status === 'success' && (
                    <div
                      role="status"
                      className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-sm text-emerald-950 space-y-1">
                        <p className="font-bold">Inquiry Submitted</p>
                        <p className="text-emerald-800 leading-relaxed">
                          Thank you for contacting ArizoTek. We have received
                          your project details and will follow up promptly.
                        </p>
                      </div>
                    </div>
                  )}

                  {submission.status === 'error' && (
                    <div
                      role="alert"
                      className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3"
                    >
                      <AlertCircle
                        className="w-5 h-5 text-red-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-sm text-red-950 space-y-1">
                        <p className="font-bold">Submission Error</p>
                        <p className="text-red-800 leading-relaxed">
                          {submission.message}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submission.status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#B8571A] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D66A25]"
                    >
                      {submission.status === 'submitting' ? (
                        <>
                          <Loader2
                            className="w-4 h-4 animate-spin"
                            aria-hidden="true"
                          />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

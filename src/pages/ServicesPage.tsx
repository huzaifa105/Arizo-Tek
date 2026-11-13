import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cog,
  Compass,
  Cpu,
  Link2,
} from 'lucide-react';
import { DesertHorizonLines } from '../components/DesertGeometry';
import {
  ServiceArchitectureCard,
  ServiceBlueprintId,
} from '../components/AutomationVisuals';

interface DetailedService {
  id: string;
  number: string;
  contactOption: string;
  icon: React.ComponentType<{ className?: string }>;
  blueprintId: ServiceBlueprintId;
  title: string;
  introduction: string;
  capabilities: string[];
}

const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'ai-automation',
    number: '01',
    contactOption: 'AI Automation',
    icon: Cpu,
    blueprintId: 'ai-automation',
    title: 'AI Automation Solutions',
    introduction:
      'Put practical artificial intelligence to work across daily operations. We design targeted AI workflows that handle high-volume, repetitive tasks while keeping your team firmly in control of key decisions.',
    capabilities: [
      'Automating repetitive tasks using AI.',
      'Intelligent data processing.',
      'AI-powered business workflows.',
      'Task automation and decision-support workflows.',
    ],
  },
  {
    id: 'process-automation',
    number: '02',
    contactOption: 'Business Process Automation',
    icon: Cog,
    blueprintId: 'process-automation',
    title: 'Business Process Automation',
    introduction:
      'Eliminate manual bottlenecks across back-office administration, client onboarding, and internal reporting so your staff can dedicate more focus to high-value work.',
    capabilities: [
      'Automating administrative tasks.',
      'Streamlining repetitive business operations.',
      'Reducing manual data entry.',
      'Improving operational efficiency.',
    ],
  },
  {
    id: 'ai-chatbots',
    number: '03',
    contactOption: 'AI Chatbots',
    icon: Bot,
    blueprintId: 'ai-chatbots',
    title: 'AI Chatbots & Virtual Assistants',
    introduction:
      'Provide responsive customer communication around the clock. Our virtual assistants answer common questions accurately, capture visitor inquiries, and qualify leads automatically.',
    capabilities: [
      'Customer support automation.',
      'Lead qualification and collection.',
      'Automated responses to customer inquiries.',
      'Website and messaging-platform chatbot integration.',
    ],
  },
  {
    id: 'workflow-integration',
    number: '04',
    contactOption: 'Workflow Integration',
    icon: Link2,
    blueprintId: 'workflow-integration',
    title: 'Workflow Integration & Automation',
    introduction:
      'Bridge the software platforms your business relies on every day. We build dependable integrations that keep customer, project, and operational data synchronized automatically.',
    capabilities: [
      'Connecting different business applications.',
      'Automated data synchronization.',
      'CRM and business tool integrations.',
      'Multi-step workflow automation.',
    ],
  },
];

const APPROACH_PILLARS = [
  {
    title: 'Requirement-First Discovery',
    detail:
      'We document how your team actually works before suggesting any automation tools.',
  },
  {
    title: 'Fit Into Existing Software',
    detail:
      'Solutions are built around the tools your business already relies on every day.',
  },
  {
    title: 'Maintainable & Practical',
    detail:
      'Clear workflows that your team can understand, trust, and expand over time.',
  },
];

export const ServicesPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* A. Page Hero */}
      <section className="relative overflow-hidden bg-[#402015] text-white border-b border-white/10">
        <DesertHorizonLines
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-44"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#E9A04A]" aria-hidden="true" />
              <p className="text-sm font-bold text-[#E9A04A]">
                ArizoTek Services
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Intelligent Automation Solutions for Modern Businesses
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              From AI-powered assistants to connected business workflows,
              ArizoTek helps businesses eliminate repetitive tasks and operate
              more efficiently.
            </p>
          </div>

          {/* Quick Section Jump Bar */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DETAILED_SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => scrollToSection(service.id)}
                className="text-left rounded-lg px-4 py-3 bg-white/6 hover:bg-white/12 border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A04A]"
              >
                <span className="block text-xs font-bold text-[#E9A04A] tabular-nums">
                  {service.number}
                </span>
                <span className="block text-sm font-semibold text-white mt-0.5">
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* B. Detailed Services — Full-Bleed Alternating Bands */}
      <div>
        {DETAILED_SERVICES.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-24 scroll-mt-20 border-b border-[#402015]/10 ${
                isEven ? 'bg-[#FBF9F6]' : 'bg-white'
              }`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Editorial Details */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D66A25] text-white shrink-0">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#D66A25] tabular-nums">
                          Service {service.number}
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#402015] tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#626262] leading-relaxed">
                      {service.introduction}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-[#402015]">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className={`flex items-start gap-2.5 rounded-xl p-3.5 border border-[#402015]/10 ${
                              isEven ? 'bg-white' : 'bg-[#FBF9F6]'
                            }`}
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-[#402015] font-medium leading-snug">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        state={{ selectedService: service.contactOption }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#B8571A] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D66A25]"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Architecture Blueprint Visual */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <ServiceArchitectureCard
                      id={service.blueprintId}
                      variant={isEven ? 'dark' : 'light'}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* C. Our Approach */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#FBF9F6] border border-[#402015]/12 p-8 sm:p-12 space-y-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#D66A25]" aria-hidden="true" />
                <p className="text-sm font-bold text-[#D66A25]">
                  Our Approach
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#402015] tracking-tight">
                Business Requirements Always Come Before Tools
              </h2>
              <p className="text-base sm:text-lg text-[#626262] leading-relaxed">
                At ArizoTek, we never push one-size-fits-all software. We start
                by understanding your daily operations, team bottlenecks, and
                business goals before recommending automation—so every workflow
                delivers clear, practical value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#402015]/12">
              {APPROACH_PILLARS.map((pillar) => (
                <div key={pillar.title} className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#402015]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#626262] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D66A25] to-[#B8571A] text-white py-16 sm:py-20">
        <DesertHorizonLines
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-36 opacity-60"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let’s Find the Right Automation Solution for Your Business.
          </h2>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-[#402015] hover:bg-[#2C150D] rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#D66A25] focus-visible:ring-white"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

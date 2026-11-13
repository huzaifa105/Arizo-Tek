import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Cog,
  Cpu,
  Layers,
  Link2,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { DesertHorizonLines } from '../components/DesertGeometry';
import {
  HeroAutomationShowcase,
  OperationsComparisonVisual,
} from '../components/AutomationVisuals';

const SERVICES_OVERVIEW = [
  {
    number: '01',
    icon: Cpu,
    title: 'AI-Powered Automation',
    description:
      'Automate repetitive business activities using intelligent AI-powered workflows.',
    to: '/services#ai-automation',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Business Process Automation',
    description:
      'Simplify daily operations by connecting tools, applications, and business processes.',
    to: '/services#process-automation',
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Build intelligent assistants that handle customer inquiries, support, and lead generation.',
    to: '/services#ai-chatbots',
  },
  {
    number: '04',
    icon: Link2,
    title: 'Workflow Integration',
    description:
      'Connect your existing business tools and platforms to create seamless automated workflows.',
    to: '/services#workflow-integration',
  },
];

const WHY_CHOOSE = [
  {
    icon: Sparkles,
    title: 'Practical Solutions',
    description: 'Automation designed around real business needs.',
  },
  {
    icon: Zap,
    title: 'Improved Efficiency',
    description: 'Reduce repetitive manual work.',
  },
  {
    icon: Layers,
    title: 'Connected Systems',
    description: 'Integrate your existing business tools.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Automation',
    description: 'Solutions that can grow with your business.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business processes and challenges.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Identify opportunities for automation.',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'Build and integrate the automation solution.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Test, improve, and refine workflows.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* B. Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-[#402015]/10">
        {/* Subtle rising desert sun ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(233,160,74,0.14)_0%,rgba(214,106,37,0.04)_45%,transparent_72%)]"
          aria-hidden="true"
        />
        <DesertHorizonLines
          tone="light"
          className="absolute inset-x-0 bottom-0 h-40 sm:h-52"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#D66A25]" aria-hidden="true" />
                <p className="text-sm font-bold text-[#D66A25]">
                  IT Automation for Small to Mid-Size Businesses
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-[#402015] leading-[1.08]">
                Work Smarter.{' '}
                <span className="text-[#D66A25]">Automate Faster.</span> Grow
                Without Limits.
              </h1>

              <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-xl">
                ArizoTek helps small and mid-sized businesses simplify operations
                through intelligent AI automation and custom IT solutions. We
                turn repetitive tasks into efficient automated workflows so you
                can focus on growing your business.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#B8571A] rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D66A25]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#402015] bg-white hover:bg-[#FBF9F6] border border-[#402015]/25 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D66A25]"
                >
                  Let’s Automate Your Business
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroAutomationShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* C. Services Overview — Hairline Architectural Matrix */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-7 bg-[#D66A25]" aria-hidden="true" />
                <p className="text-sm font-bold text-[#D66A25]">
                  Core Capabilities
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#402015]">
                Automation Solutions That Move Your Business Forward
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#402015] hover:text-[#D66A25] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View all service details</span>
              <ArrowRight className="w-4 h-4 text-[#D66A25]" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#402015]/12 border border-[#402015]/12 rounded-2xl overflow-hidden">
            {SERVICES_OVERVIEW.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group bg-white p-8 sm:p-10 flex flex-col justify-between transition-colors duration-150 hover:bg-[#FBF9F6]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FBF9F6] border border-[#E9A04A]/40 text-[#D66A25] group-hover:bg-[#D66A25] group-hover:text-white group-hover:border-[#D66A25] transition-colors duration-150">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold text-[#402015]/40 tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#402015] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#402015]/10">
                    <Link
                      to={service.to}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25] hover:text-[#B8571A] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. About Us Section */}
      <section className="py-16 sm:py-24 bg-[#FBF9F6] border-y border-[#402015]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-7 bg-[#D66A25]" aria-hidden="true" />
                <p className="text-sm font-bold text-[#D66A25]">
                  About ArizoTek
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#402015]">
                Helping Businesses Work Smarter Through Automation
              </h2>

              <p className="text-base sm:text-lg text-[#626262] leading-relaxed">
                At ArizoTek, we believe technology should make business
                operations simpler, not more complicated. We help small and
                mid-sized businesses identify repetitive tasks, improve
                workflows, and implement practical automation solutions that
                save time and reduce manual effort.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 border-t border-[#402015]/12">
                <div>
                  <p className="text-sm font-bold text-[#402015]">
                    Built for Growing Teams
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Tailored to small and mid-sized business workflows
                  </p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-[#402015]/15" />
                <div>
                  <p className="text-sm font-bold text-[#402015]">
                    No Unnecessary Complexity
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Practical tools integrated into what you already use
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <OperationsComparisonVisual />
            </div>
          </div>
        </div>
      </section>

      {/* E. Why Choose ArizoTek — Dark Espresso Architectural Band */}
      <section className="relative overflow-hidden bg-[#402015] text-white py-16 sm:py-24">
        <DesertHorizonLines
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-44"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#E9A04A]" aria-hidden="true" />
              <p className="text-sm font-bold text-[#E9A04A]">
                Why Choose ArizoTek
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Dependable Automation Grounded in Real Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {WHY_CHOOSE.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-t border-[#E9A04A]/45 pt-6 space-y-3"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-[#E9A04A]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. How We Work — Connected Horizon Timeline */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#D66A25]" aria-hidden="true" />
              <p className="text-sm font-bold text-[#D66A25]">
                How We Work
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#402015]">
              A Structured Four-Step Implementation Process
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal connecting line on desktop */}
            <div
              className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-[#D66A25] via-[#E9A04A] to-[#402015]/25"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="relative space-y-4">
                  <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FBF9F6] border border-[#D66A25]/35 text-[#D66A25] text-base font-extrabold tabular-nums">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#402015]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#626262] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G. Final CTA Section */}
      <section className="py-16 sm:py-20 bg-[#FBF9F6] border-t border-[#402015]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D66A25] to-[#B8571A] text-white px-6 py-12 sm:px-12 sm:py-16 shadow-lg">
            {/* Subtle desert mountain linework inside CTA */}
            <svg
              className="pointer-events-none select-none absolute right-0 bottom-0 w-96 h-48 opacity-20"
              viewBox="0 0 384 192"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 192L112 94L196 148L298 48L384 128V192H0Z"
                fill="#FFFFFF"
              />
              <circle
                cx="298"
                cy="48"
                r="42"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Ready to Simplify Your Business Operations?
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Let’s identify the repetitive tasks slowing your business down
                  and turn them into smarter automated workflows.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-[#402015] hover:bg-[#2C150D] rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#D66A25] focus-visible:ring-white"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

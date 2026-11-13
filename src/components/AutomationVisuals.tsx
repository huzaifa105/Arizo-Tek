import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  Cpu,
  Database,
  FileText,
  Inbox,
  Layers,
  MailCheck,
  MessageSquare,
  RefreshCw,
  Workflow,
} from 'lucide-react';

/**
 * Interactive dark-espresso Hero Architecture showcase inspired by ArizoTek's
 * sun-arc and layered horizon identity. Lets visitors inspect each step of a
 * real SMB automation pipeline.
 */
export const HeroAutomationShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stages = [
    {
      step: '01',
      label: 'Capture',
      title: 'Incoming Client Inquiries',
      icon: Inbox,
      summary:
        'Website forms, quote requests, and customer emails enter a single structured intake flow.',
      tools: ['Web Forms', 'Business Inbox', 'Chat Intake'],
    },
    {
      step: '02',
      label: 'Process',
      title: 'AI Triage & Data Extraction',
      icon: Cpu,
      summary:
        'Key contact details, service needs, and urgency are organized cleanly without manual copy-paste.',
      tools: ['Smart Routing', 'Field Extraction', 'Validation'],
    },
    {
      step: '03',
      label: 'Connect',
      title: 'CRM & Calendar Synchronization',
      icon: Database,
      summary:
        'Records update across your CRM, project tracker, and scheduling tools automatically.',
      tools: ['CRM Sync', 'Team Alerts', 'Calendar Hold'],
    },
    {
      step: '04',
      label: 'Respond',
      title: 'Prompt Client Confirmation',
      icon: MailCheck,
      summary:
        'Customers receive an immediate, accurate acknowledgement while your team stays informed.',
      tools: ['Auto-Reply', 'Booking Link', 'Follow-Up Task'],
    },
  ];

  const activeStage = stages[activeIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <div className="relative">
      {/* Warm solar glow behind architectural frame */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#E9A04A]/20 via-[#D66A25]/10 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl bg-[#402015] text-white border border-[#402015] shadow-xl overflow-hidden">
        {/* Subtle sun-arc geometry inside card */}
        <svg
          className="absolute -top-12 -right-12 w-56 h-56 pointer-events-none select-none opacity-25"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="110"
            cy="110"
            r="90"
            stroke="#E9A04A"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle cx="110" cy="110" r="62" stroke="#D66A25" strokeWidth="1.5" />
        </svg>

        {/* Header bar */}
        <div className="relative px-6 sm:px-7 pt-6 pb-5 border-b border-white/10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#E9A04A]">
              Workflow Blueprint
            </p>
            <h2 className="text-lg font-bold text-white mt-0.5">
              How Practical Automation Connects Your Day
            </h2>
          </div>
          <span className="text-xs font-semibold text-white/75 tabular-nums whitespace-nowrap shrink-0">
            Step {activeStage.step} of 04
          </span>
        </div>

        {/* Interactive Stage Selector Tabs */}
        <div className="relative grid grid-cols-4 border-b border-white/10 bg-[#2C150D]/55">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = idx === activeIndex;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group flex flex-col items-center justify-center gap-1.5 py-3.5 px-2 text-center transition-colors duration-150 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E9A04A] ${
                  isSelected
                    ? 'border-[#E9A04A] bg-white/8 text-white'
                    : 'border-transparent text-white/65 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? 'text-[#E9A04A]' : 'text-white/60 group-hover:text-white/90'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold whitespace-nowrap">
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail */}
        <div className="relative p-6 sm:p-7 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D66A25] text-white shrink-0 shadow-sm">
              <ActiveIcon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-[#E9A04A] tabular-nums">
                Stage {activeStage.step}
              </p>
              <h3 className="text-xl font-bold text-white leading-snug">
                {activeStage.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {activeStage.summary}
              </p>
            </div>
          </div>

          {/* Connected Workflow Flow Strip */}
          <div className="rounded-xl bg-[#2C150D]/75 border border-white/10 p-4">
            <p className="text-xs font-medium text-white/65 mb-3">
              Connected Actions in This Stage
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
              {activeStage.tools.map((tool, i) => (
                <React.Fragment key={tool}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 border border-white/10">
                    <Check className="w-3.5 h-3.5 text-[#E9A04A]" aria-hidden="true" />
                    <span>{tool}</span>
                  </span>
                  {i < activeStage.tools.length - 1 && (
                    <ArrowRight
                      className="w-3.5 h-3.5 text-[#E9A04A]/80 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Horizon progress track */}
          <div className="flex items-center gap-2 pt-1" aria-hidden="true">
            {stages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                  idx <= activeIndex ? 'bg-[#D66A25]' : 'bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Interactive Before / After Operational Comparison for About Us section.
 */
export const OperationsComparisonVisual: React.FC = () => {
  const [mode, setMode] = useState<'automated' | 'manual'>('automated');

  const automatedItems = [
    {
      title: 'Centralized Client Intake',
      detail: 'Leads and requests flow directly into your CRM and task board.',
    },
    {
      title: 'Connected Business Tools',
      detail: 'Email, spreadsheets, and scheduling stay synchronized automatically.',
    },
    {
      title: 'Consistent Team Follow-Up',
      detail: 'Routine confirmations and reminders run reliably every day.',
    },
  ];

  const manualItems = [
    {
      title: 'Scattered Inbox Threads',
      detail: 'Important client details buried across emails and sticky notes.',
    },
    {
      title: 'Repetitive Copy-Paste',
      detail: 'Staff re-entering the same customer data across multiple apps.',
    },
    {
      title: 'Delayed Responses',
      detail: 'Follow-ups waiting until someone catches up on admin work.',
    },
  ];

  const items = mode === 'automated' ? automatedItems : manualItems;

  return (
    <div className="rounded-2xl bg-white border border-[#402015]/12 shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-[#FBF9F6] border-b border-[#402015]/10 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#402015]">
          Operational Comparison
        </span>
        <div
          className="inline-flex rounded-lg bg-[#402015]/8 p-1"
          role="tablist"
          aria-label="Operational workflow comparison"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'automated'}
            onClick={() => setMode('automated')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              mode === 'automated'
                ? 'bg-[#D66A25] text-white shadow-2xs'
                : 'text-[#402015] hover:text-[#D66A25]'
            }`}
          >
            With ArizoTek
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'manual'}
            onClick={() => setMode('manual')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              mode === 'manual'
                ? 'bg-[#402015] text-white shadow-2xs'
                : 'text-[#402015] hover:text-[#D66A25]'
            }`}
          >
            Manual Process
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 divide-y divide-[#402015]/10">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="py-4 first:pt-0 last:pb-0 flex items-start gap-4"
          >
            <span
              className={`text-sm font-bold tabular-nums mt-0.5 ${
                mode === 'automated' ? 'text-[#D66A25]' : 'text-[#626262]'
              }`}
            >
              0{idx + 1}
            </span>
            <div>
              <h3 className="text-base font-bold text-[#402015]">
                {item.title}
              </h3>
              <p className="text-sm text-[#626262] mt-1 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type ServiceBlueprintId =
  | 'ai-automation'
  | 'process-automation'
  | 'ai-chatbots'
  | 'workflow-integration';

export const ServiceArchitectureCard: React.FC<{
  id: ServiceBlueprintId;
  variant?: 'dark' | 'light';
}> = ({ id, variant = 'light' }) => {
  const blueprints: Record<
    ServiceBlueprintId,
    {
      label: string;
      steps: {
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        detail: string;
      }[];
    }
  > = {
    'ai-automation': {
      label: 'AI Workflow Architecture',
      steps: [
        {
          icon: FileText,
          title: 'Document & Request Intake',
          detail: 'Emails, PDFs, and forms gathered automatically',
        },
        {
          icon: Cpu,
          title: 'Intelligent Data Processing',
          detail: 'Key fields extracted, categorized, and summarized',
        },
        {
          icon: Layers,
          title: 'Decision-Support Handoff',
          detail: 'Actionable summaries routed to your team',
        },
      ],
    },
    'process-automation': {
      label: 'Process Streamlining Blueprint',
      steps: [
        {
          icon: Inbox,
          title: 'Administrative Trigger',
          detail: 'New client onboarding, invoice, or request event',
        },
        {
          icon: Workflow,
          title: 'Automated Rule Execution',
          detail: 'Eliminates repetitive manual spreadsheet entry',
        },
        {
          icon: CalendarCheck,
          title: 'Completed Operational Task',
          detail: 'Records updated and confirmations sent on time',
        },
      ],
    },
    'ai-chatbots': {
      label: 'Virtual Assistant Flow',
      steps: [
        {
          icon: MessageSquare,
          title: 'Website & Messaging Touchpoint',
          detail: 'Immediate response when visitors ask questions',
        },
        {
          icon: Bot,
          title: 'Guided Inquiry & Qualification',
          detail: 'Understands needs and answers common questions',
        },
        {
          icon: CalendarCheck,
          title: 'Structured Lead Capture',
          detail: 'Qualified details delivered straight to your team',
        },
      ],
    },
    'workflow-integration': {
      label: 'Connected Systems Map',
      steps: [
        {
          icon: Inbox,
          title: 'Front-Office Channels',
          detail: 'Forms, email, and customer communications',
        },
        {
          icon: RefreshCw,
          title: 'Reliable Data Synchronization',
          detail: 'Real-time updates across disconnected platforms',
        },
        {
          icon: Database,
          title: 'CRM & Operations Hub',
          detail: 'Accurate records across every department',
        },
      ],
    },
  };

  const current = blueprints[id];
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 border ${
        isDark
          ? 'bg-[#402015] text-white border-[#402015] shadow-lg'
          : 'bg-[#FBF9F6] text-[#402015] border-[#402015]/12'
      }`}
    >
      <p
        className={`text-xs font-bold mb-6 ${
          isDark ? 'text-[#E9A04A]' : 'text-[#D66A25]'
        }`}
      >
        {current.label}
      </p>

      <div className="space-y-4">
        {current.steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={`flex items-start gap-4 rounded-xl p-4 border ${
                isDark
                  ? 'bg-white/8 border-white/12'
                  : 'bg-white border-[#402015]/10'
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${
                  isDark
                    ? 'bg-[#D66A25] text-white'
                    : 'bg-[#FAF3EA] text-[#D66A25]'
                }`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className={`text-sm font-bold ${
                      isDark ? 'text-white' : 'text-[#402015]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <span
                    className={`text-xs font-bold tabular-nums ${
                      isDark ? 'text-[#E9A04A]' : 'text-[#D66A25]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    isDark ? 'text-white/75' : 'text-[#626262]'
                  }`}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Bell,
  Watch,
  TrendingUp,
  CheckCircle2,
  Handshake,
  Layers,
} from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusBadge } from '@/components/StatusBadge';

export function VitalLinkPage() {
  usePageTitle(
    'VitalLink — Personal Health Intelligence',
    'VitalLink is a digital health platform developed within Numinox, combining a Health Intelligence Layer and Personal Companion Experience.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-teal-200/70 dark:border-teal-900/60 bg-gradient-to-b from-teal-50/70 via-white to-white dark:from-teal-950/30 dark:via-ink-950 dark:to-ink-950">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="container-page relative py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400 hover:text-teal-700 dark:hover:text-teal-300 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Our Work
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-ink-900 text-white dark:bg-ink-800 dark:text-ink-200">
                Flagship Numinox Initiative
              </span>
              <StatusBadge status="In development" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium text-ink-950 dark:text-white leading-[1.08]">
              VitalLink
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-display text-teal-700 dark:text-teal-400">
              Intelligent Personal Health Awareness &amp; Companion Experience
            </p>

            <p className="mt-6 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              VitalLink is a digital health platform originated within Numinox that brings
              personal health records, behavioural patterns, wearable technologies and artificial
              intelligence together to surface meaningful insights and support informed daily health
              decisions.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-xl transition shadow-sm"
              >
                Inquire About VitalLink <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/collaborate" className="btn-secondary">
                Health Tech Collaboration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Vision */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 card space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                The Challenge
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                Health data is plentiful, yet personal context remains fragmented.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                People generate continuous health signals across wearable devices, mobile tools
                and daily routines. Yet raw metrics viewed in isolation rarely explain how sleep,
                activity, stress, habits and self-reported wellbeing interact over time.
              </p>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Without a unified intelligence layer connecting these signals, subtle shifts and
                recurring patterns often go unnoticed.
              </p>
            </div>

            <div className="lg:col-span-6 card space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                The Solution
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                Moving from passive tracking to meaningful understanding.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                VitalLink provides a cohesive system that interprets longitudinal health and
                behavioural information—helping individuals recognise meaningful patterns early and
                translate awareness into practical daily habits.
              </p>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Originated within Numinox by Founder &amp; Executive Director Glory Soetan, VitalLink
                combines life sciences, digital health and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Connected Elements */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-3">
              Platform Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
              Two connected layers working together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              The intelligence engine sits at the core of VitalLink, while the personal companion
              provides the everyday human interface around it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* A. Health Intelligence Layer */}
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-ink-900 border-2 border-teal-500/40 dark:border-teal-700/60 p-6 sm:p-9 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                  Core Engine
                </span>
                <BrainCircuit className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                  Health Intelligence Layer
                </h3>
                <p className="mt-3 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  The central intelligence engine of VitalLink—designed to gather and interpret
                  multi-source health signals over time, identify correlations and deliver clear,
                  contextual feedback.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-950 border border-ink-200/80 dark:border-ink-800">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3 flex items-center gap-2">
                    <Watch className="h-3.5 w-3.5 text-teal-600" /> Connected Inputs
                  </p>
                  <ul className="space-y-2 text-sm text-ink-700 dark:text-ink-300">
                    <li>• Personal health records</li>
                    <li>• User-reported wellbeing logs</li>
                    <li>• Daily behavioural patterns</li>
                    <li>• Wearable devices &amp; biometrics</li>
                    <li>• Digital health platforms</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-950 border border-ink-200/80 dark:border-ink-800">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-teal-600" /> Intelligence Outputs
                  </p>
                  <ul className="space-y-2 text-sm text-ink-700 dark:text-ink-300">
                    <li>• Personalised health insights</li>
                    <li>• Longitudinal trends &amp; patterns</li>
                    <li>• Proactive alerts on key shifts</li>
                    <li>• Data-driven contextual feedback</li>
                    <li>• Tailored wellness guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B. Personal Companion Experience */}
            <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider bg-accent-50 text-accent-800 dark:bg-accent-950 dark:text-accent-300">
                    Everyday Interface
                  </span>
                  <Bell className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                </div>

                <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                  Personal Companion Experience
                </h3>

                <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  The companion interface supports users in daily life—translating analytical
                  insights from the intelligence layer into clear, supportive actions.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Personalised guidance aligned with observed health patterns',
                    'Timely reminders for check-ins, hydration, rest and routines',
                    'Adaptive daily goals grounded in realistic user habits',
                    'Constructive behavioural nudges that encourage consistency',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent-600 dark:text-accent-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Collaboration & Next Steps */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <div className="flex items-center gap-2.5 text-accent-600 dark:text-accent-400">
                <Handshake className="h-5 w-5" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Collaborative Development
                </span>
              </div>
              <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                Advancing with Reach Digital Health
              </h3>
              <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Conceived within Numinox and led strategically by Founder &amp; Executive Director
                Glory Soetan, VitalLink is advancing in active collaboration with{' '}
                <strong>Reach Digital Health</strong> to bring intelligent personal health tools to
                users.
              </p>
            </div>

            <div className="card space-y-4">
              <div className="flex items-center gap-2.5 text-teal-600 dark:text-teal-400">
                <Layers className="h-5 w-5" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Current Focus
                </span>
              </div>
              <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                Architecture, Intelligence &amp; Partnerships
              </h3>
              <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Our team is actively developing VitalLink’s core health intelligence workflows,
                user experience and technical integrations while engaging health technology and
                research partners.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
            <Link to="/contact" className="btn-primary">
              Discuss VitalLink <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/areas-of-exploration" className="btn-secondary">
              Explore AI &amp; Digital Health
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

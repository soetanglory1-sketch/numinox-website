import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Bell,
  Watch,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Handshake,
  FileText,
} from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusBadge } from '@/components/StatusBadge';

export function VitalLinkPage() {
  usePageTitle(
    'VitalLink — Personal Health Intelligence',
    'VitalLink is an emerging digital health initiative conceived within Numinox, combining a Health Intelligence Layer and Personal Companion Experience.'
  );

  return (
    <>
      {/* Distinct VitalLink Hero */}
      <section className="relative overflow-hidden border-b border-teal-200/70 dark:border-teal-900/60 bg-gradient-to-b from-teal-50/70 via-white to-white dark:from-teal-950/30 dark:via-ink-950 dark:to-ink-950">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="container-page relative py-16 lg:py-24">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400 hover:text-teal-700 dark:hover:text-teal-300 transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Our Work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-ink-900 text-white dark:bg-ink-800 dark:text-ink-200">
              A Core Numinox Initiative
            </span>
            <StatusBadge status="In development" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.06]">
            VitalLink
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-display text-teal-700 dark:text-teal-400">
            Intelligent Personal Health Awareness &amp; Companion Experience
          </p>

          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed">
            VitalLink is an emerging digital health initiative conceived within Numinox. It
            explores how personal health information, behavioural patterns, wearable technologies
            and artificial intelligence can be brought together to surface meaningful insights and
            support more informed everyday health decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-lg transition shadow-sm"
            >
              Inquire About VitalLink <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/collaborate" className="btn-secondary">
              Explore Health Tech Collaboration
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Space & Vision */}
      <section className="py-20 lg:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400">
                The Problem Space
              </p>
              <h2 className="text-3xl font-display font-medium text-ink-900 dark:text-white">
                Health data is plentiful, yet personal context remains fragmented.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Individuals increasingly generate health-related signals across wearable devices,
                mobile tracking tools and daily routines. However, raw metrics displayed in
                isolation rarely explain how sleep, activity, stress, habits and self-reported
                wellbeing interact over time.
              </p>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Without an interpretive layer connecting these signals, subtle shifts and recurring
                patterns often go unnoticed until symptoms become disruptive.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400">
                The VitalLink Vision
              </p>
              <h2 className="text-3xl font-display font-medium text-ink-900 dark:text-white">
                Moving from passive tracking to meaningful understanding.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                VitalLink envisions a cohesive system that interprets longitudinal health and
                behavioural information—helping individuals recognise meaningful patterns early and
                translate awareness into practical daily habits.
              </p>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Originated within Numinox by Founder &amp; Executive Director Glory Soetan, VitalLink
                reflects Numinox’s expansion into the intersection of life sciences, digital health
                and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Connected Elements */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-3">
              Conceptual Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
              Two connected elements working together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              The intelligence layer sits at the core of VitalLink, while the personal companion
              provides the everyday human interface around it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* A. Health Intelligence Layer (Central) */}
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-ink-900 border-2 border-teal-500/40 dark:border-teal-700/60 p-7 sm:p-9 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                  Component A • Central Engine
                </span>
                <BrainCircuit className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                  Health Intelligence Layer
                </h3>
                <p className="mt-3 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  The central intelligence component of VitalLink—envisioned to gather and interpret
                  relevant information from multiple sources over time, identify correlations and
                  provide meaningful, contextual feedback.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-950 border border-ink-200/70 dark:border-ink-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3 flex items-center gap-2">
                    <Watch className="h-3.5 w-3.5 text-teal-600" /> Potential Data Inputs
                  </p>
                  <ul className="space-y-2 text-sm text-ink-700 dark:text-ink-300">
                    <li>• Personal health information</li>
                    <li>• User-reported wellbeing logs</li>
                    <li>• Daily behavioural patterns</li>
                    <li>• Wearable devices &amp; biometric indicators</li>
                    <li>• Compatible digital health platforms</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-950 border border-ink-200/70 dark:border-ink-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-teal-600" /> Intended Outputs
                  </p>
                  <ul className="space-y-2 text-sm text-ink-700 dark:text-ink-300">
                    <li>• Personalised health insights</li>
                    <li>• Longitudinal trends &amp; observations</li>
                    <li>• Potential early warnings on indicator shifts</li>
                    <li>• Data-driven, contextual feedback</li>
                    <li>• Tailored wellness guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B. Personal Companion Experience */}
            <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-accent-50 text-accent-800 dark:bg-accent-950 dark:text-accent-300">
                    Component B • Everyday Interface
                  </span>
                  <Bell className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                </div>

                <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                  Personal Companion Experience
                </h3>

                <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  The companion experience supports users in daily practice—turning analytical
                  insights from the intelligence layer into approachable, supportive actions rather
                  than overwhelming charts.
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

              <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-950 border border-ink-200/70 dark:border-ink-800">
                <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">
                  The companion is one component of the broader VitalLink ecosystem—anchored by the
                  interpretive depth of the Health Intelligence Layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship with Numinox & Development Status */}
      <section className="py-20 lg:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <div className="flex items-center gap-2.5 text-accent-600 dark:text-accent-400">
                <Handshake className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider">
                  Organisational Context &amp; Collaboration
                </span>
              </div>
              <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                Relationship with Numinox &amp; Reach Digital Health
              </h3>
              <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                VitalLink was conceived within Numinox and remains a flagship initiative led
                strategically by Founder &amp; Executive Director Glory Soetan. It is currently being
                advanced through collaboration with <strong>Reach Digital Health</strong>, subject to
                the evolving scope of that collaborative relationship.
              </p>
            </div>

            <div className="rounded-xl p-6 sm:p-7 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/70 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider">
                  Development Stage &amp; Transparency Notice
                </span>
              </div>
              <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                Early conceptualisation &amp; development stage
              </h3>
              <p className="text-sm sm:text-base text-amber-950/90 dark:text-amber-200/90 leading-relaxed">
                VitalLink is an emerging initiative currently undergoing conceptual refinement and
                early development. The capabilities described on this page represent intended
                design goals—not a clinically validated medical device or commercially launched
                application.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink-500 dark:text-ink-400">
              <FileText className="h-4 w-4" />
              <span>VitalLink • Emerging Digital Health Initiative by Numinox</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Discuss VitalLink <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/areas-of-exploration" className="btn-secondary">
                Explore AI &amp; Digital Health
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

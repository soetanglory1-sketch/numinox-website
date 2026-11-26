import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  HeartPulse,
  Dna,
  Cpu,
  Leaf,
  Compass,
  Layers,
  Info,
} from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { areasOfExploration } from '@/data/content';

const iconMap: Record<string, typeof BrainCircuit> = {
  BrainCircuit,
  HeartPulse,
  Dna,
  Cpu,
  Leaf,
  Compass,
  Layers,
};

export function AreasOfExplorationPage() {
  usePageTitle(
    'Areas of Exploration',
    'Discover the interdisciplinary fields Numinox explores: Artificial Intelligence, Digital Health, Life Sciences, Engineering, Sustainability and Everyday Innovation.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page py-20 lg:py-28">
          <p className="section-label mb-4 animate-fade-down">Areas of Exploration</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.08] animate-fade-up">
            Curiosity across disciplines, technologies and industries.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed animate-fade-up animate-delay-200">
            Numinox is not confined to a single academic discipline or industry vertical. We
            investigate opportunities where scientific understanding, intelligent software and
            practical human needs intersect.
          </p>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="pt-12 bg-ink-50/60 dark:bg-ink-950">
        <div className="container-page">
          <div className="p-5 rounded-2xl bg-accent-50/80 dark:bg-accent-950/30 border border-accent-200/80 dark:border-accent-800/70 flex items-start gap-3.5">
            <Info className="h-5 w-5 text-accent-600 dark:text-accent-400 shrink-0 mt-0.5" />
            <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
              <strong>Scope Note:</strong> The domains below represent Numinox’s active areas of
              interest, research inquiry and concept exploration. They are not presented as
              established corporate departments, physical laboratories or completed service lines.
            </p>
          </div>
        </div>
      </section>

      {/* Exploration Domains */}
      <section className="py-16 lg:py-24 bg-ink-50/60 dark:bg-ink-950">
        <div className="container-page space-y-8">
          {areasOfExploration.map((area) => {
            const IconComponent = iconMap[area.icon] || Compass;
            return (
              <div
                key={area.id}
                className={`rounded-2xl border p-6 sm:p-9 shadow-sm ${
                  area.featured
                    ? 'border-accent-300/80 dark:border-accent-800 bg-white dark:bg-accent-950/10'
                    : 'border-ink-200/90 dark:border-ink-800 bg-white dark:bg-ink-900/60'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-950/60 border border-accent-200/70 dark:border-accent-800/70 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                        <IconComponent className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      {area.featured && (
                        <span className="text-xs font-mono font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-accent-100 text-accent-800 dark:bg-accent-900/60 dark:text-accent-300">
                          Primary Focus Area
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                      {area.name}
                    </h2>

                    <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                      {area.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-6 p-5 sm:p-6 rounded-xl bg-ink-50 dark:bg-ink-950/80 border border-ink-200/80 dark:border-ink-800">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3.5">
                      Questions &amp; Opportunities We Investigate
                    </h3>
                    <ul className="space-y-3">
                      {area.questionsExplored.map((question) => (
                        <li
                          key={question}
                          className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300 leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-600 dark:bg-accent-400 shrink-0 mt-2" />
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-ink-200/80 dark:border-ink-800 bg-white dark:bg-ink-900/30">
        <div className="container-page max-w-3xl text-center mx-auto">
          <p className="section-label mb-3">Interdisciplinary Dialogue</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
            Working in one of these fields?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
            Numinox is always open to exchanging perspectives with researchers, technologists and
            organisations exploring similar questions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/collaborate" className="btn-primary">
              Start a Conversation <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link to="/vitallink" className="btn-secondary">
              See VitalLink in Digital Health &amp; AI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

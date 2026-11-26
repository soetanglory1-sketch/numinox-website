import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusBadge } from '@/components/StatusBadge';
import { workItems, type StatusType } from '@/data/content';

const filterOptions: Array<'All' | StatusType> = [
  'All',
  'In development',
  'Early-stage initiative',
  'Concept / Proposal',
  'Under exploration',
];

export function OurWorkPage() {
  usePageTitle(
    'Our Work',
    'Explore Numinox’s initiatives, concepts and projects—from early university proposals to VitalLink in digital health.'
  );

  const [selectedStatus, setSelectedStatus] = useState<'All' | StatusType>('All');

  const filteredItems =
    selectedStatus === 'All'
      ? workItems
      : workItems.filter((item) => item.status === selectedStatus);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg border-b border-ink-200/70 dark:border-ink-800">
        <div className="container-page py-20 lg:py-28">
          <p className="section-label mb-4 animate-fade-down">Our Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.08] animate-fade-up">
            Initiatives, concepts and projects in exploration.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed animate-fade-up animate-delay-200">
            Every initiative at Numinox is presented with an accurate development status—reflecting
            our journey from early university proposals to emerging digital health innovation.
          </p>

          {/* Status Filter Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {filterOptions.map((option) => {
              const active = selectedStatus === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedStatus(option)}
                  className={`px-4 py-2 text-xs font-mono rounded-lg border transition ${
                    active
                      ? 'bg-ink-900 text-white border-ink-900 dark:bg-accent-500 dark:border-accent-500 dark:text-white'
                      : 'bg-white text-ink-600 border-ink-200 hover:border-ink-400 dark:bg-ink-900 dark:text-ink-300 dark:border-ink-700'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Items Detailed List */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page space-y-14">
          {filteredItems.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className={`rounded-2xl border p-7 sm:p-10 scroll-mt-28 transition-colors ${
                item.isFlagship
                  ? 'border-teal-300/80 dark:border-teal-800/80 bg-teal-50/20 dark:bg-teal-950/10'
                  : 'border-ink-200/80 dark:border-ink-800 bg-white dark:bg-ink-900/60'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    {item.category}
                  </span>
                  <span className="text-ink-300 dark:text-ink-700">•</span>
                  <span className="text-xs font-mono text-ink-500 dark:text-ink-400">
                    {item.originContext}
                  </span>
                </div>
                <StatusBadge status={item.status} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                      {item.name}
                    </h2>
                    <p className="text-base font-medium text-accent-600 dark:text-accent-400 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="p-4 rounded-xl bg-ink-50/80 dark:bg-ink-900 border border-ink-200/70 dark:border-ink-800">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">
                        Challenge Identified
                      </h3>
                      <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-ink-50/80 dark:bg-ink-900 border border-ink-200/70 dark:border-ink-800">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">
                        Proposed Direction
                      </h3>
                      <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                        {item.proposal}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="p-5 rounded-xl bg-ink-50/60 dark:bg-ink-950/70 border border-ink-200/70 dark:border-ink-800">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3">
                      Core Objectives
                    </h3>
                    <ul className="space-y-2.5">
                      {item.objectives.map((obj) => (
                        <li
                          key={obj}
                          className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-300"
                        >
                          <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/70 flex items-start gap-3">
                    <Info className="h-4 w-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                      {item.disclaimer}
                    </p>
                  </div>

                  {item.slug === 'vitallink' && (
                    <div>
                      <Link to="/vitallink" className="btn-primary w-full sm:w-auto">
                        Open Dedicated VitalLink Page <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 border-t border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
              Interested in discussing or advancing any of these concepts?
            </h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">
              We welcome feedback, research perspectives and development collaboration.
            </p>
          </div>
          <Link to="/collaborate" className="btn-primary shrink-0">
            Collaborate With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

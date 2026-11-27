import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusBadge } from '@/components/StatusBadge';
import { workItems, type StatusType } from '@/data/content';

const filterOptions: Array<'All' | StatusType> = [
  'All',
  'In development',
  'Active initiative',
  'Institutional initiative',
  'Ongoing research',
];

export function OurWorkPage() {
  usePageTitle(
    'Our Work',
    'Explore Numinox’s initiatives and products—including VitalLink in digital health and our university infrastructure platforms.'
  );

  const [selectedStatus, setSelectedStatus] = useState<'All' | StatusType>('All');

  const filteredItems =
    selectedStatus === 'All'
      ? workItems
      : workItems.filter((item) => item.status === selectedStatus);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-ink-950 dark:text-white leading-[1.1]">
              Initiatives and products built for practical impact.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
              From campus connectivity and departmental platforms to VitalLink in digital health,
              explore the work originated and developed by Numinox.
            </p>

            {/* Filter Bar */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
              {filterOptions.map((option) => {
                const active = selectedStatus === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedStatus(option)}
                    className={`px-4 py-2 text-xs font-mono rounded-xl border transition ${
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
        </div>
      </section>

      {/* Work Items Detailed List */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page space-y-10">
          {filteredItems.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className={`rounded-2xl border p-6 sm:p-10 scroll-mt-28 shadow-sm ${
                item.isFlagship
                  ? 'border-teal-300/80 dark:border-teal-800/80 bg-teal-50/20 dark:bg-teal-950/10'
                  : 'border-ink-200/90 dark:border-ink-800 bg-white dark:bg-ink-900/60'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-900 border border-ink-200/80 dark:border-ink-800">
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">
                        Challenge Addressed
                      </h3>
                      <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-900 border border-ink-200/80 dark:border-ink-800">
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">
                        Our Solution
                      </h3>
                      <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                        {item.proposal}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="p-5 sm:p-6 rounded-xl bg-ink-50 dark:bg-ink-950/70 border border-ink-200/80 dark:border-ink-800">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-3.5">
                      Key Objectives
                    </h3>
                    <ul className="space-y-3">
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

                  {item.slug === 'vitallink' && (
                    <div>
                      <Link to="/vitallink" className="btn-primary w-full sm:w-auto">
                        Explore VitalLink <ArrowRight className="h-4 w-4 shrink-0" />
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
      <section className="py-16 border-t border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="container-page text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
            Interested in partnering on any of our initiatives?
          </h2>
          <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400">
            We welcome research partnerships, institutional engagement and technical collaboration.
          </p>
          <div className="pt-2">
            <Link to="/collaborate" className="btn-primary">
              Collaborate With Us <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

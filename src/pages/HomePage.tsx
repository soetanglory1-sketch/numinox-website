import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  HeartPulse,
  Dna,
  Cpu,
  Compass,
  Layers,
  Activity,
  Sparkles,
} from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { SectionHeading } from '@/components/SectionHeading';
import { StatusBadge } from '@/components/StatusBadge';
import { WorkCard } from '@/components/WorkCard';
import { TeamCard } from '@/components/TeamCard';
import {
  siteConfig,
  approachSteps,
  areasOfExploration,
  workItems,
  journeyMilestones,
  teamMembers,
} from '@/data/content';

const iconMap: Record<string, typeof BrainCircuit> = {
  BrainCircuit,
  HeartPulse,
  Dna,
  Cpu,
  Compass,
  Layers,
};

export function HomePage() {
  usePageTitle();

  const flagshipWork = workItems.find((w) => w.slug === 'vitallink')!;
  const initiatives = workItems.filter((w) => w.slug !== 'vitallink');

  return (
    <>
      {/* 1. Clean, Centered Hero Section */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent-50 dark:bg-ink-900 border border-accent-200/80 dark:border-ink-800 mb-6">
              <span className="h-2 w-2 rounded-full bg-teal-500 shrink-0" />
              <span className="text-xs font-mono font-medium tracking-wide text-accent-800 dark:text-ink-300">
                Innovation &amp; Research Organisation • Nigeria
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white leading-[1.1]">
              Exploring Ideas.
              <br />
              <span className="editorial-accent">Developing Possibilities.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.positioning}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
              <Link to="/our-work" className="btn-primary">
                Explore Our Work <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Discover Numinox
              </Link>
              <Link to="/collaborate" className="btn-ghost">
                Collaborate With Us <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="section-label">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
              Driven by curiosity, grounded in research.
            </h2>
            <p className="text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              Numinox is a student-founded innovation and research organisation established by
              founders across the University of Ilorin and the University of Ibadan who share a
              commitment to problem-solving, research, technology and improving existing systems.
            </p>
            <p className="text-base text-ink-500 dark:text-ink-400 leading-relaxed">
              What started with practical initiatives to improve the university environment has
              grown into an interdisciplinary organisation building solutions across artificial
              intelligence, digital health, life sciences and everyday systems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40">
        <div className="container-page">
          <SectionHeading
            label="Our Approach"
            title="How ideas move forward at Numinox"
            description="Every initiative moves through a clear progression from identifying real challenges to building and scaling practical solutions."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((item) => (
              <div key={item.step} className="card card-hover text-center sm:text-left">
                <span className="inline-flex items-center justify-center text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-accent-50 text-accent-700 border border-accent-200/70 dark:bg-accent-950/60 dark:text-accent-300 dark:border-accent-800/70 mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Areas of Exploration */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="Areas of Exploration"
            title="Interdisciplinary focus across fields"
            description="We investigate problems where scientific understanding, intelligent software and practical human needs intersect."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExploration.map((area) => {
              const IconComponent = iconMap[area.icon] || Sparkles;
              return (
                <div
                  key={area.id}
                  className={`card card-hover flex flex-col ${
                    area.featured
                      ? 'border-accent-200 dark:border-accent-800/80 bg-accent-50/25 dark:bg-accent-950/15'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-950/60 border border-accent-200/70 dark:border-accent-800/70 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                      <IconComponent className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    {area.featured && (
                      <span className="text-[11px] font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-100 text-accent-800 dark:bg-accent-900/60 dark:text-accent-300 shrink-0">
                        Core Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white mb-2.5">
                    {area.name}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                    {area.summary}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/areas-of-exploration" className="btn-secondary">
              Explore All Fields <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Initiative: VitalLink */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-900 text-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
                  Flagship Initiative
                </span>
                <StatusBadge status={flagshipWork.status} />
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white">
                VitalLink: Personal Health Intelligence
              </h2>

              <p className="text-base sm:text-lg text-ink-200 leading-relaxed">
                {flagshipWork.summary}
              </p>

              <p className="text-sm text-ink-300 leading-relaxed">
                Powered by a central <strong className="text-white font-medium">Health Intelligence Layer</strong> that
                interprets patterns across personal health records, behavioural trends and
                wearable signals—paired with a <strong className="text-white font-medium">Personal Companion Experience</strong> for
                daily guidance and smart reminders. Advancing in collaboration with Reach Digital Health.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 max-w-md sm:max-w-none mx-auto lg:mx-0">
                <Link
                  to="/vitallink"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-ink-950 font-semibold text-sm rounded-xl transition"
                >
                  Explore VitalLink <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  to="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink-700 hover:border-ink-500 text-ink-200 hover:text-white font-medium text-sm rounded-xl transition"
                >
                  View All Initiatives
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-ink-950 border border-ink-800 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-teal-400">
                  <div className="h-9 w-9 rounded-lg bg-teal-950 border border-teal-800/70 flex items-center justify-center shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-medium uppercase tracking-wider">
                    System Architecture
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-ink-900 border border-teal-800/50">
                  <p className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-1">
                    Core Layer
                  </p>
                  <h3 className="text-base font-display font-medium text-white">
                    Health Intelligence Layer
                  </h3>
                  <p className="text-xs text-ink-300 mt-1.5 leading-relaxed">
                    Synthesises personal health data, wearables and biometric indicators to surface
                    patterns, trends and actionable insights.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ink-900 border border-ink-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-400 mb-1">
                    Companion Layer
                  </p>
                  <h3 className="text-base font-display font-medium text-white">
                    Personal Companion Experience
                  </h3>
                  <p className="text-xs text-ink-300 mt-1.5 leading-relaxed">
                    Translates insights into everyday routines through tailored reminders, daily
                    goals and supportive guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Initiatives */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="Our Work"
            title="Initiatives originated by Numinox"
            description="Practical platforms and initiatives created to improve student connectivity, departmental digital infrastructure and everyday systems."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/our-work" className="btn-secondary">
              View All Work <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Our Journey */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40">
        <div className="container-page">
          <SectionHeading
            label="Our Journey"
            title="From campus initiatives to interdisciplinary innovation"
            description="How Numinox has grown from student-led campus solutions into broader research and product development."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyMilestones.map((milestone) => (
              <div key={milestone.phase} className="card">
                <span className="inline-block text-xs font-mono font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  {milestone.phase}
                </span>
                <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white mt-2 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our Team */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="Our Team"
            title="The team behind Numinox"
            description="Founded by four core members across the University of Ilorin and the University of Ibadan, supported by contributing associate members."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} compact />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/team" className="btn-secondary">
              Meet the Full Team <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Collaboration CTA */}
      <section className="py-16 sm:py-24 border-t border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">Collaborate With Numinox</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
              Meaningful innovation grows through collaboration.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              We welcome dialogue with researchers, academic institutions, technical specialists,
              digital health innovators and strategic partners.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
              <Link to="/collaborate" className="btn-primary">
                Explore Collaboration <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

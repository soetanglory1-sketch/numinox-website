import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  HeartPulse,
  Dna,
  Cpu,
  Leaf,
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
  Leaf,
  Compass,
  Layers,
};

export function HomePage() {
  usePageTitle();

  const flagshipWork = workItems.find((w) => w.slug === 'vitallink')!;
  const earlyInitiatives = workItems.filter((w) => w.slug !== 'vitallink').slice(0, 3);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden grid-bg border-b border-ink-200/70 dark:border-ink-800">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl animate-glow-pulse" />
        </div>

        <div className="container-page relative py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 mb-7 animate-fade-down">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-xs font-mono tracking-wider text-ink-600 dark:text-ink-300">
                  Innovation &amp; Research Organisation • Nigeria
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-display font-medium text-ink-950 dark:text-white leading-[1.06] animate-fade-up">
                Exploring Ideas.
                <br />
                <span className="editorial-accent">Developing Possibilities.</span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-2xl leading-relaxed animate-fade-up animate-delay-200">
                {siteConfig.positioning}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up animate-delay-300">
                <Link to="/our-work" className="btn-primary">
                  Explore Our Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Discover Numinox
                </Link>
                <Link to="/collaborate" className="btn-ghost">
                  Collaborate With Us <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Subtle Geometric / Network Composition */}
            <div className="lg:col-span-4 hidden lg:block animate-fade-in animate-delay-300">
              <div className="relative p-7 rounded-2xl bg-white/90 dark:bg-ink-900/90 border border-ink-200 dark:border-ink-800 shadow-sm">
                <svg
                  viewBox="0 0 280 220"
                  className="w-full h-auto text-ink-900 dark:text-ink-100"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="140" cy="110" r="88" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
                  <circle cx="140" cy="110" r="54" stroke="currentColor" strokeOpacity="0.16" />
                  <line x1="56" y1="62" x2="140" y2="110" stroke="#2378c4" strokeOpacity="0.45" strokeWidth="1.5" />
                  <line x1="224" y1="68" x2="140" y2="110" stroke="#249184" strokeOpacity="0.45" strokeWidth="1.5" />
                  <line x1="72" y1="168" x2="140" y2="110" stroke="#2378c4" strokeOpacity="0.4" strokeWidth="1.5" />
                  <line x1="212" y1="162" x2="140" y2="110" stroke="#249184" strokeOpacity="0.4" strokeWidth="1.5" />
                  <circle cx="140" cy="110" r="8" fill="#2378c4" />
                  <circle cx="56" cy="62" r="5" fill="#249184" />
                  <circle cx="224" cy="68" r="5" fill="#2378c4" />
                  <circle cx="72" cy="168" r="5" fill="#2378c4" />
                  <circle cx="212" cy="162" r="5" fill="#249184" />
                </svg>
                <div className="mt-4 pt-4 border-t border-ink-100 dark:border-ink-800 space-y-1.5">
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    Core Principle
                  </p>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    Good ideas should not remain ideas—they should be explored, researched and
                    developed into practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Driven by curiosity, grounded in research.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              <p>
                Numinox is an emerging, student-founded innovation and research organisation
                established by a small group of students who shared an interest in problem-solving,
                research, technology and improving existing systems.
              </p>
              <p>
                What began as collaborative discussions around improving the university environment
                has grown into a broader interdisciplinary ambition—exploring opportunities across
                artificial intelligence, digital health, life sciences, engineering and everyday
                systems.
              </p>
              <p className="text-base text-ink-500 dark:text-ink-400">
                We are still growing, exploring and building—communicating our potential honestly
                while turning promising ideas into possibilities worth pursuing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach: Identify -> Explore -> Research -> Develop -> Collaborate */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <SectionHeading
            label="Our Approach"
            title="How ideas move forward at Numinox"
            description="Meaningful progress starts by identifying something that can be improved, asking questions and testing feasibility before scaling ambition."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((item) => (
              <div key={item.step} className="card card-hover flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded bg-accent-50 text-accent-700 dark:bg-accent-950/60 dark:text-accent-300 mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Areas of Exploration */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label="Areas of Exploration"
              title="Interdisciplinary curiosity across fields"
              description="Our interests span multiple disciplines—reflecting active areas of inquiry and exploration rather than claimed specialist departments."
            />
            <Link to="/areas-of-exploration" className="btn-secondary shrink-0">
              Explore all fields <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExploration.slice(0, 6).map((area) => {
              const IconComponent = iconMap[area.icon] || Sparkles;
              return (
                <div
                  key={area.id}
                  className={`card card-hover ${
                    area.featured
                      ? 'border-accent-200 dark:border-accent-800/80 bg-accent-50/20 dark:bg-accent-950/10'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-ink-100 dark:bg-ink-800 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                      <IconComponent className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    {area.featured && (
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-accent-100 text-accent-800 dark:bg-accent-900/60 dark:text-accent-300">
                        Key Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white mb-2">
                    {area.name}
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                    {area.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Featured Initiative: VitalLink */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-page relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                  Featured Initiative
                </span>
                <StatusBadge status={flagshipWork.status} />
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white">
                VitalLink: Personal Health Intelligence
              </h2>

              <p className="text-lg text-ink-200 leading-relaxed">
                {flagshipWork.summary}
              </p>

              <p className="text-sm text-ink-300 leading-relaxed">
                Built around a central <strong className="text-white font-medium">Health Intelligence Layer</strong> that
                interprets patterns across personal health information, behavioural trends and
                wearable signals—supported by a <strong className="text-white font-medium">Personal Companion Experience</strong> for
                daily guidance and behavioural nudges. Advancing in collaboration with Reach Digital Health.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/vitallink"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-ink-950 font-medium text-sm rounded-lg transition"
                >
                  Explore VitalLink <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-ink-700 hover:border-ink-500 text-ink-200 hover:text-white font-medium text-sm rounded-lg transition"
                >
                  View All Initiatives
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-ink-950/90 border border-ink-800 p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3 text-teal-400">
                  <Activity className="h-5 w-5" />
                  <span className="text-xs font-mono uppercase tracking-wider">
                    System Architecture Concept
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
                    Synthesises self-reported data, wearables and biometric indicators to detect
                    patterns, trends and potential early warnings.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ink-900 border border-ink-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-400 mb-1">
                    Support Layer
                  </p>
                  <h3 className="text-base font-display font-medium text-white">
                    Personal Companion Experience
                  </h3>
                  <p className="text-xs text-ink-300 mt-1.5 leading-relaxed">
                    Translates insights into everyday practice via personalised reminders, daily
                    goals and supportive behavioural nudges.
                  </p>
                </div>

                <p className="text-[11px] font-mono text-ink-400">
                  Note: Early conceptualisation &amp; development stage; not a clinically validated
                  or commercially launched product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Early Initiatives */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label="Early Initiatives & Proposals"
              title="Shaped by practical university challenges"
              description="Before expanding into broader research and product development, Numinox explored targeted proposals to improve student life and institutional environments."
            />
            <Link to="/our-work" className="btn-secondary shrink-0">
              See all work &amp; statuses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyInitiatives.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Journey */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <SectionHeading
            label="Our Journey"
            title="From student discussions to interdisciplinary exploration"
            description="An honest look at how Numinox has evolved—and where we are heading."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyMilestones.map((milestone) => (
              <div key={milestone.phase} className="card">
                <span className="text-xs font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
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

      {/* 8. Our Team Preview */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label="Our Team"
              title="The founding members behind Numinox"
              description="Founded by four core members across the University of Ilorin and the University of Ibadan, supported by contributing associate members."
            />
            <Link to="/team" className="btn-secondary shrink-0">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Collaboration Invitation */}
      <section className="py-20 lg:py-28 border-t border-ink-200/70 dark:border-ink-800 bg-ink-50/80 dark:bg-ink-900/40">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Collaborate With Numinox</p>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-ink-900 dark:text-white">
              Meaningful innovation grows through collaboration.
            </h2>
            <p className="mt-6 text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              We welcome dialogue with researchers, academic institutions, technical specialists,
              digital health innovators and potential development partners interested in exploring
              and advancing promising ideas together.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link to="/collaborate" className="btn-primary">
                Explore Collaboration <ArrowRight className="h-4 w-4" />
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

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { SectionHeading } from '@/components/SectionHeading';
import { approachSteps, journeyMilestones, siteConfig } from '@/data/content';

export function AboutPage() {
  usePageTitle(
    'About Us',
    'Learn about Numinox’s origins, mission, vision, philosophy and evolution from student discussions to an interdisciplinary innovation and research organisation.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg border-b border-ink-200/70 dark:border-ink-800">
        <div className="container-page py-20 lg:py-28">
          <p className="section-label mb-4 animate-fade-down">About Numinox</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.08] animate-fade-up">
            Turning curiosity and research into practical possibilities.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed animate-fade-up animate-delay-200">
            Numinox is an emerging, student-founded innovation and research organisation built on
            the belief that good ideas should not remain ideas—they should be explored, researched
            and developed into meaningful solutions.
          </p>
        </div>
      </section>

      {/* Origin & Organisational History */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <p className="section-label">Origin &amp; History</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Born from student curiosity across two universities.
              </h2>
              <div className="pt-2 flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-400">
                <MapPin className="h-4 w-4 text-accent-600 dark:text-accent-400 shrink-0 mt-1" />
                <span>{siteConfig.locationNote}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
              <p>
                Numinox originated from conversations and collaborative discussions among four core
                founding students—three from the University of Ilorin and one from the University of
                Ibadan—who shared an interest in innovation, research, technology and institutional
                development.
              </p>
              <p>
                Initially, discussions centred on identifying practical opportunities to improve the
                university environment, particularly at the University of Ilorin. The founding group
                explored ideas aimed at strengthening students’ everyday experiences, institutional
                communication, internet access and environmental awareness.
              </p>
              <p>
                As those discussions matured, Numinox’s interests expanded naturally beyond
                university-focused proposals into broader scientific and technological research,
                artificial intelligence, digital health, life sciences, sustainability and
                independent product concepts such as VitalLink.
              </p>
              <p className="text-ink-500 dark:text-ink-400">
                Today, Numinox is still growing and developing its projects and partnerships. We
                present our work with clarity and honesty—communicating genuine ambition without
                exaggerating our current scale or claiming unachieved milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <p className="section-label mb-3">Our Mission</p>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white mb-4">
                Investigate challenges and develop practical solutions.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                To explore ideas, investigate challenges and develop practical solutions through
                research, innovation, technology and meaningful collaboration.
              </p>
            </div>

            <div className="card">
              <p className="section-label mb-3">Our Vision</p>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white mb-4">
                Contribute meaningful advancements across industries.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                To become an innovative, interdisciplinary organisation contributing to the
                development of practical solutions and meaningful advancements across industries
                through research, technology, creativity and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Practical Thinking */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="section-label mb-3">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Curiosity paired with practical thinking.
              </h2>
              <p className="mt-4 text-base text-ink-500 dark:text-ink-400 leading-relaxed">
                At Numinox, innovation begins with curiosity—identifying something that can be
                improved, asking questions and exploring possibilities that may not have been
                considered.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                'Identifying real-world challenges and institutional or everyday opportunities.',
                'Exploring diverse ideas and possible approaches without disciplinary silos.',
                'Conducting research and investigating scientific, technical and practical feasibility.',
                'Developing structured concepts and potential solutions.',
                'Engaging relevant expertise, technical specialists and development partners.',
                'Refining ideas iteratively through collaboration, testing and further development.',
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-ink-200/80 dark:border-ink-800 bg-ink-50/40 dark:bg-ink-900/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organisational Evolution Timeline */}
      <section className="py-20 lg:py-28 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <SectionHeading
            label="Organisational Evolution"
            title="How Numinox has progressed"
            description="From early student discussions to broader research and independent product development."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyMilestones.map((item) => (
              <div key={item.phase} className="card">
                <p className="text-xs font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  {item.phase}
                </p>
                <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interdisciplinary Outlook & Activities */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="What Numinox Does"
            title="Core areas of activity and exploration"
            description="These represent Numinox’s active areas of inquiry and concept development rather than large corporate departments."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Research & Exploration',
                body: 'Investigating challenges, emerging opportunities and scientific or practical questions that can inform useful developments.',
              },
              {
                title: 'Innovation & Concept Development',
                body: 'Originating and structuring original concepts, identifying areas for improvement and exploring fresh approaches to existing problems.',
              },
              {
                title: 'Technology & Digital Solutions',
                body: 'Exploring how software, digital platforms and intelligent systems can improve accessibility, communication and everyday experiences.',
              },
              {
                title: 'Product Development',
                body: 'Assessing the technical and practical feasibility of product concepts and pursuing development alongside relevant specialists.',
              },
              {
                title: 'Collaboration & Partnerships',
                body: 'Engaging researchers, institutions, businesses and development partners to validate and advance promising initiatives.',
              },
              {
                title: 'Institutional & Community Innovation',
                body: 'Identifying practical opportunities to strengthen institutional environments, information flow and student resource access.',
              },
            ].map((activity) => (
              <div key={activity.title} className="card card-hover">
                <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white mb-2.5">
                  {activity.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {activity.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-ink-100 dark:border-ink-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-500 dark:text-ink-400">
              <span>Process:</span>
              {approachSteps.map((s, idx) => (
                <span key={s.step}>
                  {s.title}
                  {idx < approachSteps.length - 1 ? ' → ' : ''}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/our-work" className="btn-primary">
                Explore Our Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
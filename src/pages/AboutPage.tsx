import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { SectionHeading } from '@/components/SectionHeading';
import { approachSteps, journeyMilestones, siteConfig } from '@/data/content';

export function AboutPage() {
  usePageTitle(
    'About Us',
    'Learn about Numinox’s origins, mission, vision, philosophy and evolution as an independent innovation and research organisation.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">About Numinox</p>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-ink-950 dark:text-white leading-[1.12]">
              Turning curiosity and research into practical possibilities.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
              An independent innovation and research organisation built on the belief that strong
              ideas should be explored, researched and developed into meaningful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Organisational History */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <p className="section-label">Origin &amp; Focus</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Built on curiosity, research and purposeful execution.
              </h2>
              <div className="pt-2 flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-400">
                <MapPin className="h-4 w-4 text-accent-600 dark:text-accent-400 shrink-0 mt-1" />
                <span>{siteConfig.locationNote}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
              <p>
                Numinox originated as a student-led initiative driven by a shared commitment to
                innovation, applied research, technology and institutional problem-solving.
              </p>
              <p>
                Our earliest projects focused on practical solutions within the University of
                Ilorin environment—initiating dedicated student internet connectivity and a
                centralised departmental web platform to improve everyday academic access and
                communication.
              </p>
              <p>
                Building on that foundation, Numinox expanded into broader scientific and
                technological research across artificial intelligence, digital health, life
                sciences and independent product development—including our flagship health
                intelligence platform, VitalLink.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40">
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
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
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
                'Developing structured concepts and clear product architectures.',
                'Engaging relevant expertise, technical specialists and development partners.',
                'Refining solutions iteratively through collaboration, testing and continuous improvement.',
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-ink-200/80 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/70"
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
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40">
        <div className="container-page">
          <SectionHeading
            label="Organisational Evolution"
            title="How Numinox has progressed"
            description="From its student-led campus beginnings to broader research and independent product development."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyMilestones.map((item) => (
              <div key={item.phase} className="card">
                <p className="text-xs font-mono font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
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
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="What Numinox Does"
            title="Core areas of activity and exploration"
            description="Our active domains of research, product engineering and strategic collaboration."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Research & Exploration',
                body: 'Investigating challenges, emerging opportunities and scientific or practical questions that inform useful developments.',
              },
              {
                title: 'Innovation & Solution Design',
                body: 'Originating and structuring original platforms, identifying areas for improvement and building fresh approaches to existing problems.',
              },
              {
                title: 'Technology & Digital Solutions',
                body: 'Building software, digital platforms and intelligent systems that improve accessibility, communication and everyday experiences.',
              },
              {
                title: 'Product Development',
                body: 'Architecting and developing software and digital health products alongside technical specialists and partners.',
              },
              {
                title: 'Collaboration & Partnerships',
                body: 'Engaging researchers, institutions, businesses and development partners to scale promising initiatives.',
              },
              {
                title: 'Institutional & Community Innovation',
                body: 'Delivering practical initiatives that strengthen institutional environments, information flow and student resource access.',
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

          <div className="mt-14 pt-10 border-t border-ink-200/80 dark:border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-ink-500 dark:text-ink-400">
              <span>Process:</span>
              {approachSteps.map((s, idx) => (
                <span key={s.step}>
                  {s.title}
                  {idx < approachSteps.length - 1 ? ' → ' : ''}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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

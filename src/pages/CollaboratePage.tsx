import {
  GraduationCap,
  Cpu,
  Microscope,
  HeartPulse,
  TrendingUp,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { collaborationCategories } from '@/data/content';

const iconMap: Record<string, typeof Handshake> = {
  GraduationCap,
  Cpu,
  Microscope,
  HeartPulse,
  TrendingUp,
  Handshake,
};

export function CollaboratePage() {
  usePageTitle(
    'Collaborate',
    'Partner with Numinox. We welcome engagement with research institutions, universities, technology organisations, scientific specialists and strategic partners.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">Collaborate With Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-ink-950 dark:text-white leading-[1.1]">
              Building partnerships that turn ambitious ideas into impact.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
              We collaborate with institutions, specialists and organisations whose expertise,
              infrastructure or perspective helps advance high-impact solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Seek to Engage */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="Who We Engage"
            title="Organisations and specialists we partner with"
            description="We welcome collaboration across research, software engineering, digital health, academic institutions and strategic growth."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Handshake;
              return (
                <div key={category.title} className="card card-hover">
                  <div className="h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-950/50 border border-accent-200/70 dark:border-accent-800/70 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-4">
                    <IconComponent className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mutual Expectations */}
      <section className="py-16 sm:py-24 border-y border-ink-200/80 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white">
                What Numinox brings to partnerships
              </h3>
              <ul className="space-y-3">
                {[
                  'Original product concepts grounded in structured research and technical feasibility',
                  'An interdisciplinary team bridging life sciences, digital health, AI and campus infrastructure',
                  'Clear documentation, focused execution and long-term product commitment',
                  'Direct, responsive communication across every stage of development',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card space-y-4">
              <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white">
                How we work together
              </h3>
              <ul className="space-y-3">
                {[
                  'Focused exploratory discussions to align on objectives and technical scope',
                  'Respecting the intellectual property and institutional standards of every partner',
                  'Iterative validation, engineering refinement and disciplined delivery',
                  'Building durable, mutually beneficial professional relationships',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent-600 dark:text-accent-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Inquiry Form */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950" id="collaboration-form">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-5">
              <p className="section-label">Initiate Dialogue</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Propose a collaboration or research conversation.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Share your organisation’s focus, the area you would like to explore together or how
                you envision collaborating with Numinox. Every inquiry is reviewed directly by our
                leadership team.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ContactForm defaultType="partnership" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import {
  GraduationCap,
  Cpu,
  Microscope,
  HeartPulse,
  TrendingUp,
  Handshake,
  CheckCircle2,
  Info,
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
    'Partner with Numinox. We welcome engagement with research institutions, universities, technology organisations, scientific specialists and development partners.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg border-b border-ink-200/70 dark:border-ink-800">
        <div className="container-page py-20 lg:py-28">
          <p className="section-label mb-4 animate-fade-down">Collaborate With Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.08] animate-fade-up">
            Building relationships that turn promising concepts into reality.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed animate-fade-up animate-delay-200">
            Meaningful innovation rarely happens in isolation. Numinox welcomes professional
            engagement with institutions, specialists and organisations whose expertise,
            infrastructure or perspective can help investigate, validate and advance promising
            ideas.
          </p>
        </div>
      </section>

      {/* Who We Seek to Engage */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <SectionHeading
            label="Who We Engage"
            title="Organisations and specialists we welcome"
            description="We are open to conversations across research, product engineering, digital health, academic institutions and early-stage support."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Handshake;
              return (
                <div key={category.title} className="card card-hover">
                  <div className="h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-950/50 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-4">
                    <IconComponent className="h-5 w-5" strokeWidth={1.6} />
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
      <section className="py-20 lg:py-24 border-y border-ink-200/70 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/30">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card space-y-4">
              <h3 className="text-xl font-display font-medium text-ink-900 dark:text-white">
                What Numinox brings to collaboration
              </h3>
              <ul className="space-y-3">
                {[
                  'Original concepts grounded in curiosity, structured research and feasibility inquiry',
                  'An interdisciplinary mindset bridging life sciences, digital health, AI and institutional needs',
                  'Honesty about our current stage of development—without inflated claims',
                  'Commitment to thoughtful documentation, clear communication and long-term value',
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
                How we approach prospective partnerships
              </h3>
              <ul className="space-y-3">
                {[
                  'Starting with exploratory dialogue to verify mutual alignment and practical feasibility',
                  'Respecting the intellectual property, institutional scope and permissions of every partner',
                  'Focusing on validation, technical refinement and responsible execution',
                  'Building durable professional relationships rather than premature announcements',
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
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950" id="collaboration-form">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-5">
              <p className="section-label">Initiate Dialogue</p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
                Propose a collaboration or research conversation.
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Share your organisation’s focus, the area you would like to explore together or how
                you envision collaborating with Numinox. Every message is reviewed directly.
              </p>

              <div className="p-4 rounded-xl bg-ink-50 dark:bg-ink-900 border border-ink-200/80 dark:border-ink-800 flex items-start gap-3">
                <Info className="h-4 w-4 text-ink-500 shrink-0 mt-0.5" />
                <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">
                  Numinox represents all prospective engagements transparently and does not portray
                  early discussions as formal agreements until mutually established.
                </p>
              </div>
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

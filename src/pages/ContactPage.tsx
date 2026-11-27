import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/content';

export function ContactPage() {
  usePageTitle(
    'Contact',
    'Get in touch with Numinox for general inquiries, research collaboration, institutional engagement, product development or partnership proposals.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg bg-white dark:bg-ink-950 border-b border-ink-200/80 dark:border-ink-800">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">Contact Numinox</p>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-ink-950 dark:text-white leading-[1.12]">
              Start a conversation with our team.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
              Whether you are reaching out regarding research collaboration, institutional
              initiatives, VitalLink, technical partnerships or general inquiries, we welcome your
              message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16 sm:py-24 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="section-label mb-2">Direct Contact</p>
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 dark:text-white">
                  Organisational Contact Details
                </h2>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="card card-hover flex items-start gap-4 p-5"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-50 dark:bg-accent-950/60 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      Email Address
                    </p>
                    <p className="text-sm font-medium text-ink-900 dark:text-white mt-0.5 break-all">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.phoneHref}
                  className="card card-hover flex items-start gap-4 p-5"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-50 dark:bg-accent-950/60 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      Telephone
                    </p>
                    <p className="text-sm font-medium text-ink-900 dark:text-white mt-0.5">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-start gap-4 p-5"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-50 dark:bg-accent-950/60 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      Website
                    </p>
                    <p className="text-sm font-medium text-ink-900 dark:text-white mt-0.5">
                      {siteConfig.website}
                    </p>
                  </div>
                </a>

                <div className="card flex items-start gap-4 p-5">
                  <div className="h-10 w-10 rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      Current Base
                    </p>
                    <p className="text-sm text-ink-600 dark:text-ink-300 mt-0.5 leading-relaxed">
                      Operating from Ilorin, Kwara State, Nigeria — open to collaboration across
                      locations and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm defaultType="general" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

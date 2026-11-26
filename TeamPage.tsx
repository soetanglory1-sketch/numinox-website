import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { TeamCard } from '@/components/TeamCard';
import { teamMembers } from '@/data/content';

export function TeamPage() {
  usePageTitle(
    'Our Team',
    'Meet the four founding members of Numinox—Glory Soetan, Oluwole Charles, Soetan Victor and Agboola Oluwaloseyi—and learn about our associate contributors.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg border-b border-ink-200/70 dark:border-ink-800">
        <div className="container-page py-20 lg:py-28">
          <p className="section-label mb-4 animate-fade-down">Our Team</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-950 dark:text-white max-w-4xl leading-[1.08] animate-fade-up">
            The people shaping Numinox.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed animate-fade-up animate-delay-200">
            Numinox began with four core founding members—three from the University of Ilorin and
            one from the University of Ibadan—working together with contributing associate members
            to explore ideas and advance practical initiatives.
          </p>
        </div>
      </section>

      {/* Core Founding Team */}
      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Core Founding Members</p>
            <h2 className="text-3xl font-display font-medium text-ink-900 dark:text-white">
              Leadership &amp; Core Associates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Associate Members Acknowledgement */}
          <div className="mt-14 rounded-2xl border border-ink-200/80 dark:border-ink-800 bg-ink-50/70 dark:bg-ink-900/40 p-7 sm:p-9">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  <Users className="h-4 w-4" />
                  <span>Associate Contributors</span>
                </div>
                <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white">
                  Supported by Associate Members
                </h3>
                <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  Alongside the four core founding members, associate members contribute research
                  perspectives, ideation and operational support to Numinox’s ongoing exploration
                  and project development.
                </p>
              </div>

              <Link to="/collaborate" className="btn-secondary shrink-0">
                Engage With Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
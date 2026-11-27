export type StatusType =
  | 'In development'
  | 'Active initiative'
  | 'Institutional initiative'
  | 'Ongoing research';

export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: StatusType;
  originContext: string;
  summary: string;
  problem: string;
  proposal: string;
  objectives: string[];
  isFlagship?: boolean;
};

export type AreaOfExploration = {
  id: string;
  name: string;
  icon: string;
  featured?: boolean;
  summary: string;
  questionsExplored: string[];
};

export type JourneyMilestone = {
  phase: string;
  title: string;
  description: string;
};

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  institutionNote?: string;
  bio: string;
  focusAreas: string[];
  initials: string;
  photoUrl?: string;
};

export type CollaborationCategory = {
  title: string;
  icon: string;
  description: string;
};

export const siteConfig = {
  name: 'Numinox',
  tagline: 'Exploring Ideas. Developing Possibilities.',
  positioning:
    'Numinox is a student-led innovation and research organisation exploring ideas, advancing research and developing practical solutions across disciplines.',
  description:
    'Numinox brings together curiosity, research, technology and collaboration to investigate challenges and build practical solutions.',
  website: 'www.numinox.com.ng',
  websiteUrl: 'https://www.numinox.com.ng',
  email: 'soetanglory@numinox.com.ng',
  phone: '+234 905 844 5266',
  phoneHref: 'tel:+2349058445266',
  locationNote:
    'Operating from Ilorin, Kwara State, Nigeria — open to collaboration across locations and industries.',
};

export const approachSteps: ApproachStep[] = [
  {
    step: '01',
    title: 'Identify',
    description:
      'Spot real-world challenges, institutional gaps and everyday friction points worth solving.',
  },
  {
    step: '02',
    title: 'Explore',
    description:
      'Examine diverse angles across disciplines, asking questions and mapping practical approaches.',
  },
  {
    step: '03',
    title: 'Research',
    description:
      'Investigate scientific, technical and operational feasibility with rigor and clarity.',
  },
  {
    step: '04',
    title: 'Develop',
    description:
      'Translate validated concepts into structured product architectures, prototypes and solutions.',
  },
  {
    step: '05',
    title: 'Collaborate',
    description:
      'Engage researchers, specialists, institutions and partners to scale meaningful work.',
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: 'Phase 01',
    title: 'The Beginning',
    description:
      'Established as a student-led innovation and research organisation driven by curiosity, problem-solving and a commitment to improving existing systems.',
  },
  {
    phase: 'Phase 02',
    title: 'University Initiatives',
    description:
      'Initiated and structured practical campus solutions—including dedicated student internet connectivity and a centralised departmental web platform at the University of Ilorin.',
  },
  {
    phase: 'Phase 03',
    title: 'Expanding Horizons',
    description:
      'Expanded into broader scientific and technological research across artificial intelligence, digital health, life sciences and independent product development.',
  },
  {
    phase: 'Phase 04',
    title: 'Building VitalLink',
    description:
      'Originated and advanced VitalLink—structuring its Health Intelligence Layer and Personal Companion Experience to bring clarity to personal health data.',
  },
  {
    phase: 'Phase 05',
    title: 'Strategic Collaboration',
    description:
      'Working alongside researchers, institutions, technical specialists and partners such as Reach Digital Health to advance high-impact initiatives.',
  },
  {
    phase: 'Phase 06',
    title: 'The Future',
    description:
      'Growing an interdisciplinary organisation delivering practical solutions and meaningful advancements across multiple sectors.',
  },
];

export const workItems: WorkItem[] = [
  {
    slug: 'vitallink',
    name: 'VitalLink',
    tagline: 'Personal Health Intelligence & Companion Experience',
    category: 'Digital Health & AI',
    status: 'In development',
    originContext: 'Flagship Numinox Product • In Collaboration with Reach Digital Health',
    summary:
      'A digital health platform bringing personal health information, behavioural patterns, wearable technologies and artificial intelligence together to deliver clear health insights and support informed daily decisions.',
    problem:
      'Personal health signals are spread across wearables, self-tracking tools and daily habits without unified context—making subtle behavioural or biometric shifts easy to miss.',
    proposal:
      'VitalLink integrates a central Health Intelligence Layer that interprets multi-source health signals with a Personal Companion Experience offering tailored guidance, reminders and daily behavioural support.',
    objectives: [
      'Synthesise personal health records, self-reported data, behavioural patterns and wearable biometric signals',
      'Identify meaningful trends, correlations and shifts in personal wellbeing over time',
      'Support everyday health routines through contextual guidance, daily goals and smart reminders',
      'Advance architecture and product delivery in collaboration with Reach Digital Health',
    ],
    isFlagship: true,
  },
  {
    slug: 'connectivity-hub',
    name: 'The Connectivity Hub',
    tagline: 'Dedicated Student Internet Connectivity Platform',
    category: 'Campus Infrastructure & Digital Access',
    status: 'Active initiative',
    originContext: 'University of Ilorin Campus Initiative',
    summary:
      'A student-focused connectivity initiative originated by Numinox at the University of Ilorin to provide reliable internet access through a dedicated Wi-Fi network and accessible connectivity spaces.',
    problem:
      'Consistent internet access is essential for academic research, online coursework and digital collaboration, yet students frequently encounter connectivity and cost barriers on campus.',
    proposal:
      'Deliver a dedicated campus connectivity platform—combining structured Wi-Fi access and purpose-built connectivity zones—tailored around students’ academic and everyday digital needs.',
    objectives: [
      'Deliver reliable, student-focused internet access through a dedicated Wi-Fi platform',
      'Support academic research, online learning and access to digital educational resources',
      'Enable seamless digital collaboration across student teams and academic groups',
    ],
  },
  {
    slug: 'departmental-website-initiative',
    name: 'Dedicated Departmental Website Initiative',
    tagline: 'Centralised Digital Platform for Academic Departments',
    category: 'Institutional Digital Infrastructure',
    status: 'Institutional initiative',
    originContext: 'University of Ilorin Departmental Initiative',
    summary:
      'An institutional web platform initiated by Numinox at the University of Ilorin to provide structured digital communication and centralised academic resources for an academic department.',
    problem:
      'Without a dedicated web platform, vital academic schedules, handbooks, announcements and departmental updates remain scattered across informal channels.',
    proposal:
      'Build a dedicated departmental website serving as a single, authoritative digital hub for academic resources, announcements, departmental activities and stakeholder engagement.',
    objectives: [
      'Centralise departmental information, academic handbooks and learning resources',
      'Streamline official announcements, updates and departmental activity visibility',
      'Strengthen digital accessibility for students, faculty and external collaborators',
    ],
  },
  {
    slug: 'institutional-innovation-explorations',
    name: 'Institutional & Everyday System Innovation',
    tagline: 'Practical Solutions for Operational & Campus Challenges',
    category: 'Interdisciplinary Innovation',
    status: 'Ongoing research',
    originContext: 'Numinox Research & Development',
    summary:
      'Alongside our core platforms, Numinox investigates institutional workflows, resource accessibility and everyday operational challenges where thoughtful research and technology create measurable improvements.',
    problem:
      'Everyday operational workflows within institutions and communities often rely on outdated processes that create unnecessary friction for students, staff and organisations.',
    proposal:
      'Apply structured research and human-centred engineering to design practical digital tools and system improvements tailored to real-world environments.',
    objectives: [
      'Identify recurring institutional and everyday bottlenecks through direct observation',
      'Design and validate practical technical solutions grounded in user needs',
      'Partner with domain specialists and institutions to bring solutions into practice',
    ],
  },
];

export const areasOfExploration: AreaOfExploration[] = [
  {
    id: 'ai-intelligent-systems',
    name: 'Artificial Intelligence & Intelligent Systems',
    icon: 'BrainCircuit',
    featured: true,
    summary:
      'Investigating intelligent applications, data-driven reasoning, pattern recognition and automation that support clearer decisions and practical solutions.',
    questionsExplored: [
      'How can AI-assisted pattern recognition surface actionable insights from complex personal and institutional data?',
      'Where can intelligent automation reduce cognitive friction while keeping human judgment central?',
      'How do we build trustworthy, transparent intelligent systems suited to real-world environments?',
    ],
  },
  {
    id: 'digital-health',
    name: 'Digital Health & Health Innovation',
    icon: 'HeartPulse',
    featured: true,
    summary:
      'Building digital platforms that connect wearable signals, personal health records and intelligent analysis to strengthen health awareness and proactive wellbeing.',
    questionsExplored: [
      'How can fragmented biometric and lifestyle indicators be synthesised into coherent personal health context?',
      'What companion experiences genuinely help individuals sustain healthy daily habits?',
      'How can longitudinal health trends be presented clearly to support informed everyday choices?',
    ],
  },
  {
    id: 'life-sciences-biotech',
    name: 'Life Sciences & Biotechnology',
    icon: 'Dna',
    summary:
      'Applying biological sciences, biochemical principles and scientific research to develop practical health and life-science solutions.',
    questionsExplored: [
      'Where do biochemical and life-science insights intersect with digital tools and diagnostics?',
      'How can foundational biological research inform practical health and environmental solutions?',
      'What collaborative frameworks best bridge academic life-science inquiry with applied product development?',
    ],
  },
  {
    id: 'engineering-emerging-tech',
    name: 'Engineering & Emerging Technologies',
    icon: 'Cpu',
    summary:
      'Designing resilient software architectures, connected infrastructure and emerging systems capable of solving practical operational problems.',
    questionsExplored: [
      'Which emerging technologies offer durable utility across academic, health and enterprise settings?',
      'How can resilient digital and network systems be engineered for high reliability?',
      'What technical architectures keep products modular, fast and scalable?',
    ],
  },
  {
    id: 'lifestyle-everyday-innovation',
    name: 'Lifestyle & Everyday Innovation',
    icon: 'Compass',
    summary:
      'Creating thoughtful improvements to everyday activities, student experiences, digital accessibility and community systems.',
    questionsExplored: [
      'How can access to essential digital infrastructure—like campus connectivity—be made seamless?',
      'What well-executed digital platforms dramatically enhance institutional communication?',
      'How do we design solutions around real human habits and everyday workflows?',
    ],
  },
  {
    id: 'other-emerging-fields',
    name: 'Interdisciplinary & Emerging Fields',
    icon: 'Layers',
    summary:
      'Working across disciplines where life sciences, software engineering and human-centred design converge to unlock new possibilities.',
    questionsExplored: [
      'What opportunities emerge when life sciences, computing and institutional design converge?',
      'Which under-explored problems benefit most from cross-disciplinary problem-solving?',
      'How can external specialists partner with Numinox to build impactful solutions?',
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'glory-soetan',
    name: 'Glory Soetan',
    role: 'Founder & Executive Director',
    institutionNote: 'Academic background in Biochemistry',
    bio: 'Glory Soetan is the Founder and Executive Director of Numinox. With an academic background in Biochemistry, research experience and a focus on technology and interdisciplinary innovation, he leads Numinox’s strategic direction, originates product concepts, directs VitalLink’s development and builds strategic partnerships.',
    focusAreas: ['Strategic Direction', 'VitalLink Leadership', 'Life Sciences & Digital Health', 'Partnerships'],
    initials: 'GS',
  },
  {
    id: 'oluwole-charles',
    name: 'Oluwole Charles',
    role: 'Product Development & Innovation Associate',
    bio: 'Leads product structuring, applied research and technical documentation—translating concepts and feasibility findings into clear, actionable product specifications.',
    focusAreas: ['Product Development', 'Applied Research', 'Technical Documentation'],
    initials: 'OC',
  },
  {
    id: 'soetan-victor',
    name: 'Soetan Victor',
    role: 'Digital Strategy & Research Associate',
    bio: 'Leads digital planning, research and product requirements coordination—ensuring solutions are grounded in clean digital architecture and user clarity.',
    focusAreas: ['Digital Strategy', 'Requirements Coordination', 'Systems Research'],
    initials: 'SV',
  },
  {
    id: 'agboola-oluwaloseyi',
    name: 'Agboola Oluwaloseyi',
    role: 'Project Development & Coordination Associate',
    bio: 'Leads development planning, research and implementation coordination—structuring timelines, workflows and collaborative execution across initiatives.',
    focusAreas: ['Project Coordination', 'Development Planning', 'Execution Workflows'],
    initials: 'AO',
  },
];

export const collaborationCategories: CollaborationCategory[] = [
  {
    title: 'Research Institutions & Academic Departments',
    icon: 'GraduationCap',
    description:
      'Universities, faculties and research groups interested in joint inquiry, institutional digital infrastructure and academic collaboration.',
  },
  {
    title: 'Technology & Product Development Organisations',
    icon: 'Cpu',
    description:
      'Software engineering teams, digital health builders and product studios collaborating on technical architecture, prototyping and product delivery.',
  },
  {
    title: 'Engineering & Scientific Specialists',
    icon: 'Microscope',
    description:
      'Domain experts in artificial intelligence, biochemistry, digital health, data science and engineering contributing technical and scientific depth.',
  },
  {
    title: 'Digital Health Organisations',
    icon: 'HeartPulse',
    description:
      'Health technology teams and advisors collaborating on intelligent health insights, wearable integration and companion experiences.',
  },
  {
    title: 'Investors & Funding Partners',
    icon: 'TrendingUp',
    description:
      'Supporters and funding partners interested in backing well-researched, high-potential initiatives as they scale.',
  },
  {
    title: 'Industry & Strategic Partners',
    icon: 'Handshake',
    description:
      'Organisations and professionals providing domain infrastructure, mentorship and pathways to real-world deployment.',
  },
];

export const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'research', label: 'Research Collaboration' },
  { value: 'institutional', label: 'Institutional Engagement' },
  { value: 'partnership', label: 'Partnership Proposal' },
  { value: 'product', label: 'Product Development' },
  { value: 'technical', label: 'Technical Collaboration' },
  { value: 'other', label: 'Other Professional Opportunity' },
];

export const interestAreaOptions = [
  'Artificial Intelligence & Intelligent Systems',
  'VitalLink / Digital Health Innovation',
  'Life Sciences & Biotechnology',
  'Engineering & Emerging Technologies',
  'Institutional & Campus Initiatives',
  'Lifestyle & Everyday Innovation',
  'General / Multi-Disciplinary',
];

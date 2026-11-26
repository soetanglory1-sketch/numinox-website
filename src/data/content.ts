export type StatusType =
  | 'In development'
  | 'Early-stage initiative'
  | 'Concept / Proposal'
  | 'Under exploration';

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
  disclaimer: string;
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
    'Numinox is an emerging innovation and research organisation exploring ideas, advancing research and developing practical solutions across disciplines.',
  description:
    'Numinox brings together curiosity, research, technology and collaboration to investigate challenges and explore new possibilities.',
  website: 'www.numinox.com.ng',
  websiteUrl: 'https://www.numinox.com.ng',
  email: 'soetanglory@numinox.com.ng',
  phone: '+234 905 844 5266',
  phoneHref: 'tel:+2349058445266',
  locationNote:
    'Currently operating from Ilorin, Kwara State, Nigeria — open to collaboration across locations and industries.',
};

export const approachSteps: ApproachStep[] = [
  {
    step: '01',
    title: 'Identify',
    description:
      'Spot real-world challenges, institutional gaps and everyday friction points worth questioning.',
  },
  {
    step: '02',
    title: 'Explore',
    description:
      'Examine diverse angles across disciplines, asking questions and mapping possible approaches.',
  },
  {
    step: '03',
    title: 'Research',
    description:
      'Investigate scientific, technical and practical feasibility before committing to build.',
  },
  {
    step: '04',
    title: 'Develop',
    description:
      'Translate validated concepts into structured product architectures, prototypes and proposals.',
  },
  {
    step: '05',
    title: 'Collaborate',
    description:
      'Engage researchers, specialists, institutions and partners to refine and advance promising work.',
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: 'Phase 01',
    title: 'The Beginning',
    description:
      'A small group of four students—three from the University of Ilorin and one from the University of Ibadan—brought together by curiosity, discussions and a shared interest in innovation and problem-solving.',
  },
  {
    phase: 'Phase 02',
    title: 'Early Initiatives',
    description:
      'Exploring and proposing practical ideas to improve the university environment, including student internet connectivity, departmental digital platforms and environmental awareness.',
  },
  {
    phase: 'Phase 03',
    title: 'Expanding Horizons',
    description:
      'Moving beyond university-focused proposals into broader scientific and technological research, artificial intelligence, digital health, biotechnology and independent product concepts.',
  },
  {
    phase: 'Phase 04',
    title: 'Developing Concepts',
    description:
      'Originating original concepts such as VitalLink, investigating their scientific and technical feasibility and structuring clear development pathways.',
  },
  {
    phase: 'Phase 05',
    title: 'Collaboration and Growth',
    description:
      'Seeking meaningful engagement with researchers, institutions, technical specialists and development partners to validate and advance promising initiatives.',
  },
  {
    phase: 'Phase 06',
    title: 'The Future',
    description:
      'Building a credible, interdisciplinary organisation capable of contributing practical solutions and meaningful advancements across multiple sectors.',
  },
];

export const workItems: WorkItem[] = [
  {
    slug: 'vitallink',
    name: 'VitalLink',
    tagline: 'Personal Health Intelligence & Companion Experience',
    category: 'Digital Health & AI',
    status: 'In development',
    originContext: 'Core Numinox Initiative • Advancing with Reach Digital Health',
    summary:
      'An emerging digital health initiative exploring how personal health information, behavioural patterns, wearable technologies and artificial intelligence can be brought together to provide meaningful health insights and support informed decisions.',
    problem:
      'Personal health data is increasingly generated across wearables, self-tracking tools and daily habits, yet remains fragmented. Without contextual synthesis, subtle behavioural or biometric changes often go unnoticed until issues require urgent attention.',
    proposal:
      'VitalLink combines two connected layers: a central Health Intelligence Layer that interprets multi-source health signals to surface trends and potential early warnings, paired with a Personal Companion Experience offering tailored guidance, reminders and daily behavioural nudges.',
    objectives: [
      'Synthesise personal health information, self-reported data, behavioural patterns and wearable biometric signals',
      'Identify meaningful trends, correlations and deviations that may warrant personal attention',
      'Support everyday wellbeing through contextual guidance, daily goals and behavioural nudges',
      'Advance conceptual and technical development responsibly in collaboration with Reach Digital Health',
    ],
    disclaimer:
      'VitalLink is currently at an early conceptualisation and development stage. It is not yet a clinically validated or commercially available medical product.',
    isFlagship: true,
  },
  {
    slug: 'connectivity-hub',
    name: 'The Connectivity Hub',
    tagline: 'Dedicated Student Internet Connectivity Platform',
    category: 'Institutional & Digital Access',
    status: 'Early-stage initiative',
    originContext: 'Early University Environment Initiative',
    summary:
      'A student-focused connectivity initiative proposed to help students gain reliable access to the internet within the university environment through a dedicated Wi-Fi network and accessible connectivity spaces.',
    problem:
      'Reliable internet access is essential for modern academic research, online learning, digital collaboration and access to educational resources, yet students frequently face cost and infrastructure barriers on campus.',
    proposal:
      'Establish a dedicated campus connectivity platform—combining structured Wi-Fi access and accessible connectivity zones—specifically engineered around students’ academic and everyday internet needs.',
    objectives: [
      'Provide reliable, student-focused internet access via a dedicated Wi-Fi platform',
      'Support academic research, online coursework and access to digital educational libraries',
      'Enable seamless digital collaboration among students and academic groups',
    ],
    disclaimer:
      'The Connectivity Hub is an early-stage initiative and proposal. It is not currently an operational campus-wide Wi-Fi network or completed installation.',
  },
  {
    slug: 'departmental-website-initiative',
    name: 'Dedicated Departmental Website Initiative',
    tagline: 'Centralised Digital Platform for Academic Departments',
    category: 'Institutional Communication',
    status: 'Concept / Proposal',
    originContext: 'Early University Environment Proposal',
    summary:
      'A proposal conceived after identifying the need for improved digital accessibility and structured communication within a university department that lacked a central online presence.',
    problem:
      'When academic departments lack a dedicated web platform, vital information—schedules, academic resources, announcements and departmental updates—becomes scattered across informal channels, creating friction for students and external visitors.',
    proposal:
      'Design and deploy a dedicated departmental website serving as a single, authoritative digital hub for academic resources, announcements, departmental activities and stakeholder information.',
    objectives: [
      'Centralise departmental information, academic handbooks and learning resources',
      'Streamline official announcements, updates and departmental activity visibility',
      'Improve digital accessibility for students, faculty and prospective collaborators',
    ],
    disclaimer:
      'This initiative was developed as an institutional proposal to improve digital communication and has not been claimed as an officially launched departmental system.',
  },
  {
    slug: 'wildlife-ecotourism-proposals',
    name: 'Wildlife and Ecotourism Proposals',
    tagline: 'Environmental Awareness, Conservation & Educational Engagement',
    category: 'Environment & Sustainability',
    status: 'Concept / Proposal',
    originContext: 'Early University Environment Exploration',
    summary:
      'Conceptual proposals exploring how wildlife appreciation, environmental education and sustainable ecotourism initiatives within the university setting can enrich institutional development and conservation awareness.',
    problem:
      'Environmental stewardship and biodiversity appreciation often remain confined to classroom theory rather than active, accessible engagement within campus communities.',
    proposal:
      'Develop structured environmental awareness and educational ecotourism frameworks that connect students and visitors with local ecological heritage while encouraging conservation literacy.',
    objectives: [
      'Promote environmental awareness and wildlife conservation literacy within academic communities',
      'Create structured educational and responsible recreational engagement opportunities',
      'Demonstrate how non-software initiatives can contribute meaningfully to institutional development',
    ],
    disclaimer:
      'These concepts were explored as early institutional proposals; no wildlife facility, conservation programme or ecotourism destination has been established.',
  },
  {
    slug: 'institutional-innovation-explorations',
    name: 'Broader Institutional & Everyday Innovation',
    tagline: 'Ongoing Exploration of Practical System Improvements',
    category: 'Interdisciplinary Exploration',
    status: 'Under exploration',
    originContext: 'Ongoing Numinox Research & Ideation',
    summary:
      'Alongside named proposals, Numinox continues to investigate institutional workflows, resource accessibility and everyday operational challenges where thoughtful research and technology can offer practical improvements.',
    problem:
      'Many everyday processes within institutions and communities persist out of habit rather than efficiency, leaving room for well-researched, human-centred redesign.',
    proposal:
      'Maintain an open, disciplined inquiry pipeline where emerging observations are evaluated for scientific, technical and practical feasibility before moving into structured concept development.',
    objectives: [
      'Identify recurring institutional and everyday bottlenecks through observation and dialogue',
      'Evaluate feasibility honestly before committing development resources',
      'Connect promising findings with relevant domain specialists and partners',
    ],
    disclaimer:
      'Represents ongoing exploratory discussions and feasibility assessments rather than completed deployments.',
  },
];

export const areasOfExploration: AreaOfExploration[] = [
  {
    id: 'ai-intelligent-systems',
    name: 'Artificial Intelligence & Intelligent Systems',
    icon: 'BrainCircuit',
    featured: true,
    summary:
      'A core pillar of Numinox’s exploration—investigating intelligent applications, data-driven reasoning, pattern recognition and automation that support clearer decisions and practical solutions.',
    questionsExplored: [
      'How can AI-assisted pattern recognition surface actionable insights from complex personal and institutional data?',
      'Where can intelligent automation reduce cognitive friction while keeping human judgment central?',
      'How do we design trustworthy, transparent intelligent systems suited to real-world constraints?',
    ],
  },
  {
    id: 'digital-health',
    name: 'Digital Health & Health Innovation',
    icon: 'HeartPulse',
    featured: true,
    summary:
      'Investigating how digital platforms, wearable signals, personal health records and intelligent analysis can strengthen health awareness and proactive decision-making.',
    questionsExplored: [
      'How can fragmented biometric and lifestyle indicators be synthesised into coherent personal health context?',
      'What companion mechanisms genuinely help individuals sustain healthy daily habits?',
      'How can early pattern deviations be communicated responsibly without overstepping clinical boundaries?',
    ],
  },
  {
    id: 'life-sciences-biotech',
    name: 'Life Sciences & Biotechnology',
    icon: 'Dna',
    summary:
      'Exploring biological sciences, biochemical principles, scientific research and pathways for translating life-science knowledge into practical real-world applications.',
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
      'Examining technological concepts, software architectures, hardware possibilities and emerging systems capable of solving practical operational problems.',
    questionsExplored: [
      'Which emerging technologies offer durable utility beyond short-term novelty?',
      'How can resilient digital and hardware-adjacent systems be designed for resource-variable environments?',
      'What technical architectures keep early-stage concepts modular and scalable?',
    ],
  },
  {
    id: 'environment-sustainability',
    name: 'Environment & Sustainability',
    icon: 'Leaf',
    summary:
      'Investigating environmental challenges, conservation awareness, resource stewardship and sustainable approaches to institutional and community development.',
    questionsExplored: [
      'How can educational and ecotourism frameworks strengthen local conservation awareness?',
      'What practical resource-management improvements can institutions adopt incrementally?',
      'Where can data and technology support environmental monitoring and stewardship?',
    ],
  },
  {
    id: 'lifestyle-everyday-innovation',
    name: 'Lifestyle & Everyday Innovation',
    icon: 'Compass',
    summary:
      'Exploring thoughtful improvements to everyday activities, student experiences, accessibility and existing community systems.',
    questionsExplored: [
      'How can access to essential digital infrastructure—like campus connectivity—be made more equitable?',
      'What small, well-executed improvements dramatically enhance daily institutional communication?',
      'How do we design solutions around real human habits rather than idealised assumptions?',
    ],
  },
  {
    id: 'other-emerging-fields',
    name: 'Other Emerging & Interdisciplinary Fields',
    icon: 'Layers',
    summary:
      'Numinox is deliberately not confined to a single industry or discipline—remaining open to new intersections where curiosity, research and collaboration create value.',
    questionsExplored: [
      'What opportunities emerge when life sciences, computing and institutional design converge?',
      'Which under-explored problems benefit most from cross-disciplinary problem-solving?',
      'How can external specialists partner with Numinox to investigate novel problem spaces?',
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'glory-soetan',
    name: 'Glory Soetan',
    role: 'Founder & Executive Director',
    institutionNote: 'Academic background in Biochemistry',
    bio: 'Glory Soetan is the Founder and Executive Director of Numinox. With an academic background in Biochemistry, research experience and a strong interest in technology and interdisciplinary innovation, he established Numinox as a platform for exploring ideas and developing practical solutions. He originates concepts, investigates scientific and practical feasibility, shapes product strategy, leads VitalLink’s strategic direction and engages potential development partners.',
    focusAreas: ['Strategic Direction', 'VitalLink Origination', 'Life Sciences & Digital Health', 'Partnerships'],
    initials: 'GS',
  },
  {
    id: 'oluwole-charles',
    name: 'Oluwole Charles',
    role: 'Product Development & Innovation Associate',
    bio: 'Supports product development, research and structured project documentation—helping translate early-stage concepts and feasibility findings into clear, practical product specifications.',
    focusAreas: ['Product Development', 'Research Support', 'Project Documentation'],
    initials: 'OC',
  },
  {
    id: 'soetan-victor',
    name: 'Soetan Victor',
    role: 'Digital Strategy & Research Associate',
    bio: 'Supports digital planning, research and the coordination of product requirements—ensuring concepts are grounded in thoughtful digital architecture and user clarity.',
    focusAreas: ['Digital Strategy', 'Requirements Coordination', 'Applied Research'],
    initials: 'SV',
  },
  {
    id: 'agboola-oluwaloseyi',
    name: 'Agboola Oluwaloseyi',
    role: 'Project Development & Coordination Associate',
    bio: 'Supports development planning, research and implementation coordination—helping structure timelines, workflows and collaborative execution across initiatives.',
    focusAreas: ['Project Coordination', 'Development Planning', 'Execution Workflows'],
    initials: 'AO',
  },
];

export const collaborationCategories: CollaborationCategory[] = [
  {
    title: 'Research Institutions & Academic Departments',
    icon: 'GraduationCap',
    description:
      'Universities, faculties and research groups interested in joint inquiry, feasibility studies, student-centred institutional initiatives and academic dialogue.',
  },
  {
    title: 'Technology & Product Development Organisations',
    icon: 'Cpu',
    description:
      'Software engineering teams, digital health builders and product studios capable of collaborating on technical prototyping, validation and system architecture.',
  },
  {
    title: 'Engineering & Scientific Specialists',
    icon: 'Microscope',
    description:
      'Domain experts in artificial intelligence, biochemistry, digital health, data science and engineering who bring deep technical or scientific perspective.',
  },
  {
    title: 'Digital Health Organisations',
    icon: 'HeartPulse',
    description:
      'Health technology teams and advisors interested in exploring intelligent health insights, wearable integration and responsible companion experiences.',
  },
  {
    title: 'Investors & Potential Funding Partners',
    icon: 'TrendingUp',
    description:
      'Early-stage supporters and grant or funding partners interested in backing well-researched, high-potential concepts as they mature.',
  },
  {
    title: 'Industry & Strategic Development Partners',
    icon: 'Handshake',
    description:
      'Organisations and professionals with domain infrastructure, mentorship or pathways to real-world testing and practical deployment.',
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
  'Environment & Sustainability',
  'Institutional & Campus Initiatives',
  'Lifestyle & Everyday Innovation',
  'General / Multi-Disciplinary',
];

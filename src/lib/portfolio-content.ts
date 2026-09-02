export const contact = {
  name: "Ana C.",
  title: "Marketing Coordinator",
  email: "ac.anamendes@gmail.com",
  phone: "+1 (205) 986-0158",
  linkedinLabel: "linkedin.com/in/anacarolina-mendes",
  linkedinUrl: "https://www.linkedin.com/in/anacarolina-mendes/",
};

export const softSkills = [
  "Creativity",
  "Adaptability",
  "Problem-Solving",
  "Continuous Learning Mindset",
  "Curiosity",
  "Active Listening",
];

export const operationalSkills = [
  "Project coordination in fast-paced environments",
  "Managing multiple concurrent initiatives",
  "Data review and performance reporting",
  "Cross-functional collaboration",
  "Customer experience optimization",
];

export const technicalSkills = [
  "SaaS platforms & internal tools",
  "Web and graphic design",
  "SEO tools & analytics platforms",
  "Email & workflow automation tools",
  "Foundational HTML, CSS and JavaScript",
  "Tech-savvy, quick to learn new systems",
];

export const toolStack: { group: string; tools: string[] }[] = [
  { group: "Graphic Design", tools: ["Figma", "Canva", "Photoshop", "Illustrator", "InDesign", "Lightroom"] },
  { group: "Web Design & Development", tools: ["WordPress", "Webflow", "Wix", "GitHub", "HTML", "CSS"] },
  {
    group: "Ads Platforms",
    tools: ["Meta Ads Manager", "Google Ads", "LinkedIn Ads"],
  },
  { group: "Email Marketing", tools: ["MailChimp", "HubSpot", "MailerLite"] },
  { group: "Social Media", tools: ["Metricool", "Buffer", "MeetEdgar"] },
  { group: "AI Tools", tools: ["ChatGPT", "Claude", "Perplexity"] },
  { group: "SEO", tools: ["Google Search Console", "SEMrush"] },
  { group: "CRM & Customer Tools", tools: ["HubSpot", "Intercom"] },
  { group: "Project Management", tools: ["Jira", "Trello"] },
  { group: "Analytics & Insights", tools: ["Google Analytics"] },
  { group: "Video & Media", tools: ["CapCut"] },
];

/** Logo URLs for tools - using Brandfetch API */
const BRANDFETCH_CLIENT = "1idM0Fe5LM9sFvH9xss";
export const toolIconSlugs: Record<string, string> = {
  "Meta Ads Manager": `https://cdn.brandfetch.io/meta.com?c=${BRANDFETCH_CLIENT}`,
  "Google Ads": `https://cdn.brandfetch.io/google.com?c=${BRANDFETCH_CLIENT}`,
  "Google Search Console": `https://cdn.brandfetch.io/google.com?c=${BRANDFETCH_CLIENT}`,
  "LinkedIn Ads": `https://cdn.brandfetch.io/linkedin.com?c=${BRANDFETCH_CLIENT}`,
  MailChimp: `https://cdn.brandfetch.io/mailchimp.com?c=${BRANDFETCH_CLIENT}`,
  HubSpot: `https://cdn.brandfetch.io/hubspot.com?c=${BRANDFETCH_CLIENT}`,
  Buffer: `https://cdn.brandfetch.io/buffer.com?c=${BRANDFETCH_CLIENT}`,
  "Google Keyword Planner": `https://cdn.brandfetch.io/google.com?c=${BRANDFETCH_CLIENT}`,
  SEMrush: `https://cdn.brandfetch.io/semrush.com?c=${BRANDFETCH_CLIENT}`,
  Intercom: `https://cdn.brandfetch.io/intercom.com?c=${BRANDFETCH_CLIENT}`,
  "Google Analytics": `https://cdn.brandfetch.io/google.com?c=${BRANDFETCH_CLIENT}`,
  Figma: `https://cdn.brandfetch.io/figma.com?c=${BRANDFETCH_CLIENT}`,
  WordPress: `https://cdn.brandfetch.io/wordpress.com?c=${BRANDFETCH_CLIENT}`,
  Webflow: `https://cdn.brandfetch.io/webflow.com?c=${BRANDFETCH_CLIENT}`,
  Wix: `https://cdn.brandfetch.io/wix.com?c=${BRANDFETCH_CLIENT}`,
  GitHub: `https://cdn.brandfetch.io/github.com?c=${BRANDFETCH_CLIENT}`,
  HTML: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png",
  CSS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6Lvv1FI58XAH_Bsi00BDUqT7-DVEE91j2FEYC1Ng-w&s=10",
  Jira: `https://cdn.brandfetch.io/atlassian.com?c=${BRANDFETCH_CLIENT}`,
  Trello: `https://cdn.brandfetch.io/trello.com?c=${BRANDFETCH_CLIENT}`,
  ChatGPT: `https://cdn.brandfetch.io/openai.com?c=${BRANDFETCH_CLIENT}`,
  Claude: `https://cdn.brandfetch.io/anthropic.com?c=${BRANDFETCH_CLIENT}`,
  Perplexity: `https://cdn.brandfetch.io/perplexity.ai?c=${BRANDFETCH_CLIENT}`,
  Photoshop: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/960px-Adobe_Photoshop_CC_icon.svg.png",
  Illustrator: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/960px-Adobe_Illustrator_CC_icon.svg.png",
  InDesign: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Adobe_Indesign_CC_2026_icon.svg/960px-Adobe_Indesign_CC_2026_icon.svg.png",
  Lightroom: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/960px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
  Canva: `https://cdn.brandfetch.io/canva.com?c=${BRANDFETCH_CLIENT}`,
  "CapCut": `https://cdn.brandfetch.io/capcut.com?c=${BRANDFETCH_CLIENT}`,
  Metricool: `https://cdn.brandfetch.io/metricool.com?c=${BRANDFETCH_CLIENT}`,
  MeetEdgar: `https://cdn.brandfetch.io/meetedgar.com?c=${BRANDFETCH_CLIENT}`,
  MailerLite: `https://cdn.brandfetch.io/mailerlite.com?c=${BRANDFETCH_CLIENT}`,
};

export const certifications = [
  { name: "Modern JavaScript Bootcamp", issuer: "Udemy", year: "2025" },
  { name: "User Experience Designer", issuer: "LinkedIn Learning", year: "2023" },
  { name: "Digital Marketing Certification", issuer: "HubSpot", year: "2023" },
  { name: "Content Marketing & Inbound Marketing", issuer: "Rock Content", year: "2021" },
  { name: "JavaScript For Beginners", issuer: "Udemy", year: "2020" },
  { name: "HTML and CSS Fundamentals", issuer: "Udemy", year: "2019" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2019" },
];

export const workCategories = [
  {
    slug: "social-media",
    name: "Social Media",
    blurb: "Posts, reels and short-form video across brand channels.",
  },
  { slug: "branding", name: "Branding", blurb: "Identity systems, visual guidelines and key visuals." },
  { slug: "web", name: "Web", blurb: "Quick design & development of pages and landing experiences." },
  {
    slug: "print-digital-media",
    name: "Print & Digital Media",
    blurb: "Banners, postcards, flyers and digital display assets.",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    blurb: "Newsletters, nurture flows and campaign templates.",
  },
  { slug: "blog-content", name: "Blog Content", blurb: "Articles, SEO briefs and editorial content." },
];

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  action: string;
  result: string;
  images?: CaseStudyImage[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: "Flyer" | "Postcard" | "Catalog" | "Document" | "Video" | "Other";
  thumbnail: string;
  media: {
    type: "image" | "pdf" | "video" | "canva";
    src: string;
    alt?: string;
  };
}

export const printDigitalMediaItems: ProjectItem[] = [
  {
    id: "portfolio-template",
    title: "Print & Digital Media Portfolio",
    type: "Flyer",
    thumbnail: "https://via.placeholder.com/400x300?text=Portfolio+Design",
    media: {
      type: "canva",
      src: "https://www.canva.com/design/DAHT_JBd4yY/OKmQ8VeO4I0JEehLIBklOg/view?embed",
      alt: "Portfolio design template",
    },
  },
];

export const emailMarketingItems: ProjectItem[] = [
  {
    id: "leaddyno-email",
    title: "LeadDyno Newsletter",
    type: "Document",
    thumbnail: "https://via.placeholder.com/400x300?text=Email+Campaign",
    media: {
      type: "canva",
      src: "https://www.canva.com/design/DAHT_WOe5tE/7r4-OYRcr0waE6daS2UjEg/view?embed",
      alt: "LeadDyno email campaign",
    },
  },
];

export const socialMediaItems: ProjectItem[] = [
  {
    id: "social-media-content",
    title: "Social Media Content",
    type: "Other",
    thumbnail: "https://via.placeholder.com/400x300?text=Social+Media",
    media: {
      type: "canva",
      src: "https://www.canva.com/design/DAHT_jKTMAI/rGzuJAN-0Hom8RvQ-WkkTA/view?embed",
      alt: "Social media content collection",
    },
  },
];

export const videoItems: ProjectItem[] = [
  {
    id: "video-content",
    title: "Video Content",
    type: "Video",
    thumbnail: "https://via.placeholder.com/400x300?text=Video+Content",
    media: {
      type: "canva",
      src: "https://www.canva.com/design/DAHUASO8Boo/6UrufWOPo-8WeymrY7eEgg/view?embed",
      alt: "Video content collection",
    },
  },
];

export const brandingItems: ProjectItem[] = [
  {
    id: "branding-systems",
    title: "Branding & Identity",
    type: "Other",
    thumbnail: "https://via.placeholder.com/400x300?text=Branding",
    media: {
      type: "canva",
      src: "https://www.canva.com/design/DAHUAUoQYHY/iZWw13FYRsBpMrBhKzfMRg/view?embed",
      alt: "Brand identity and visual systems",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Revamping MeetEdgar's Website — Growing Organic Traffic 49.67%",
    challenge: "MeetEdgar's website was outdated and carried technical debt. SEO had been neglected for a long time before this project, and the two problems were tangled together.",
    action: "I rebuilt the site with an external design/dev agency while owning site architecture, content strategy, and SEO optimization. Restructured the site architecture, refreshed content, and optimized copy across every page. Once live, I continued with ongoing SEO work including link-building and content creation.",
    result: "First 6 months: Organic traffic +49.67%, Impressions +80.8% (7.41M → 13.4M), Clicks +28.6% (80.1K → 103K). One year later: Organic traffic +22%, New users from organic +48.8%.",
  },
  {
    title: "Rebuilding MeetEdgar's Onboarding Emails — Open Rate 47.6% → 56.4%",
    challenge: "MeetEdgar's trial onboarding email sequence was generic and underperforming, sending the same message to all new users regardless of what they'd actually done in the product.",
    action: "Used AI to analyze the existing workflow and pinpoint exactly where it was losing people. Designed a new sequence personalized by real in-product behavior — content added, first social account connected, and other milestones — so each person gets emails relevant to their actual progress.",
    result: "Open rate: 47.6% → 56.4%. Click rate: 2.7% → 4.6%.",
  },
  {
    title: "Turning LeadDyno's Blog Into an Affiliate Lead Engine",
    challenge: "LeadDyno's merchants needed a dedicated channel to find good affiliates to promote their products. There wasn't one, and potential affiliates were getting lost.",
    action: "Identified LeadDyno's highest-traffic blog post as the right intercept point and built a lead-gen widget there to capture potential affiliates on behalf of merchant users.",
    result: "23 submissions from ~1,897 blog visitors in the first month, positioning this as an early building block toward a planned affiliate marketplace inside LeadDyno.",
  },
  {
    title: "Brand System for a Historic Business District — Victoria, BC",
    challenge: "A downtown business district wanted a shared brand identity to unite independent businesses. The challenge: those businesses were genuinely diverse with different priorities, and any identity had to represent all of them fairly while capturing something true about the district's heritage.",
    action: "Worked directly with business owners to get real buy-in. Designed a complete brand system with full guidelines document: logo (line-art rendering of district landmarks), construction rules, light/dark and monochrome versions, color palette, and typography rules. Extended the system into real applications: bus shelter ads and window stickers for participating businesses.",
    result: "A complete, documented brand system now in active use across the district's physical touchpoints — built through consensus rather than imposed on stakeholders.",
  },
  {
    title: "Branding & Website for a Therapy Practice — Victoria, BC",
    challenge: "An anxiety and trauma-focused therapy practice needed a complete brand and web presence that felt warm and trustworthy rather than clinical, and it had to convert visitors into booked consultations.",
    action: "Developed the practice's brand identity with a soft, approachable visual style. Designed and built the full website with homepage built around the founder's story, dedicated pages for each therapy approach, practitioner profiles, and location pages with maps. Set up automation and integrations across key channels including contact forms and Jane practice-management booking.",
    result: "Generating prospective client inquiries within the first two months of launch.",
  },
];

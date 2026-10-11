import { Bicycle, Helmet, Knight } from "@assets/svg";

export const cv = {
  contact: { email: "d.szafulski@yahoo.com", phone: "(+48) 518 555 304" },
  education: [
    {
      degree: "Degree: Engineer (Eng. Bachelor of Engineering)",
      faculty:
        "Faculty of Electrical Engineering, Automatic Control and Computer Science",
      school: "Kielce University of Technology",
      specialization: "Specialization: Computer Science, Information Systems",
    },
  ],
  experience: [
    {
      company: "HappyTeam.io",
      position: "Senior Frontend Developer",
      projects: [
        {
          description:
            "Click & Drop / Send an Item ecommerce platform for Royal Mail Group (StoreFeeder)",
          link: "https://business.parcel.royalmail.com",
        },
        {
          description: "Real-time whiteboard web client for IBV",
          link: "https://web.collaboard.app",
        },
      ],
      timeframe: "Current position, started November 2019",
    },
    {
      company: "Euvic",
      position: "Frontend Developer",
      projects: [
        {
          description:
            "Energy management platform for Origami Energy, with custom charts, dashboards and interactive data grids.",
          link: null,
        },
      ],
      timeframe: "2 years, started April 2017",
    },
    {
      company: "Transition Technologies (PSC)",
      position: `Junior Developer`,
      projects: [
        {
          description:
            "Generic IoT platform, with Smart Office as a sample implementation.",
          link: null,
        },
        {
          description:
            "PTC Consultant, PLM Windchill customization and integration for Embraer, Vestas, Perkins, Scania, and others",
          link: null,
        },
      ],
      timeframe: "2 years, started March 2015",
    },
  ],
  heading: { fullName: "Damian Szafuski", position: "JavaScript Developer" },
  interests: [
    { icon: Bicycle, name: "Cycling & fitness" },
    { icon: Helmet, name: "Motorcycling" },
    { icon: Knight, name: "Chess" },
  ],
  profile: `Born on May 29th, 1991, in Kielce, Poland. Frontend JavaScript engineer with over 10 years of professional experience.
    Passionate about code quality, consistency, scalability, and performance. Fluent in spoken and written English.`,
  skills: [
    { level: 100, name: "JavaScript (ES9)" },
    { level: 100, name: "ReactJS (19)" },
    { level: 100, name: "TypeScript 5" },
    { level: 100, name: "CSS 3 / SASS" },
    { level: 100, name: "HTML 5 / DOM" },
    { level: 80, name: "RWD" },
    { level: 80, name: "Rest / JSON" },
    { level: 80, name: "Debugging" },
    { level: 80, name: "ESLint" },
    { level: 70, name: "Webpack 5" },
    { level: 70, name: "ARIA (WCAG 2)" },
    { level: 70, name: "jest" },
    { level: 70, name: "Claude AI" },
    { level: 60, name: "jwt" },
    { level: 40, name: "Storybook" },
    { level: 40, name: "Node / express" },
    { level: 40, name: "Prisma ORM" },
  ],
  skillsThresholds: [
    { level: 90, name: "Expert" },
    { level: 80, name: "Advanced" },
    { level: 70, name: "Comprehensive" },
    { level: 60, name: "Comfortable" },
    { level: 30, name: "Beginner" },
  ],
};

import { NavItem, Service, SocialLink } from "../types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SERVICES: Service[] = [
  {
    id: "exploration",
    title: "Exploration",
    description:
      "Using cutting-edge technology to locate and analyze potential oil and gas reserves with minimal environmental impact.",
    icon: "Search",
  },
  {
    id: "drilling",
    title: "Drilling Operations",
    description:
      "Precision drilling services with advanced equipment and experienced personnel for optimal resource extraction.",
    icon: "Drill",
  },
  {
    id: "refining",
    title: "Refining & Processing",
    description:
      "Converting crude oil into valuable products through state-of-the-art refining processes and quality control.",
    icon: "Factory",
  },
  {
    id: "transport",
    title: "Transport & Distribution",
    description:
      "Safe and efficient transport of petroleum products through our extensive pipeline network and fleet.",
    icon: "Truck",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "Twitter",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "Facebook",
  },
];

export const COMPANY = {
  name: "Petrox",
  tagline: "Powering Tomorrow's Energy Needs",
  description:
    "With over 25 years of industry experience, Petrox has established itself as a leader in the oil and gas sector. We combine innovative technology with sustainable practices to deliver reliable energy solutions while minimizing environmental impact.",
  mission:
    "Our mission is to discover, develop, and deliver energy resources that power economic growth and improve quality of life, while maintaining the highest standards of safety and environmental responsibility.",
  values: [
    "Safety First",
    "Environmental Stewardship",
    "Innovation",
    "Integrity",
    "Excellence",
  ],
  address: "123 Energy Plaza, Houston, TX 77002",
  phone: "+1 (713) 555-0123",
  email: "info@petrox.com",
};
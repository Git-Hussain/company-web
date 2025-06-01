import React from "react";
import styles from "./WebDev.module.css"; // Create this CSS module file
import WebPic from "../assets/WebDev.png"
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaSearch,
  FaAppStoreIos,
  FaPlug,
  FaRedo,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";

const services = [
  {
  id: 1,
  icon: <FaLaptopCode size={36} />,
  title: "Custom Website Development",
  description:
    "Tailored websites built from scratch to perfectly match your business needs, with unique design and functionality.",
  explanation: `
Frontend Frameworks:
- React: Component-based JavaScript library for building interactive user interfaces with virtual DOM for high performance.
- Angular: TypeScript-based framework by Google offering two-way data binding and modular architecture for large apps.
- Vue.js: Progressive framework focused on ease of use and integration with reactive data binding.

Backend Frameworks:
- Node.js + Express: JavaScript runtime with minimalistic web framework for building fast, scalable APIs.
- Django: Python framework with built-in ORM, authentication, and admin interface for rapid development.
- Ruby on Rails: Convention-over-configuration Ruby framework for fast web app development.
- Laravel: Elegant PHP framework offering routing, ORM, and built-in security.

Styling Frameworks:
- Tailwind CSS: Utility-first CSS framework enabling rapid UI building with highly customizable classes.
- Bootstrap: Popular CSS framework with responsive grid system and prebuilt components.
- Material-UI: React component library following Google’s Material Design.
- Sass/SCSS: CSS preprocessor adding variables, nesting, and functions for maintainable styles.
 ` 
}
,
  {
    id: 2,
    icon: <FaMobileAlt size={36} />,
    title: "Responsive & Mobile-Friendly Design",
    description:
      "Websites that look stunning and work flawlessly on all devices — phones, tablets, and desktops.",
  },
  {
    id: 3,
    icon: <FaShoppingCart size={36} />,
    title: "E-commerce Development",
    description:
      "Full-featured online stores with secure payment gateways, product management, and seamless shopping experiences.",
  },
  {
    id: 4,
    icon: <FaCogs size={36} />,
    title: "Content Management System (CMS)",
    description:
      "Easy-to-use CMS solutions like WordPress or Drupal so you can manage your content effortlessly.",
  },
  {
    id: 5,
    icon: <FaShieldAlt size={36} />,
    title: "Website Maintenance & Support",
    description:
      "Ongoing updates, backups, security patches, and technical support to keep your website running smoothly.",
  },
  {
    id: 6,
    icon: <FaRocket size={36} />,
    title: "Performance Optimization",
    description:
      "Speed up your website to improve user experience and SEO ranking by optimizing code, images, and servers.",
  },
  {
    id: 7,
    icon: <FaSearch size={36} />,
    title: "SEO-Friendly Websites",
    description:
      "Built with best SEO practices to help your business rank higher on search engines and attract more visitors.",
  },
  {
    id: 8,
    icon: <FaAppStoreIos size={36} />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Modern web apps that behave like native apps — offline support, push notifications, and fast loading.",
  },
  {
    id: 9,
    icon: <FaPlug size={36} />,
    title: "API Integration & Development",
    description:
      "Connect your website with third-party tools and services for enhanced functionality.",
  },
  {
    id: 10,
    icon: <FaRedo size={36} />,
    title: "Website Redesign & Modernization",
    description:
      "Upgrade your outdated website with modern designs, improved UX/UI, and latest web technologies.",
  },
  {
    id: 11,
    icon: <FaBullhorn size={36} />,
    title: "Landing Page Development",
    description:
      "Highly focused landing pages designed to boost conversions and support your marketing campaigns.",
  },
  {
    id: 12,
    icon: <FaTools size={36} />,
    title: "Custom Web Application Development",
    description:
      "Robust web applications built specifically for your business workflows and user needs.",
  },
];

export default function WebDev() {
  return (
   <div 
  className="min-h-screen py-16 px-6 sm:px-12 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${WebPic})` }}
>
      <h2 className={`text-4xl font-extrabold text-center mb-12 mt-10 ${styles.headerAnimation}`}>
        Our Web Development Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className={`bg-white rounded-xl p-8 cursor-pointer flex flex-col items-start ${styles.serviceCard}`}
          >
            <div className={`text-indigo-600 mb-4 ${styles.iconHover}`}>{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className={`text-gray-600 text-base ${styles.des}`}>{description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
import React from "react";
import {
  FaMobileAlt,
  FaAndroid,
  FaCloud,
  FaLock,
  FaRocket,
  FaSyncAlt,
  FaCogs,
  FaBug,
  FaUsers,
  FaCodeBranch,
  FaHeadset,
  FaToolbox,
} from "react-icons/fa";

const androidServices = [
  {
    id: 1,
    icon: <FaMobileAlt size={36} />,
    title: "Custom Android App Development",
    description:
      "Building tailor-made Android applications that perfectly fit your business requirements and user expectations.",
  },
  {
    id: 2,
    icon: <FaAndroid size={36} />,
    title: "Native Android Apps",
    description:
      "Developing high-performance native apps optimized for Android devices using Kotlin and Java.",
  },
  {
    id: 3,
    icon: <FaCloud size={36} />,
    title: "Cloud-Connected Apps",
    description:
      "Creating apps integrated with cloud services for seamless data sync and scalability.",
  },
  {
    id: 4,
    icon: <FaLock size={36} />,
    title: "App Security & Compliance",
    description:
      "Implementing robust security practices to protect user data and comply with privacy standards.",
  },
  {
    id: 5,
    icon: <FaRocket size={36} />,
    title: "Performance Optimization",
    description:
      "Optimizing app performance for fast load times, smooth animations, and efficient battery usage.",
  },
  {
    id: 6,
    icon: <FaSyncAlt size={36} />,
    title: "API Integration",
    description:
      "Seamlessly integrating with third-party APIs for payment, social media, analytics, and more.",
  },
  {
    id: 7,
    icon: <FaCogs size={36} />,
    title: "App Maintenance & Support",
    description:
      "Providing ongoing app updates, bug fixes, and technical support to ensure long-term success.",
  },
  {
    id: 8,
    icon: <FaBug size={36} />,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing for functionality, performance, and security across Android devices.",
  },
  {
    id: 9,
    icon: <FaUsers size={36} />,
    title: "User Experience Design",
    description:
      "Designing intuitive and engaging user interfaces that boost user retention and satisfaction.",
  },
  {
    id: 10,
    icon: <FaCodeBranch size={36} />,
    title: "App Migration & Modernization",
    description:
      "Upgrading legacy Android apps to modern standards and technologies.",
  },
  {
    id: 11,
    icon: <FaHeadset size={36} />,
    title: "Consulting & Strategy",
    description:
      "Offering expert advice on app strategy, monetization, and launch planning.",
  },
  {
    id: 12,
    icon: <FaToolbox size={36} />,
    title: "Cross-Platform Development",
    description:
      "Building apps using frameworks like React Native for both Android and iOS platforms.",
  },
];

export default function AndroidDev() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 py-16 px-6 sm:px-12">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-12">
        Our Android Development Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {androidServices.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-start"
          >
            <div className="text-green-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

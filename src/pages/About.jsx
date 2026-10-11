import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@/components/ui/Badge";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";

export default function About() {
  const skillCategories = [
    {
      category: "Mobile Development",
      items: ["React Native", "iOS", "Android", "Cross-Platform Development", "Offline-First Architecture", "Mobile Performance Optimization", "Local-First Applications"],
    },
    {
      category: "Offline Data & Synchronization",
      items: ["RxDB", "SQLite", "Local Database Persistence", "Bidirectional Sync", "Data Replication", "Reconnect Recovery", "Sync Recovery", "Conflict-Aware Workflows"],
    },
    {
      category: "Web Development",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "Responsive Web Design", "SEO", "File-Based Routing"],
    },
    {
      category: "State Management",
      items: ["Zustand", "Context API", "Redux Patterns"],
    },
    {
      category: "API & Integration",
      items: ["RESTful APIs", "Axios", "Async Data Processing", "Error Recovery", "Authentication Flows", "Data Synchronization"],
    },
    {
      category: "Development Tools",
      items: ["Git", "Figma", "Jira", "ClickUp", "Agile/Scrum", "ESLint", "Prettier"],
    },
  ];

  return (
    <section
      className="min-h-screen transition-colors duration-300 relative bg-white dark:bg-[#181818]"
      style={{ padding: '24px 20px 40px' }}
    >
      <div className="mx-auto w-full flex flex-col gap-6" style={{ maxWidth: 1100 }}>

        {/* Back navigation */}
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#7aa71c] dark:hover:text-[#b5f23d] transition-colors py-1 px-3 rounded-full bg-gray-100 dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a]"
          >
            <FaArrowLeft size={12} /> Back to Overview
          </NavLink>

          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Ziya Afridi &bull; Profile &amp; Experience
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* About Me Section - Spans 2 columns */}
          <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10 transition-shadow lg:col-span-2 flex flex-col justify-between group">
            <div className="mb-6 flex justify-between items-center">
              <Badge>About Me</Badge>
              <span className="font-semibold px-3 py-1 bg-[#b5f23d]/20 text-[#688f1d] dark:bg-[#b5f23d] dark:text-black rounded-full text-xs md:text-sm">
                React Native &amp; React.js Developer
              </span>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight mb-4">
                Hey, I'm Ziya Afridi
              </h1>
              <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                React Native and React.js Developer with 3+ years of experience building cross-platform mobile and web applications. Specialized in offline-first ERP systems, local database architecture, bidirectional data synchronization, and reliable online and offline workflows using RxDB, SQLite, REST APIs, Zustand, and Context API. Experienced in mobile performance optimization, reusable component architecture, API integration, and production delivery for iOS and Android.
              </p>

              {/* Quick Contact & Details Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-[#3a3a3a]">
                <a
                  href="mailto:ziyaafridi880@gmail.com"
                  className="flex items-center gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-[#688f1d] dark:hover:text-[#b5f23d] transition-colors"
                >
                  <FaEnvelope className="text-[#688f1d] dark:text-[#b5f23d]" />
                  <span>ziyaafridi880@gmail.com</span>
                </a>
                <a
                  href="tel:+919770936571"
                  className="flex items-center gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-[#688f1d] dark:hover:text-[#b5f23d] transition-colors"
                >
                  <FaPhoneAlt className="text-[#688f1d] dark:text-[#b5f23d]" />
                  <span>(+91) 9770936571</span>
                </a>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-[#688f1d] dark:text-[#b5f23d]" />
                  <span>Bhopal, M.P. 462023</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/ziya-afridi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-[#688f1d] dark:hover:text-[#b5f23d] transition-colors"
                >
                  <FaLinkedinIn className="text-[#688f1d] dark:text-[#b5f23d]" />
                  <span>linkedin.com/in/ziya-afridi</span>
                </a>
              </div>
            </div>
          </div>

          {/* Education & Certifications Section - 1 column */}
          <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10 transition-shadow flex flex-col justify-start group">
            <div className="mb-6">
              <Badge>Education &amp; Certs</Badge>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <h5 className="font-bold text-xl md:text-xl text-gray-900 dark:text-white tracking-tight">
                  BCA
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">2024</span>
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                Bachelor of Computer Application
              </p>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-6">
                Makhanlal Chaturvedi National University
              </p>

              <div className="flex justify-between items-end mb-2 pt-4 border-t border-gray-200 dark:border-[#3a3a3a]">
                <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                  Certification
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">Coursera</span>
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                Meta Frontend Development Specialization
              </p>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Authorized by Meta
              </p>
            </div>
          </div>

          {/* Skills Section - 1 column */}
          <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10 transition-shadow flex flex-col justify-start group">
            <div className="mb-6">
              <Badge>Skills</Badge>
            </div>
            <div className="flex flex-col gap-4">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className={idx > 0 ? "pt-3 border-t border-gray-200 dark:border-[#3a3a3a]" : ""}>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    {cat.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] px-2.5 py-1 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section - Spans 2 columns */}
          <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10 transition-shadow lg:col-span-2 flex flex-col justify-between group">
            <div className="mb-6">
              <Badge>Professional Experience</Badge>
            </div>

            <div className="flex flex-col gap-8 relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-[#3a3a3a]"></div>

              {/* Job 1 */}
              <div className="relative md:pl-10">
                <div className="hidden md:flex absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#b5f23d]/20 border-4 border-[#f9fafb] dark:border-[#242424] items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#b5f23d]"></div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                  <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                    React Native Developer <span className="text-[#688f1d] dark:text-[#b5f23d] text-base">— Wakanda Book - ERP System</span>
                  </h5>
                  <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">July 2025 - Present</span>
                </div>
                <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1.5">
                  <li>Engineered a cross-platform React Native ERP application supporting 2 operating modes - online and offline - across iOS and Android for uninterrupted field and business workflows.</li>
                  <li>Designed an offline-first data layer using 2 local database technologies, RxDB and SQLite, enabling users to create, read, and update ERP data without network connectivity.</li>
                  <li>Implemented bidirectional data synchronization and replication between local and remote sources, with automatic recovery when connectivity is restored.</li>
                  <li>Integrated REST APIs with local persistence and application state to keep ERP data consistent across online and offline sessions.</li>
                  <li>Developed reusable React Native components from Figma specifications, reducing development time for new features by 20%.</li>
                  <li>Optimized rendering, state updates, local database queries, and asynchronous operations, contributing to 99% crash-free sessions across iOS and Android.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative md:pl-10">
                <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-300 dark:bg-[#3a3a3a] border-4 border-[#f9fafb] dark:border-[#242424]"></div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                  <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                    React and React Native Developer <span className="text-gray-500 dark:text-gray-400 text-base">— BPD Studio, Bhopal</span>
                  </h5>
                  <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">February 2024 - June 2025</span>
                </div>
                <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1.5">
                  <li>Optimized mobile application performance across 2 mobile platforms - iOS and Android - through efficient asset management, component caching, and render optimization.</li>
                  <li>Developed responsive React.js interfaces from product and Figma requirements, maintaining 100% UI consistency across devices.</li>
                  <li>Engineered REST API integrations and asynchronous application flows across 3 critical states: loading, error recovery, and synchronized application state.</li>
                  <li>Executed Agile/Scrum development across 5 recurring delivery activities: sprint planning, daily standups, code reviews, debugging, and iterative releases.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="relative md:pl-10">
                <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-300 dark:bg-[#3a3a3a] border-4 border-[#f9fafb] dark:border-[#242424]"></div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                  <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                    React and React Native Developer <span className="text-gray-500 dark:text-gray-400 text-base">— Neural Bridge AI, Bhopal</span>
                  </h5>
                  <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">November 2022 - December 2023</span>
                </div>
                <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1.5">
                  <li>Engineered scalable React.js and React Native modules across 2 business domains: HR and delivery management.</li>
                  <li>Implemented 3 production capabilities - real-time status updates, order tracking workflows, and REST API integrations with Axios - for reliable client-server communication.</li>
                  <li>Designed reusable user interface components for delivery personnel across web and mobile workflows, improving maintainability, usability, and development efficiency.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Badge from "@/components/ui/Badge";
import React from "react";

export default function About() {
  return (
    <section
      className="min-h-screen transition-colors duration-300 relative bg-white dark:bg-[#181818]"
      style={{ padding: '24px 20px 40px' }}
    >
      <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ maxWidth: 1100 }}>

        {/* About Me Section - Spans 2 columns */}
        <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10   transition-shadow lg:col-span-2 flex flex-col justify-between group">
          <div className="mb-6">
            <Badge>About Me</Badge>
          </div>
          <div>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <h5 className="font-bold text-xl md:text-xl text-gray-900 dark:text-white tracking-tight">
                Hey I'm Ziya Afridi
              </h5>
              <span className="font-semibold px-3 py-1 bg-[#b5f23d]/20 text-[#688f1d] dark:bg-[#b5f23d] dark:text-black rounded-full text-xs md:text-sm">
                Frontend Developer
              </span>
            </div>
            <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-300 leading-relaxed">
              Performance-driven React Native Developer and Frontend Engineer with 2.6 years of experience specializing in cross-platform mobile development and scalable web architectures. Proven track record of optimizing app performance, managing complex states with Zustand/Context API, and delivering seamless UI/UX using Figma translations. Expert in Agile workflows and REST API orchestration to drive user engagement.
            </p>
          </div>
        </div>

        {/* Education Section - 1 column */}
        <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10   transition-shadow flex flex-col justify-start group">
          <div className="mb-6">
            <Badge>Education</Badge>
          </div>
          <div>
            <div className="flex justify-between items-end mb-2">
              <h5 className="font-bold text-xl md:text-xl text-gray-900 dark:text-white tracking-tight">
                BCA
              </h5>
              <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">2024</span>
            </div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              Bachelor of Computer Application
            </p>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-6">
              Makhanlal Chaturvedi National University
            </p>

            <div className="flex justify-between items-end mb-2 pt-2 border-t border-gray-200 dark:border-[#3a3a3a]">
              <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                Specialization
              </h5>
            </div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              Meta Frontend Development
            </p>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Coursera
            </p>
          </div>
        </div>

        {/* Skills Section - 1 column */}
        <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10   transition-shadow flex flex-col justify-start group">
          <div className="mb-6">
            <Badge>Skills</Badge>
          </div>
          <div>
            <div className="flex justify-between items-end mb-4">
              <h5 className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">Technical</h5>
              <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">Present</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'React Native CLI', 'Expo', 'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'RxDB', 'SQLite', 'WebSockets', 'Firebase Auth', 'OAuth', 'Chat Systems', 'Zustand', 'Context API', 'Redux', 'Offline-First', 'REST APIs', 'Axios', 'Git'].map(skill => (
                <span key={skill} className="text-xs font-semibold md:text-sm bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section - Spans 2 columns */}
        <div className="bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] rounded-3xl p-8 lg:p-10   transition-shadow lg:col-span-2 flex flex-col justify-between group">
          <div className="mb-6">
            <Badge>Experience</Badge>
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
                  React Native Developer <span className="text-[#b5f23d] text-base">— Wakanda Book</span>
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">July 2025 - Present</span>
              </div>
              <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1">
                <li>Architected high-performance mobile features, ensuring 99% crash-free sessions across iOS and Android.</li>
                <li>Engineered robust Offline-First architecture using local storage and data sync patterns.</li>
                <li>Streamlined UI components from Figma, reducing development time for new features by 20%.</li>
                <li>Integrated seamless REST API data flows with Axios for real-time interactions.</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="relative md:pl-10">
              <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-300 dark:bg-[#3a3a3a] border-4 border-[#f9fafb] dark:border-[#242424]"></div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                  React & RN Developer <span className="text-gray-500 text-base">— BPD Studio</span>
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">Feb 2024 - June 2025</span>
              </div>
              <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1">
                <li>Optimized mobile app load times by 30% through asset management and memoization.</li>
                <li>Developed responsive web interfaces using React.js, maintaining 100% UI consistency.</li>
                <li>Managed complex asynchronous data flow and states using Context API and Zustand.</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="relative md:pl-10">
              <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-300 dark:bg-[#3a3a3a] border-4 border-[#f9fafb] dark:border-[#242424]"></div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                  React & RN Developer <span className="text-gray-500 text-base">— Neural Bridge AI</span>
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">Nov 2022 - Dec 2023</span>
              </div>
              <ul className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 space-y-1">
                <li>Built core modules for HR and delivery platforms, supporting real-time status updates.</li>
                <li>Implemented secure backend API integrations using Axios across mobile and web.</li>
                <li>Collaborated within Agile teams to translate business requirements into high-integrity code.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

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
              A dedicated frontend developer with 2 years of hands-on experience in HTML, CSS, JavaScript, React.js, and React Native. Skilled in UI/UX design, enabling the creation of intuitive and visually appealing interfaces. Proficient in WordPress development, successfully completing multiple live projects focused on functionality and user experience. Also has basic knowledge of Java, with an interest in further developing backend skills.
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
              <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">2021 - 2024</span>
            </div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              Bachelor's of Computer Applications
            </p>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal, Madhya Pradesh, India
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
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'UI/UX Design', 'WordPress', 'JAVA', 'Git', 'RESTful APIs', 'Zustand', 'Context API', 'SEO'].map(skill => (
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

            <div className="relative md:pl-10">
              <div className="hidden md:flex absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#b5f23d]/20 border-4 border-[#f9fafb] dark:border-[#242424] items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#b5f23d]"></div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                  Internship
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">2024 - Current</span>
              </div>
              <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed">
                During my 6-month internship, I worked on building responsive web applications using React.js and mobile apps with React Native. I focused on creating intuitive and user-friendly interfaces that improved user engagement. I also integrated RESTful APIs to ensure smooth and efficient data flow. I managed application state using tools like Context API and Zustand, making the apps more organized and scalable. To improve performance, I implemented features like code splitting and lazy loading.
              </p>
            </div>

            <div className="relative md:pl-10">
              <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-300 dark:bg-[#3a3a3a] border-4 border-[#f9fafb] dark:border-[#242424]"></div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h5 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
                  WordPress Developer
                </h5>
                <span className="text-xs font-semibold text-[#688f1d] dark:text-black bg-[#b5f23d]/20 dark:bg-[#b5f23d] px-2 py-1 rounded">2022 - 2023</span>
              </div>
              <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed">
                During this job, I developed and maintained responsive WordPress websites using theme builders, enhancing user engagement and ensuring seamless user experiences. I managed the Content Management System (CMS) to control and organize website content effectively and created dynamic websites that catered to diverse client needs. Collaborating with the design team, I implemented intuitive UI/UX designs to produce visually appealing and user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

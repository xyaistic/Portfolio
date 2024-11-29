import React from "react";

export default function About() {
  return (
    <section className="mx-auto max-w-screen-xl flex flex-col">
      {/* About Me Section */}
      <div className="sticky top-24 py-10 px-5 sm:px-6 md:px-5 bg-white z-10 flex flex-col md:flex-row justify-between w-full">
        <div className="w-full md:w-1/2 py-0 md:py-10 text-left">
          <h3 className="text-3xl uppercase md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            About me
          </h3>
        </div>
        <div className="border-b-2 w-full md:w-4/6 py-10">
        <div className="flex justify-between mb-5 items-center">
            <h5 className="font-semibold text-lg md:text-2xl text-orange-500 inline">
              Hey I'm Ziya Afridi
            </h5>
            <h5 className="font-normal text-xs md:text-sm text-center md:text-right inline">
              Frontend - developer
            </h5>
          </div>
          <p className="text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            A dedicated frontend developer with 2 years of hands-on experience in HTML, CSS, JavaScript, React.js, and React Native. Skilled in UI/UX design, enabling the creation of intuitive and visually appealing interfaces. Proficient in WordPress development, successfully completing multiple live projects focused on functionality and user experience. Also has basic knowledge of Java, with an interest in further developing backend skills.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="sticky top-24 py-10 px-5 sm:px-6 md:px-5 bg-white z-10 flex flex-col md:flex-row justify-between w-full">
      <div className="w-full md:w-1/2 py-0 md:py-10 text-left">
          <h3 className="text-3xl uppercase md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Skills
          </h3>
        </div>
        <div className="border-b-2 w-full md:w-4/6 py-10">
        <div className="flex justify-between mb-5 items-center">
            <h5 className="font-semibold text-lg md:text-2xl text-orange-500">
              Technical Skills
            </h5>
            <h5 className="font-normal text-xs md:text-sm text-center md:text-right">
              Till now
            </h5>
          </div>
          <p className="text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            HTML, CSS, JavaScript, React.js, React Native, UI/UX Design, WordPress Development, JAVA, Git and Version Control, RESTful APIs, Zustand, Context API, SEO Optimization.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="sticky top-24 py-10 px-5 sm:px-6 md:px-5 bg-white z-10 flex flex-col md:flex-row justify-between w-full">      <div className="w-full md:w-1/2 py-0 md:py-10 text-left">
          <h3 className="text-3xl md:text-4xl lg:text-6xl uppercase font-bold text-gray-900 dark:text-white">
            Education
          </h3>
        </div>
        <div className="border-b-2 w-full md:w-4/6 py-10">
        <div className="flex justify-between mb-5 items-center">
            <h5 className="font-semibold text-lg md:text-2xl text-orange-500">
              Bachelor’s of Computer Applications
            </h5>
            <h5 className="font-normal text-xs md:text-sm text-center md:text-right">
              2021 - 2024
            </h5>
          </div>
          <p className="text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal, Madhya Pradesh, India
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="sticky top-24 py-10 px-5 sm:px-6 md:px-5 bg-white z-10 flex flex-col md:flex-row justify-between w-full">
      <div className="w-full md:w-1/2 py-0 md:py-10 text-left">
          <h3 className="sticky top-28 text-3xl md:text-4xl lg:text-6xl uppercase font-bold text-gray-900 dark:text-white">
            Experience
          </h3>
        </div>
        <div className="w-full md:w-4/6 py-10">
          <div className="mb-24 sticky top-28 bg-white">
          <div className="flex justify-between mb-5 items-center">
              <h5 className="font-semibold text-lg md:text-2xl text-orange-500">
                WordPress Developer
              </h5>
              <h5 className="font-normal text-xs md:text-sm text-center md:text-right">
                2022-2023
              </h5>
            </div>
            <p className="text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
              During this job, I developed and maintained responsive WordPress websites using theme builders, enhancing user engagement and ensuring seamless user experiences. I managed the Content Management System (CMS) to control and organize website content effectively and created dynamic websites that catered to diverse client needs. Additionally, I worked with purchased themes, fully customizing them according to client requirements to deliver tailored solutions. Collaborating with the design team, I implemented intuitive UI/UX designs to produce visually appealing and user-friendly interfaces. I optimized website performance through SEO, ensured cross-browser compatibility, and conducted thorough testing and debugging to guarantee reliable website performance. Throughout the job, I stayed updated with the latest industry trends to continuously improve project outcomes.
            </p>
          </div>
          <div className="sticky top-28 bg-white">
          <div className="flex justify-between mb-5 items-center">
              <h5 className="font-semibold text-lg md:text-2xl text-orange-500">
                Internship
              </h5>
              <h5 className="font-normal text-xs md:text-sm text-center md:text-right">
                2024 - Current
              </h5>
            </div>
            <p className="text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
              During my 6-month internship, I worked on building responsive web applications using React.js and mobile apps with React Native. I focused on creating intuitive and user-friendly interfaces that improved user engagement. I also integrated RESTful APIs to ensure smooth and efficient data flow. I managed application state using tools like Context API and Zustand, making the apps more organized and scalable. To improve performance, I implemented features like code splitting and lazy loading, which helped the apps load faster. Additionally, I handled secure JWT authentication and created role-based access controls for one of the projects, ensuring only authorized users could access certain features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

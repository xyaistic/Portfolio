import React from "react";

export default function About() {
  const x=10
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="grid grid-cols-5 gap-4">
        {/* About Me Section */}
        <div className="col-span-2 row-span-1  py-10 sticky top-24 ">
          <h3 className="text-7xl font-bold text-gray-900 dark:text-white">About me</h3>
        </div>
        <div className="col-span-3 row-span-1 border-b-2 sticky top-24 bg-white p-10">
          <div className="flex justify-between mb-5">
            <h5 className="font-semibold text-2xl text-orange-500">Hey I'm Ziya Afridi</h5>
            <h5 className="font-normal text-sm">Frontend - developer</h5>
          </div>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            A dedicated frontend developer with 2 years of hands-on experience
            in HTML, CSS, JavaScript, React.js, and React Native. Skilled in
            UI/UX design, enabling the creation of intuitive and visually
            appealing interfaces. Proficient in WordPress development,
            successfully completing multiple live projects focused on
            functionality and user experience.
          </p>
        </div>

        {/* Skills Section */}
        <div className="col-span-2  row-span-1  sticky h-56 top-24 z-10 bg-white py-10">
          <h3 className="text-7xl font-bold text-gray-900 dark:text-white">Skills</h3>
        </div>
        <div className="col-span-3 row-span-1 border-b-2  p-10 sticky top-24 bg-white ">
          <div className="flex justify-between mb-5">
            <h5 className="font-semibold text-2xl text-orange-500">Technical Skills</h5>
            <h5 className="font-normal text-sm">Till now</h5>
          </div>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            HTML, CSS, JavaScript, React.js, React Native, UI/UX Design, WordPress Development, Git and Version Control, RESTful APIs, Zustand, Context API, SEO Optimization.
          </p>
        </div>

        {/* Experience Section */}
        <div className="col-span-2 row-span-1  py-10 sticky top-24 bg-white z-10">
          <h3 className="text-7xl font-bold text-gray-900 dark:text-white">Education</h3>
        </div>
        <div className="col-span-3 row-span-1 border-b-2 p-10 sticky top-24 bg-white">
          <div className="flex justify-between mb-5">
            <h5 className="font-semibold text-2xl text-orange-500">Bachelor’s of Computer Applications</h5>
            <h5 className="font-normal text-sm">2021 - 2024</h5>
          </div>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Makhanlal Chaturvedi National University.
          </p>
        </div>
        

        {/* WordPress Developer Section */}
        <div className="col-span-2 row-span-4  py-10 sticky top-24 bg-white z-10">
          <h3 className="text-7xl font-bold text-gray-900 dark:text-white">Experience</h3>
        </div>

        <div className="col-span-3 border-b-2 row-span-3  p-10 sticky top-24 z-20 bg-white">
        <div className="flex justify-between mb-5">
            <h5 className="font-semibold text-2xl text-orange-500">WordPress Developer</h5>
            <h5 className="font-normal text-sm">2022-2023</h5>
          </div>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            During this job, I developed and maintained responsive WordPress websites using theme builders, enhancing user engagement and ensuring seamless user experiences. I managed the Content Management System (CMS) to control and organize website content effectively and created dynamic websites that catered to diverse client needs. Additionally, I worked with purchased themes, fully customizing them according to client requirements to deliver tailored solutions. Collaborating with the design team, I implemented intuitive UI/UX designs to produce visually appealing and user-friendly interfaces. I optimized website performance through SEO, ensured cross-browser compatibility, and conducted thorough testing and debugging to guarantee reliable website performance. Throughout the job, I stayed updated with the latest industry trends to continuously improve project outcomes.
          </p>
        </div>

        <div className="col-span-3 row-span-3 border-b-2 col-start-3 row-start-4  p-10 z-10 sticky top-24 bg-white">
          
          <div className="flex justify-between mb-5">
            <h5 className="font-semibold text-2xl text-orange-500">Internship</h5>
            <h5 className="font-normal text-sm">2024 - Current</h5>
          </div>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            During my 6-month internship, I developed responsive web applications with React.js and mobile apps with React Native, enhancing user engagement and ensuring seamless experiences. I collaborated with the design team to implement intuitive UI/UX designs and integrated RESTful APIs for efficient data communication. Using Context API, Zustand I managed application state effectively and applied performance optimizations like code splitting and lazy loading. Additionally, I handled version control with Git, participated in code reviews, and worked with cross-functional teams to deliver high-quality features on time. I also conducted testing and debugging to ensure reliable software delivery while staying updated with the latest industry trends.
          </p>
        </div>

        {/* Education Section */}
        
        
      </div>
    </section>
  );
}

import React from 'react';
import pro1 from '../src/assets/project1.jpg'
import pro2 from '../src/assets/pro2.jpg'
import pro3 from '../src/assets/pro3.png'

export default function CaseStudy() {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start border-b border-gray-200 py-5 gap-5">
                <h1 className="text-3xl font-semibold w-full md:w-1/2">Case Study</h1>
                <p className="w-full md:w-1/2">Initially, it was decided between us and the client that the project would be built using React.js. However, since the client needed the website urgently, we mutually decided to design it using a CMS with WordPress to ensure faster delivery.</p>
            </div>

            {/* Design Section */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center py-5 gap-5">
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <h5 className="text-lg text-left max-w-fit font-semibold uppercase border-b-2 pb-2 hover:border-orange-500 text-orange-500">Design</h5> <p>Our design process focuses on creating user-centric, visually appealing, and functional interfaces. We ensure that every element is crafted with precision, aligning with the brand identity while prioritizing user experience. From wireframes to the final layout, we aim to deliver a seamless blend of creativity and usability, making the design both attractive and intuitive for the end-user.</p>

                </div>
                <div className="w-full md:w-1/2 border rounded border-gray-100 flex flex-col justify-end items-center md:items-end gap-2">
                    <img
                        src={pro2}
                        alt="Design"
                        className="w-full rounded-lg shadow-sm"
                    />
                </div>
            </div>


            {/* Responsive Section */}
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-5 gap-5">
                <div className="w-full border rounded md:w-1/2  flex flex-col justify-end items-center md:items-end gap-2">
                    <img
                        src={pro3}
                        alt="Responsive"
                        className="w-full rounded-lg shadow-sm"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <h5 className="text-lg text-left max-w-fit font-semibold uppercase border-b-2 pb-2 hover:border-orange-500 text-orange-500">Responsive</h5>
                    <p>Ensuring responsiveness is a key aspect of our development process. We design and build solutions that adapt seamlessly to various screen sizes and devices, providing a consistent user experience across desktops, tablets, and mobile phones. By leveraging modern frameworks and techniques, we ensure that the layout, navigation, and functionality remain intuitive and efficient, no matter the platform or resolution.</p>
                </div>
            </div>

            {/* Final Touch Section */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center py-5 gap-5">
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <h5 className="text-lg text-left max-w-fit font-semibold uppercase border-b-2 pb-2 hover:border-orange-500 text-orange-500">Final Touch</h5>
                    <p>The final touch is all about refining the details to perfection. After thorough testing and feedback, we polish the design, optimize performance, and ensure every feature works seamlessly. This stage involves addressing the smallest nuances, from smooth animations to pixel-perfect alignments, ensuring the project is not only functional but also aesthetically outstanding. The goal is to deliver a product that exceeds expectations and leaves a lasting impression on users.</p>
                </div>
                <div className="w-full border rounded md:w-1/2 flex flex-col justify-end items-center md:items-end gap-2">
                    <img
                        src={pro1}
                        alt="Final Touch"
                        className="w-full rounded-lg shadow-sm"
                    />
                </div>
            </div>
        </section>
    );
}

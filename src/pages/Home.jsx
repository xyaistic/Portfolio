import React, { useState, useEffect } from 'react';
import profileImg from '../assets/IMG_1700.jpg';
import '../styles/style.css';
import projectImg1 from '../assets/Frame 6 (2).png';
import projectImg2 from '../assets/Frame 6 (3).png';
import projectImg3 from '../assets/Frame 6 (4).png';
import projectImg4 from '../assets/Frame 6 (5).png';
import projectImg5 from '../assets/Frame 6 (6).png';
import pro2 from '../assets/pro2.jpg';
import pro3 from '../assets/pro3.png';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ShinyText from '@/components/ui/ShinyText';
import Badge from '@/components/ui/Badge';


const ArrowIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M18 6H9M18 6V15" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── rotating text ring around avatar ─── */
const RotatingText = ({ darkMode }) => {
  const text = 'AVAILABLE FOR WORK • AVAILABLE FOR WORK • ';
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const chars = text.split('');
  const angleStep = 360 / chars.length;

  return (
    <svg
      className="absolute inset-0 w-full h-full animate-spin-slow"
      viewBox="0 0 180 180"
      style={{ animation: 'spin 12s linear infinite' }}
    >
      <defs>
        <path id="circlePath" d={`M 90,90 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <text fontSize="11.5" fontWeight="600" letterSpacing="2" fill={darkMode ? '#f0f0f0' : '#1a1a1a'}>
        <textPath href="#circlePath">{text}</textPath>
      </text>

    </svg>
  );
};

const projects = [
  { title: 'Ecommerce', subtitle: 'MOBILE APP', img: projectImg1, link: null },
  { title: 'Modest Hijab Store', subtitle: 'MOBILE APP', img: projectImg2, link: null },
  { title: 'Zonestra', subtitle: 'WEBSITE', img: projectImg3, link: 'https://zonestra.com/' },
  { title: 'KBS Worlds', subtitle: 'WEBSITE', img: projectImg4, link: 'https://kbsworld.co.in/' },
  { title: 'Sira Consulting', subtitle: 'WEBSITE', img: projectImg5, link: 'https://siraconsultinginc.com/' },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const [hoveredProject, setHoveredProject] = useState(null);

  const cardBg = darkMode ? '#242424' : '#ffffff';
  const textPrimary = darkMode ? '#f0f0f0' : '#1a1a1a';
  const textSecondary = darkMode ? '#a0a0a0' : '#6b7280';
  const borderColor = darkMode ? '#3a3a3a' : '#e5e7eb';

  return (
    <div
      className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#181818]"
      style={{ padding: '24px 20px 40px' }}
    >
      <div className='flex justify-center items-center my-4'>

        <ShinyText
          text="I'm Ziya Afridi , A Frontend Developer"
          speed={2}
          delay={0}
          color={darkMode ? '#f0f0f0' : '#1a1a1a'}
          shineColor={darkMode ? '#b5f23d' : '#b5f23d'}
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />


      </div>

      {/* ── Bento grid ── */}
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ maxWidth: 1100 }}
      >

        {/* ── 1. About card ── col1 row1 */}
        <div
          className="rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <Badge>About</Badge>
          <p className="text-base leading-relaxed mt-2" style={{ color: textSecondary }}>
            Performance-driven React Native and Frontend Engineer with 2.6+ years of experience specializing in cross-platform mobile development and scalable web architectures.
          </p>
          <NavLink
            to="profile"
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: textPrimary }}
          >
            Read more <ArrowIcon size={16} color={textPrimary} />
          </NavLink>
        </div>

        {/* ── 2. Avatar / Available card ── col2 row1 */}
        <div
          className="rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}`, minHeight: 240 }}
        >
          <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>


            <img
              src={profileImg}
              alt="Ziya Afridi"
              className="relative w-[120px] h-[120px] rounded-full object-cover"
            />
            {/* rotating text ring */}
            <div
              className="absolute inset-0"
              style={{ animation: 'spin 14s linear infinite' }}
            >
              <RotatingText darkMode={darkMode} />
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <Badge>Experience</Badge>
          <div className="flex flex-col gap-3 mt-1">
            {[
              { role: 'React Native Developer', company: 'Wakanda Book', period: 'Jul 2025 – Present' },
              { role: 'React & RN Developer', company: 'BPD Studio', period: 'Feb 2024 – Jun 2025' },
              { role: 'React & RN Developer', company: 'Neural Bridge AI', period: 'Nov 2022 – Dec 2023' },
            ].map((exp, i, arr) => (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: textPrimary }}>{exp.role}</p>
                    <p className="text-xs mt-0.5" style={{ color: textSecondary }}>{exp.company}</p>
                  </div>
                  <span className="text-xs whitespace-nowrap ml-3 mt-0.5" style={{ color: textSecondary }}>
                    {exp.period}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className="mt-3" style={{ height: 1, background: borderColor }} />
                )}
              </div>
            ))}
          </div>
          <NavLink
            to="profile"
            className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity pt-1"
            style={{ color: textPrimary }}
          >
            Full profile <ArrowIcon size={13} color={textPrimary} />
          </NavLink>
        </div>

        {/* ── 4. Projects Showcase ── */}
        <div
          className="rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg md:row-span-2 lg:col-start-1 lg:row-span-2"
          style={{
            background: cardBg,
            border: `1px solid ${borderColor}`,
          }}
        >
          {/* Badge + View all link */}
          <div className="flex items-center justify-between p-4 pb-3">
            <Badge>Projects</Badge>
            <NavLink
              to="casestudy"
              className="flex items-center gap-1 text-xs font-semibold hover:opacity-60 transition-opacity"
              style={{ color: textPrimary }}
            >
              Case Study <ArrowIcon size={12} color={textPrimary} />
            </NavLink>
          </div>

          {/* Preview image — changes on hover */}
          <div className="relative overflow-hidden mx-4 rounded-2xl" style={{ height: 200 }}>
            {projects.map((project, i) => (
              <img
                key={i}
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                style={{
                  opacity: hoveredProject === i ? 1 : i === 0 && hoveredProject === null ? 1 : 0,
                  transform: hoveredProject === i ? 'scale(1.04)' : 'scale(1)',
                }}
              />
            ))}
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)' }}
            />

            <div className="absolute bottom-3 left-3">
              <p className="text-white text-sm font-semibold">
                {hoveredProject !== null ? projects[hoveredProject].title : projects[0].title}
              </p>
              <p className="text-white/70 text-xs">
                {hoveredProject !== null ? projects[hoveredProject].subtitle : projects[0].subtitle}
              </p>
            </div>
          </div>

          {/* Project list */}
          <div className="flex flex-col px-4 pb-4 mt-3 flex-1 overflow-y-auto scrollbar-hide">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link || undefined}
                target={project.link ? '_blank' : undefined}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="flex items-center justify-between py-2.5 group cursor-pointer"
                style={{
                  borderBottom: i < projects.length - 1 ? `1px solid ${borderColor}` : 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  {/* tiny thumbnail */}
                  <div
                    className="rounded-lg overflow-hidden flex-shrink-0"
                    style={{ width: 36, height: 36 }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{ color: hoveredProject === i ? '#b5f23d' : textPrimary }}
                    >
                      {project.title}
                    </p>
                    <p className="text-xs" style={{ color: textSecondary }}>{project.subtitle}</p>
                  </div>
                </div>
                <div
                  className="transition-opacity duration-200"
                  style={{ opacity: project.link ? (hoveredProject === i ? 1 : 0.4) : 0 }}
                >
                  {project.link && <ArrowIcon size={14} color={hoveredProject === i ? '#b5f23d' : textSecondary} />}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── 5. Experience card ── col2 row2 */}
        <div
          className="rounded-3xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <Badge>Skills</Badge>
          <div className="flex flex-wrap gap-2 mt-1">
            {['React Native', 'React.js', 'Next.js', 'Zustand', 'Context API', 'Offline-First', 'REST APIs', 'Redux', 'Axios'].map((skill, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: darkMode ? '#333' : '#f3f4f6',
                  color: textSecondary,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── 6. Services card ── col1 row3 */}
        <div
          className="rounded-3xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <Badge>Services</Badge>
          <ul className="flex flex-col gap-2 mt-1">
            {[
              'Mobile App Development (React Native)',
              'Web Architecture (React.js, Next.js)',
              'Performance Optimization',
              'UI/UX implementation',
            ].map((s, i) => (
              <li key={i} className="flex items-center gap-2 text-sm" style={{ color: textSecondary }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5f23d] flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <NavLink
            to="contact"
            className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity pt-1"
            style={{ color: textPrimary }}
          >
            Let's collaborate <ArrowIcon size={13} color={textPrimary} />
          </NavLink>
        </div>

        {/* ── 7. Case Study card ── col2 row3 */}
        <NavLink
          to="casestudy"
          className="rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <div className="p-4 pb-2">
            <Badge>Case Study</Badge>
          </div>
          <div className="overflow-hidden" style={{ height: 160 }}>
            <img
              src={pro3}
              alt="Mobile project"
              className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 mix-blend -multiply  dark:mix-blend-screen`} />          </div>
          <div className="p-4 pt-3 flex-1 flex flex-col justify-center">
            <p className="font-semibold text-lg leading-tight" style={{ color: textPrimary }}>Explore Case Study</p>
            <p className="text-sm mt-1" style={{ color: textSecondary }}>Behind the scenes of my process</p>
            <div className="mt-3 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              <span className="text-xs font-semibold " style={{ color: textPrimary }}>Read Full Story</span>
              <ArrowIcon size={14} color={textPrimary} />
            </div>
          </div>
        </NavLink>

        {/* ── 8. Current Focus ── col3 row3 */}
        <div
          className="rounded-3xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <div className="flex items-center justify-between relative z-10">
            <Badge>Current Focus</Badge>
          </div>
          <div className="flex flex-col flex-1 items-start  mt-2 relative z-10">

            <p className="font-semibold text-lg" style={{ color: textPrimary }}>Mobile App & AI Integrations</p>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: textSecondary }}>
              Building high-performance, cross-platform mobile applications primarily using React Native. Concurrently diving deep into Artificial Intelligence, exploring ways to integrate smart LLMs, AI agents, and automated workflows into modern mobile and web products.
            </p>
          </div>

          <div
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
            style={{ background: '#b5f23d' }}
          />
        </div>

        {/* ── 9. Contact CTA card ── col1 row4 */}
        <NavLink
          to="contact"
          className="rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
          style={{ background: '#1a1a1a', minHeight: 140 }}
        >
          <p className="text-[#b5f23d] text-xs font-semibold">Have Some Questions?</p>
          <div className="flex items-end justify-between">
            <h2 className="text-white text-2xl font-bold leading-tight">
              Contact<br />Me
            </h2>
            <div
              className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center"
            >
              <ArrowIcon size={16} color="#1a1a1a" />
            </div>
          </div>
        </NavLink>

        {/* ── 10. Social Links ── col2 row4 */}
        <div className="flex gap-4 min-h-[140px] sm:min-h-[180px]">
          <a
            href="https://linkedin.com/in/ziya-afridi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-3xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            style={{ background: '#0A66C2' }}
          >
            <FaLinkedinIn size={56} color="white" />
          </a>
          <a
            href="https://github.com/ziyaafridi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-3xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            style={{ background: '#181717' }}
          >
            <FaGithub size={64} color="white" />
          </a>
        </div>

        {/* ── 11. Dark mode toggle card ── col3 row4 */}
        <div
          className="rounded-3xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg"
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}
        >
          <p className="text-sm font-medium" style={{ color: textSecondary }}>Appearance</p>
          <div
            className="flex items-center gap-1 p-1 rounded-full"
            style={{ background: darkMode ? '#333' : '#f3f4f6' }}
          >
            <button
              onClick={() => setDarkMode(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
              style={{
                background: !darkMode ? '#ffffff' : 'transparent',
                boxShadow: !darkMode ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
              }}
              aria-label="Light mode"
            >
              ☀️
            </button>
            <button
              onClick={() => setDarkMode(true)}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
              style={{
                background: darkMode ? '#4a4a4a' : 'transparent',
                boxShadow: darkMode ? '0 1px 4px rgba(0,0,0,0.25)' : 'none',
              }}
              aria-label="Dark mode"
            >
              🌙
            </button>
          </div>
        </div>

      </div>

      {/* keyframe for spinning ring — injected via style tag */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

'use client';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./Contact";
import ProjectsSection from "./components/ProjectsSection";
import { motion, useReducedMotion } from 'framer-motion';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen text-slate-200 flex flex-col bg-fixed-image">
      <div className='bg-slate-950 bg-opacity-70 min-h-screen flex flex-col'>
      <Header/>
      
      <main className="flex-grow flex flex-col pt-16 md:pt-20">
        {/* HERO SECTION */}
        <section id="home" className="relative">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24 grid gap-8">
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="test-lg uppercase tracking-widest text-slate-200"
            >
              Chloe Nibali — Software Developer
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight "
            >
              Turning Complex Data into
              <br className="hidden sm:block" />
              <span className="sm:whitespace-nowrap"> Simple, <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">Inclusive Solutions</span></span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="max-w-2xl text-lg"
            >
              <span className='font-bold text-xl text-rose-300'>I build tools that solve real-world problems.</span><br/>
              From the security and efficiency your business needs, 
              to the accessible user-experience your customers deserve.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm 
              hover:opacity-60 border 
              focus:outline-none focus:ring-4 focus:ring-amber-400">
                View Projects
              </a>
              <a href="#services" className="inline-flex items-center rounded-xl border border-rose-400 px-5 py-3 font-medium 
              hover:bg-slate-700">
                Work With Me
              </a>
            </motion.div>

            {/* Split Path */}
            <div className="grid md:grid-cols-2 gap-4 pt-4" aria-label="Choose your path">
              {[{
                title: "For Recruiters",
                body: "See my deployed applications featuring multi-portal dynamic UIs, secure auth and RBAC, and cross-platform data handling.",
                href: "#projects",
                cta: "View Portfolio →",
              },{
                title: "For Businesses",
                body: "Need a website that actually serves your customers? I create clean, accessible sites that are mobile friendly and easy for you to maintain.",
                href: "#services",
                cta: "See Services →",
              }].map((card) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group rounded-2xl border border-fuchsia-400 p-6 
                  bg-slate-800/50 shadow-md shadow-rose-900/50
                  hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl text-rose-300 font-semibold mb-2">{card.title}</h2>
                  <p>{card.body}</p>
                  <span className="mt-3 inline-block text-amber-700 group-hover:underline">{card.cta}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10">
            <header className="flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold">Highlighted Projects</h2>
            </header>
            <ProjectsSection/>
          </div>
        </section>

        {/* Skills */}
        <SkillsSection/>

        {/* Services */}
        <section id="services" className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold">Websites for Local Businesses</h2>
              <p className="mt-2">Fast, accessible websites tailored to your needs.</p>
            </div>
            <ul className="grid md:grid-cols-3 gap-6">
              {[
                { tier: "Basic", price: "$$", desc: "Single-page brochure site with your branding, hours, and contact info.", features: ["1 page", "Mobile-friendly", "Contact form", "SEO basics"] },
                { tier: "Standard", price: "$$$", desc: "Multi-page site for services, team, and testimonials.", features: ["Up to 5 pages", "CMS option", "Analytics", "Accessibility checklist"] },
                { tier: "Advanced", price: "Custom", desc: "Booking, blog, or light integrations (e.g., PayPal links).", features: ["Custom pages", "Integrations", "Performance budget", "Training video"] },
              ].map((p, idx) => (
                <motion.li key={p.tier} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.05 }} className="rounded-3xl border border-fuchsia-400 p-6 grid gap-3 bg-slate-800/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between"><h3 className="text-lg font-semibold">{p.tier}</h3><span className="text-sm text-slate-500">{p.price}</span></div>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                  <ul className="text-sm grid gap-1">{p.features.map(f => (<li key={f} className="flex items-center gap-2"><span aria-hidden>•</span><span>{f}</span></li>))}</ul>
                  <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-xl border border-rose-200 px-4 py-2 text-sm font-medium hover:bg-rose-50">Request a free consult</a>
                </motion.li>
              ))}
            </ul>
            
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">About Chloe</h2>
              <p className="mt-3 max-w-3xl">
                I&apos;m a Calgary-based software developer who loves turning complex requirements into friendly, reliable tools.
                Before code I wrenched on Harley-Davidsons, so I&apos;m comfortable collaborating in any shop or team and staying cool under pressure.
                I care a lot about inclusive design and practical security — the details that quietly make experiences better for everyone.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                <li className="rounded-full border border-rose-200 px-3 py-1">Dual US/Canada citizenship</li>
                <li className="rounded-full border border-rose-200 px-3 py-1">Accessibility-first</li>
                <li className="rounded-full border border-rose-200 px-3 py-1">Security-minded</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="/ChloeNibali_Resume.pdf" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium hover:opacity-90">Download Resume</a>
                <a href="#contact" className="inline-flex items-center rounded-xl border border-rose-200 px-5 py-3 font-medium hover:bg-rose-50">Get in touch</a>
              </div>
              <div className="mt-8 rounded-3xl border border-fuchsia-400 p-5 bg-rose-400/50">
                <h3 className="font-semibold">Beyond code</h3>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                  {[
                    { label: "Photography", icon: "📷" },
                    { label: "Woodworking", icon: "🪵" },
                    { label: "Blacksmithing", icon: "⚒️" },
                    { label: "Spicy food & tacos", icon: "🌶️" },
                    { label: "Mountain hikes", icon: "⛰️" },
                  ].map((it) => (
                    <li key={it.label} className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-1 bg-slate-800/70"><span aria-hidden>{it.icon}</span><span>{it.label}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="rounded-3xl border border-fuchsia-400 p-5 bg-slate-800/50 backdrop-blur-sm">
              <h3 className="font-semibold">Quick Facts</h3>
              <dl className="mt-3 grid gap-2 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Location</dt><dd>Calgary, AB (MT)</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Focus</dt><dd>Full-stack, secure auth, accessibility</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Stack</dt><dd>React, Node.js, TypeScript, PostgreSQL</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Live Apps</dt><dd>3</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Let&apos;s talk</h2>
              <p className="mt-2 text-slate-600">Tell me about your project or role. I usually respond within 1-2 business days.</p>
              <ul className="mt-4 text-sm grid gap-1">
                <li><a className="underline underline-offset-4" href="https://github.com/Chloe-SD" target="_blank" rel="noreferrer">GitHub: Chloe-SD</a></li>
                <li><a className="underline underline-offset-4" href="https://www.linkedin.com/in/chloe-nibali/" target="_blank" rel="noreferrer">LinkedIn: Chloe Nibali</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer/>
      </div>
    </div>
  );
}


import Image from "next/image";


import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Users,
  Mail,
  Sparkles,
} from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "AI Integration",
];


const projects = [
  {
    number: "01",
    name: "CVForge",
    category: "AI-POWERED WEB APPLICATION",
    description:
      "An AI-powered CV builder featuring customizable templates, CV management, ATS analysis, AI-assisted tailoring, and PDF export.",
    stack: ["Next.js", "TypeScript", "Firebase"],
    color: "from-lime-400/20 to-emerald-500/5",
    demoUrl: "https://cvforge-phi-blue.vercel.app",
    sourceUrl: "https://github.com/Perzeevel/cvforge",
  },
  {
    number: "02",
    name: "More coming soon",
    category: "NEXT PROJECT",
    description:
      "New ideas are in progress. This space will showcase future products and client projects.",
    stack: ["Web Development", "UI/UX"],
    color: "from-cyan-400/20 to-blue-500/5",
    demoUrl: null,
    sourceUrl: null,
  },
];


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a09] text-white selection:bg-lime-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(163,230,53,0.09),transparent_55%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        
      <a
  href="#"
  aria-label="Shwe Linn Htun — Home"
  className="name-signature group text-sm font-bold uppercase tracking-[0.18em] sm:text-base"
>
  <span className="name-signature-text">Shwe Linn Htun</span>
  <span
    aria-hidden="true"
    className="ml-1 inline-block text-lime-300 transition-transform duration-300 group-hover:translate-x-1"
  >
    
  </span>
</a>


        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#work" className="transition hover:text-lime-300">
            Work
          </a>
          <a href="#about" className="transition hover:text-lime-300">
            About
          </a>
          <a href="#contact" className="transition hover:text-lime-300">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-lime-300 hover:text-lime-300"
        >
          Let's talk <ArrowRight className="ml-1 inline" size={15} />
        </a>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2 text-xs tracking-wide text-lime-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
            AVAILABLE FOR SELECT PROJECTS
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Developer · Builder · Problem Solver
          </p>

          <h1 className="hero-reveal max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
  <span className="hero-line block">Turning ideas into</span>
  <span className="hero-highlight mt-2 block">
    digital reality.
  </span>
</h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern web applications and thoughtful digital
            experiences that help people and businesses move forward.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold text-black transition hover:bg-lime-200"
            >
              Explore my work <ArrowDownRight className="ml-2 inline" size={17} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-4 text-sm transition hover:border-white/40"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-5 text-sm text-zinc-500">
            <span className="h-px w-12 bg-zinc-700" />
            Building with purpose, one project at a time.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#101310]/90 p-6 shadow-2xl shadow-black/40 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Developer profile
                </p>
                <p className="mt-2 text-lg font-semibold">Building what matters.</p>
              </div>
              <Sparkles className="text-lime-300" size={25} />
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-300/10 text-2xl font-bold text-lime-300">
                &lt;/&gt;
              </div>
              <div>
                <p className="font-semibold">Full-Stack Developer</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Web apps · AI-powered products
                </p>
              </div>
            </div>

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Technology toolkit
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-lime-300/15 bg-gradient-to-br from-lime-300/[0.08] to-transparent p-5">
              <p className="text-sm text-zinc-400">Current focus</p>
              <p className="mt-2 font-medium text-lime-200">
                Building useful products. Solving real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-lime-300">
                Selected work
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Projects in focus<span className="text-lime-300">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              A selection of products and experiments focused on useful
              features, clean interfaces, and real-world problems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-lime-300/30"
              >
                
<div className="relative h-64 overflow-hidden bg-[#101310]">
  {project.number === "01" ? (
    <Image
      src="/projects/cvforge/cvforge-landing.png"
      alt="CVForge landing page"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-top transition duration-500 group-hover:scale-105"
    />
  ) : (
    <div
      className={`flex h-full items-center justify-center bg-gradient-to-br ${project.color}`}
    >
      <div className="rounded-2xl border border-white/15 bg-[#0b0d0b]/90 px-8 py-7">
        <p className="text-xs tracking-[0.25em] text-zinc-500">
          PROJECT {project.number}
        </p>
        <p className="mt-3 text-3xl font-bold tracking-tight">
          {project.name}
          <span className="text-lime-300">.</span>
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          Built for real-world use
        </p>
      </div>
    </div>
  )}
  <span className="absolute right-5 top-5 rounded-full bg-black/70 px-3 py-1 text-sm text-white/80">
    {project.number}
  </span>
</div>


                <div className="p-7 sm:p-8">
                  <p className="text-xs font-medium tracking-[0.2em] text-lime-300">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  
{project.number === "01" && (
  <div className="mt-6 grid grid-cols-2 gap-3">
    {[
      {
        src: "/projects/cvforge/cvforge-builder.png",
        alt: "CVForge CV builder",
      },
      {
        src: "/projects/cvforge/cvforge-templates.png",
        alt: "CVForge templates",
      },
      {
        src: "/projects/cvforge/cvforge-ats-ai.png",
        alt: "CVForge ATS analysis",
      },
      {
        src: "/projects/cvforge/cvforge-cv-manager.png",
        alt: "CVForge CV manager",
      },
    ].map((screenshot) => (
      <div
        key={screenshot.src}
        className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#101310]"
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-top transition duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
)}

                  
<div className="mt-6 flex flex-wrap gap-2">
  {project.stack.map((item) => (
    <span
      key={item}
      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
    >
      {item}
    </span>
  ))}
</div>

{(project.demoUrl || project.sourceUrl) && (
  <div className="mt-8 flex flex-wrap gap-3">
    {project.demoUrl && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
      >
        Live Demo <ArrowRight className="ml-2" size={16} />
      </a>
    )}

    {project.sourceUrl && (
      <a
        href={project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-lime-300 hover:text-lime-300"
      >
        <Code2 className="mr-2" size={16} />
        Source Code
      </a>
    )}
  </div>
)}

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-lime-300">
              A little about me
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Curious mind.
              <br />
              Practical builder.
            </h2>
          </div>
          <div className="text-base leading-8 text-zinc-400">
            <p>
              I enjoy turning ideas into working digital products. My
              focus is on building responsive web experiences, useful
              application features, and interfaces that feel intuitive.
            </p>
            <p className="mt-5">
              I believe good development is about more than writing code.
              It means understanding the problem, paying attention to
              the details, and creating something people can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-lime-300/20 bg-gradient-to-br from-lime-300/[0.09] via-[#101310] to-[#080a09] p-8 sm:p-14 lg:p-16">
            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-lime-300">
                Have a project in mind?
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Let's build something
                <span className="text-lime-300"> meaningful.</span>
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                Have an idea, need a website, or want to collaborate?
                I'd love to hear what you're working on.
              </p>
              
<a
  href="mailto:shwelinntun123@gmail.com"
  className="mt-9 inline-flex items-center rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold text-black transition hover:bg-lime-200"
>
  <Mail className="mr-2" size={17} />
  Get in touch <ArrowRight className="ml-2" size={17} />
</a>

            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="text-sm text-zinc-500">
            
          © 2026 Shwe Linn Htun. Built with intention.

          </p>
          <div className="flex items-center gap-5 text-zinc-500">

          <a
                  href="viber://chat?number=%2B959973689080"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-lime-300/50 hover:bg-lime-300/10 hover:shadow-[0_0_24px_rgba(190,242,100,0.12)]"
                >
                  <span className="font-bold text-violet-300">V</span>
                  Chat with me on Viber
                </a>
            
            <a
              href="https://github.com/Perzeevel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-lime-300"
            >
              <Code2 size={19} />
            </a>

            
                


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-lime-300"
            >
              <Users size={19} />
            </a>
            <a
              href="mailto:shwelinntun123@gmail.com"
              aria-label="Email"
              className="transition hover:text-lime-300"
            >


              <Mail size={19} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
export default function Portfolio() {
  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper min-h-screen">
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif font-bold text-xl italic tracking-tight hover:opacity-70 transition-opacity">
            R. R. Pradhan
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-xs font-display font-semibold uppercase tracking-wider text-neutral-700">
            <a href="#about" className="hover:text-ink hover:underline underline-offset-4 transition-all">About</a>
            <a href="#education" className="hover:text-ink hover:underline underline-offset-4 transition-all">Education</a>
            <a href="#projects" className="hover:text-ink hover:underline underline-offset-4 transition-all">Projects</a>
            <a href="#skills" className="hover:text-ink hover:underline underline-offset-4 transition-all">Skills</a>
            <a href="#experience" className="hover:text-ink hover:underline underline-offset-4 transition-all">Experience</a>
            <a href="#contact" className="hover:text-ink hover:underline underline-offset-4 transition-all">Contact</a>
          </nav>

          <a href="#contact" className="text-xs font-display font-bold uppercase tracking-widest bg-ink text-paper px-4 py-2 hover:bg-neutral-800 transition-all border border-ink shadow-[2px_2px_0px_#111]">
            Get In Touch
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-16 space-y-16">
        <section id="about" className="reveal space-y-8">
          <div className="border-y-2 border-ink py-2 flex flex-wrap items-center justify-between text-xs font-display font-bold uppercase tracking-widest text-neutral-600 gap-2">
            <span>VOL. I — NO. 01</span>
            <span>BHUBANESWAR, ODISHA, INDIA</span>
            <span>ECE & FULL-STACK DEV</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            <div className="md:col-span-8 space-y-6">
              <div className="inline-block px-3 py-1 bg-ink text-paper text-xs font-display uppercase tracking-widest">
                B.Tech Student — ECE
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.05]">
                RASHMI RANJAN <br />
                <span className="italic font-semibold">PRADHAN</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-800 font-serif leading-relaxed">
                B.Tech student in Electronics and Communication Engineering with a strong focus on <strong className="font-sans font-semibold text-ink">embedded systems</strong>, <strong className="font-sans font-semibold text-ink">digital electronics</strong>, and <strong className="font-sans font-semibold text-ink">modern web development</strong>. Eager to solve practical engineering challenges and build robust technical solutions.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-display font-bold uppercase tracking-wider">
                <a href="mailto:rashmiranjanpradhan623@gmail.com" className="px-3 py-2 border border-ink hover:bg-ink hover:text-paper transition-all">Email Me</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 border border-ink hover:bg-ink hover:text-paper transition-all">LinkedIn ↗</a>
                <a href="https://github.com/RashmiRanjan-git" target="_blank" rel="noreferrer" className="px-3 py-2 border border-ink hover:bg-ink hover:text-paper transition-all">GitHub ↗</a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 border-2 border-ink bg-white p-2 shadow-[6px_6px_0px_#111] group overflow-hidden">
                <div className="w-full h-full border border-neutral-200 bg-neutral-100 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                  <img src="rashmi.png" alt="Rashmi Ranjan Pradhan Profile Photo" className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 bg-ink/90 text-paper text-[10px] font-display uppercase tracking-[0.18em] py-1 text-center backdrop-blur-sm">Rashmi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal stagger-1 p-6 border-2 border-ink bg-white shadow-[4px_4px_0px_#111] space-y-2">
            <h2 className="font-display text-xs uppercase font-bold tracking-widest text-neutral-500">Professional Summary</h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-800">
              B.Tech student in Electronics and Communication Engineering with a strong interest in embedded systems, digital electronics and communication systems. I am also exploring web development and digital marketing to build versatile technical and problem-solving skills. Eager to apply my knowledge through projects and practical experiences while contributing to innovative solutions.
            </p>
          </div>
        </section>

        <section id="education" className="reveal space-y-6">
          <div className="double-border-b pb-3 flex items-baseline justify-between">
            <h2 className="font-serif text-3xl font-bold tracking-tight">Academic Background</h2>
            <span className="font-display text-xs uppercase tracking-widest text-neutral-500 font-bold">2021 — 2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2023 – 2027', title: 'B.Tech in ECE', place: 'Silicon University, Bhubaneswar, Odisha', value: '7.46 (Till Date)' },
              { year: '2021 – 2023', title: 'Higher Secondary (Class XII)', place: 'Fakir Mohan College, Balasore, Odisha', value: '69.7%' },
              { year: 'Passed 2021', title: 'Secondary Class X', place: 'Pragyan Bharati Shikshya Kendra, Odisha', value: '92.33%' }
            ].map(item => (
              <div key={item.title} className="editorial-card p-6 border-2 border-ink bg-white space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-display uppercase tracking-widest px-2 py-0.5 border border-ink font-bold inline-block">{item.year}</span>
                  <h3 className="font-serif text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="text-xs font-semibold text-neutral-600">{item.place}</p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-xs font-display font-bold">
                  {item.title.includes('B.Tech') ? 'CGPA:' : 'Percentage:'} <span className="bg-ink text-paper px-2 py-0.5">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import { ArrowUpRight, Check, Code2, Layers3, Lightbulb, MoveRight, ShieldCheck } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Estratégia digital",
    text: "Clareza para decidir onde investir, o que priorizar e como transformar tecnologia em vantagem competitiva.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Produtos e plataformas",
    text: "Experiências digitais úteis, sustentáveis e feitas para acompanhar o ritmo do seu negócio.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Processos que escalam",
    text: "Automação, integrações e fluxos mais inteligentes para reduzir atrito e liberar o seu time.",
  },
];

const principles = ["Visão de negócio antes da ferramenta", "Tecnologia simples de operar", "Entregas que geram autonomia"];

export default function HomePage() {
  return (
    <main className="samjoe-site min-h-screen overflow-hidden bg-[#07111d] text-[#eef7ff]">
      <section id="início" className="relative isolate overflow-hidden px-5 pb-20 pt-5 sm:px-10 lg:px-16 lg:pb-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_10%,#123a4a_0,transparent_25%),radial-gradient(circle_at_14%_72%,#102b3c_0,transparent_32%),linear-gradient(125deg,#07111d_0%,#091a29_55%,#07111d_100%)]" />
        <div className="absolute -right-28 top-20 -z-10 size-[34rem] rounded-full border border-[#5eead4]/15 sm:size-[46rem]" />
        <div className="absolute -right-6 top-40 -z-10 size-[23rem] rounded-full border border-[#5eead4]/10 sm:size-[33rem]" />
        <div className="absolute left-[44%] top-0 -z-10 h-full w-px bg-linear-to-b from-transparent via-[#8ee7d0]/30 to-transparent" />

        <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5">
          <a href="#início" className="flex items-center gap-2.5" aria-label="SamJoE Tech & Consulting — início">
            <span className="grid size-9 place-items-center rounded-lg bg-[#38d9a9] text-sm font-black text-[#07111d]">S</span>
            <span className="leading-none"><strong className="block text-base tracking-tight">SamJoE</strong><small className="text-[0.58rem] font-bold tracking-[0.19em] text-[#8fb5c7] uppercase">Tech & Consulting</small></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#b7cfdb] md:flex">
            <a href="#atuação" className="transition hover:text-[#5eead4]">Atuação</a>
            <a href="#método" className="transition hover:text-[#5eead4]">Método</a>
            <a href="#contato" className="transition hover:text-[#5eead4]">Contato</a>
          </nav>
          <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-[#5eead4]/40 bg-[#5eead4]/10 px-4 py-2.5 text-xs font-bold text-[#dffef5] transition hover:bg-[#5eead4] hover:text-[#07111d]">Vamos conversar <ArrowUpRight className="size-4" /></a>
        </header>

        <div className="mx-auto grid max-w-7xl gap-12 pb-6 pt-20 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:pt-28">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-bold tracking-[0.22em] text-[#5eead4] uppercase">Tecnologia com direção</p>
            <h1 className="text-5xl font-semibold leading-[.96] tracking-[-0.065em] sm:text-7xl lg:text-[5.5rem]">Transformamos complexidade em <span className="text-[#5eead4]">movimento.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#b7cfdb] sm:text-xl">A SamJoE combina visão de negócio, estratégia e execução tecnológica para construir o próximo passo da sua empresa.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#atuação" className="inline-flex items-center gap-2 rounded-full bg-[#38d9a9] px-6 py-3.5 text-sm font-bold text-[#07111d] transition hover:bg-[#7ff0ca]">Conheça nossa atuação <MoveRight className="size-4" /></a>
              <span className="text-sm text-[#8fb5c7]">Da decisão à entrega.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#38d9a9]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0a1b2a]/80 p-6 shadow-2xl shadow-[#020810]/45 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-bold tracking-[.16em] text-[#8fb5c7] uppercase">Systems / in motion</span><span className="flex size-2 rounded-full bg-[#38d9a9] shadow-[0_0_15px_#38d9a9]" /></div>
              <div className="relative min-h-72 py-8 sm:min-h-80">
                <div className="absolute left-[9%] top-[25%] size-16 rounded-2xl border border-[#5eead4]/50 bg-[#38d9a9]/10" />
                <div className="absolute right-[12%] top-[12%] size-24 rounded-full border border-[#74b3d0]/35" />
                <div className="absolute bottom-[14%] left-[38%] size-28 rounded-[1.75rem] border border-[#5eead4]/35 bg-[#38d9a9]/8" />
                <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" aria-hidden="true"><path d="M70 120 C150 105 150 60 285 70 M70 120 C150 130 150 230 220 220 M220 220 C290 210 315 165 330 120" fill="none" stroke="#5eead4" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="5 6" /><circle cx="70" cy="120" r="5" fill="#38d9a9" /><circle cx="285" cy="70" r="4" fill="#8bc7e0" /><circle cx="220" cy="220" r="4" fill="#38d9a9" /></svg>
                <div className="absolute bottom-1 right-0 max-w-48 rounded-xl border border-white/10 bg-[#0d2435] p-4"><p className="text-xs font-bold text-[#5eead4]">Clareza operacional</p><p className="mt-1 text-xs leading-relaxed text-[#8fb5c7]">Soluções conectadas para decisões melhores.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atuação" className="border-y border-white/8 bg-[#091825] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.22em] text-[#5eead4] uppercase">Onde criamos valor</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Tecnologia deve abrir caminhos, não criar mais obstáculos.</h2></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{services.map(({ number, icon: Icon, title, text }) => <article key={number} className="bg-[#091825] p-7 transition hover:bg-[#0d2131] sm:p-8"><span className="text-xs font-bold tracking-[.18em] text-[#5eead4]">{number}</span><Icon className="mt-12 size-6 text-[#83c7e4]" strokeWidth={1.5} /><h3 className="mt-6 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-4 leading-relaxed text-[#9cb9c8]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="método" className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold tracking-[.22em] text-[#5eead4] uppercase">O jeito SamJoE</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Menos ruído. Mais avanço.</h2></div><div className="grid gap-4"><p className="text-xl leading-relaxed text-[#b7cfdb] sm:text-2xl">Uma boa consultoria não entrega apenas uma solução. Ela deixa a empresa mais preparada para escolher, adaptar e seguir em frente.</p><div className="mt-4 grid gap-3 sm:grid-cols-3">{principles.map((principle) => <div key={principle} className="rounded-xl border border-white/10 bg-white/4 p-4 text-sm text-[#d6e7ee]"><Check className="mb-5 size-4 text-[#5eead4]" />{principle}</div>)}</div></div></div></section>

      <section id="contato" className="px-5 pb-20 sm:px-10 lg:px-16 lg:pb-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-3xl bg-[#38d9a9] px-7 py-12 text-[#07111d] sm:px-12 lg:flex-row lg:items-end lg:px-16 lg:py-16"><div className="max-w-2xl"><p className="text-xs font-black tracking-[.2em] uppercase opacity-65">Vamos construir o próximo passo?</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Toda transformação começa com uma conversa bem feita.</h2></div><a href="#início" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#07111d] px-6 py-3.5 text-sm font-bold text-[#e8fff8] transition hover:bg-[#10273a]">Iniciar conversa <ArrowUpRight className="size-4" /></a></div></section>

      <footer className="border-t border-white/8 px-5 py-7 text-center text-xs font-bold tracking-[.15em] text-[#7898aa] uppercase">SamJoE Tech & Consulting · Tecnologia com direção</footer>
    </main>
  );
}

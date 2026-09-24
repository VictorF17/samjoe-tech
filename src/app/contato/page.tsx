import { ArrowLeft, ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    detail: "+55 (11) 97299-9157",
    href: "https://wa.me/5511972999157",
  },
  {
    icon: Mail,
    label: "E-mail",
    detail: "victor.conceicao@samjoe.com.br",
    href: "mailto:victor.conceicao@samjoe.com.br",
  },
];

export default function ContactPage() {
  return (
    <main className="samjoe-site min-h-screen px-5 py-5 text-[#eef7ff] sm:px-10 lg:px-16">
      <header className="mx-auto flex max-w-6xl items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2.5" aria-label="Voltar para o início">
          <span className="brand-logo" aria-hidden="true" />
        </a>
        <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#cbb9ab] transition hover:text-[#e6b47e]"><ArrowLeft className="size-4" /> Início</a>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-6xl flex-col justify-center py-16 lg:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#e6b47e] uppercase">Contato</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-0.065em] sm:text-7xl">Vamos começar por uma <span className="text-[#e6b47e]">boa conversa.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#d7c9bf] sm:text-xl">Escolha o canal que faz mais sentido para você. Estou por perto para trocar ideias, investigar possibilidades e construir o próximo passo.</p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {channels.map(({ icon: Icon, label, detail, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-[#f4eee7]/12 p-7 transition hover:border-[#e6b47e]/55 hover:bg-[#f4eee7]/4 sm:p-8">
              <Icon className="size-7 text-[#e6b47e]" strokeWidth={1.5} />
              <p className="mt-12 text-xs font-bold tracking-[0.18em] text-[#cbb9ab] uppercase">{label}</p>
              <div className="mt-3 flex items-center justify-between gap-4"><p className="text-lg font-semibold tracking-[-0.03em]">{detail}</p><ArrowUpRight className="size-5 shrink-0 text-[#e6b47e] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
            </a>
          ))}
        </div>

        <a href="https://wa.me/5511972999157" target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#38d9a9] px-6 py-3.5 text-sm font-bold text-[#07111d]">Iniciar conversa no WhatsApp <ArrowUpRight className="size-4" /></a>
      </section>
    </main>
  );
}

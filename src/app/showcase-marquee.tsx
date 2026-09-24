function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
      <span className="size-2.5 rounded-full chrome-dot-red" />
      <span className="size-2.5 rounded-full chrome-dot-yellow" />
      <span className="size-2.5 rounded-full chrome-dot-green" />
      <span className="ml-3 truncate text-[0.65rem] font-semibold tracking-wide text-[#6b8394]">{label}</span>
    </div>
  );
}

function ImageTile({ src, label }: { src: string; label: string }) {
  return (
    <div className="showcase-tile flex h-full flex-col overflow-hidden rounded-2xl border border-white/10">
      <WindowChrome label={label} />
      <div className="showcase-tile-body flex-1 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} className="size-full object-cover object-top" />
      </div>
    </div>
  );
}

const tiles = [
  <ImageTile key="expatritax-workflow" src="/showcase/expatritax-workflow.png" label="app.expatritax.com.br" />,
  <ImageTile key="magno" src="/showcase/magno-financeiro.png" label="app.magnoadvogados.com.br" />,
  <ImageTile key="exhub" src="/showcase/exhub.png" label="exhub.expatritax.com.br" />,
  <ImageTile key="loe" src="/showcase/loe.png" label="loeclinic.com.br" />,
  <ImageTile key="expatritax-desempenho" src="/showcase/expatritax-desempenho.png" label="app.expatritax.com.br" />,
  <ImageTile key="operacao" src="/showcase/operacao-samjoe.png" label="operacao.samjoe.tech" />,
  <ImageTile key="confeitaria" src="/showcase/samjoe-confeitaria.png" label="confeitaria.samjoe.tech" />,
  <ImageTile key="plans" src="/showcase/plans.png" label="planilha operacional" />,
] as const;

export function ShowcaseMarquee() {
  const track = [...tiles, ...tiles];

  return (
    <div className="showcase-marquee relative overflow-hidden py-2">
      <div className="showcase-marquee-track flex w-max gap-6">
        {track.map((tile, i) => (
          <div key={i} className="h-72 w-[22rem] shrink-0 sm:w-[27rem]">
            {tile}
          </div>
        ))}
      </div>
    </div>
  );
}

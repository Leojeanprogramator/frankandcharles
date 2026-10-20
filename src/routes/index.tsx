import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-fc.jpg.asset.json";
import hero from "@/assets/hero-burger.jpg";
import essencia from "@/assets/essencia.jpg";
import delivery from "@/assets/delivery.jpg";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frank & Charles — Higienópolis, São Paulo | Since 2014" },
      {
        name: "description",
        content:
          "Frank & Charles, restaurante em Higienópolis desde 2014. Rua Tinhorão, 130, São Paulo. Peça delivery.",
      },
      { property: "og:title", content: "Frank & Charles — Higienópolis | Since 2014" },
      {
        property: "og:description",
        content: "Uma assinatura própria. Uma história de sabor. Rua Tinhorão, 130 — Higienópolis, SP.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#essencia", label: "Nossa Essência" },
  { href: "#reconhecimentos", label: "Reconhecimentos" },
  { href: "#localizacao", label: "Localização" },
];

const AWARDS = [
  { title: "Melhor Burger de SP", source: "Guia do Hambúrguer", year: "2016/2017" },
  { title: "Destaque", source: "Hambúrguer Perfeito", year: "" },
];

function DeliveryLink({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={SITE.deliveryUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Logo({ size = 48 }: { size?: number }) {
  return (
    <img
      src={logo.url}
      alt="Logotipo Frank & Charles"
      width={size}
      height={size}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cream/10 bg-primary/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo size={44} />
          <span className="leading-tight">
            <span className="block font-serif text-xl text-cream">Frank &amp; Charles</span>
            <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-gold">
              Higienópolis | Since 2014
            </span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-cream/80 transition-colors hover:text-gold">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <DeliveryLink className="btn-gold hidden sm:inline-flex">Pedir Delivery</DeliveryLink>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="h-px w-6 bg-cream" />
            <span className="h-px w-6 bg-cream" />
            <span className="h-px w-6 bg-cream" />
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-cream/10 bg-primary px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-serif text-2xl text-cream"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Index() {
  const year = new Date().getFullYear();
  return (
    <div className="pb-20 sm:pb-0">
      <Header />

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-primary pt-20 lg:items-center">
        <img
          src={hero}
          alt="Hambúrguer em fotografia ilustrativa sobre mármore verde"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:pb-0">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow">Higienópolis · Since 2014</p>
            <h1 className="mt-6 text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              Uma assinatura própria. <em className="text-gold">Uma história de sabor.</em>
            </h1>
            <p className="mt-6 max-w-md text-base text-cream/80 sm:text-lg">
              Frank &amp; Charles — restaurante em Higienópolis, desde 2014.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <DeliveryLink className="btn-gold">Pedir Delivery</DeliveryLink>
              <a href="#essencia" className="btn-outline-cream">Conheça nossa história</a>
            </div>
            <ul className="mt-12 grid gap-4 border-t border-cream/15 pt-6 sm:grid-cols-2">
              {AWARDS.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 text-gold">✦</span>
                  <span className="text-sm text-cream/85">
                    <strong className="font-serif text-lg font-semibold text-cream">{a.title}</strong>
                    <br />
                    {a.source} {a.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Essência */}
      <section id="essencia" className="scroll-mt-20 bg-background py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={essencia}
              alt="Ambiente ilustrativo com paredes verdes e detalhes dourados"
              width={1104}
              height={1408}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Nossa Essência</p>
            <h2 className="mt-5 text-4xl leading-tight text-primary sm:text-6xl">
              Uma identidade que vai além do hambúrguer.
            </h2>
            <div className="ornament my-8" aria-hidden>✦</div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Desde 2014, Frank &amp; Charles constrói sua presença em Higienópolis com uma assinatura própria. Uma
              marca que valoriza personalidade, experiência e sua relação com a cultura gastronômica de São Paulo.
            </p>
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section id="reconhecimentos" className="scroll-mt-20 bg-primary py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="eyebrow">Reconhecimentos</p>
          <h2 className="mt-5 text-4xl sm:text-6xl">Reconhecidos em São Paulo.</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {AWARDS.map((a) => (
              <article key={a.title} className="border border-gold/40 px-8 py-12">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold text-3xl text-gold" aria-hidden>
                  ✦
                </div>
                <h3 className="mt-8 text-3xl sm:text-4xl">“{a.title}”</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-gold">
                  {a.source}
                  {a.year && ` · ${a.year}`}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <img
            src={delivery}
            alt="Hambúrguer e batatas em embalagem de papel, imagem ilustrativa"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-full min-h-80 w-full object-cover"
          />
          <div className="flex flex-col justify-center px-5 py-20 sm:px-14">
            <p className="eyebrow">Delivery</p>
            <h2 className="mt-5 text-4xl leading-tight text-primary sm:text-6xl">Frank &amp; Charles na sua casa.</h2>
            <p className="mt-6 text-lg text-muted-foreground">Leve a experiência Frank &amp; Charles até você.</p>
            <DeliveryLink className="btn-gold mt-10 self-start px-10 text-sm">Quero pedir delivery →</DeliveryLink>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="scroll-mt-20 bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Localização</p>
            <h2 className="mt-5 text-4xl text-primary sm:text-5xl">Onde estamos.</h2>
            <address className="mt-8 not-italic text-lg leading-relaxed">
              {SITE.addressLine}
              <br />
              {SITE.cityLine}
            </address>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8"
            >
              Como chegar
            </a>
          </div>
          <div className="lg:col-span-8">
            <iframe
              title="Mapa: Rua Tinhorão, 130, Higienópolis"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border border-border grayscale-[40%] lg:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite py-14 text-cream/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo size={56} />
            <div>
              <p className="font-serif text-2xl text-cream">Frank &amp; Charles</p>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">Higienópolis | Since 2014</p>
              <p className="mt-2 text-sm">{SITE.addressLine} — {SITE.cityLine}</p>
            </div>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-6 text-sm">
            <DeliveryLink className="hover:text-gold">Delivery</DeliveryLink>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Localização</a>
            {SITE.instagramUrl && (
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
            )}
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-cream/50">
          © {year} Frank &amp; Charles. Todos os direitos reservados.
        </p>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gold/30 bg-primary p-3 sm:hidden">
        <DeliveryLink className="btn-gold w-full">Pedir Delivery</DeliveryLink>
      </div>
    </div>
  );
}

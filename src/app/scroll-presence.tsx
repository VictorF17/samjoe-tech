"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ScrollPresence() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!location.hash) window.scrollTo(0, 0);

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".samjoe-site section > div:not(.absolute)"));
    const hero = document.querySelector<HTMLElement>(".samjoe-site > section:first-child");
    const heroVideo = document.querySelector<HTMLVideoElement>(".hero-video");
    let heroVideoReady = heroVideo?.readyState !== undefined && heroVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;

      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const entering = clamp((viewportHeight - bounds.top) / (viewportHeight * 0.32));
        const leaving = clamp(bounds.bottom / (viewportHeight * 0.3));
        const visibility = Math.min(entering, leaving);
        const direction = bounds.top > 0 ? 1 : -1;

        const shouldWaitForVideo = element.classList.contains("hero-content") && !heroVideoReady;
        element.style.opacity = String(shouldWaitForVideo ? 0 : visibility);
        element.style.filter = `blur(${(1 - visibility) * 5}px)`;
        element.style.transform = `translateY(${direction * (1 - visibility) * 32}px)`;
      });

      if (hero && heroVideo) {
        const heroBounds = hero.getBoundingClientRect();
        const heroProgress = clamp(-heroBounds.top / (heroBounds.height * 0.72));
        const baseOpacity = window.matchMedia("(max-width: 640px)").matches ? 0.56 : 0.86;
        heroVideo.style.opacity = String(heroVideoReady ? baseOpacity * (1 - heroProgress) : 0);
      }
    };

    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const revealHero = () => {
      heroVideoReady = true;
      scheduleUpdate();
    };
    heroVideo?.addEventListener("loadeddata", revealHero, { once: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      heroVideo?.removeEventListener("loadeddata", revealHero);
    };
  }, [pathname]);

  return null;
}

import type { Metadata } from "next";
import { ScrollPresence } from "./scroll-presence";
import "./globals.css";

export const metadata: Metadata = {
  title: "SamJoE Tech & Consulting | Tecnologia que move negócios",
  description: "Consultoria em tecnologia para transformar desafios complexos em produtos, processos e crescimento sustentável.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><ScrollPresence />{children}</body></html>;
}

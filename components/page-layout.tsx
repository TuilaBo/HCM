import type { ReactNode } from "react"
import { Header } from "@/components/header"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col zoom-stable-full-width">
      <Header />
      <main className="flex-1 animate-smooth-fade-in-up animate-delay-100">
        <div className="zoom-stable-container">{children}</div>
      </main>
    </div>
  )
}

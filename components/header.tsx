"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const navigation = [
  { key: "home", href: "/" },
  { key: "content", href: "/content" },
  { key: "video", href: "/video" },
  { key: "practice", href: "/practice" },
] as const

export function Header() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <header className="zoom-stable-header border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-down">
      <div className="zoom-stable-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 animate-fade-in-left group">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-primary-foreground font-bold text-sm">HCM</span>
          </div>
          <span className="font-bold text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
            {t("mainTitle").split(" ").slice(0, 2).join(" ")}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 animate-fade-in-up animate-delay-200">
          {navigation.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {t(item.key as any)}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-scale-in" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

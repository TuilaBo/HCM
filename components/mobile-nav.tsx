"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const navigation = [
  { key: "home", href: "/" },
  { key: "content", href: "/content" },
  { key: "video", href: "/video" },
  { key: "practice", href: "/practice" },
] as const

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition-all duration-300 hover:scale-110"
        >
          <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center space-x-2 animate-fade-in-left group"
            onClick={() => setOpen(false)}
          >
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-xs">HCM</span>
            </div>
            <span className="font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              {t("mainTitle").split(" ").slice(0, 2).join(" ")}
            </span>
          </Link>
          <nav className="flex flex-col space-y-3">
            {navigation.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 animate-fade-in-right",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.key as any)}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

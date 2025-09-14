"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background animate-fade-in-up">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 animate-scale-in animate-delay-200 group">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-primary-foreground font-bold text-xs">HCM</span>
            </div>
            <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {t("mainTitle").split(" ").slice(0, 3).join(" ")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center animate-fade-in-up animate-delay-300 transition-colors duration-300 hover:text-foreground">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

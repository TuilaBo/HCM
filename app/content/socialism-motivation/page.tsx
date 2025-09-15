"use client"

import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"
import socialismMotivationContent from "../../../content/socialism-motivation.json"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SocialismMotivationPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Lấy dữ liệu theo ngôn ngữ
  const title =
    language === "vi"
      ? socialismMotivationContent.titleVi
      : socialismMotivationContent.titleEn

  const description =
    language === "vi"
      ? socialismMotivationContent.descriptionVi
      : socialismMotivationContent.descriptionEn

  const content = socialismMotivationContent.content

  return (
    <PageLayout>
      <div className="py-12 md:py-16 max-w-5xl mx-auto animate-smooth-fade-in-up">
        {/* Nút quay lại */}
        <div className="mb-6">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:-translate-x-0.5 transition-transform"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "vi" ? "Quay về" : "Go Back"}
          </Button>
        </div>

        {/* Header đẹp hơn (gradient, mô tả) */}
        <header className="relative mb-8 md:mb-12 text-center">
          <div className="pointer-events-none absolute inset-x-0 -top-6 mx-auto h-24 w-72 blur-3xl bg-gradient-to-r from-primary/20 via-fuchsia-400/20 to-rose-400/20 rounded-full" />
          <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-transparent">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </header>

        {/* Khung nội dung dạng card */}
        <div className="rounded-2xl bg-card shadow-sm ring-1 ring-border p-6 md:p-10">
          <article
            className="
              prose prose-lg max-w-none
              prose-headings:font-bold
              prose-h2:text-primary prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:scroll-mt-24
              prose-h2:border-b prose-h2:border-primary/30 prose-h2:pb-2
              prose-h3:text-primary prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8
              prose-p:leading-relaxed prose-p:text-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-em:text-rose-600 prose-em:italic
              prose-a:text-primary hover:prose-a:underline underline-offset-4
              prose-ul:list-disc prose-ul:pl-6 md:prose-ul:pl-8 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 md:prose-ol:pl-8 prose-ol:space-y-2
              prose-li:marker:text-primary
              prose-blockquote:border-l-4 prose-blockquote:border-primary
              prose-blockquote:bg-primary/10 prose-blockquote:px-4 prose-blockquote:py-3
              prose-blockquote:rounded-md prose-blockquote:text-foreground
              prose-code:bg-muted prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            "
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        </div>
      </div>
    </PageLayout>
  )
}

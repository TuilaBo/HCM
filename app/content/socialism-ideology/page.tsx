"use client"

import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"
import socialismIdeologyContent from "../../../content/socialism-ideology.json"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SocialismIdeologyPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Lấy dữ liệu theo ngôn ngữ
  const title =
    language === "vi"
      ? socialismIdeologyContent.titleVi
      : socialismIdeologyContent.titleEn

  const content = socialismIdeologyContent.content

  return (
    <PageLayout>
      <div className="py-12 max-w-5xl mx-auto animate-smooth-fade-in-up">
        {/* Nút quay lại */}
        <div className="mb-6">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "vi" ? "Quay về" : "Go Back"}
          </Button>
        </div>

        {/* Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary drop-shadow-sm">
          {title}
        </h1>

        {/* Nội dung chi tiết */}
        <article
          className="
            prose prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:text-primary
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b prose-h2:border-primary/40
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:text-indigo-700
            prose-p:leading-relaxed prose-p:text-foreground
            prose-strong:text-primary prose-strong:font-semibold
            prose-em:text-pink-600 prose-em:italic
            prose-li:marker:text-primary prose-li:pl-2
            prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/10 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-md prose-blockquote:text-foreground prose-blockquote:italic
            prose-table:border prose-table:border-gray-300
            prose-th:bg-primary/20 prose-th:text-primary prose-th:font-bold prose-th:px-4 prose-th:py-2
            prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2
            prose-tr:nth-child(even):bg-muted/30 prose-tr:hover:bg-primary/5
            prose-code:bg-muted prose-code:text-primary prose-code:rounded prose-code:px-1 prose-code:py-0.5
          "
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </PageLayout>
  )
}

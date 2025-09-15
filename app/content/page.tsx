"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Building, Landmark, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"

// Import JSON content
import pageContent from "../../content/page.json"
import socialismIdeologyContent from "../../content/socialism-ideology.json"
import buildingSocialismContent from "../../content/building-socialism.json"
import buildingSocialismVietnamContent from "../../content/building-socialism-vietnam.json"
import socialismMotivationContent from "../../content/socialism-motivation.json"

// Danh sách các section chính
const allContentSections = [
  {
    id: "socialism-ideology",
    icon: BookOpen,
    href: "/content/socialism-ideology",
    data: socialismIdeologyContent,
  },
  {
    id: "building-socialism",
    icon: Building,
    href: "/content/building-socialism",
    data: buildingSocialismContent,
  },
  {
    id: "building-socialism-vietnam",
    icon: Landmark,
    href: "/content/building-socialism-vietnam",
    data: buildingSocialismVietnamContent,
  },
  {
    id: "socialism-motivation",
    icon: Users,
    href: "/content/socialism-motivation",
    data: socialismMotivationContent,
  },
]

export default function ContentPage() {
  const { language } = useLanguage()

  // Hàm lấy content theo ngôn ngữ
  const getLocalizedContent = (item: any, lang: "vi" | "en") => ({
    title: lang === "vi" ? item.titleVi : item.titleEn,
    description: lang === "vi" ? item.descriptionVi : item.descriptionEn,
  })

  return (
    <PageLayout>
      <div className="py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-smooth-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-balance animate-smooth-scale-in animate-delay-200">
            {pageContent.mainTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty animate-smooth-fade-in-up animate-delay-300">
            {pageContent.mainSubtitle}
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16 animate-smooth-fade-in-up animate-delay-400">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <img
              src="/ho-chi-minh-socialism-overview.jpg"
              alt="Tổng quan tư tưởng Hồ Chí Minh về chủ nghĩa xã hội"
              className="h-64 md:h-80 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {pageContent.heroSection.title}
              </h3>
              <p className="text-lg opacity-90">
                {pageContent.heroSection.description}
              </p>
            </div>
          </div>
        </section>

        {/* Danh sách các card nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {allContentSections.map((section, index) => {
            const Icon = section.icon
            const localizedData = getLocalizedContent(section.data, language)
            return (
              <Card
                key={section.id}
                className="group cursor-pointer hover-lift hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-smooth-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6 flex-shrink-0">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300 animate-smooth-float">
                    <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-105" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-balance min-h-[4rem] flex items-center justify-center transition-colors duration-300 group-hover:text-primary">
                    {localizedData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6 flex flex-col h-full">
                  <CardDescription className="text-base leading-relaxed flex-grow min-h-[6rem] flex items-center justify-center transition-colors duration-300 group-hover:text-foreground">
                    {localizedData.description}
                  </CardDescription>
                  <div>
                    <Button
                      asChild
                      size="lg"
                      className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Link href={section.href}>
                        {language === "vi" ? "Khám phá nội dung" : "Explore Content"}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}

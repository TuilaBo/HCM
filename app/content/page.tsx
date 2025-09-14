"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"

// Import JSON content
import pageContent from "../../content/page.json"
import socialismIdeologyContent from "../../content/socialism-ideology.json"
import buildingSocialismContent from "../../content/building-socialism.json"

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
              className="zoom-stable-image h-64 md:h-80 object-cover"
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
        <div
          className="zoom-stable-grid mb-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))" }}
        >
          {allContentSections.map((section, index) => {
            const Icon = section.icon
            const localizedData = getLocalizedContent(section.data, language)
            return (
              <Card
                key={section.id}
                className="zoom-stable-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-smooth-fade-in-up cursor-pointer hover-lift"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6 flex-shrink-0">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105 animate-smooth-float">
                    <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-105" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl transition-colors duration-300 group-hover:text-primary text-balance min-h-[4rem] flex items-center justify-center">
                    {localizedData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="zoom-stable-card-content text-center space-y-6">
                  <CardDescription className="text-base leading-relaxed transition-colors duration-300 group-hover:text-foreground flex-grow min-h-[6rem] flex items-center">
                    {localizedData.description}
                  </CardDescription>
                  <div className="zoom-stable-card-footer">
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

        {/* Key Concepts Overview */}
        <section className="bg-card rounded-2xl p-8 md:p-12 animate-smooth-fade-in-up animate-delay-700 hover:shadow-lg transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 animate-smooth-scale-in animate-delay-800">
              {pageContent.keyConceptsTitle}
            </h2>
            <p className="text-lg text-muted-foreground animate-smooth-fade-in-up animate-delay-900">
              {pageContent.keyConceptsDescription}
            </p>
          </div>
          <div
            className="zoom-stable-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))" }}
          >
            {pageContent.keyConcepts.map((concept: any, index: number) => (
              <div key={index} className="text-center space-y-3 animate-smooth-fade-in-up animate-delay-1000">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">{concept.number}</span>
                </div>
                <h3 className="font-semibold">{concept.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

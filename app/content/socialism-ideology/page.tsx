"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const subContents = [
  {
    vi: { title: "Mục tiêu chính trị", description: "Xây dựng chế độ dân chủ", image: "/images/political-goal.jpg" },
    en: { title: "Political Goal", description: "Building a democratic regime", image: "/images/political-goal.jpg" },
  },
  {
    vi: {
      title: "Mục tiêu kinh tế",
      description: "Xây dựng nền kinh tế phát triển cao, gắn bó mật thiết với chính trị",
      image: "/images/economic-goal.jpg",
    },
    en: {
      title: "Economic Goal",
      description: "Developing a highly advanced economy closely linked with politics",
      image: "/images/economic-goal.jpg",
    },
  },
  {
    vi: {
      title: "Mục tiêu văn hóa",
      description: "Xây dựng nền văn hóa dân tộc, khoa học, đại chúng",
      image: "/images/cultural-goal.jpg",
    },
    en: {
      title: "Cultural Goal",
      description: "Building a national, scientific, and popular culture",
      image: "/images/cultural-goal.jpg",
    },
  },
  {
    vi: {
      title: "Mục tiêu xã hội",
      description: "Xây dựng xã hội công bằng, dân chủ, văn minh",
      image: "/images/social-goal.jpg",
    },
    en: {
      title: "Social Goal",
      description: "Building a just, democratic, and civilized society",
      image: "/images/social-goal.jpg",
    },
  },
]

export default function SocialismIdeologyPage() {
  const { language } = useLanguage()
  const [search, setSearch] = useState("")

  const filteredContents = subContents.filter((item) => {
    const content = language === "vi" ? item.vi : item.en
    return (
      content.title.toLowerCase().includes(search.toLowerCase()) ||
      content.description.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <PageLayout>
      <div className="py-12 space-y-12">
        {/* Back button */}
        <div>
          <Button asChild variant="outline" className="mb-6">
            <Link href="/content">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "vi" ? "Quay lại" : "Back"}
            </Link>
          </Button>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text mb-4">
            {language === "vi"
              ? "Tư tưởng Hồ Chí Minh về Chủ nghĩa xã hội"
              : "Ho Chi Minh's Ideology on Socialism"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === "vi"
              ? "Khám phá 4 mục tiêu chính yếu trong tư tưởng của Bác Hồ"
              : "Explore 4 key goals in Ho Chi Minh's socialist ideology"}
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder={language === "vi" ? "Tìm kiếm..." : "Search..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border-2 border-primary/40 shadow focus:border-primary"
          />
        </div>

        {/* Cards - 4 ngang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredContents.map((item, index) => {
            const content = language === "vi" ? item.vi : item.en
            return (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-primary/30 flex flex-col"
              >
                <img src={content.image} alt={content.title} className="h-40 w-full object-cover" />
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{content.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="min-h-[60px]">
                      {content.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group">
                      {language === "vi" ? "Xem chi tiết" : "View details"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}

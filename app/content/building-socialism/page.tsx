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
  { vi: { title: "Lợi ích của nhân dân", description: "Mọi thành quả cách mạng đều vì lợi ích của nhân dân", image: "/images/people-benefits.jpg" },
    en: { title: "Benefits of the People", description: "All revolutionary achievements serve the people", image: "/images/people-benefits.jpg" } },
  { vi: { title: "Dân chủ", description: "Dân chủ là bản chất của chế độ mới", image: "/images/democracy.jpg" },
    en: { title: "Democracy", description: "Democracy is the essence of the new regime", image: "/images/democracy.jpg" } },
  { vi: { title: "Sức mạnh đoàn kết toàn dân", description: "Đoàn kết là sức mạnh quyết định thắng lợi", image: "/images/unity.jpg" },
    en: { title: "Strength of National Unity", description: "Unity is the decisive strength for victory", image: "/images/unity.jpg" } },
  { vi: { title: "Con người xã hội chủ nghĩa", description: "Con người là trung tâm của sự nghiệp xây dựng CNXH", image: "/images/socialist-human.jpg" },
    en: { title: "The Socialist Human", description: "Humans are at the center of building socialism", image: "/images/socialist-human.jpg" } },
  { vi: { title: "Vai trò của các tổ chức", description: "Các tổ chức chính trị - xã hội là lực lượng nòng cốt", image: "/images/organizations.jpg" },
    en: { title: "Role of Organizations", description: "Political and social organizations play a core role", image: "/images/organizations.jpg" } },
  { vi: { title: "Phương châm xây dựng CNXH", description: "“Xây” đi đôi với “Chống”", image: "/images/principle.jpg" },
    en: { title: "Principle of Building Socialism", description: "'Construction' goes hand in hand with 'Struggle'", image: "/images/principle.jpg" } },
]

export default function BuildingSocialismPage() {
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
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-indigo-500 text-transparent bg-clip-text mb-4">
            {language === "vi"
              ? "Tư tưởng Hồ Chí Minh về Xây dựng Chủ nghĩa xã hội ở Việt Nam"
              : "Ho Chi Minh's Ideology on Building Socialism in Vietnam"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === "vi"
              ? "Khám phá những yếu tố nền tảng trong công cuộc xây dựng chủ nghĩa xã hội"
              : "Explore foundational elements in building socialism in Vietnam"}
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder={language === "vi" ? "Tìm kiếm..." : "Search..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border-2 border-indigo-400 shadow focus:border-indigo-600"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContents.map((item, index) => {
            const content = language === "vi" ? item.vi : item.en
            return (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-indigo-300"
              >
                <img src={content.image} alt={content.title} className="h-40 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{content.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group">
                    {language === "vi" ? "Xem chi tiết" : "View details"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Video, PenTool, Star, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: BookOpen,
    titleKey: "content",
    descriptionVi: "Tìm hiểu sâu về tư tưởng Hồ Chí Minh qua các bài học có cấu trúc",
    descriptionEn: "Explore Ho Chi Minh's ideology through structured lessons",
    href: "/content",
  },
  {
    icon: Video,
    titleKey: "video",
    descriptionVi: "Xem các video giảng dạy và tài liệu trực quan",
    descriptionEn: "Watch educational videos and visual materials",
    href: "/video",
  },
  {
    icon: PenTool,
    titleKey: "practice",
    descriptionVi: "Ôn tập kiến thức với các bài tập và câu hỏi",
    descriptionEn: "Practice knowledge with exercises and questions",
    href: "/practice",
  },
]

// Highlights: cập nhật theo nội dung bạn yêu cầu
const ideologyHighlights = [
  {
    icon: Star,
    titleVi: "Tầm nhìn xã hội chủ nghĩa",
    titleEn: "Socialist Vision",
    descriptionVi: "Hồ Chí Minh đã vạch ra con đường xây dựng một xã hội công bằng, văn minh và tiến bộ",
    descriptionEn: "Ho Chi Minh outlined the path to building a just, civilized and progressive society",
  },
  {
    icon: Users,
    titleVi: "Dân là gốc",
    titleEn: "People as Foundation",
    descriptionVi: "Tư tưởng 'dân là gốc' - đặt nhân dân làm trung tâm của mọi hoạt động cách mạng",
    descriptionEn: "The ideology of 'people as foundation' - placing the people at the center of all revolutionary activities",
  },
  {
    icon: Award,
    titleVi: "Độc lập - Tự do",
    titleEn: "Independence - Freedom",
    descriptionVi: "Kết hợp hài hòa giữa độc lập dân tộc và giải phóng xã hội",
    descriptionEn: "A harmonious combination of national independence and social liberation",
  },
  {
    icon: Heart,
    titleVi: "Đạo đức cách mạng",
    titleEn: "Revolutionary Ethics",
    descriptionVi: "Xây dựng con người mới với đạo đức cao đẹp và lý tưởng cách mạng",
    descriptionEn: "Building new people with noble ethics and revolutionary ideals",
  },
]

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
    <PageLayout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-20 animate-smooth-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance animate-smooth-scale-in animate-delay-200">
              <span className="text-primary animate-gentle-pulse">{t("mainTitle").split(" ")[0]}</span>{" "}
              <span className="text-foreground">{t("mainTitle").split(" ").slice(1, 3).join(" ")}</span>
              <br />
              <span className="text-primary/80 text-3xl md:text-5xl">
                {t("mainTitle").split(" ").slice(3).join(" ")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty animate-smooth-fade-in-up animate-delay-300">
              {language === "vi"
                ? "Khám phá và học hỏi tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh về chủ nghĩa xã hội và con đường xây dựng chủ nghĩa xã hội ở Việt Nam - nền tảng tư tưởng cho sự phát triển bền vững của đất nước"
                : "Discover and learn the great ideology of President Ho Chi Minh about socialism and the path to building socialism in Vietnam - the ideological foundation for the country's sustainable development"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-smooth-fade-in-up animate-delay-400">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 transition-all duration-500 hover:scale-105 hover:shadow-lg hover-smooth"
            >
              <Link href="/content">
                {t("content")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-primary hover:text-primary-foreground hover-smooth"
            >
              <Link href="/video">{t("video")}</Link>
            </Button>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-20 animate-smooth-fade-in-up animate-delay-500">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <img
              src="/ho-chi-minh-vietnam-leadership.jpg"
              alt="Tư tưởng Hồ Chí Minh về Chủ nghĩa xã hội"
              className="zoom-stable-image w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{language === "vi" ? "Tư tưởng bất hủ" : "Immortal Ideology"}</h3>
              <p className="text-lg opacity-90">
                {language === "vi"
                  ? "Định hướng con đường phát triển của dân tộc Việt Nam"
                  : "Guiding the development path of the Vietnamese nation"}
              </p>
            </div>
          </div>
        </section>

        {/* Highlights: ép 4 card trên 1 hàng, không xuống dòng */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-smooth-fade-in-up animate-delay-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "vi" ? "Những điểm nổi bật" : "Key Highlights"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "vi"
                ? "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam"
                : "Ho Chi Minh's ideology on socialism and building socialism in Vietnam"}
            </p>
          </div>

          {/* Luôn 4 cột / 1 hàng — không wrap */}
          <div className="grid grid-cols-4 gap-6">
            {ideologyHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={index}
                  className="zoom-stable-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-smooth-fade-in-up hover-lift"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 animate-smooth-float">
                      <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">
                      {language === "vi" ? highlight.titleVi : highlight.titleEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="zoom-stable-card-content text-center pt-0">
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {language === "vi" ? highlight.descriptionVi : highlight.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Features Grid */}
        <section className="zoom-stable-grid mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.titleKey}
                className="zoom-stable-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-smooth-fade-in-up cursor-pointer hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 animate-smooth-float">
                    <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                    {t(feature.titleKey as any)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="zoom-stable-card-content text-center">
                  <CardDescription className="mb-4 transition-colors duration-300 group-hover:text-foreground">
                    {language === "vi" ? feature.descriptionVi : feature.descriptionEn}
                  </CardDescription>
                  <div className="zoom-stable-card-footer">
                    <Button
                      asChild
                      variant="ghost"
                      className="group-hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                      <Link href={feature.href}>
                        {language === "vi" ? "Tìm hiểu thêm" : "Learn more"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </section>

        {/* Quote Section */}
        <section className="bg-card rounded-2xl p-8 md:p-12 text-center animate-smooth-fade-in-up animate-delay-900 hover:shadow-lg transition-all duration-500 hover-smooth">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 text-balance animate-smooth-scale-in animate-delay-1000">
            {language === "vi"
              ? '"Không có gì quý hơn độc lập tự do"'
              : '"Nothing is more precious than independence and freedom"'}
          </blockquote>
          <cite className="text-lg text-muted-foreground animate-smooth-fade-in-up animate-delay-1000">
            {language === "vi" ? "Chủ tịch Hồ Chí Minh" : "President Ho Chi Minh"}
          </cite>
        </section>
      </div>
    </PageLayout>
  )
}

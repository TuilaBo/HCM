"use client"

import { Play, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"

const videos = {
  vi: [
    {
      id: 1,
      title: "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội - Phần 1",
      description: "Tìm hiểu về nguồn gốc và sự hình thành tư tưởng xã hội chủ nghĩa của Hồ Chí Minh",
      duration: "25:30",
      views: "12,450",
      thumbnail: "/ho-chi-minh-socialism-ideology-lecture.jpg",
      category: "Lý thuyết cơ bản",
    },
    {
      id: 2,
      title: "Đặc trưng xã hội chủ nghĩa theo Hồ Chí Minh",
      description: "Phân tích các đặc trưng cơ bản của xã hội xã hội chủ nghĩa trong tư tưởng Hồ Chí Minh",
      duration: "18:45",
      views: "8,920",
      thumbnail: "/socialist-society-characteristics-vietnam.jpg",
      category: "Phân tích chuyên sâu",
    },
    {
      id: 3,
      title: "Xây dựng chủ nghĩa xã hội ở Việt Nam",
      description: "Mục tiêu và động lực xây dựng chủ nghĩa xã hội ở Việt Nam theo Hồ Chí Minh",
      duration: "32:15",
      views: "15,680",
      thumbnail: "/building-socialism-vietnam-ho-chi-minh.jpg",
      category: "Thực tiễn ứng dụng",
    },
    {
      id: 4,
      title: "Ý nghĩa lịch sử của tư tưởng Hồ Chí Minh",
      description: "Tầm quan trọng và ảnh hưởng của tư tưởng Hồ Chí Minh đến ngày nay",
      duration: "28:20",
      views: "11,230",
      thumbnail: "/ho-chi-minh-historical-significance-modern-vietnam.jpg",
      category: "Ý nghĩa lịch sử",
    },
  ],
  en: [
    {
      id: 1,
      title: "Ho Chi Minh's Thoughts on Socialism - Part 1",
      description: "Understanding the origins and formation of Ho Chi Minh's socialist ideology",
      duration: "25:30",
      views: "12,450",
      thumbnail: "/ho-chi-minh-socialism-ideology-lecture.jpg",
      category: "Basic Theory",
    },
    {
      id: 2,
      title: "Socialist Characteristics According to Ho Chi Minh",
      description: "Analysis of the basic characteristics of socialist society in Ho Chi Minh's thought",
      duration: "18:45",
      views: "8,920",
      thumbnail: "/socialist-society-characteristics-vietnam.jpg",
      category: "In-depth Analysis",
    },
    {
      id: 3,
      title: "Building Socialism in Vietnam",
      description: "Goals and driving forces of building socialism in Vietnam according to Ho Chi Minh",
      duration: "32:15",
      views: "15,680",
      thumbnail: "/building-socialism-vietnam-ho-chi-minh.jpg",
      category: "Practical Application",
    },
    {
      id: 4,
      title: "Historical Significance of Ho Chi Minh's Thought",
      description: "The importance and influence of Ho Chi Minh's thought to this day",
      duration: "28:20",
      views: "11,230",
      thumbnail: "/ho-chi-minh-historical-significance-modern-vietnam.jpg",
      category: "Historical Significance",
    },
  ],
}

export default function VideoPage() {
  const { t, language } = useLanguage()
  const videoList = videos[language]

  return (
    <PageLayout>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-balance animate-scale-in animate-delay-200">
            {t("video")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animate-delay-300">
            {language === "vi"
              ? "Tìm hiểu tư tưởng Hồ Chí Minh qua các video giảng dạy chất lượng cao"
              : "Learn Ho Chi Minh's ideology through high-quality educational videos"}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoList.map((video, index) => (
            <Card
              key={video.id}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="lg"
                    className="rounded-full animate-bounce-slow transition-all duration-300 hover:scale-110"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <Badge className="absolute top-2 right-2 bg-black/70 text-white animate-slide-in-down animate-delay-100">
                  {video.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-all duration-300">
                  {video.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 transition-colors duration-300 group-hover:text-foreground">
                  {video.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1 transition-all duration-300 hover:text-primary">
                    <Clock className="h-4 w-4 animate-pulse-slow" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 transition-all duration-300 hover:text-primary">
                    <Eye className="h-4 w-4 animate-pulse-slow" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4 animate-fade-in-up animate-delay-700">
            {language === "vi"
              ? "Đã xem xong video? Hãy kiểm tra kiến thức của bạn!"
              : "Finished watching videos? Test your knowledge!"}
          </p>
          <Button
            asChild
            size="lg"
            className="animate-bounce-slow animate-delay-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="/practice">{t("practice")}</a>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

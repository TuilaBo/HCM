"use client"

import { useState } from "react"
import { Play, Clock, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio" // nếu chưa có component này, dùng div className="aspect-video"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"

type VideoItem = {
  id: number
  title: string
  description: string
  category: string
  youtubeId: string
  duration?: string
  views?: string
}

const videos: Record<"vi" | "en", VideoItem[]> = {
  vi: [
    {
      id: 1,
      title: "Tư tưởng Hồ Chí Minh về CNXH & con đường quá độ ở Việt Nam",
      description:
        "Chương 3: Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và con đường quá độ lên CNXH ở Việt Nam.",
      category: "Lý thuyết cơ bản",
      youtubeId: "fjD2b-6HsvU",
    },
    {
      id: 2,
      title: "Đặc trưng của CNXH trong tư tưởng Hồ Chí Minh",
      description:
        "Thuyết trình: Từ đặc trưng CNXH trong tư tưởng của Người đến thực tiễn tại Việt Nam.",
      category: "Phân tích chuyên sâu",
      youtubeId: "AjkUn495NqU",
    },
    {
      id: 3,
      title: "Tư tưởng HCM về xây dựng Nhà nước của dân, do dân, vì dân",
      description:
        "Chương 6: Một trụ cột trong xây dựng CNXH ở Việt Nam – Nhà nước XHCN.",
      category: "Thực tiễn ứng dụng",
      youtubeId: "E57cUA7G2As",
    }
  ],
  en: [
    {
      id: 1,
      title: "Ho Chi Minh Thought – Opening Chapter (English)",
      description:
        "Concept, object, and significance of studying Ho Chi Minh Thought.",
      category: "Basic Theory",
      youtubeId: "RRkw3byQzn4",
    },
    {
      id: 2,
      title: "Socialism in Vietnam & Ho Chi Minh Thought",
      description:
        "A discussion on socialism in Vietnam, patriotism and international solidarity.",
      category: "In-depth Analysis",
      youtubeId: "aH2JT2BRYQI",
    },
    {
      id: 3,
      title: "How Did Ho Chi Minh Use Marxism?",
      description:
        "Explaining how Marxism-Leninism was applied in Vietnam's revolution.",
      category: "Practical Application",
      youtubeId: "4kKPteqwVX8",
    }
  ],
}

export default function VideoPage() {
  const { t, language } = useLanguage()
  const videoList = videos[language]
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<VideoItem | null>(null)

  // URL embed dùng youtube-nocookie + autoplay
  const embedUrl =
    active
      ? `https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`
      : ""

  const onOpenVideo = (video: VideoItem) => {
    setActive(video)
    setOpen(true)
  }

  const onClose = (nextOpen: boolean) => {
    // đóng dialog thì clear video để iframe unmount => dừng phát
    setOpen(nextOpen)
    if (!nextOpen) setActive(null)
  }

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
          {videoList.map((video, index) => {
            const thumbnail = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
            return (
              <Card
                key={video.id}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Thay <a> bằng button để mở Dialog */}
                <button
                  type="button"
                  onClick={() => onOpenVideo(video)}
                  className="block w-full text-left"
                  aria-label={video.title}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="lg"
                        className="rounded-full animate-bounce-slow transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <span>
                          <Play className="h-6 w-6" />
                        </span>
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
                      {video.duration ? (
                        <div className="flex items-center space-x-1 transition-all duration-300 hover:text-primary">
                          <Clock className="h-4 w-4 animate-pulse-slow" />
                          <span>{video.duration}</span>
                        </div>
                      ) : <span />}

                      {video.views ? (
                        <div className="flex items-center space-x-1 transition-all duration-300 hover:text-primary">
                          <Eye className="h-4 w-4 animate-pulse-slow" />
                          <span>{video.views}</span>
                        </div>
                      ) : <span />}
                    </div>
                  </CardContent>
                </button>
              </Card>
            )
          })}
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

      {/* Popup xem video */}
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
          {/* Nút đóng */}
          <DialogClose className="absolute right-2 top-2 rounded-full p-2 hover:bg-muted focus:outline-none">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{language === "vi" ? "Đóng" : "Close"}</span>
          </DialogClose>

          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="text-lg">{active?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {active?.description}
            </DialogDescription>
          </DialogHeader>

          {/* Video 16:9 */}
          <div className="px-4 pb-4">
            {/* Nếu không có AspectRatio, thay bằng <div className="aspect-video"> */}
            <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden">
              {active && open ? (
                <iframe
                  key={active.youtubeId} // key để reload khi đổi video
                  src={embedUrl}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : null}
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  )
}

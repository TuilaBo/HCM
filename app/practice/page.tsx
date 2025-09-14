"use client"

import { useState } from "react"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/contexts/language-context"
import { quizQuestions } from "@/data/questions" // Thay đổi ở đây

export default function PracticePage() {
  const { t, language } = useLanguage()
  const questionList = quizQuestions[language] // Thay đổi ở đây

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setQuizCompleted(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questionList[index].correct ? 1 : 0)
    }, 0)
  }

  const progress = ((currentQuestion + 1) / questionList.length) * 100
  const score = calculateScore()

  if (showResults) {
    return (
      <PageLayout>
        <div className="container py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-scale-in">
              <CardHeader className="text-center animate-fade-in-up animate-delay-200">
                <CardTitle className="text-3xl animate-bounce-slow">
                  {language === "vi" ? "Kết quả bài tập" : "Quiz Results"}
                </CardTitle>
                <CardDescription className="animate-fade-in-up animate-delay-300">
                  {language === "vi"
                    ? `Bạn đã trả lời đúng ${score}/${questionList.length} câu hỏi`
                    : `You answered ${score}/${questionList.length} questions correctly`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center animate-scale-in animate-delay-400">
                  <div className="text-6xl font-bold text-primary mb-2 animate-pulse-slow">
                    {Math.round((score / questionList.length) * 100)}%
                  </div>
                  <p className="text-muted-foreground animate-fade-in-up animate-delay-500">
                    {score === questionList.length
                      ? language === "vi"
                        ? "Xuất sắc!"
                        : "Excellent!"
                      : score >= questionList.length * 0.7
                      ? language === "vi"
                        ? "Tốt!"
                        : "Good!"
                      : language === "vi"
                        ? "Cần cải thiện"
                        : "Needs improvement"}
                  </p>
                </div>

                {/* Review answers */}
                <div className="space-y-4">
                  {questionList.map((question, index) => {
                    const userAnswer = selectedAnswers[index]
                    const isCorrect = userAnswer === question.correct

                    return (
                      <Card
                        key={question.id}
                        className={`${isCorrect ? "border-green-200" : "border-red-200"} animate-fade-in-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start space-x-2">
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 animate-bounce-slow" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500 mt-0.5 animate-pulse" />
                            )}
                            <div className="flex-1">
                              <CardTitle className="text-lg transition-colors duration-300 hover:text-primary">
                                {question.question}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground mt-2 transition-colors duration-300 hover:text-foreground">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    )
                  })}
                </div>

                <div className="flex justify-center space-x-4 animate-fade-in-up animate-delay-600">
                  <Button
                    onClick={handleRestart}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                    {language === "vi" ? "Làm lại" : "Restart"}
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href="/content">{language === "vi" ? "Xem lại nội dung" : "Review content"}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold animate-scale-in animate-delay-200">{t("practice")}</h1>
            <p className="text-muted-foreground animate-fade-in-up animate-delay-300">
              {language === "vi"
                ? "Kiểm tra kiến thức của bạn về tư tưởng Hồ Chí Minh"
                : "Test your knowledge about Ho Chi Minh's ideology"}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8 animate-fade-in-left animate-delay-400">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{language === "vi" ? "Tiến độ" : "Progress"}</span>
              <span className="animate-pulse">
                {currentQuestion + 1}/{questionList.length}
              </span>
            </div>
            <Progress value={progress} className="h-2 transition-all duration-500" />
          </div>

          {/* Question */}
          <Card className="animate-fade-in-right animate-delay-500 hover:shadow-xl transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl animate-fade-in-up animate-delay-600">
                {questionList[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswers[currentQuestion]?.toString()}
                onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
              >
                {questionList[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 animate-fade-in-left transition-all duration-300 hover:bg-muted/50 p-2 rounded-lg"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="transition-all duration-300 hover:scale-110"
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer transition-colors duration-300 hover:text-primary"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8 animate-fade-in-up animate-delay-600">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="transition-all duration-300 hover:scale-105 disabled:opacity-50 bg-transparent"
            >
              {language === "vi" ? "Câu trước" : "Previous"}
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
            >
              {currentQuestion === questionList.length - 1
                ? language === "vi"
                  ? "Hoàn thành"
                  : "Finish"
                : language === "vi"
                  ? "Câu tiếp"
                  : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
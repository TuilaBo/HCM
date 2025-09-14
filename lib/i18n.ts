export const translations = {
  vi: {
    // Navigation
    home: "Trang chủ",
    content: "Nội dung",
    video: "Video",
    practice: "Ôn tập",

    // Common
    language: "Ngôn ngữ",
    readText: "Đọc văn bản",

    mainTitle: "Tư tưởng Hồ Chí Minh về Chủ nghĩa xã hội và Xây dựng Chủ nghĩa xã hội ở Việt Nam",
    chapterTitle: "Chương 3: Tư tưởng Hồ Chí Minh về Chủ nghĩa xã hội và Xây dựng Chủ nghĩa xã hội ở Việt Nam",

    // Content sections
    section1Title: "Tư tưởng của Hồ Chí Minh về chủ nghĩa xã hội",
    section1_1: "Tư tưởng của Hồ Chí Minh về chủ nghĩa xã hội",
    section1_2: "Việc tiến lên xã hội chủ nghĩa là một yếu tố khách quan",
    section1_3: "Một số đặc trưng cơ bản của xã hội xã hội chủ nghĩa",
    section2Title: "Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội ở Việt Nam",
    section2_1: "Mục tiêu xã hội chủ nghĩa ở Việt Nam",
    section2_2: "Động lực của chủ nghĩa xã hội ở Việt Nam",
  },
  en: {
    // Navigation
    home: "Home",
    content: "Content",
    video: "Video",
    practice: "Practice",

    // Common
    language: "Language",
    readText: "Read Text",

    mainTitle: "Ho Chi Minh's Ideology on Socialism and Building Socialism in Vietnam",
    chapterTitle: "Chapter 3: Ho Chi Minh's Ideology on Socialism and Building Socialism in Vietnam",

    // Content sections
    section1Title: "Ho Chi Minh's Thoughts on Socialism",
    section1_1: "Ho Chi Minh's thoughts on socialism",
    section1_2: "The transition to socialism as an objective factor",
    section1_3: "Some basic characteristics of socialist society",
    section2Title: "Ho Chi Minh's Thoughts on Building Socialism in Vietnam",
    section2_1: "Goals of socialism in Vietnam",
    section2_2: "Driving forces of socialism in Vietnam",
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.vi

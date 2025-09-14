import { QuizQuestion } from "@/types";

export const quizQuestions: {
  vi: QuizQuestion[];
  en: QuizQuestion[];
} = {
  vi: [
    {
      id: 1,
      question: "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ những khía cạnh nào?",
      options: [
        "Chính trị, kinh tế, văn hóa, đạo đức",
        "Quân sự, ngoại giao, thương mại",
        "Tôn giáo, phong tục, tập quán",
        "Khoa học, kỹ thuật, công nghệ",
      ],
      correct: 0,
      explanation:
        "Hồ Chí Minh tiếp cận chủ nghĩa xã hội một cách toàn diện trên các mặt chính trị, kinh tế, văn hóa và đạo đức.",
    },
    {
      id: 2,
      question: "Theo Hồ Chí Minh, mục tiêu cơ bản và mộc mạc nhất của chủ nghĩa xã hội là gì?",
      options: [
        "Xây dựng nhà nước phong kiến tập quyền",
        "Xóa bỏ nghèo nàn, lạc hậu, mang lại ấm no, hạnh phúc cho nhân dân",
        "Mở rộng lãnh thổ và tăng cường quân đội",
        "Phát triển công nghệ hiện đại trước hết",
      ],
      correct: 1,
      explanation:
        "Mục tiêu cuối cùng của chủ nghĩa xã hội là mang lại cuộc sống ấm no, hạnh phúc cho nhân dân.",
    },
    {
      id: 3,
      question: "Sự khác biệt giữa chủ nghĩa xã hội và chủ nghĩa cộng sản ở các giai đoạn phát triển là gì?",
      options: [
        "Khác nhau về phương thức sản xuất",
        "Khác nhau về trình độ phát triển kinh tế – xã hội",
        "Khác nhau về hình thức tổ chức nhà nước",
        "Khác nhau về ngôn ngữ và văn hóa",
      ],
      correct: 1,
      explanation:
        "Hai giai đoạn này khác nhau về trình độ phát triển, chủ nghĩa cộng sản là giai đoạn cao hơn.",
    },
    {
      id: 4,
      question: "Điểm giống nhau giữa giai đoạn chủ nghĩa xã hội và chủ nghĩa cộng sản là gì?",
      options: [
        "Đều còn tồn tại giai cấp đối kháng",
        "Đều dựa trên sở hữu tư nhân về tư liệu sản xuất",
        "Đều hướng tới giải phóng con người, xây dựng xã hội công bằng, hạnh phúc",
        "Đều duy trì chế độ phong kiến",
      ],
      correct: 2,
      explanation:
        "Cả hai giai đoạn đều hướng đến một mục tiêu chung là xây dựng xã hội tốt đẹp cho con người.",
    },
    {
      id: 5,
      question: "Vì sao Hồ Chí Minh khẳng định tiến lên chủ nghĩa xã hội là yếu tố khách quan?",
      options: [
        "Do mong muốn chủ quan của nhân dân",
        "Do quy luật phát triển tất yếu của xã hội loài người",
        "Do áp lực từ các nước xã hội chủ nghĩa khác",
        "Do chính sách đối ngoại bắt buộc",
      ],
      correct: 1,
      explanation:
        "Chủ nghĩa xã hội là giai đoạn phát triển tất yếu theo quy luật tiến hóa của lịch sử.",
    },
    {
      id: 6,
      question: "Học thuyết hình thái kinh tế - xã hội của C. Mác giải thích quy luật phát triển xã hội loài người như thế nào?",
      options: [
        "Dựa trên biến đổi chính trị của các quốc gia",
        "Dựa trên sự thay đổi tôn giáo và văn hóa",
        "Dựa trên sự vận động và phát triển của lực lượng sản xuất và quan hệ sản xuất",
        "Dựa trên sự phân chia địa lý và tự nhiên",
      ],
      correct: 2,
      explanation:
        "Học thuyết này chỉ ra rằng sự phát triển của xã hội dựa trên sự thay đổi trong nền tảng kinh tế.",
    },
    {
      id: 7,
      question: "Hồ Chí Minh đã vận dụng học thuyết Mác vào thực tiễn Việt Nam ra sao?",
      options: [
        "Giữ nguyên lý luận, không thay đổi gì",
        "Vận dụng sáng tạo, phù hợp với đặc điểm dân tộc và thực tiễn Việt Nam",
        "Bỏ qua yếu tố giai cấp để tập trung vào kinh tế",
        "Chỉ áp dụng một phần về chính trị",
      ],
      correct: 1,
      explanation:
        "Người đã vận dụng học thuyết một cách linh hoạt, sáng tạo để phù hợp với hoàn cảnh đặc thù của Việt Nam.",
    },
    {
      id: 8,
      question: "Trình bày quy trình phát triển của các chế độ xã hội theo quan điểm Mác – Lênin.",
      options: [
        "Cộng sản nguyên thủy → Chiếm hữu nô lệ → Phong kiến → Tư bản chủ nghĩa → Xã hội chủ nghĩa → Cộng sản chủ nghĩa",
        "Phong kiến → Nô lệ → Xã hội chủ nghĩa → Tư bản chủ nghĩa → Cộng sản chủ nghĩa",
        "Tư bản chủ nghĩa → Phong kiến → Nô lệ → Xã hội chủ nghĩa → Cộng sản chủ nghĩa",
        "Xã hội chủ nghĩa → Cộng sản nguyên thủy → Tư bản chủ nghĩa → Cộng sản chủ nghĩa",
      ],
      correct: 0,
      explanation:
        "Đây là quy trình phát triển tất yếu của xã hội loài người theo quan điểm của Mác và Lênin.",
    },
    {
      id: 9,
      question: "Chế độ dân chủ mới có vai trò gì trong tiến trình cách mạng Việt Nam?",
      options: [
        "Làm bước đệm, quá độ lên chủ nghĩa xã hội",
        "Là giai đoạn cuối cùng của cách mạng",
        "Làm suy yếu phong kiến để tái lập tư bản chủ nghĩa",
        "Giúp Việt Nam hội nhập quốc tế nhanh hơn",
      ],
      correct: 0,
      explanation:
        "Sau khi hoàn thành cách mạng dân tộc dân chủ, Việt Nam tiến lên chủ nghĩa xã hội qua chế độ dân chủ mới.",
    },
    {
      id: 10,
      question: "Năm 1953, Hồ Chí Minh nêu quan điểm gì về sự khác biệt con đường phát triển xã hội giữa các dân tộc?",
      options: [
        "Tất cả các dân tộc đều phải đi qua chế độ tư bản chủ nghĩa",
        "Mỗi dân tộc có con đường phát triển khác nhau, có thể bỏ qua tư bản chủ nghĩa",
        "Các dân tộc lạc hậu không thể xây dựng chủ nghĩa xã hội",
        "Các dân tộc phải đi theo một mô hình duy nhất",
      ],
      correct: 1,
      explanation:
        "Hồ Chí Minh khẳng định con đường lên chủ nghĩa xã hội có thể khác nhau ở mỗi dân tộc.",
    },
    {
      id: 11,
      question: "Vì sao một số nước (Liên Xô, Trung Quốc, Việt Nam) có thể bỏ qua chế độ tư bản chủ nghĩa?",
      options: [
        "Do ảnh hưởng của địa lý tự nhiên",
        "Do trình độ khoa học kỹ thuật phát triển",
        "Do có sự lãnh đạo của Đảng cộng sản và phong trào giải phóng dân tộc",
        "Do áp lực từ phương Tây",
      ],
      correct: 2,
      explanation:
        "Yếu tố quyết định là sự lãnh đạo của Đảng Cộng sản và phong trào đấu tranh của nhân dân.",
    },
    {
      id: 12,
      question: "Theo Hồ Chí Minh, những đặc trưng cơ bản nhất của xã hội xã hội chủ nghĩa là gì?",
      options: [
        "Giàu có, hiện đại, quân đội mạnh",
        "Nhân dân lao động làm chủ, kinh tế phát triển, văn hóa tiến bộ, công bằng xã hội",
        "Phát triển công nghệ và thương mại quốc tế",
        "Tập trung xây dựng bộ máy nhà nước mạnh",
      ],
      correct: 1,
      explanation:
        "Đây là những đặc trưng toàn diện về chính trị, kinh tế, văn hóa và xã hội.",
    },
    {
      id: 13,
      question: "Trong đặc trưng về chính trị, vai trò của nhân dân trong xã hội xã hội chủ nghĩa được thể hiện thế nào?",
      options: [
        "Nhân dân làm thuê cho nhà nước",
        "Nhân dân là chủ và làm chủ xã hội",
        "Nhân dân chỉ có quyền tham khảo ý kiến",
        "Nhân dân không tham gia vào quản lý",
      ],
      correct: 1,
      explanation:
        "Hồ Chí Minh khẳng định nhân dân là người chủ thực sự của xã hội.",
    },
    {
      id: 14,
      question: "Về kinh tế, Hồ Chí Minh xác định nền kinh tế xã hội chủ nghĩa phải dựa trên yếu tố nào?",
      options: [
        "Kinh tế thị trường tự do tuyệt đối",
        "Nền tảng công hữu về tư liệu sản xuất và phát triển nhiều thành phần kinh tế",
        "Sở hữu tư nhân toàn bộ về tư liệu sản xuất",
        "Nền kinh tế phong kiến kết hợp hiện đại",
      ],
      correct: 1,
      explanation:
        "Hồ Chí Minh chủ trương một nền kinh tế đa dạng nhưng vẫn lấy sở hữu công làm nền tảng.",
    },
    {
      id: 15,
      question: "Về văn hóa, Hồ Chí Minh đề cao những giá trị nào để xây dựng con người mới xã hội chủ nghĩa?",
      options: [
        "Đề cao vật chất, kỹ thuật, khoa học hiện đại",
        "Đề cao giá trị tinh thần, đạo đức, nhân văn, tri thức",
        "Đề cao sức mạnh quân sự và chính trị",
        "Đề cao kinh nghiệm phong kiến truyền thống",
      ],
      correct: 1,
      explanation:
        "Người đề cao việc giáo dục đạo đức, tri thức và lối sống lành mạnh.",
    },
    {
      id: 16,
      question: "Mục tiêu chính trị của chủ nghĩa xã hội ở Việt Nam theo tư tưởng Hồ Chí Minh là gì?",
      options: [
        "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
        "Mở rộng quan hệ đối ngoại",
        "Phát triển kinh tế nhanh chóng",
        "Giữ vững độc lập quốc gia",
      ],
      correct: 0,
      explanation:
        "Đây là mục tiêu toàn diện, thống nhất về chính trị, kinh tế và xã hội.",
    },
    {
      id: 17,
      question: "Mục tiêu kinh tế của chủ nghĩa xã hội ở Việt Nam là gì và có ý nghĩa thế nào?",
      options: [
        "Xây dựng nền kinh tế tập trung quan liêu bao cấp",
        "Xây dựng nền kinh tế công hữu tuyệt đối",
        "Xây dựng nền kinh tế phát triển cao, gắn liền với công bằng xã hội, nâng cao đời sống nhân dân",
        "Phát triển kinh tế tư bản hiện đại",
      ],
      correct: 2,
      explanation:
        "Mục tiêu kinh tế không chỉ là phát triển mà còn phải phục vụ con người.",
    },
    {
      id: 18,
      question: "Mục tiêu văn hóa trong công cuộc xây dựng chủ nghĩa xã hội được Hồ Chí Minh xác định như thế nào?",
      options: [
        "Văn hóa phục vụ chính trị đơn thuần",
        "Văn hóa phải phát triển toàn diện, vừa dân tộc, vừa khoa học, vừa đại chúng",
        "Văn hóa chỉ tập trung vào tinh hoa truyền thống",
        "Văn hóa du nhập hoàn toàn từ phương Tây",
      ],
      correct: 1,
      explanation:
        "Văn hóa phải vừa giữ bản sắc dân tộc, vừa tiếp thu tinh hoa khoa học, đồng thời phổ cập đến mọi người dân.",
    },
    {
      id: 19,
      question: "Động lực quan trọng nhất của chủ nghĩa xã hội ở Việt Nam theo Hồ Chí Minh là gì?",
      options: [
        "Con người, sức sáng tạo và tinh thần làm chủ của nhân dân",
        "Vũ khí và sức mạnh quân sự",
        "Sự hỗ trợ từ các nước xã hội chủ nghĩa khác",
        "Sự phát triển của khoa học kỹ thuật",
      ],
      correct: 0,
      explanation:
        "Hồ Chí Minh luôn đặt con người ở vị trí trung tâm của sự phát triển.",
    },
    {
      id: 20,
      question: "Phương châm “Xây đi đôi với Chống” trong xây dựng chủ nghĩa xã hội có ý nghĩa gì?",
      options: [
        "Chỉ tập trung vào xây dựng mà không cần chống tiêu cực",
        "Vừa xây dựng cái mới, vừa đấu tranh loại bỏ cái cũ, cái xấu",
        "Tạm thời chấp nhận cái cũ để phát triển cái mới",
        "Chỉ chống cái cũ, không cần xây cái mới",
      ],
      correct: 1,
      explanation:
        "Đây là một nguyên tắc cơ bản trong xây dựng xã hội mới, loại bỏ cái cũ để xây dựng cái mới.",
    },
  ],
  en: [
    {
      id: 1,
      question: "From which aspects did Ho Chi Minh approach socialism?",
      options: [
        "Political, economic, cultural, ethical",
        "Military, diplomatic, commercial",
        "Religious, customs, traditions",
        "Scientific, technical, technological",
      ],
      correct: 0,
      explanation:
        "Ho Chi Minh approached socialism comprehensively from political, economic, cultural, and ethical aspects.",
    },
    {
      id: 2,
      question: "According to Ho Chi Minh, what is the most basic and simple goal of socialism?",
      options: [
        "Building a centralized feudal state",
        "Eliminating poverty and backwardness, bringing prosperity and happiness to the people",
        "Expanding territory and strengthening the military",
        "Developing modern technology first",
      ],
      correct: 1,
      explanation:
        "The ultimate goal of socialism is to bring a prosperous and happy life to the people.",
    },
    {
      id: 3,
      question: "What is the difference between socialism and communism in their stages of development?",
      options: [
        "Differences in production methods",
        "Differences in the level of socio-economic development",
        "Differences in the form of state organization",
        "Differences in language and culture",
      ],
      correct: 1,
      explanation:
        "These two stages differ in their level of development; communism is a higher stage.",
    },
    {
      id: 4,
      question: "What is the similarity between the socialist and communist stages?",
      options: [
        "Both still have antagonistic classes",
        "Both are based on private ownership of the means of production",
        "Both aim to liberate humanity, build a just and happy society",
        "Both maintain a feudal system",
      ],
      correct: 2,
      explanation:
        "Both stages share a common goal of building a better society for humanity.",
    },
    {
      id: 5,
      question: "Why did Ho Chi Minh assert that advancing to socialism is an objective factor?",
      options: [
        "Due to the people's subjective desires",
        "Due to the inevitable law of human social development",
        "Due to pressure from other socialist countries",
        "Due to mandatory foreign policy",
      ],
      correct: 1,
      explanation:
        "Socialism is an inevitable stage of development according to the law of historical evolution.",
    },
    {
      id: 6,
      question: "How does C. Marx's theory of socio-economic formations explain the law of human social development?",
      options: [
        "Based on the political changes of nations",
        "Based on changes in religion and culture",
        "Based on the movement and development of productive forces and relations of production",
        "Based on geographical and natural divisions",
      ],
      correct: 2,
      explanation:
        "This theory indicates that social development is based on changes in the economic foundation.",
    },
    {
      id: 7,
      question: "How did Ho Chi Minh apply Marx's theory to the reality of Vietnam?",
      options: [
        "By strictly adhering to the original theory, without any changes",
        "By creatively applying it, suitable for the national characteristics and reality of Vietnam",
        "By ignoring the class factor to focus on the economy",
        "By only applying a part of it related to politics",
      ],
      correct: 2,
      explanation:
        "He applied the theory flexibly and creatively to suit Vietnam's specific circumstances.",
    },
    {
      id: 8,
      question: "Describe the development process of social systems according to Marx-Lenin's view.",
      options: [
        "Primitive Communism → Slave Society → Feudalism → Capitalism → Socialism → Communism",
        "Feudalism → Slavery → Socialism → Capitalism → Communism",
        "Capitalism → Feudalism → Slavery → Socialism → Communism",
        "Socialism → Primitive Communism → Capitalism → Communism",
      ],
      correct: 0,
      explanation:
        "This is the inevitable development process of human society according to Marx and Lenin.",
    },
    {
      id: 9,
      question: "What is the role of the new democracy regime in the Vietnamese revolution's progress?",
      options: [
        "To serve as a transitional step to socialism",
        "To be the final stage of the revolution",
        "To weaken feudalism to re-establish capitalism",
        "To help Vietnam integrate internationally faster",
      ],
      correct: 0,
      explanation:
        "After completing the national democratic revolution, Vietnam moves towards socialism through the new democracy regime.",
    },
    {
      id: 10,
      question: "In 1953, what was Ho Chi Minh's view on the different paths of social development among nations?",
      options: [
        "All nations must go through the capitalist stage",
        "Each nation has a different development path and can bypass capitalism",
        "Backward nations cannot build socialism",
        "Nations must follow a single model",
      ],
      correct: 1,
      explanation:
        "Ho Chi Minh affirmed that the path to socialism can be different for each nation.",
    },
    {
      id: 11,
      question: "Why could some countries (the Soviet Union, China, Vietnam) bypass the capitalist stage?",
      options: [
        "Due to the influence of natural geography",
        "Due to advanced scientific and technical levels",
        "Due to the leadership of the Communist Party and national liberation movements",
        "Due to pressure from the West",
      ],
      correct: 2,
      explanation:
        "The decisive factor was the leadership of the Communist Party and the people's struggle movements.",
    },
    {
      id: 12,
      question: "According to Ho Chi Minh, what are the most fundamental characteristics of a socialist society?",
      options: [
        "Wealthy, modern, with a strong military",
        "The working people are masters, the economy is developed, culture is progressive, and there is social justice",
        "Development of technology and international trade",
        "Focus on building a strong state apparatus",
      ],
      correct: 1,
      explanation:
        "These are the comprehensive characteristics of a socialist society in terms of politics, economy, culture, and society.",
    },
    {
      id: 13,
      question: "In terms of political characteristics, how is the role of the people in a socialist society expressed?",
      options: [
        "The people are employees of the state",
        "The people are the masters and control society",
        "The people only have the right to give opinions",
        "The people do not participate in management",
      ],
      correct: 1,
      explanation: "Ho Chi Minh affirmed that the people are the true masters of society.",
    },
    {
      id: 14,
      question: "Regarding the economy, what did Ho Chi Minh identify as the basis for a socialist economy?",
      options: [
        "Absolute free-market economy",
        "The foundation of public ownership of the means of production and the development of multiple economic sectors",
        "Complete private ownership of the means of production",
        "A combination of feudal and modern economies",
      ],
      correct: 1,
      explanation:
        "Ho Chi Minh advocated for a diverse economy that still uses public ownership as its foundation.",
    },
    {
      id: 15,
      question: "Regarding culture, what values did Ho Chi Minh emphasize for building a new socialist person?",
      options: [
        "Emphasizing material, technical, and modern scientific values",
        "Emphasizing spiritual, ethical, humanistic, and intellectual values",
        "Emphasizing military and political power",
        "Emphasizing traditional feudal experiences",
      ],
      correct: 1,
      explanation:
        "He emphasized the education of ethics, knowledge, and a healthy lifestyle.",
    },
    {
      id: 16,
      question: "What is the political goal of socialism in Vietnam according to Ho Chi Minh's ideology?",
      options: [
        "A rich people, a strong country, democracy, justice, civilization",
        "Expanding foreign relations",
        "Rapid economic development",
        "Maintaining national independence",
      ],
      correct: 0,
      explanation:
        "This is a comprehensive and unified goal covering politics, economy, and society.",
    },
    {
      id: 17,
      question: "What is the economic goal of socialism in Vietnam and what is its significance?",
      options: [
        "Building a centralized bureaucratic subsidy economy",
        "Building an absolute public ownership economy",
        "Building a highly developed economy, linked to social justice and improving the people's lives",
        "Developing a modern capitalist economy",
      ],
      correct: 2,
      explanation:
        "The economic goal is not just development but also serving the people.",
    },
    {
      id: 18,
      question: "How did Ho Chi Minh define the cultural goal in building socialism?",
      options: [
        "Culture serving politics alone",
        "Culture must be comprehensively developed, both national, scientific, and popular",
        "Culture only focusing on traditional essence",
        "Culture imported entirely from the West",
      ],
      correct: 1,
      explanation:
        "Culture must preserve national identity, absorb scientific essence, and be popularized to all people.",
    },
    {
      id: 19,
      question: "What is the most important driving force for socialism in Vietnam according to Ho Chi Minh?",
      options: [
        "People, their creativity, and their spirit of being masters",
        "Weapons and military power",
        "Support from other socialist countries",
        "The development of science and technology",
      ],
      correct: 0,
      explanation:
        "Ho Chi Minh always placed the people at the center of development.",
    },
    {
      id: 20,
      question: "What is the meaning of the principle “Build goes with Fight” in building socialism?",
      options: [
        "Only focusing on building without fighting against negativity",
        "Both building the new and fighting to eliminate the old and bad",
        "Temporarily accepting the old to develop the new",
        "Only fighting the old, without the need to build the new",
      ],
      correct: 1,
      explanation:
        "This is a fundamental principle in building a new society, removing the old to build the new.",
    },
  ],
};
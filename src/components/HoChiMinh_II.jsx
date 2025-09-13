/*
 * Dependencies required:
 * npm install framer-motion tailwindcss
 * 
 * Optional Google Fonts imports (add to index.html or CSS):
 * <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import banner1 from '../assets/1.png';
import banner2 from '../assets/2.png';

const HoChiMinh_II = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showTOC, setShowTOC] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tu-tuong', 'yeu-to-khach-quan', 'dac-trung-co-ban', 'xay-dung-xhcn', 'muc-tieu-xhcn', 'dong-luc-xhcn', 'quiz'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: quizQuestions.length };
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const quizQuestions = [
    {
      question: "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ những khía cạnh nào?",
      options: {
        A: "Chính trị, kinh tế, văn hóa, đạo đức",
        B: "Quân sự, ngoại giao, thương mại",
        C: "Tôn giáo, phong tục, tập quán",
        D: "Khoa học, kỹ thuật, công nghệ"
      },
      correctAnswer: "A"
    },
    {
      question: "Theo Hồ Chí Minh, mục tiêu cơ bản và mộc mạc nhất của chủ nghĩa xã hội là gì?",
      options: {
        A: "Xây dựng nhà nước phong kiến tập quyền",
        B: "Xóa bỏ nghèo nàn, lạc hậu, mang lại ấm no, hạnh phúc cho nhân dân",
        C: "Mở rộng lãnh thổ và tăng cường quân đội",
        D: "Phát triển công nghệ hiện đại trước hết"
      },
      correctAnswer: "B"
    },
    {
      question: "Sự khác biệt giữa chủ nghĩa xã hội và chủ nghĩa cộng sản ở các giai đoạn phát triển là gì?",
      options: {
        A: "Khác nhau về phương thức sản xuất",
        B: "Khác nhau về trình độ phát triển kinh tế – xã hội",
        C: "Khác nhau về hình thức tổ chức nhà nước",
        D: "Khác nhau về ngôn ngữ và văn hóa"
      },
      correctAnswer: "B"
    },
    {
      question: "Điểm giống nhau giữa giai đoạn chủ nghĩa xã hội và chủ nghĩa cộng sản là gì?",
      options: {
        A: "Đều còn tồn tại giai cấp đối kháng",
        B: "Đều dựa trên sở hữu tư nhân về tư liệu sản xuất",
        C: "Đều hướng tới giải phóng con người, xây dựng xã hội công bằng, hạnh phúc",
        D: "Đều duy trì chế độ phong kiến"
      },
      correctAnswer: "C"
    },
    {
      question: "Vì sao Hồ Chí Minh khẳng định tiến lên chủ nghĩa xã hội là yếu tố khách quan?",
      options: {
        A: "Do mong muốn chủ quan của nhân dân",
        B: "Do quy luật phát triển tất yếu của xã hội loài người",
        C: "Do áp lực từ các nước xã hội chủ nghĩa khác",
        D: "Do chính sách đối ngoại bắt buộc"
      },
      correctAnswer: "B"
    },
    {
      question: "Học thuyết hình thái kinh tế - xã hội của C. Mác giải thích quy luật phát triển xã hội loài người như thế nào?",
      options: {
        A: "Dựa trên biến đổi chính trị của các quốc gia",
        B: "Dựa trên sự thay đổi tôn giáo và văn hóa",
        C: "Dựa trên sự vận động và phát triển của lực lượng sản xuất và quan hệ sản xuất",
        D: "Dựa trên sự phân chia địa lý và tự nhiên"
      },
      correctAnswer: "C"
    },
    {
      question: "Hồ Chí Minh đã vận dụng học thuyết Mác vào thực tiễn Việt Nam ra sao?",
      options: {
        A: "Giữ nguyên lý luận, không thay đổi gì",
        B: "Vận dụng sáng tạo, phù hợp với đặc điểm dân tộc và thực tiễn Việt Nam",
        C: "Bỏ qua yếu tố giai cấp để tập trung vào kinh tế",
        D: "Chỉ áp dụng một phần về chính trị"
      },
      correctAnswer: "B"
    },
    {
      question: "Trình bày quy trình phát triển của các chế độ xã hội theo quan điểm Mác – Lênin.",
      options: {
        A: "Cộng sản nguyên thủy → Chiếm hữu nô lệ → Phong kiến → Tư bản chủ nghĩa → Xã hội chủ nghĩa → Cộng sản chủ nghĩa",
        B: "Phong kiến → Nô lệ → Xã hội chủ nghĩa → Tư bản chủ nghĩa → Cộng sản chủ nghĩa",
        C: "Tư bản chủ nghĩa → Phong kiến → Nô lệ → Xã hội chủ nghĩa → Cộng sản chủ nghĩa",
        D: "Xã hội chủ nghĩa → Cộng sản nguyên thủy → Tư bản chủ nghĩa → Cộng sản chủ nghĩa"
      },
      correctAnswer: "A"
    },
    {
      question: "Chế độ dân chủ mới có vai trò gì trong tiến trình cách mạng Việt Nam?",
      options: {
        A: "Làm bước đệm, quá độ lên chủ nghĩa xã hội",
        B: "Là giai đoạn cuối cùng của cách mạng",
        C: "Làm suy yếu phong kiến để tái lập tư bản chủ nghĩa",
        D: "Giúp Việt Nam hội nhập quốc tế nhanh hơn"
      },
      correctAnswer: "A"
    },
    {
      question: "Năm 1953, Hồ Chí Minh nêu quan điểm gì về sự khác biệt con đường phát triển xã hội giữa các dân tộc?",
      options: {
        A: "Tất cả các dân tộc đều phải đi qua chế độ tư bản chủ nghĩa",
        B: "Mỗi dân tộc có con đường phát triển khác nhau, có thể bỏ qua tư bản chủ nghĩa",
        C: "Các dân tộc lạc hậu không thể xây dựng chủ nghĩa xã hội",
        D: "Các dân tộc phải đi theo một mô hình duy nhất"
      },
      correctAnswer: "B"
    },
    {
      question: "Vì sao một số nước (Liên Xô, Trung Quốc, Việt Nam) có thể bỏ qua chế độ tư bản chủ nghĩa?",
      options: {
        A: "Do ảnh hưởng của địa lý tự nhiên",
        B: "Do trình độ khoa học kỹ thuật phát triển",
        C: "Do có sự lãnh đạo của Đảng cộng sản và phong trào giải phóng dân tộc",
        D: "Do áp lực từ phương Tây"
      },
      correctAnswer: "C"
    },
    {
      question: "Theo Hồ Chí Minh, những đặc trưng cơ bản nhất của xã hội xã hội chủ nghĩa là gì?",
      options: {
        A: "Giàu có, hiện đại, quân đội mạnh",
        B: "Nhân dân lao động làm chủ, kinh tế phát triển, văn hóa tiến bộ, công bằng xã hội",
        C: "Phát triển công nghệ và thương mại quốc tế",
        D: "Tập trung xây dựng bộ máy nhà nước mạnh"
      },
      correctAnswer: "B"
    },
    {
      question: "Trong đặc trưng về chính trị, vai trò của nhân dân trong xã hội xã hội chủ nghĩa được thể hiện thế nào?",
      options: {
        A: "Nhân dân làm thuê cho nhà nước",
        B: "Nhân dân là chủ và làm chủ xã hội",
        C: "Nhân dân chỉ có quyền tham khảo ý kiến",
        D: "Nhân dân không tham gia vào quản lý"
      },
      correctAnswer: "B"
    },
    {
      question: "Về kinh tế, Hồ Chí Minh xác định nền kinh tế xã hội chủ nghĩa phải dựa trên yếu tố nào?",
      options: {
        A: "Kinh tế thị trường tự do tuyệt đối",
        B: "Nền tảng công hữu về tư liệu sản xuất và phát triển nhiều thành phần kinh tế",
        C: "Sở hữu tư nhân toàn bộ về tư liệu sản xuất",
        D: "Nền kinh tế phong kiến kết hợp hiện đại"
      },
      correctAnswer: "B"
    },
    {
      question: "Về văn hóa, Hồ Chí Minh đề cao những giá trị nào để xây dựng con người mới xã hội chủ nghĩa?",
      options: {
        A: "Đề cao vật chất, kỹ thuật, khoa học hiện đại",
        B: "Đề cao giá trị tinh thần, đạo đức, nhân văn, tri thức",
        C: "Đề cao sức mạnh quân sự và chính trị",
        D: "Đề cao kinh nghiệm phong kiến truyền thống"
      },
      correctAnswer: "B"
    },
    {
      question: "Mục tiêu chính trị của chủ nghĩa xã hội ở Việt Nam theo tư tưởng Hồ Chí Minh là gì?",
      options: {
        A: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
        B: "Mở rộng quan hệ đối ngoại",
        C: "Phát triển kinh tế nhanh chóng",
        D: "Giữ vững độc lập quốc gia"
      },
      correctAnswer: "A"
    },
    {
      question: "Mục tiêu kinh tế của chủ nghĩa xã hội ở Việt Nam là gì và có ý nghĩa thế nào?",
      options: {
        A: "Xây dựng nền kinh tế tập trung quan liêu bao cấp",
        B: "Xây dựng nền kinh tế công hữu tuyệt đối",
        C: "Xây dựng nền kinh tế phát triển cao, gắn liền với công bằng xã hội, nâng cao đời sống nhân dân",
        D: "Phát triển kinh tế tư bản hiện đại"
      },
      correctAnswer: "C"
    },
    {
      question: "Mục tiêu văn hóa trong công cuộc xây dựng chủ nghĩa xã hội được Hồ Chí Minh xác định như thế nào?",
      options: {
        A: "Văn hóa phục vụ chính trị đơn thuần",
        B: "Văn hóa phải phát triển toàn diện, vừa dân tộc, vừa khoa học, vừa đại chúng",
        C: "Văn hóa chỉ tập trung vào tinh hoa truyền thống",
        D: "Văn hóa du nhập hoàn toàn từ phương Tây"
      },
      correctAnswer: "B"
    },
    {
      question: "Động lực quan trọng nhất của chủ nghĩa xã hội ở Việt Nam theo Hồ Chí Minh là gì?",
      options: {
        A: "Con người, sức sáng tạo và tinh thần làm chủ của nhân dân",
        B: "Vũ khí và sức mạnh quân sự",
        C: "Sự hỗ trợ từ các nước xã hội chủ nghĩa khác",
        D: "Sự phát triển của khoa học kỹ thuật"
      },
      correctAnswer: "A"
    },
    {
      question: "Phương châm \"Xây đi đôi với Chống\" trong xây dựng chủ nghĩa xã hội có ý nghĩa gì?",
      options: {
        A: "Chỉ tập trung vào xây dựng mà không cần chống tiêu cực",
        B: "Vừa xây dựng cái mới, vừa đấu tranh loại bỏ cái cũ, cái xấu",
        C: "Tạm thời chấp nhận cái cũ để phát triển cái mới",
        D: "Chỉ chống cái cũ, không cần xây cái mới"
      },
      correctAnswer: "B"
    }
  ];

  const tocItems = [
    { 
      id: 'tu-tuong', 
      title: '1. Tư tưởng của HCM về CNXH',
      children: [
        { id: 'tu-tuong', title: '1.1. Tư tưởng của HCM về CNXH' },
        { id: 'yeu-to-khach-quan', title: '1.2. Việc tiến lên XHCN là 1 yếu tố khách quan' },
        { id: 'dac-trung-co-ban', title: '1.3. Một số đặc trưng cơ bản của xã hội XHCN' }
      ]
    },
    { 
      id: 'xay-dung-xhcn', 
      title: '2. Tư Tưởng HCM về Xây dựng XHCN ở Việt Nam',
      children: [
        { id: 'muc-tieu-xhcn', title: '2.1. Mục tiêu Xã Hội Chủ Nghĩa ở Việt Nam' },
        { id: 'dong-luc-xhcn', title: '2.2. Động lực của chủ nghĩa xã hội ở Việt Nam' }
      ]
    },
    { 
      id: 'quiz', 
      title: '3. Câu hỏi ôn tập'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-[#F59E0B] rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-1 h-1 bg-[#F59E0B] rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-[#F59E0B] rounded-full opacity-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* TOC Toggle Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => setShowTOC(!showTOC)}
        className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 p-3 rounded-xl shadow-2xl transition-all duration-300 ${
          showTOC 
            ? 'bg-gradient-to-br from-[#F59E0B] to-[#DC2626] text-white' 
            : 'bg-gradient-to-br from-[#DC2626] to-[#B91C1C] text-white hover:from-[#F59E0B] hover:to-[#DC2626]'
        }`}
      >
        <motion.div
          animate={{ rotate: showTOC ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Table of Contents */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: showTOC ? 1 : 0, x: showTOC ? 0 : 50 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-1/2 right-16 transform -translate-y-1/2 z-50 ${showTOC ? 'block' : 'hidden'}`}
      >
        <div className="bg-gradient-to-br from-white/95 via-[#FEF2F2]/90 to-[#FEF7CD]/90 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-[#F59E0B]/30 max-w-xs relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F59E0B]/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#DC2626]/20 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
          
          <h3 className="font-serif text-[#DC2626] text-sm font-semibold mb-4 relative z-10 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Mục lục
          </h3>
          <ul className="space-y-2 relative z-10">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs text-left transition-all duration-300 hover:text-[#DC2626] w-full text-left p-2 rounded-lg hover:bg-white/50 ${
                    activeSection === item.id 
                      ? 'text-[#DC2626] font-semibold bg-white/60 shadow-sm' 
                      : 'text-[#B91C1C] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      activeSection === item.id ? 'bg-[#F59E0B]' : 'bg-[#F59E0B]/50'
                    }`}></div>
                    {item.title}
                  </div>
                </button>
                {item.children && (
                  <ul className="ml-4 mt-2 space-y-1 border-l border-[#F59E0B]/30 pl-3">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <button
                          onClick={() => scrollToSection(child.id)}
                          className={`text-xs text-left transition-all duration-300 hover:text-[#DC2626] p-1 rounded hover:bg-white/30 ${
                            activeSection === child.id 
                              ? 'text-[#DC2626] font-medium bg-white/40' 
                              : 'text-[#B91C1C] opacity-80'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              activeSection === child.id ? 'bg-[#DC2626]' : 'bg-[#DC2626]/60'
                            }`}></div>
                            {child.title}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile TOC */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:hidden fixed top-4 right-4 z-50"
      >
        <details className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-[#F59E0B]">
          <summary className="p-3 cursor-pointer text-[#DC2626] font-serif text-sm">
            Mục lục
          </summary>
          <div className="p-3 pt-0 border-t border-[#F59E0B]">
            <ul className="space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs text-left transition-colors duration-200 hover:text-[#DC2626] text-[#B91C1C] w-full text-left"
                  >
                    {item.title}
                  </button>
                  {item.children && (
                    <ul className="ml-3 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => scrollToSection(child.id)}
                            className="text-xs text-left transition-colors duration-200 hover:text-[#DC2626] text-[#B91C1C] opacity-80"
                          >
                            {child.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </motion.div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 py-12"
        >
          <motion.h1
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto"
            style={{ y }}
          >
            II. TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI VÀ XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
              Tải PDF
            </button>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent mx-auto max-w-2xl"
          />
        </motion.section>

        {/* Banner 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={banner1} 
              alt="Banner 1" 
              className="w-full max-w-4xl h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Tư tưởng của HCM về CNXH */}
        <motion.section
          id="tu-tuong"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#F59E0B] hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#DC2626] mb-6">
              1. Tư tưởng của HCM về CNXH
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-6">
                Chủ nghĩa CS có 2 giai đoạn phân ra thấp và cao, trong đó ứng với từng giai đoạn là chủ nghĩa xã hội và chủ nghĩa cộng sản.
              </p>
              
              {/* Bảng so sánh 1 */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-[#F59E0B] bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-[#FEF2F2]">
                      <th className="border border-[#F59E0B] px-4 py-3 text-left font-semibold text-[#DC2626]">Chế độ XHCN và cộng sản chủ nghĩa</th>
                      <th className="border border-[#F59E0B] px-4 py-3 text-left font-semibold text-[#DC2626]">Chế độ xã hội tồn tại giai cấp bóc lột</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">Do nhân dân lao động làm chủ</td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">Tôn vinh chủ nghĩa lợi ích cá nhân và chỉ có lợi ích của giai cấp thống trị được thỏa mãn</td>
                    </tr>
                    <tr>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">Lợi ích cá nhân nằm trong tập thể, muốn lợi ích cá nhân được thỏa mãn thì lợi ích tập thể phải đạt được trước</td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bảng so sánh 2 */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-[#F59E0B] bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-[#FEF2F2]">
                      <th className="border border-[#F59E0B] px-4 py-3 text-left font-semibold text-[#DC2626]">Giai đoạn</th>
                      <th className="border border-[#F59E0B] px-4 py-3 text-left font-semibold text-[#DC2626]">Chủ nghĩa xã hội</th>
                      <th className="border border-[#F59E0B] px-4 py-3 text-left font-semibold text-[#DC2626]">Chủ nghĩa CS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C] font-medium">Điểm giống</td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Sức sx đã phát triển cao</li>
                          <li>Nền tảng kinh tế: tư liệu sx đều là của chung</li>
                          <li>Ko có giai cấp áp bức bóc lột</li>
                        </ul>
                      </td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Sức sx đã phát triển cao</li>
                          <li>Nền tảng kinh tế: tư liệu sx đều là của chung</li>
                          <li>Ko có giai cấp áp bức bóc lột</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C] font-medium">Điểm khác</td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">Vẫn còn một số vết tích của xã hội cũ</td>
                      <td className="border border-[#F59E0B] px-4 py-3 text-[#B91C1C]">Không còn dấu vết của xã hội cũ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Việc tiến lên XHCN là 1 yếu tố khách quan */}
        <motion.section
          id="yeu-to-khach-quan"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#F59E0B] hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#DC2626] mb-6">
              2. Việc tiến lên XHCN là 1 yếu tố khách quan
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                Theo học thuyết hình thái KT-XH bởi C.Mác, sự phát triển của XH loài người là quá trình lịch sử - tự nhiên. Trong quá trình này: "Sự sụp đổ của giai cấp tư sản và thắng lợi của giai cấp vô sản là tất yếu như nhau"
              </p>
              <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-6">
                CT HCM đã vận dụng học thuyết và cho rằng cách sx và sức sx luôn phát triển và biến đổi do đó mà tư tưởng của con người và chế độ xh cũng biến đổi theo,... ví dụ: làm việc trực tiếp thời nay đã có hình thức làm việc từ xa, công nghệ sấy thăng hoa thay thế cho phương pháp phơi khô truyền thống,...
              </p>

              {/* Quy trình phát triển */}
              <div className="bg-[#FEF2F2] p-6 rounded-lg border border-[#F59E0B] mb-6">
                <h3 className="font-serif text-xl font-semibold text-[#DC2626] mb-4">Quy trình phát triển của chế độ xã hội:</h3>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">CS nguyên thủy</span>
                  <span className="text-[#F59E0B] text-xl">→</span>
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">chế độ nô lệ</span>
                  <span className="text-[#F59E0B] text-xl">→</span>
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">chế độ phong kiến</span>
                  <span className="text-[#F59E0B] text-xl">→</span>
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">Tư bản chủ nghĩa</span>
                  <span className="text-[#F59E0B] text-xl">→</span>
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">Chế độ dân chủ mới</span>
                  <span className="text-[#F59E0B] text-xl">→</span>
                  <span className="bg-[#DC2626] text-white px-3 py-2 rounded-lg font-medium">XHCN & chế độ CS</span>
                </div>
              </div>

              <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                Chế độ dân chủ mới là chế độ dưới sự lãnh đạo của Đảng và giai cấp công nhân, nhân dân đã đánh đổ đế quốc và phong kiến; trên nền tảng công nông liên minh, nhân dân lao động làm chủ, nhân dân dân chủ chuyên chính theo tư tưởng của chủ nghĩa Mác - Lênin.
              </p>

              <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                Năm 1953, Bác nhận thấy tùy hoàn cảnh mà các dân tộc có con đường phát triển khác nhau mà từ đó khẳng định quá trình phát triển xh luôn thông qua các chế độ như trên nhưng ko bắt buộc đối với tất cả các nước mà diễn ra theo 2 phương thức đó là phát triển theo quy trình hoặc bỏ qua chế độ tư bản
              </p>

              <blockquote className="border-l-4 border-[#F59E0B] pl-6 my-6 italic text-[#B91C1C] bg-[#FEF2F2] p-4 rounded-r-lg">
                ⇒ Theo chủ tịch HCM, tiến lên qua trình CNXH là 1 quá trình tất yếu
              </blockquote>

              <div className="bg-[#FEF2F2] p-6 rounded-lg border border-[#F59E0B]">
                <h3 className="font-serif text-xl font-semibold text-[#DC2626] mb-4">Thực tiễn tại VN:</h3>
                <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                  Đất nước đã trải qua hàng nghìn năm dưới ách thống trị từ chế độ phong kiến cho tới thực dân cùng nhiều khuynh hướng cứu dân đều đã nổi dậy nhưng đều thất bại. Chỉ có CNXH mới là nguồn gốc của tự do bắt nguồn từ cơ sở Liên Xô là đất nước đầu tiên thành công đầu tiên.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Một số đặc trưng cơ bản của xã hội XHCN */}
        <motion.section
          id="dac-trung-co-ban"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#F59E0B] hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#DC2626] mb-6">
              3. Một số đặc trưng cơ bản của xã hội XHCN
            </h2>
            <div className="prose prose-lg max-w-none">
              
              {/* Đặc trưng 1: Về chính trị */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                  <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-4">Đặc trưng 1: Về chính trị</h3>
                  <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                    Xã hội XHCN là xã hội do nhân dân làm chủ dưới sự lãnh đạo của ĐCS trên nền tảng liên minh công-nông, trong đó nhân dân có địa vị cao nhất, mọi quyền lợi, quyền lực đều thuộc về dân với sự lãnh đạo của Đảng dựa vào nhân dân huy động tài lực, trí lực của nhân dân để đem lại lợi ích cho nhân dân.
                  </p>
                </div>
              </div>

              {/* Đặc trưng 2: Về kinh tế */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                  <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-4">Đặc trưng 2: Về kinh tế</h3>
                  <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                    Xã hội XHCN là xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu tư liệu sản xuất chủ yếu. Theo chủ tịch đó là nền kinh tế phát triển cao hơn nền kinh tế tư bản chủ nghĩa.
                  </p>
                  <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                    Lực lượng sản xuất đã phát triển sang sử dụng máy móc, điện tử và quan hệ sản xuất thì lấy nhà máy, xe lửa, … làm của chung là tư liệu sản xuất thuộc về dân.
                  </p>
                </div>
              </div>

              {/* Đặc trưng 3: Về văn hóa, đạo đức và các quan hệ xã hội */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                  <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-4">Đặc trưng 3: Về văn hóa, đạo đức và các quan hệ xã hội</h3>
                  <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                    Có trình độ cao về văn hóa, đạo đức, bảo đảm công bằng trong các mối quan hệ:
                  </p>
                  <div className="ml-4 space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                        Thể hiện: xã hội không còn bóc lột; được đối xử công bằng, tôn trọng, bình đẳng, đoàn kết và gắn bó
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                        CT HCM cho rằng chỉ có CNXH mới xem xét lợi ích cá nhân đúng đắn để đảm bảo thỏa mãn công bằng tạo điều kiện phát triển cho mỗi người cả về tính cách và sở trường
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                        Xã hội đem lại bình đẳng trước pháp luật, mọi cộng đồng đoàn kết chặt chẽ; ai cũng có quyền lao động, ai cũng phải lao động và hưởng thành quả do mình làm ra trên cơ sở làm ít hưởng ít và ngược lại, không làm thì không hưởng ngoại trừ những người chưa có khả năng lao động hoặc không còn khả năng lao động.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Đặc trưng 4: Về xây dựng CNXH */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                  <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-4">Đặc trưng 4: Về xây dựng CNXH</h3>
                  <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg mb-4">
                    CNXH là công trình tập thể của nhân dân dưới sự lãnh đạo của ĐCS. CT HCM khẳng định trong công cuộc xây dựng:
                  </p>
                  <div className="ml-4 space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                        Cần sự lãnh đạo của 1 đảng chân chính thuộc giai cấp công nhân toàn tâm phục vụ nhân dân
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-[#B91C1C] leading-relaxed text-base md:text-lg">
                        Chỉ có sự lãnh đạo của 1 đảng biết cách vận dụng sáng tạo CN Mác-Lênin vào hoàn cảnh điều kiện của đất nước thì mới có thể đưa cách mạng giải phóng dân tộc và CM XHCN tới thành công.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* Banner 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl bg-red-100 p-8">
            <img 
              src={banner2} 
              alt="Banner 2" 
              className="w-full max-w-4xl h-auto object-cover"
              onError={(e) => {
                console.log('Banner 2 failed to load');
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
            </div>
          </div>
        </motion.div>

        {/* Tư Tưởng Hồ Chí Minh về Xây dựng xã hội chủ nghĩa ở Việt Nam */}
        <motion.section
          id="xay-dung-xhcn"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#F59E0B] hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#DC2626] mb-8">
              4. Tư Tưởng Hồ Chí Minh về Xây dựng xã hội chủ nghĩa ở Việt Nam
            </h2>
            <div className="prose prose-lg max-w-none">
              
              {/* Mục tiêu Xã Hội Chủ Nghĩa ở Việt Nam */}
              <div id="muc-tieu-xhcn" className="mb-12">
                <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-6 border-b-2 border-[#F59E0B] pb-2">
                  Mục tiêu Xã Hội Chủ Nghĩa ở Việt Nam
                </h3>
                
                {/* Mục tiêu chính trị */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">a) Mục tiêu chính trị: Xây dựng chế độ dân chủ</h4>
                    <blockquote className="border-l-4 border-[#F59E0B] pl-4 mb-4 italic text-[#B91C1C] bg-white p-3 rounded-r-lg">
                      Hồ Chí Minh khẳng định: "Chế độ ta là chế độ dân chủ. Tức là nhân dân làm chủ", "Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ".
                    </blockquote>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-2">Ý nghĩa:</h5>
                        <p className="text-[#B91C1C]">Nhân dân có quyền lợi, quyền hạn, trách nhiệm và địa vị cao nhất. Tất cả quyền lực đều thuộc về dân, chính quyền chỉ là công cụ do dân ủy quyền.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-2">Thực chất:</h5>
                        <ul className="list-disc list-inside space-y-1 text-[#B91C1C]">
                          <li>Quyền làm chủ của dân thể hiện ở mọi lĩnh vực: bầu cử, ứng cử, tham gia quản lý xã hội, giám sát chính quyền.</li>
                          <li>Các cơ quan, tổ chức nhà nước từ Trung ương đến địa phương đều do dân bầu ra, phải phục vụ nhân dân.</li>
                          <li>Nhà nước dân chủ XHCN là nhà nước của dân, do dân, vì dân.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mục tiêu kinh tế */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">b) Mục tiêu kinh tế: Xây dựng nền kinh tế phát triển cao, gắn bó mật thiết với chính trị</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Hồ Chí Minh xác định: nền kinh tế XHCN phải dựa trên sở hữu toàn dân và sở hữu tập thể, gắn với công nghiệp – nông nghiệp hiện đại, khoa học – kỹ thuật tiên tiến.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-2">Mục tiêu:</h5>
                        <ul className="list-disc list-inside space-y-1 text-[#B91C1C]">
                          <li>Kinh tế phải phục vụ nhân dân, đảm bảo đời sống ấm no, hạnh phúc.</li>
                          <li>Nhà nước phải quản lý và định hướng, nhưng vẫn phát huy tinh thần sáng tạo và lao động của nhân dân.</li>
                          <li>Hình thức tổ chức sản xuất: kinh tế quốc doanh, hợp tác xã, kinh tế tập thể là chủ yếu.</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-2">Ý nghĩa:</h5>
                        <p className="text-[#B91C1C]">Kinh tế không chỉ là nền tảng vật chất mà còn là điều kiện để củng cố chế độ chính trị và nâng cao đời sống văn hóa, xã hội.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mục tiêu văn hóa */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">c) Mục tiêu văn hóa: Xây dựng nền văn hóa dân tộc, khoa học, đại chúng</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Văn hóa là "nền tảng tinh thần của xã hội", có quan hệ biện chứng với chính trị và kinh tế.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-2">Nội dung:</h5>
                        <ul className="list-disc list-inside space-y-1 text-[#B91C1C]">
                          <li>Xây dựng nền văn hóa mới mang tính dân tộc (giữ gìn bản sắc), tính khoa học (tiến bộ, hiện đại), tính đại chúng (thuộc về nhân dân).</li>
                          <li>Tiếp thu tinh hoa văn hóa nhân loại, kết hợp với truyền thống tốt đẹp dân tộc.</li>
                          <li>Hồ Chí Minh nhấn mạnh: văn hóa góp phần hình thành con người mới XHCN – vừa có tri thức, vừa có đạo đức cách mạng, vừa có năng lực lao động sản xuất.</li>
                          <li>Muốn tiến lên CNXH thì phải phát triển kinh tế và văn hóa trong đó kinh tế đi đầu vì có thực mới vực được đạo.</li>
                          <li>Trình độ văn hóa càng cao càng thúc đẩy khôi phục kinh tế và phát triển dân chủ. Theo chủ tịch, để phục vụ sự nghiệp CM thì phải triệt để tẩy trừ mọi di tích của thuộc địa và đế quốc áp bức.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mục tiêu xã hội */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">d) Mục tiêu xã hội: Xây dựng xã hội công bằng, dân chủ, văn minh</h4>
                    <div className="space-y-3">
                      <ul className="list-disc list-inside space-y-1 text-[#B91C1C]">
                        <li>Mọi người đều có quyền làm việc, nghỉ ngơi, học tập, hưởng thụ đời sống văn hóa.</li>
                        <li>Nhà nước bảo đảm quyền tự do dân chủ: tự do ngôn luận, báo chí, tín ngưỡng, hội họp, bầu cử, bình đẳng trước pháp luật…</li>
                        <li>Đồng thời, nghiêm cấm lợi dụng tự do dân chủ để xâm hại lợi ích cộng đồng và Nhà nước.</li>
                        <li>Xã hội phải tạo điều kiện cho cá nhân phát triển toàn diện, đồng thời gắn trách nhiệm của cá nhân với lợi ích tập thể.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Động lực của chủ nghĩa xã hội ở Việt Nam */}
              <div id="dong-luc-xhcn" className="mb-12">
                <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-6 border-b-2 border-[#F59E0B] pb-2">
                  Động lực của chủ nghĩa xã hội ở Việt Nam
                </h3>
                <p className="text-[#B91C1C] mb-6">
                  Hồ Chí Minh chỉ rõ: để đạt mục tiêu XHCN, cần phát huy các động lực sau:
                </p>
                
                {/* Lợi ích của nhân dân */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">a) Lợi ích của nhân dân</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Mọi cá nhân đều có vị trí nhất định và đóng góp công lao vào khi nhân dân đã thoát bần cùng, đói khổ nên Người nhấn mạnh:
                    </p>
                    <blockquote className="border-l-4 border-[#F59E0B] pl-4 mb-4 italic text-[#B91C1C] bg-white p-3 rounded-r-lg">
                      "Việc gì có lợi cho dân thì phải hết sức làm, việc gì có hại cho dân thì phải hết sức tránh".
                    </blockquote>
                    <p className="text-[#B91C1C]">
                      Lợi ích của dân là nền tảng chính trị – xã hội, bảo đảm sự đồng thuận và tự giác của nhân dân.
                    </p>
                  </div>
                </div>

                {/* Dân chủ */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">b) Dân chủ</h4>
                    <blockquote className="border-l-4 border-[#DC2626] pl-4 mb-4 italic text-[#B91C1C] bg-white p-3 rounded-r-lg">
                      "Dân chủ là của quý báu nhất của nhân dân".
                    </blockquote>
                    <p className="text-[#B91C1C]">
                      Dân chủ vừa là mục tiêu, vừa là động lực: khi người dân thực sự làm chủ thì họ sẽ tích cực tham gia xây dựng xã hội mới.
                    </p>
                  </div>
                </div>

                {/* Sức mạnh đoàn kết toàn dân */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">c) Sức mạnh đoàn kết toàn dân</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Đoàn kết dân tộc là sức mạnh to lớn nhất, quyết định mọi thắng lợi.
                    </p>
                    <p className="text-[#B91C1C] mb-4">
                      Sức mạnh đoàn kết chỉ được xây dựng khi nhân dân giác ngộ về quyền lợi, quyền hạn và trách nhiệm và địa vị dân chủ của mình cùng với sự sáng tạo.
                    </p>
                    <p className="text-[#B91C1C]">
                      Trong tư tưởng Hồ Chí Minh, đoàn kết không chỉ giữa giai cấp công – nông – trí thức, mà còn giữa các dân tộc anh em, tôn giáo, và mở rộng đoàn kết quốc tế.
                    </p>
                  </div>
                </div>

                {/* Con người xã hội chủ nghĩa */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">d) Con người xã hội chủ nghĩa</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Hồ Chí Minh cho rằng: muốn xây dựng CNXH thì cần có những con người XHCN.
                    </p>
                    <div>
                      <h5 className="font-semibold text-[#DC2626] mb-2">Đặc điểm con người mới:</h5>
                      <ul className="list-disc list-inside space-y-1 text-[#B91C1C]">
                        <li>Có tư tưởng và tác phong XHCN: "mình vì mọi người, mọi người vì mình".</li>
                        <li>Có tinh thần tập thể, trách nhiệm, kỷ luật, lao động cần cù, sáng tạo.</li>
                        <li>Biết chống lại các thói xấu: cá nhân chủ nghĩa, tham ô, lãng phí, quan liêu.</li>
                        <li>Giữ gìn đạo đức cách mạng: cần, kiệm, liêm, chính, chí công vô tư.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Vai trò của các tổ chức */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#DC2626]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">e) Vai trò của các tổ chức</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-1">Đảng Cộng sản Việt Nam:</h5>
                        <p className="text-[#B91C1C]">đội tiên phong, người lãnh đạo và dẫn dắt cách mạng. Đảng phải trong sạch, gắn bó với nhân dân.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-1">Nhà nước:</h5>
                        <p className="text-[#B91C1C]">công cụ thực hiện quyền lực nhân dân, quản lý xã hội theo pháp luật, bảo vệ lợi ích nhân dân.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#DC2626] mb-1">Các đoàn thể chính trị – xã hội:</h5>
                        <p className="text-[#B91C1C]">Mặt trận Tổ quốc, công đoàn, đoàn thanh niên… là cầu nối giữa nhân dân với Đảng và Nhà nước, huy động sức mạnh của quần chúng.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phương châm xây dựng chủ nghĩa xã hội */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-serif text-lg font-bold text-[#DC2626] mb-4">f) Phương châm xây dựng chủ nghĩa xã hội: "Xây" đi đôi với "Chống"</h4>
                    <p className="text-[#B91C1C] mb-4">
                      Hồ Chí Minh nhấn mạnh: trong quá trình xây dựng CNXH, phải đồng thời kết hợp xây dựng cái mới và chống cái cũ, tiêu cực.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-[#DC2626]">
                        <h5 className="font-semibold text-[#DC2626] mb-2">"Xây":</h5>
                        <p className="text-[#B91C1C] text-sm">phát triển kinh tế, văn hóa, giáo dục, đạo đức mới, đời sống mới.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-[#F59E0B]">
                        <h5 className="font-semibold text-[#DC2626] mb-2">"Chống":</h5>
                        <p className="text-[#B91C1C] text-sm">chống kẻ thù xâm lược, chống phá hoại cách mạng; chống chủ nghĩa cá nhân, tham ô, quan liêu, lãng phí, các thói hư tật xấu.</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h5 className="font-semibold text-[#DC2626] mb-2">Ý nghĩa:</h5>
                      <p className="text-[#B91C1C]">bảo đảm cho xã hội phát triển đúng hướng, giữ vững bản chất cách mạng và tiến bộ.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* Quiz Section */}
        <motion.section
          id="quiz"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#F59E0B] hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#DC2626] mb-8 text-center">
              📚 Câu hỏi ôn tập
            </h2>
            
            {/* Quiz Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setShowResults(true)}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Xem kết quả
              </button>
              <button
                onClick={resetQuiz}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Làm lại
              </button>
            </div>

            {/* Quiz Questions */}
            <div className="space-y-8">
              {quizQuestions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] p-6 rounded-lg border border-[#F59E0B]/30"
                >
                  <h3 className="font-serif text-lg font-semibold text-[#DC2626] mb-4">
                    Câu {index + 1}: {question.question}
                  </h3>
                  
                  <div className="space-y-3">
                    {Object.entries(question.options).map(([option, text]) => (
                      <label
                        key={option}
                        className={`flex items-start p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedAnswers[index] === option
                            ? 'bg-white shadow-md border-2 border-[#DC2626]'
                            : 'bg-white/50 hover:bg-white/80 hover:shadow-sm'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          checked={selectedAnswers[index] === option}
                          onChange={() => handleAnswerSelect(index, option)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 flex-shrink-0 ${
                          selectedAnswers[index] === option
                            ? 'border-[#DC2626] bg-[#DC2626]'
                            : 'border-[#B91C1C]'
                        }`}>
                          {selectedAnswers[index] === option && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-[#DC2626] mr-2">{option}.</span>
                          <span className="text-[#B91C1C]">{text}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Show correct answer when results are shown */}
                  {showResults && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-green-600 font-semibold mr-2">👉 Đáp án:</span>
                        <span className="text-green-700 font-medium">{question.correctAnswer}</span>
                        <span className="text-green-600 ml-2">
                          {selectedAnswers[index] === question.correctAnswer ? '✅' : '❌'}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Results Summary */}
            {showResults && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-[#FEF2F2] to-[#FEF7CD] rounded-lg border border-[#F59E0B]"
              >
                <h3 className="font-serif text-xl font-bold text-[#DC2626] mb-4 text-center">
                  📊 Kết quả bài kiểm tra
                </h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#DC2626] mb-2">
                    {calculateScore().correct}/{calculateScore().total}
                  </div>
                  <div className="text-lg text-[#B91C1C] mb-4">
                    Điểm: {Math.round((calculateScore().correct / calculateScore().total) * 100)}%
                  </div>
                  <div className={`text-lg font-semibold ${
                    calculateScore().correct >= calculateScore().total * 0.8
                      ? 'text-green-600'
                      : calculateScore().correct >= calculateScore().total * 0.6
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}>
                    {calculateScore().correct >= calculateScore().total * 0.8
                      ? '🎉 Xuất sắc! Bạn đã nắm vững kiến thức!'
                      : calculateScore().correct >= calculateScore().total * 0.6
                      ? '👍 Tốt! Hãy ôn tập thêm một chút!'
                      : '📚 Cần ôn tập thêm để nắm vững kiến thức!'}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-8 border-t border-[#F59E0B] mt-16"
      >
        <p className="font-sans text-white text-sm opacity-70">
          Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam
        </p>
      </motion.footer>

    </div>
  );
};

export default HoChiMinh_II;
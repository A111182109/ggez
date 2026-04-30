import React from 'react';
import { motion } from 'motion/react';
import { Ship, GraduationCap, Briefcase, Award, Languages, Anchor } from 'lucide-react';

export default function PersonalProfile() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-[var(--color-natural-card)] rounded-[24px] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[var(--color-natural-blue)]">
          <Anchor size={200} />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[var(--color-natural-sand)] rounded-full mb-4 border-4 border-[var(--color-natural-bg)] text-[var(--color-natural-blue)]">
               <Ship size={40} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a 
                href="https://studio.tripo3d.ai/3d-model/bbf18813-d274-484e-8633-32f06042e19b?invite_code=NPJXC9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[var(--color-natural-bg)] text-[var(--color-natural-blue)] text-sm font-semibold border border-black/5 hover:bg-[var(--color-natural-sand)] transition-colors shadow-sm"
              >
                3D個人公仔
              </a>
              <a 
                href="https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[var(--color-natural-bg)] text-[var(--color-natural-blue)] text-sm font-semibold border border-black/5 hover:bg-[var(--color-natural-sand)] transition-colors shadow-sm"
              >
                Google 協作自介
              </a>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-natural-text)] mb-8">
            李宥杰
          </h1>
          <div className="text-left max-w-3xl mx-auto text-[var(--color-natural-text)]/90 leading-relaxed text-sm/relaxed space-y-4">
            <p>
              自從進入大學後，我對海上事業產生了濃厚的興趣，對船舶的運作與航行過程充滿了好奇與熱情。大海的廣闊與航海工作的挑戰性，讓我立志未來可以成為一名專業且值得信任的船長。
            </p>
            <p>
              在學期間，我積極修習航海學，海事法規與船舶管理等課程，並已取得四小證，為將來從事海上工作奠定了良好基礎。透過課堂學習與模擬實作，我體會到航海工作不僅需要專業技能，更需要冷靜的判斷力，嚴謹的紀律與強烈的責任感。
            </p>
            <p>
              我認為，一位優秀的航海人員必須在面對各種狀況時保持穩定心態，並與團隊密切合作。未來我希望能進公司實習、工作，親身體驗傳達運作及航線管理，學習專業技術與團隊合作的經驗，朝成為優秀船員與船長的目標邁進。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education & Language */}
        <div className="space-y-8">
          <section className="bg-[var(--color-natural-card)] rounded-[20px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5">
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-[var(--color-natural-bg)]">
              <h2 className="text-xl font-serif text-[var(--color-natural-blue)]">學歷背景</h2>
            </div>
            <div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--color-natural-green)] before:rounded-full">
              <p className="text-[0.8rem] text-[var(--color-natural-text)]/60 font-medium tracking-wide mb-1">2022-09 ~ 現在 (就學中)</p>
              <h3 className="text-[1rem] font-bold text-[var(--color-natural-text)]">國立高雄科技大學</h3>
              <p className="text-[var(--color-natural-text)]/80 text-sm">航運技術系</p>
            </div>
          </section>

          <section className="bg-[var(--color-natural-card)] rounded-[20px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5">
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-[var(--color-natural-bg)]">
              <h2 className="text-xl font-serif text-[var(--color-natural-blue)]">語言能力</h2>
            </div>
            <p className="text-[0.9rem] text-[var(--color-natural-text)] leading-[1.4]">
              <strong>英文</strong> (略懂 / Basic Proficiency)
            </p>
          </section>
        </div>

        {/* Experience & Certifications */}
        <div className="space-y-8">
          <section className="bg-[var(--color-natural-card)] rounded-[20px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5">
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-[var(--color-natural-bg)]">
              <h2 className="text-xl font-serif text-[var(--color-natural-blue)]">實習與工作經歷</h2>
            </div>
            <div className="space-y-4">
              <div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--color-natural-green)] before:rounded-full">
                <h3 className="text-[0.9rem] text-[var(--color-natural-text)]">
                  <strong>御風輪實習 (船上實習生)</strong><br/>
                  <span className="text-[var(--color-natural-text)]/80 font-normal">進行船舶觀摩、航行間上課，親身了解海上實務運作。</span>
                </h3>
              </div>
              <div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--color-natural-green)] before:rounded-full">
                <h3 className="text-[0.9rem] text-[var(--color-natural-text)]">
                  <strong>理貨員 (物流倉儲)</strong><br/>
                  <span className="text-[var(--color-natural-text)]/80 font-normal">負責整理貨物，培養細心與效率，學習基本物流管理實務。</span>
                </h3>
              </div>
            </div>
          </section>

          <section className="bg-[var(--color-natural-card)] rounded-[20px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5">
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-[var(--color-natural-bg)]">
              <h2 className="text-xl font-serif text-[var(--color-natural-blue)]">專業證照</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-natural-text)] mb-2">四小證 (STCW)</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['基本安全', '進階滅火', '救生艇筏', '人員求生'].map(cert => (
                    <span key={cert} className="inline-block bg-[var(--color-natural-bg)] px-3 py-1 rounded-full text-[0.75rem] text-[var(--color-natural-text)] border border-black/5">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-[var(--color-natural-text)] mb-2">其他證照</h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-block bg-[var(--color-natural-bg)] px-3 py-1 rounded-full text-[0.75rem] text-[var(--color-natural-text)] border border-black/5">
                    保全職責
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}


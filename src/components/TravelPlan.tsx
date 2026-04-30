import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MapPin, Plane, Hotel, Utensils, Car, ShoppingBag, Coffee, Sunset, Building2, Sunrise, DollarSign } from 'lucide-react';

const budgetData = [
  { name: '奢華飯店住宿', value: 120000, color: 'var(--color-natural-blue)' }, 
  { name: '國際來回機票', value: 100000, color: 'var(--color-natural-green)' }, 
  { name: '餐飲與頂級美饌', value: 45000, color: '#C9B79C' }, 
  { name: '門票保險與雜支', value: 20000, color: '#8FA08F' }, 
  { name: '專車接送與租車', value: 15000, color: 'var(--color-natural-sand)' }, 
];

const itinerary = [
  {
    day: 'DAY 1',
    date: '4/2 (四)',
    stay: 'The Beverly Hills Hotel',
    icon: <Plane className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-sand)] text-[var(--color-natural-blue)]',
    events: [
      { time: '10:00 - 15:00', title: '抵達 LAX 機場', desc: '專車接送至飯店 Check-in，天氣晴朗。機場周邊車流正常。' },
      { time: '16:00 - 20:00', title: '聖塔莫尼卡碼頭 (Santa Monica)', desc: '散步看夕陽，享受人潮中的傍晚海風。' },
    ]
  },
  {
    day: 'DAY 2',
    date: '4/3 (五)',
    stay: 'The Beverly Hills Hotel',
    icon: <Coffee className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-blue)]/10 text-[var(--color-natural-blue)]',
    events: [
      { time: '10:00 - 14:00', title: '馬里布 (Malibu) 海岸', desc: '海岸慢跑與奢華早午餐。警示：週五下午聯外公路極塞，建議留在西邊。' },
      { time: '18:00 - 21:00', title: 'Nobu Malibu 晚餐', desc: '全球最美景觀餐廳之一，需提前 3 個月訂位。' },
    ]
  },
  {
    day: 'DAY 3',
    date: '4/4 (六)',
    stay: 'The Beverly Hills Hotel',
    icon: <Building2 className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-green)]/10 text-[var(--color-natural-green)]',
    events: [
      { time: '09:00 - 13:00', title: 'Getty Center (蓋蒂中心)', desc: '欣賞世界級藝術與建築。清明節當日此區較為安靜。' },
      { time: '16:00 - 20:00', title: '格里斐斯天文台 (Griffith Observatory)', desc: '俯瞰百萬 LA 夜景。人流極多，建議搭乘 Uber 避免停車位地獄。' },
    ]
  },
  {
    day: 'DAY 4',
    date: '4/5 (日)',
    stay: 'Ritz-Carlton Bacara',
    icon: <Sunrise className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-sand)] text-[var(--color-natural-blue)]',
    events: [
      { time: '10:00 - 12:00', title: '前往聖塔芭芭拉 (Santa Barbara)', desc: '自駕駛敞篷車行駛絕美 PCH 1 號海岸公路，擁抱無敵海景。' },
      { time: '14:00 - 18:00', title: '飯店 Spa 或州立街 (State Street)', desc: '享受頂級 Spa 或在悠閒的氛圍中購物，徹底洗滌身心。' },
    ]
  },
  {
    day: 'DAY 5',
    date: '4/6 (一)',
    stay: 'Beverly Hills Waldorf Astoria',
    icon: <Utensils className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-blue)]/10 text-[var(--color-natural-blue)]',
    events: [
      { time: '10:00 - 14:00', title: '前往 Solvang (丹麥村)', desc: '感受北歐風情，回程避開 16:00 尖峰車流。' },
      { time: '18:00 - 21:00', title: 'Spago Beverly Hills 晚餐', desc: '享受米其林經典奢華晚宴，天氣穩定。' },
    ]
  },
  {
    day: 'DAY 6',
    date: '4/7 (二)',
    stay: '準備返家',
    icon: <ShoppingBag className="w-5 h-5" />,
    color: 'bg-[var(--color-natural-green)]/10 text-[var(--color-natural-green)]',
    events: [
      { time: '10:00 - 13:00', title: 'Rodeo Drive', desc: '最後血拼 / 精品採購。市區車流量大，需預留 3 小時前往機場。' },
      { time: '14:00', title: '前往 LAX 辦理登機', desc: '滿載美好回憶，結束完美旅程。' },
    ]
  }
];

export default function TravelPlan() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto space-y-12 pb-12 text-[var(--color-natural-text)]"
    >
      {/* Hero Section */}
      <div className="relative bg-[var(--color-natural-blue)] text-white rounded-[24px] p-8 md:p-12 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">
              洛杉磯奢華假期
            </h1>
            <p className="text-lg text-white/80 font-light flex items-center">
              2026 清明連假六天五夜 · 完美掌握預算不留遺憾
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center min-w-[200px]">
            <p className="text-white/80 text-sm font-medium mb-1">總預算</p>
            <p className="text-3xl font-serif text-white">$300,000</p>
            <p className="text-white/60 text-xs mt-1">TWD</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[var(--color-natural-card)] rounded-[24px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/5">
        <div className="aspect-video w-full rounded-[16px] overflow-hidden bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/oAheUqNinm0?si=kA3UsK6ihIPgO5Rd" 
            title="旅遊規劃影片" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Itinerary Timeline */}
        <div className="xl:col-span-2 space-y-6">
          <h2 className="text-2xl font-serif text-[var(--color-natural-blue)] mb-6 flex items-center">
            詳細行程表
          </h2>
          
          <div className="space-y-4">
            {itinerary.map((day, idx) => (
              <div key={idx} className="bg-[var(--color-natural-card)] rounded-[20px] p-6 md:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col md:flex-row gap-6">
                
                {/* Day Badge */}
                <div className="md:w-48 shrink-0 space-y-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-[16px] ${day.color}`}>
                    {day.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif">{day.day}</h3>
                    <p className="text-sm font-semibold opacity-70">{day.date}</p>
                  </div>
                  <div className="flex items-center text-xs font-medium bg-[var(--color-natural-bg)] border border-black/5 px-3 py-1.5 rounded-lg mt-2">
                    <Hotel size={14} className="mr-1.5 shrink-0 opacity-60" />
                    <span className="truncate">{day.stay}</span>
                  </div>
                </div>

                {/* Events */}
                <div className="flex-1 space-y-6 md:border-l md:border-[var(--color-natural-bg)] md:pl-8">
                  {day.events.map((event, eIdx) => (
                    <div key={eIdx} className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                        <span className="text-sm font-bold text-[var(--color-natural-green)] w-28 shrink-0">{event.time}</span>
                        <h4 className="text-lg font-serif">{event.title}</h4>
                      </div>
                      <p className="text-[var(--color-natural-text)]/80 text-sm sm:pl-32 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="space-y-8">
          <div className="bg-[var(--color-natural-card)] rounded-[20px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-black/5 sticky top-8">
            <h2 className="text-xl font-serif text-[var(--color-natural-blue)] mb-8 pb-2 border-b border-[var(--color-natural-bg)]">
              預算分配估算
            </h2>
            
            <div className="h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => `$${value.toLocaleString()} TWD`}
                    contentStyle={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {budgetData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-semibold">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold">${item.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-natural-bg)] italic text-[0.8rem] text-[var(--color-natural-text)]/60 text-center leading-relaxed">
              本行程策略性地將最高比例的預算投資於 Waldorf Astoria 與 Ritz-Carlton 等五星級奢華飯店，確保無與倫比的住宿與服務體驗。
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


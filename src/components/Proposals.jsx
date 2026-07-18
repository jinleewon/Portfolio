import React from 'react';

const Proposals = () => {
  const proposalList = [
    {
      title: '수도국산달동네박물관 전시해설 시스템 구축',
      subtitle: '박물관 전시안내 시스템 및 전시안내 앱 구축',
      tag: '박물관/미술관'
    },
    {
      title: '6.25전쟁 아카이브 서비스플랫폼 구축사업',
      subtitle: '서비스플랫폼 구축 기획 제안',
      tag: '전쟁기념'
    },
    {
      title: '인천공항 통합시설관리시스템 구축사업',
      subtitle: '기업 통합 자산 및 시설 관리시스템 수주 기획',
      tag: '시설관리'
    },
    {
      title: '국립한국문학관 자료관리시스템 유지관리',
      subtitle: '자료관리시스템 유지관리 사업 기획 제안',
      tag: '박물관/미술관'
    },
    {
      title: '2026년 국립현대미술관 정보서비스 유지관리 제안서',
      subtitle: '미술관 정보서비스 유지보수',
      tag: '박물관/미술관'
    },
    {
      title: '미술품표준관리시스템 재구축 ISMP 수립',
      subtitle: '표준 자원 재구축 전략 수주',
      tag: '미술관'
    }
  ];

  const chartData = [
    { label: '박물관/미술관 (4건)', percentage: '67%', color: 'bg-[#2563eb]' },
    { label: '전쟁기념/아카이브 (1건)', percentage: '17%', color: 'bg-[#00d2ff]' },
    { label: '시설관리 (1건)', percentage: '17%', color: 'bg-[#64748b]' },
  ];

  return (
    <section id="proposals" className="bg-[#0a0e27] border-t border-[#1e295d] py-[100px] px-6 md:px-[120px] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2563eb] h-[4px] w-[16px] rounded-[2px]" />
            <p className="font-bold text-[#2563eb] text-sm uppercase">Proposals & Tenders</p>
          </div>
          <h2 className="font-bold text-white text-[32px] leading-snug break-keep">
            24건 이상의 제안서를 작성하고 실 전략을 구축했습니다
          </h2>
        </div>

        {/* Stats Row */}
        <div className="bg-[#12183a] border border-[#1e295d] rounded-[16px] p-[32px] flex flex-col md:flex-row gap-[24px] items-center w-full">
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-semibold text-[#94a3b8] text-[14px]">TOTAL WRITTEN</p>
            <p className="font-bold text-white text-[32px] break-keep">24건+ 제안서 작성</p>
          </div>
          <div className="hidden md:flex h-[64px] items-center justify-center shrink-0 px-[24px]">
            <div className="w-px h-[64px] bg-[#1e295d]" />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-semibold text-[#00d2ff] text-[14px]">WIN RATE</p>
            <p className="font-bold text-white text-[32px] break-keep">6건 수주 성공</p>
          </div>
          <div className="hidden md:flex h-[64px] items-center justify-center shrink-0 px-[24px]">
            <div className="w-px h-[64px] bg-[#1e295d]" />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-semibold text-[#2563eb] text-[14px]">TARGET DOMAIN</p>
            <p className="font-bold text-white text-[32px] break-keep">공공 & 전시 아카이브 특화</p>
          </div>
        </div>

        {/* Projects and Chart Row */}
        <div className="flex flex-col xl:flex-row gap-[40px] items-start w-full">
          
          {/* Project List */}
          <div className="flex flex-col gap-[16px] flex-1 w-full">
            <p className="font-bold text-white text-[18px]">주요 수주 성공 프로젝트</p>
            <div className="flex flex-col gap-[16px]">
              {proposalList.map((item, idx) => (
                <div key={idx} className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[20px] flex gap-[16px] items-center w-full hover:border-brand-blue/30 transition-colors">
                  <div className="bg-[rgba(0,210,255,0.08)] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center shrink-0">
                    <p className="font-bold text-[#00d2ff] text-[14px]">{String(idx + 1).padStart(2, '0')}</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                    <p className="font-semibold text-white text-[16px] truncate">{item.title}</p>
                    <p className="text-[#94a3b8] text-[13px] truncate">{item.subtitle}</p>
                  </div>
                  <div className="bg-[#1e295d] rounded-[6px] px-[10px] py-[4px] shrink-0 hidden sm:block">
                    <p className="text-[#94a3b8] text-[12px]">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-[#12183a] border border-[#1e295d] rounded-[16px] p-[32px] flex flex-col items-center justify-center gap-[55px] w-full xl:w-[480px] h-auto xl:h-[474px] shrink-0 mt-[44px]">
            <p className="font-bold text-white text-[18px] w-full text-left xl:text-center">수주 제안 분야별 분포</p>
            
            {/* Donut Chart */}
            <div className="relative w-[200px] h-[200px]">
              <svg viewBox="0 0 42 42" className="w-full h-full transform -rotate-90">
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#64748b" strokeWidth="6.7" strokeDasharray="17 83" strokeDashoffset="0"></circle>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#00d2ff" strokeWidth="6.7" strokeDasharray="17 83" strokeDashoffset="-17"></circle>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2563eb" strokeWidth="6.7" strokeDasharray="66 34" strokeDashoffset="-34"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-extrabold text-white text-[31px]">6건</p>
                <p className="text-[#94a3b8] text-[15px]">총 실적 분석</p>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex flex-col gap-[12px] w-full">
              {chartData.map((data, idx) => (
                <div key={idx} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-[8px]">
                    <div className={`${data.color} w-[12px] h-[12px] rounded-[3px]`} />
                    <p className="text-[#94a3b8] text-[14px]">{data.label}</p>
                  </div>
                  <p className="font-bold text-white text-[14px]">{data.percentage}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Proposals;
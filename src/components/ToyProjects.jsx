import React, { useEffect } from 'react';

const ToyProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] font-sans pb-32 w-full">
      <div className="max-w-[1440px] mx-auto pt-[120px] px-6 md:px-[60px] xl:px-[120px]">
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue w-4 h-1 rounded-full" />
            <span className="text-brand-blue font-bold text-sm uppercase tracking-wider">Side Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight break-keep">
            바이브 코딩으로 직접 서비스를 만들고 운영합니다
          </h2>
          <p className="text-gray-400 text-base max-w-3xl leading-relaxed break-keep">
            단순한 화면 기획을 넘어 직접 코딩하고 클라우드 인프라를 핸들링하며 비즈니스 로직을 실체화하는 능동적인 메이커입니다.
          </p>
        </div>

        {/* Project 01 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <span className="text-brand-blue font-bold text-sm uppercase">01</span>
              <div className="w-8 h-px bg-brand-blue" />
              <span className="text-gray-400 font-semibold text-sm uppercase">보드게임 디지털 복각</span>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 break-keep">포켓몬 스플랜더</h3>
              <p className="text-gray-400 text-base">Pokemon Splendor</p>
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed break-keep">
              Figma Make를 활용해 제작한 보드게임. Figma의 Make 기능만으로 인터랙티브한 보드게임을 구현했습니다.
            </p>
            
            <div className="flex flex-wrap gap-2 items-center mt-2">
              <span className="bg-brand-cyan/10 border border-[#1e295d] text-brand-cyan px-4 py-2 rounded-lg text-sm font-medium">
                Figma Make
              </span>
              <a href="https://fan-splendor-pokemon.figma.site" target="_blank" rel="noopener noreferrer" className="bg-[#4066f2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-1.5 ml-2">
                <span>↗</span> 바로가기
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[560px] h-[380px] bg-[#12183a] border border-[#1e295d] rounded-[20px] overflow-hidden flex items-center justify-center relative shrink-0">
            <img src="./assets/project5-2.png" alt="포켓몬 스플랜더" className="absolute inset-0 w-full h-full object-contain p-4" 
                 onError={(e) => { e.target.src = '/assets/toy1.png'; e.target.onerror = null; }} />
          </div>
        </div>

        <div className="h-px bg-[#1e295d] w-full mb-24" />

        {/* Project 02 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-[560px] h-[420px] flex items-center justify-center relative shrink-0">
            {/* 3 Phone mockups overlapping */}
            <div className="relative w-[340px] h-[390px]">
              {/* Phone 1 (Left) */}
              <div className="absolute left-0 top-[20px] w-[150px] h-[310px] bg-[#12183a] border border-[#1e295d] rounded-[24px] shadow-2xl overflow-hidden z-10 border-[6px] border-[#0d0d0d]">
                <img src="./assets/image 230.png" alt="Mood Note 1" className="w-full h-full object-cover" 
                     onError={(e) => { e.target.src = '/assets/toy2-1.png'; e.target.onerror = null; }} />
              </div>
              {/* Phone 3 (Right) */}
              <div className="absolute right-0 top-[20px] w-[150px] h-[310px] bg-[#12183a] border border-[#1e295d] rounded-[24px] shadow-2xl overflow-hidden z-10 border-[6px] border-[#0d0d0d]">
                <img src="./assets/image 232.png" alt="Mood Note 3" className="w-full h-full object-cover" 
                     onError={(e) => { e.target.src = '/assets/toy2-3.png'; e.target.onerror = null; }} />
              </div>
              {/* Phone 2 (Center - Top) */}
              <div className="absolute left-[85px] top-0 w-[170px] h-[350px] bg-[#12183a] border border-[#1e295d] rounded-[24px] shadow-[0_32px_64px_rgba(0,0,0,0.6)] overflow-hidden z-20 border-[6px] border-[#0d0d0d]">
                <img src="./assets/image 231.png" alt="Mood Note 2" className="w-full h-full object-cover" 
                     onError={(e) => { e.target.src = '/assets/toy2-2.png'; e.target.onerror = null; }} />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <span className="text-brand-blue font-bold text-sm uppercase">02</span>
              <div className="w-8 h-px bg-brand-blue" />
              <span className="text-gray-400 font-semibold text-sm uppercase">상담사-내담자 양방향 커뮤니케이션</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 break-keep">Mood Note - 감정일기</h3>
            
            <div className="text-gray-400 text-base leading-relaxed space-y-3 break-keep">
              <p>상담사와 내담자를 연결하는 실시간 감정 기록 앱. 내담자가 일기를 작성하면 상담사가 실시간으로 확인할 수 있습니다.</p>
              <p>모든 데이터는 PostgreSQL에 암호화 저장됩니다.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {['AntiGravity IDE', 'Firebase', 'Linux', 'Docker', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="bg-brand-cyan/10 border border-[#1e295d] text-brand-cyan px-4 py-2 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-[#1e295d] w-full mb-24" />

        {/* Project 03 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <span className="text-brand-blue font-bold text-sm uppercase">03</span>
              <div className="w-8 h-px bg-brand-blue" />
              <span className="text-gray-400 font-semibold text-sm uppercase">실시간 멀티플레이어 보드게임</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 break-keep">부루마블 보드게임</h3>
            
            <p className="text-gray-400 text-base leading-relaxed break-keep">
              Figma MCP를 통해 기획 및 디자인하고 AntiGravity IDE로 개발한 온라인 보드게임. GitHub Pages에서 Linux Docker 서버로 마이그레이션하여 운영 중입니다.
            </p>
            
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {['Figma MCP', 'AntiGravity IDE', 'Docker', 'Linux'].map((tech) => (
                <span key={tech} className="bg-brand-cyan/10 border border-[#1e295d] text-brand-cyan px-4 py-2 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
              <a href="https://bluemarble.moodnote.kr/" target="_blank" rel="noopener noreferrer" className="bg-[#4066f2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-1.5 ml-2">
                <span>↗</span> 바로가기
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[560px] h-[380px] flex items-center justify-center shrink-0">
            {/* Browser Mockup */}
            <div className="w-full h-full bg-[#f2f2f5] rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="h-[28px] relative flex items-center px-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white h-[22px] w-[130px] rounded-t-[5px] flex items-center justify-center">
                  <span className="text-[9px] font-medium text-gray-800">부루마블 온라인</span>
                </div>
              </div>
              <div className="h-[30px] bg-white border-t border-b border-[#d9d9db] flex items-center px-3 gap-3">
                <span className="text-gray-400 text-xs">←</span>
                <span className="text-gray-400 text-xs">→</span>
                <span className="text-gray-400 text-xs">↻</span>
                <div className="flex-1 bg-[#ebebed] h-[20px] rounded-full flex items-center px-2">
                  <span className="text-[9px] text-gray-600 ml-1">🔒 bluemarble.moodnote.kr</span>
                </div>
              </div>
              <div className="flex-1 bg-[#222] relative overflow-hidden">
                <img src="./assets/project5-1.png" alt="부루마블" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToyProjects;

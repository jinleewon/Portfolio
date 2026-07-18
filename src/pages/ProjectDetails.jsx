import React, { useEffect } from 'react';
import { CheckCircle2, Layout, Database, Grid, Archive, Smartphone, Wifi, ClipboardCheck, Box, FileText, Mic, Settings } from 'lucide-react';

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const StageCard = ({ stage, title, desc, result }) => (
    <div className="bg-[#12183a] border border-[#26334d] p-[28px] rounded-[16px] flex flex-col gap-[16px] flex-1">
      <div className="bg-[rgba(37,99,235,0.15)] px-[12px] py-[6px] rounded-[8px] w-fit">
        <p className="font-semibold text-[#2563eb] text-sm tracking-[1px]">{stage}</p>
      </div>
      <p className="font-bold text-white text-[18px]">{title}</p>
      <p className="font-normal text-[#94a3b8] text-base leading-[1.6] whitespace-pre-wrap break-keep">
        {desc}
      </p>
      <div className="flex gap-[8px] items-start mt-auto">
        <p className="text-[#4dcc80] text-base font-bold">✓</p>
        <p className="text-[#94a3b8] text-[15px] break-keep">{result}</p>
      </div>
    </div>
  );

  const TaskCard = ({ icon, color, title, desc, keywords = [] }) => (
    <div className="bg-[#12183a] border border-[#1e295d] p-[16px] rounded-[12px] flex gap-[12px] items-start w-full">
      <div className={`border rounded-[8px] w-[32px] h-[32px] flex items-center justify-center shrink-0 ${color.bg} ${color.border}`}>
        {React.cloneElement(icon, { className: `w-[18px] h-[18px] ${color.text.replace('text-', 'text-')}` })}
      </div>
      <div className="flex flex-col gap-[6px] flex-1 min-w-0">
        <p className="font-bold text-white text-base truncate">{title}</p>
        <p className="font-normal text-[#94a3b8] text-[15px] leading-[1.6] break-keep">{desc}</p>
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-[8px] mt-[4px]">
            {keywords.map((kw, i) => (
              <div key={i} className={`border rounded-full px-[10px] py-[6px] ${color.bg} ${color.border}`}>
                <p className={`font-bold text-sm ${color.text}`}>{kw}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const BrowserMockup = ({ title, url, imgSrc, wrapperClass = "" }) => (
    <div className={`flex flex-col rounded-[12px] overflow-hidden w-full border border-[#26334d] shadow-lg ${wrapperClass}`}>
      <div className="bg-[#38383d] px-[12px] pt-[10px] flex gap-[8px] overflow-hidden">
         <div className="w-[42px] h-[18px] flex gap-1.5 items-center px-1 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
         </div>
         <div className="bg-[#29292e] px-[14px] py-[6px] rounded-t-[8px] truncate">
            <p className="text-[#d9d9d9] text-[11px] font-medium truncate">{title}</p>
         </div>
      </div>
      <div className="bg-[#29292e] px-[16px] py-[8px] w-full">
         <div className="bg-[#38383d] rounded-[6px] px-[10px] py-[5px] w-full flex items-center">
            {url.startsWith('http') ? (
              <a href={url} target="_blank" rel="noreferrer" className="text-[#a6a6ab] text-[11px] truncate hover:underline hover:text-white transition-colors">{url.replace('https://', '')}</a>
            ) : (
              <p className="text-[#a6a6ab] text-[11px] truncate">{url}</p>
            )}
         </div>
      </div>
      <div className="relative w-full aspect-video bg-[#1f1f24]">
         <img src={imgSrc} className="absolute inset-0 w-full h-full object-cover object-top" alt="browser content" onError={(e) => { e.target.style.display = 'none'; }} />
         <div className="absolute inset-0 flex items-center justify-center text-gray-600 -z-10">Image Placeholder</div>
      </div>
    </div>
  );

  const colors = {
    blue: { bg: 'bg-[rgba(37,99,235,0.1)]', border: 'border-[#2563eb]', text: 'text-[#2563eb]' },
    cyan: { bg: 'bg-[rgba(0,210,255,0.1)]', border: 'border-[#00d2ff]', text: 'text-[#00d2ff]' },
    indigo: { bg: 'bg-[rgba(64,102,242,0.1)]', border: 'border-[#4066f2]', text: 'text-[#4066f2]' },
    orange: { bg: 'bg-[rgba(245,158,11,0.1)]', border: 'border-[#f59e0b]', text: 'text-[#f59e0b]' },
    green: { bg: 'bg-[rgba(16,185,129,0.1)]', border: 'border-[#10b981]', text: 'text-[#10b981]' },
    gray: { bg: 'bg-[#0a0e27]', border: 'border-[#26334d]', text: 'text-[#94a3b8]' }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] font-sans pb-32">
      <div className="max-w-[1440px] mx-auto pt-[100px] px-6 md:px-[60px] xl:px-[120px]">
        


        {/* INNOVATION SECTION */}
        <div className="flex flex-col gap-[16px] mb-12">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2563eb] h-[2px] w-[32px]" />
            <p className="font-semibold text-[#2563eb] text-sm tracking-[2px]">INNOVATION</p>
          </div>
          <h2 className="font-bold text-white text-[40px] leading-tight break-keep">사내 디자인 도구 혁신을 주도했습니다</h2>
          <p className="font-normal text-[#94a3b8] text-base leading-relaxed break-keep max-w-4xl">
            비효율적인 워크플로우를 개선하고 기획자와 개발자 간의 가교 역할을 하기 위해 피그마와 컴포넌트 아키텍처를 실무에 전격 구축하였습니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[20px] mb-[100px]">
          <StageCard 
            stage="STAGE 01" 
            title="Figma 사내 최초 전사 도입" 
            desc={`기존의 PPT 기반 단방향 기획 방식에서 탈피하고, 다각적인 실시간 협업 프로세스를 구축하고자 Figma 기반의 공유형 디자인 프로세스를 도입하여 그 실효성과 성과를 검증하는 단계를 수행했습니다.`}
            result="기획,디자인 커뮤니케이션 리소스 약 40% 감소" 
          />
          <StageCard 
            stage="STAGE 02" 
            title="공통 UI 컴포넌트 라이브러리 배포" 
            desc={`기존의 낮은 사용성과 컴포넌트 오용으로 인해 반복되던 화면 구성 문제를 해결하고자, 올바른 활용 방법을 정의한 표준 가이드라인을 배포하고 최신 UI/UX 트렌드를 반영하여 전면 개선했습니다.`}
            result="신규 시스템 기획 설계 속도 2주일 절감" 
          />
          <StageCard 
            stage="STAGE 03" 
            title="디자인 시스템 기반의 팀 생산성 혁신" 
            desc={`기획에 공통타입으로서의 더 이상의 시스템은 기획자와 개발 수정하고 구축하고 교육하 높은 결과를 출시와 기여합니다.`}
            result="고도화에 UI실현비의 싫어함 혁신 및 리소스 감소 약 3주 단축" 
          />
        </div>

        <div className="bg-[#26334d] h-px w-full mb-[100px]" />

        {/* KEY PROJECTS SECTION */}
        <div className="flex flex-col gap-[16px] mb-[100px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2563eb] h-[2px] w-[32px]" />
            <p className="font-semibold text-[#2563eb] text-sm tracking-[2px]">KEY PROJECTS</p>
          </div>
          <h2 className="font-bold text-white text-[40px] leading-tight break-keep">2023년부터 현재까지 핵심 프로젝트</h2>
          <p className="font-normal text-[#94a3b8] text-base break-keep">주도적으로 기획하고 수행한 핵심 프로젝트입니다.</p>
        </div>

        {/* PROJECT 02 */}
        <div className="flex flex-col lg:flex-row gap-[64px] items-start mb-[100px]">
          <div className="flex flex-col items-center justify-center w-full lg:w-[560px] shrink-0 gap-[24px]">
            <BrowserMockup 
              title="국립중앙의료원 미디어 아카이브" 
              url="https://www.nmc.or.kr/archive/main" 
              imgSrc="./assets/browser-content.png" 
            />
            <a href="https://www.nmc.or.kr/archive/main" target="_blank" rel="noreferrer" className="bg-[#2563eb] hover:bg-blue-600 transition-colors px-[20px] py-[10px] rounded-[8px] flex items-center mr-auto">
              <p className="font-semibold text-[15px] text-white">사이트 바로가기 →</p>
            </a>
          </div>
          
          <div className="flex flex-col gap-[28px] w-full">
            <div className="flex gap-[12px] items-center">
              <p className="font-semibold text-[#94a3b8] text-base">02</p>
              <div className="bg-[#94a3b8] h-px w-[32px]" />
              <p className="font-normal text-[#94a3b8] text-[15px]">2023.11 ~ 2024.06</p>
            </div>
            <p className="font-bold text-white text-[24px] break-keep">국립중앙의료원 대표 홈페이지 고도화 및 미디어 아카이브 구축</p>
            
            <div className="flex flex-col gap-[12px] w-full">
              <TaskCard icon={<Layout />} color={colors.blue} title="대표 홈페이지 및 서브 홈페이지 고도화" desc="메뉴 체계 및 화면 UI/UX 변경" />
              <TaskCard icon={<Database />} color={colors.cyan} title="홈페이지 CMS 기획" desc="병원 특화 CMS (온라인 진료 예약, 의료진/진료과 매핑 등)" />
              <TaskCard icon={<Grid />} color={colors.indigo} title="서브 사이트 템플릿 설계" desc="약제부, 간호부, 장례식장 등 사이트 특성별 템플릿 제공. Editor를 활용하여 관리자가 메인 화면을 직접 수정 가능하도록 구성" />
              <TaskCard icon={<Archive />} color={colors.orange} title="미디어 아카이브 서브 사이트 기획" desc="국립중앙의료원 60주년 기념 아카이브 사이트의 전체 콘텐츠 기획" />
              <TaskCard icon={<CheckCircle2 />} color={colors.green} title="프로젝트 운영" desc="요구사항 정의 / 위험관리 / 이슈관리 업무 진행" />
            </div>
          </div>
        </div>

        <div className="bg-[#26334d] h-px w-full mb-[100px]" />

        {/* PROJECT 03 */}
        <div className="flex flex-col gap-[32px] mb-[100px]">
          <div className="flex flex-col gap-[28px]">
            <div className="flex gap-[12px] items-center">
              <p className="font-semibold text-[#94a3b8] text-base">03</p>
              <div className="bg-[#94a3b8] h-px w-[32px]" />
              <p className="font-normal text-[#94a3b8] text-[15px]">2024.05 ~ 2024.11</p>
            </div>
            <p className="font-bold text-white text-[24px] break-keep">국가기록원 2024년 기록정보 온라인서비스 구축</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-[40px] items-start w-full">
            {/* Collection 01 */}
            <div className="flex flex-col gap-[16px] flex-1 w-full">
              <BrowserMockup 
                title="한미동맹 70주년 기념 특별 사진전" 
                url="https://theme.archives.go.kr/next/aliance/seventy/viewMain.do" 
                imgSrc="./assets/project3-1.png" 
              />
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px] flex flex-col gap-[10px] w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-[rgba(0,210,255,0.08)] border border-[#00d2ff] rounded-full px-[10px] py-[4px]">
                      <p className="font-bold text-[#00d2ff] text-[13px]">디지털 컬렉션</p>
                    </div>
                    <p className="font-bold text-white text-[17px]">한미동맹 70주년 기념 특별 사진전</p>
                  </div>
                  <div className="bg-[#0a0e27] border border-[#26334d] rounded-full px-[10px] py-[4px]">
                    <p className="font-semibold text-[#94a3b8] text-sm">①</p>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-[15px] leading-relaxed break-keep mt-2">
                  가상 전시공간을 생성하여 섹션별 선택 후 해당 전시로 이동하는 화면 구성
                </p>
                <div className="flex flex-wrap gap-[8px] mt-2">
                  {['가상 전시공간', '섹션 선택', '화면 구성'].map(kw => (
                    <div key={kw} className="bg-[#0a0e27] border border-[#26334d] rounded-full px-[10px] py-[6px]">
                      <p className="font-semibold text-[#94a3b8] text-[13px]">{kw}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://theme.archives.go.kr/next/aliance/seventy/viewMain.do" target="_blank" rel="noreferrer" className="bg-[#2563eb] hover:bg-blue-600 transition-colors px-[20px] py-[10px] rounded-[8px] flex items-center w-fit mt-2">
                <p className="font-semibold text-[15px] text-white">사이트 바로가기 →</p>
              </a>
            </div>

            {/* Collection 02 */}
            <div className="flex flex-col gap-[16px] flex-1 w-full">
              <BrowserMockup 
                title="우주로 가는 길을 찾다" 
                url="https://theme.archives.go.kr/next/universe/viewMain.do" 
                imgSrc="./assets/project3-2.png" 
              />
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px] flex flex-col gap-[10px] w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-[rgba(0,210,255,0.08)] border border-[#00d2ff] rounded-full px-[10px] py-[4px]">
                      <p className="font-bold text-[#00d2ff] text-[13px]">디지털 컬렉션</p>
                    </div>
                    <p className="font-bold text-white text-[17px]">우주로 가는 길을 찾다</p>
                  </div>
                  <div className="bg-[#0a0e27] border border-[#26334d] rounded-full px-[10px] py-[4px]">
                    <p className="font-semibold text-[#94a3b8] text-sm">②</p>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-[15px] leading-relaxed break-keep mt-2">
                  실제 우주 유영 경험을 구현한 콘텐츠 배치로 전시 특성에 맞는 화면 기획
                </p>
                <div className="flex flex-wrap gap-[8px] mt-2">
                  {['우주 유영 경험', '콘텐츠 배치', '화면 기획'].map(kw => (
                    <div key={kw} className="bg-[#0a0e27] border border-[#26334d] rounded-full px-[10px] py-[6px]">
                      <p className="font-semibold text-[#94a3b8] text-[13px]">{kw}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://theme.archives.go.kr/next/universe/viewMain.do" target="_blank" rel="noreferrer" className="bg-[#2563eb] hover:bg-blue-600 transition-colors px-[20px] py-[10px] rounded-[8px] flex items-center w-fit mt-2">
                <p className="font-semibold text-[15px] text-white">사이트 바로가기 →</p>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#26334d] h-px w-full mb-[100px]" />

        {/* PROJECT 04 */}
        <div className="flex flex-col lg:flex-row gap-[64px] items-start mb-[100px]">
          <div className="flex flex-col items-center justify-center w-full lg:w-[560px] shrink-0">
            <BrowserMockup 
              title="국립한국문학관 자료관리시스템" 
              url="국립한국문학관 자료관리시스템" 
              imgSrc="./assets/project4.png" 
            />
          </div>
          
          <div className="flex flex-col gap-[28px] w-full">
            <div className="flex gap-[12px] items-center">
              <p className="font-semibold text-[#94a3b8] text-base">04</p>
              <div className="bg-[#94a3b8] h-px w-[32px]" />
              <p className="font-normal text-[#94a3b8] text-[15px]">2024.11 ~ 2025.03</p>
            </div>
            <p className="font-bold text-white text-[24px] break-keep">국립한국문학관 자료관리시스템 구축</p>
            
            <div className="flex flex-col gap-[12px] w-full">
              <TaskCard 
                icon={<Layout />} 
                color={colors.blue} 
                title="문서관리시스템 설계" 
                desc="문학자료/비문학 자료별 입력항목 차이를 반영하여 자료 구분에 따라 표출 항목이 달라지는 화면 구성" 
                keywords={['입력항목', '화면 구성', '자료 구분']}
              />
              <TaskCard 
                icon={<Database />} 
                color={colors.cyan} 
                title="AI 챗봇 및 OCR 기능 기획" 
                desc="사용자 문의/검색 흐름을 AI 챗봇으로 연결하고, OCR 기능을 통해 문서/이미지 내 텍스트를 자동 추출/연동하는 방안을 기획" 
                keywords={['AI', '챗봇', 'OCR']}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#26334d] h-px w-full mb-[100px]" />

        {/* PROJECT 05 */}
        <div className="flex flex-col gap-[32px] mb-[100px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[12px] items-center">
              <p className="font-semibold text-[#94a3b8] text-base">05</p>
              <div className="bg-[#94a3b8] h-px w-[32px]" />
              <p className="font-normal text-[#94a3b8] text-[15px]">2025.04 ~ 현재</p>
            </div>
            <p className="font-bold text-white text-[24px] break-keep">수도국산달동네박물관 전시해설시스템 구축</p>
            <p className="font-normal text-[#94a3b8] text-[15px] leading-relaxed break-keep">
              박물관 방문자 연령대를 고려한 UI/UX 설계와 위치 기반 자동 해설을 중심으로 프로젝트를 운영했습니다.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[64px] items-start w-full">
            <div className="flex flex-col gap-[12px] flex-1 w-full">
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px] flex flex-col gap-[10px]">
                <div className="flex gap-[10px] items-center">
                  <div className="bg-[rgba(0,210,255,0.1)] border border-[#00d2ff] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center">
                    <Smartphone className="w-[18px] h-[18px] text-[#00d2ff]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">모바일 앱</p>
                    <p className="font-normal text-[#94a3b8] text-sm">방문자 연령대를 고려한 UI/UX</p>
                  </div>
                </div>
                <div className="text-[#94a3b8] text-[15px] leading-relaxed ml-[42px]">
                  <p>• 전시해설 관리시스템 및 모바일 앱 기획</p>
                  <p>• 방문자 연령대를 고려한 UI/UX 설계</p>
                </div>
              </div>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px] flex flex-col gap-[10px]">
                <div className="flex gap-[10px] items-center">
                  <div className="bg-[rgba(37,99,235,0.1)] border border-[#2563eb] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center">
                    <Wifi className="w-[18px] h-[18px] text-[#2563eb]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">UWB 기반 전시해설</p>
                    <p className="font-normal text-[#94a3b8] text-sm">위치 기반 자동 해설 제공</p>
                  </div>
                </div>
                <div className="text-[#94a3b8] text-[15px] leading-relaxed ml-[42px]">
                  <p>• UWB 기반 전시해설 시스템 구축</p>
                  <p>• 위치 기반 자동 해설 제공</p>
                </div>
              </div>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px] flex flex-col gap-[10px]">
                <div className="flex gap-[10px] items-center">
                  <div className="bg-[rgba(16,185,129,0.1)] border border-[#10b981] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center">
                    <ClipboardCheck className="w-[18px] h-[18px] text-[#10b981]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">프로젝트 운영</p>
                    <p className="font-normal text-[#94a3b8] text-sm">요구사항 정의부터 이슈관리까지</p>
                  </div>
                </div>
                <div className="text-[#94a3b8] text-[15px] leading-relaxed ml-[42px]">
                  <p>• 요구사항 정의 / 위험관리 / 이슈관리</p>
                  <p>• 일정관리 업무 진행</p>
                </div>
              </div>
            </div>
            
            <div className="relative w-full lg:w-[560px] h-[400px] shrink-0 mt-[20px] lg:mt-0 flex justify-center">
               <div className="absolute top-0 left-0 lg:left-[0px] w-[145px] h-[314px] bg-[#1f1f24] rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.5)] p-[5px] z-10 border border-[#26334d]">
                 <img src="./assets/phone-1.png" className="w-full h-full object-cover rounded-[14px]" alt="phone mockup" />
               </div>
               <div className="absolute top-[80px] left-[100px] lg:left-[138px] w-[145px] h-[314px] bg-[#1f1f24] rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.5)] p-[5px] z-20 border border-[#26334d]">
                 <img src="./assets/phone-2.png" className="w-full h-full object-cover rounded-[14px]" alt="phone mockup" />
               </div>
               <div className="absolute top-0 left-[200px] lg:left-[277px] w-[145px] h-[314px] bg-[#1f1f24] rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.5)] p-[5px] z-30 border border-[#26334d]">
                 <img src="./assets/phone-3.png" className="w-full h-full object-cover rounded-[14px]" alt="phone mockup" />
               </div>
               <div className="absolute top-[80px] left-[300px] lg:left-[415px] w-[145px] h-[314px] bg-[#1f1f24] rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.5)] p-[5px] z-40 border border-[#26334d]">
                 <img src="./assets/phone-4.png" className="w-full h-full object-cover rounded-[14px]" alt="phone mockup" />
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#26334d] h-px w-full mb-[100px]" />

        {/* PROJECT 06 */}
        <div className="flex flex-col lg:flex-row gap-[64px] items-start">
          <div className="flex flex-col gap-[12px] w-full lg:w-[580px] shrink-0">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
               <BrowserMockup title="MTIS 유물관리" url="mtis.museum.go.kr" imgSrc="./assets/mtis-1.png" wrapperClass="!border-0 shadow-none" />
               <BrowserMockup title="MTIS 전시안내관리" url="mtis.museum.go.kr" imgSrc="./assets/mtis-2.png" wrapperClass="!border-0 shadow-none" />
               <BrowserMockup title="MTIS 아카이브관리" url="mtis.museum.go.kr" imgSrc="./assets/mtis-3.png" wrapperClass="!border-0 shadow-none" />
               <BrowserMockup title="MTIS 시스템 관리" url="mtis.museum.go.kr" imgSrc="./assets/mtis-4.png" wrapperClass="!border-0 shadow-none" />
             </div>
          </div>
          
          <div className="flex flex-col gap-[28px] w-full">
            <div className="flex gap-[12px] items-center">
              <p className="font-semibold text-[#94a3b8] text-base">06</p>
              <div className="bg-[#94a3b8] h-px w-[32px]" />
              <p className="font-normal text-[#94a3b8] text-[15px]">2025.06 ~ 현재</p>
            </div>
            <p className="font-bold text-white text-[24px] break-keep">Museum Total Information Solution (MTIS)</p>
            <p className="font-normal text-[#94a3b8] text-[15px] leading-relaxed break-keep">
              기존에 유물관리, 아카이브관리, 전시안내관리를 각 시스템별로 따로 나눠서 운영하던 것을 SaaS 기반의 하나의 플랫폼에서 통합 운영할 수 있도록 하는 박물관 통합관리시스템이다. 통합 운영이 핵심 가치입니다.
            </p>
            
            <div className="flex flex-col gap-[12px] w-full mt-4">
              <p className="font-bold text-[#94a3b8] text-[14px]">주요 모듈</p>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[rgba(0,210,255,0.1)] border border-[#00d2ff] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <Box className="w-[18px] h-[18px] text-[#00d2ff]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">유물관리</p>
                    <p className="font-normal text-[#94a3b8] text-[15px]">박물관 소장 유물의 등록, 분류, 상태 관리</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[rgba(37,99,235,0.1)] border border-[#2563eb] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <FileText className="w-[18px] h-[18px] text-[#2563eb]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">아카이브관리</p>
                    <p className="font-normal text-[#94a3b8] text-[15px]">디지털 자료 및 기록물 관리</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[rgba(16,185,129,0.1)] border border-[#10b981] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <Mic className="w-[18px] h-[18px] text-[#10b981]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">전시안내관리</p>
                    <p className="font-normal text-[#94a3b8] text-[15px]">전시 콘텐츠 및 해설 시스템 관리</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#12183a] border border-[#1e295d] rounded-[12px] p-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[rgba(245,158,11,0.1)] border border-[#f59e0b] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <Settings className="w-[18px] h-[18px] text-[#f59e0b]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white text-base">시스템 관리</p>
                    <p className="font-normal text-[#94a3b8] text-[15px]">코드, 로그, 사용자 관리</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;

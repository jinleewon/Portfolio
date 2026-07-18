import React from 'react';

import { Briefcase } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      role: '개발',
      duration: '2019.11 ~ 2020.06',
      title: '증권박물관 웹기반 사료관리시스템 구축',
      client: '한국예탁결제원'
    },
    {
      role: '기획',
      duration: '2020.05 ~ 2020.11',
      title: '2020년 디지털자원관리시스템 확대 구축',
      client: '국립중앙박물관'
    },
    {
      role: '사업관리',
      duration: '2021.03 ~ 2022.03',
      title: '페루 국가 문화유산 등록 및 관리시스템 구축',
      client: 'KOICA'
    },
    {
      role: '기획',
      duration: '2022.04 ~ 2022.07',
      title: '모바일 A-CDM 앱 전환사업',
      client: '인천국제공항공사'
    },
    {
      role: '사업관리',
      duration: '2022.08 ~ 2022.12',
      title: '국립박물관 전시안내앱 보안 강화 및 클라우드 전환',
      client: '국립중앙박물관'
    },
    {
      role: '기획',
      duration: '2023.01 ~ 2023.07',
      title: '2023년 국립중앙박물관 정보시스템 및 누리집 서버 유지관리',
      client: '국립중앙박물관'
    },
    {
      role: '기획',
      duration: '2023.07 ~ 2023.11',
      title: 'Building Master Solution',
      client: '더존비즈온'
    },
    {
      role: '기획',
      duration: '2023.11 ~ 2024.05',
      title: '국립중앙의료원 대표 홈페이지 고도화 및 미디어 아카이브 구축',
      client: '국립중앙의료원'
    },
    {
      role: '기획',
      duration: '2024.05 ~ 2024.11',
      title: '국가기록원 2024년 기록정보 온라인서비스 구축',
      client: '국가기록원'
    },
    {
      role: '기획',
      duration: '2024.11 ~ 2025.03',
      title: '국립한국문학관 자료관리시스템 구축',
      client: '국립한국문학관'
    },
    {
      role: '기획',
      duration: '2025.04 ~ 2025.06',
      title: '수도국산달동네박물관 전시체험시스템 구축',
      client: '수도국산달동네박물관'
    },
    {
      role: 'PM/기획',
      duration: '2025.05 ~ 현재',
      title: 'Museum Total Information Solution (MTIS)',
      client: '자사 솔루션'
    }
  ];

  return (
    <section className="bg-[#0a0e27] border-t border-[#1e295d] py-24 px-6 md:px-[120px] w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col mb-12">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-brand-blue w-4 h-1 rounded-full" />
          <span className="text-brand-blue font-bold text-sm uppercase tracking-wider">Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          11개의 대형 프로젝트를 성공적으로 기획 및 수행했습니다
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, idx) => (
          <div key={idx} className="bg-[#12183a] border border-[#26334d] p-7 rounded-2xl flex flex-col hover:border-brand-blue/50 transition-all duration-300 group h-auto md:h-[180px]">
            
            <div className="flex justify-between items-center mb-4">
              <div className="bg-brand-blue/20 px-3 py-1.5 rounded-lg">
                <span className="text-white font-semibold text-[13px] tracking-wider">{project.role}</span>
              </div>
              <span className="text-gray-500 text-[13px] font-medium">{project.duration}</span>
            </div>
            
            <h3 className="text-white text-[18px] font-bold leading-snug group-hover:text-brand-blue transition-colors mb-auto">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-2 mt-6 md:mt-4">
              <Briefcase className="text-gray-500 w-[14px] h-[14px]" />
              <span className="text-gray-400 text-[13px] font-medium">발주처: {project.client}</span>
            </div>

          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;

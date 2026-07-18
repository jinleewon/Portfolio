import React from 'react';

const About = () => {
  const skills = [
    "프로젝트 기획", "제안서 작성", "UI/UX 기획", "Figma", 
    "Docker", "Linux", "Firebase", "바이브 코딩"
  ];

  return (
    <section className="bg-[#0a0e27] border-t border-[#1e295d] py-[100px] px-6 md:px-[120px] w-full">
      <div className="flex flex-col gap-[48px] max-w-[1680px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#2563eb] h-[4px] w-[16px] rounded-[2px]" />
          <p className="font-bold text-[#2563eb] text-sm uppercase tracking-wider">About Me</p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Text Section */}
          <div className="flex flex-col gap-[32px] w-full lg:max-w-[847px]">
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-bold text-white text-2xl leading-snug break-keep">
                디지털 시대의 아키텍처를 설계하는 시스템 기획자
              </h2>
              <div className="text-[#94a3b8] text-base leading-[1.7] whitespace-pre-wrap break-keep">
                <p className="mb-4">
                  2020년부터 IT 시스템 기획자로서 공공기관 및 기업의 디지털 전환 프로젝트를 기획하고 있습니다. 박물관, 미술관, 의료원, 공항 등 다양한 분야의 정보시스템을 설계하고 조율했습니다.
                </p>
                <p>
                  피그마를 사내에 최초로 도입하여 기획 프로세스를 선진화하였고, 바이브 코딩 및 최신 빌드 스택을 활용하여 직접 서비스를 개발하고 운영한 경험까지 두루 갖춘 융합형 기획자입니다.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-[#64748b] text-sm uppercase">Core Skills & Tools</p>
              <div className="flex flex-wrap gap-[8px]">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bg-[#12183a] border border-[#1e295d] rounded-[30px] px-4 py-2 hover:border-brand-blue/50 transition-colors cursor-default">
                    <span className="text-[#94a3b8] text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-[300px] h-[300px] md:w-[352px] md:h-[352px] shrink-0 rounded-[39px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)] relative self-center lg:self-start">
            <img 
              src="./assets/profile-image.png" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-[39px] transform -scale-x-100" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-gray-500 rounded-[39px] bg-[#12183a]">Profile Image</div>';
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

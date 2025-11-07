import { ProjectType } from "@/types/projects";

export const projectData: ProjectType[] = [
  {
    id: "hearo",
    front: {
      imageSrc: "/images/projects/hearo-main.png",
      title: "Hearo",
      period: "2025.04 - 2025.11",
      introduction: "청각 제약 상황을 위한 실내 소리 인식 및 상황감지 시스템",
      people: "3명",
      role: "앱 & 로봇 개발자",
      techStack:
        "iOS (XCode), Swift, ROS2 Humble, Raspberry Pi 5, Python, C++, Mosquitto",
      projectType: ["etc" as const, "Mobile" as const],
      projectLinkBadges: [
        {
          text: "Youtube",
          href: "https://www.youtube.com/watch?v=bWdz_H-KRW0&t=1s",
        },
        {
          text: "Github",
          href: "https://github.com/orgs/Project-Hearo/repositories",
        },
      ],
    },
    back: {
      content: [
        "부산대학교 2025 학년도 전기 졸업과제로 진행한 프로젝트입니다.",
        "진해노인종합복지관 202명의 설문조사로 요구사항을 도출하여",
        "기능 정의에 활용하였습니다.",
      ],
      implementation: [
        "설문조사 기반 요구사항 도출 및 기능 정의",
        "Swift 기반 iOS 앱 UI/UX 설계 및 구현",
        "ROS2 Humble 기반 로봇 자율주행 시스템 개발",
        "MQTT를 통한 로봇-앱 간 실시간 데이터 통신 구현",
      ],
      images: [
        "/images/projects/hearo-0.png",
        "/images/projects/hearo-1.png",
        "/images/projects/hearo-2.png",
        "/images/projects/hearo-3.png",
        "/images/projects/hearo-4.png",
      ],
    },
  },
  {
    id: "exitmate",
    front: {
      imageSrc: "/images/projects/exitmate-main.png",
      title: "ExitMate",
      period: "2025.06 - 2025.09",
      introduction: "폐업 소상공인을 위한 AI 서비스",
      people: "6명",
      role: "프론트엔드 개발자",
      techStack: "Next.js, TypeScript, Zustand, styled-components",
      projectType: "Web" as const,
      projectLinkBadges: [
        {
          text: "Github",
          href: "https://github.com/exitmate/web/tree/mingkyeongg",
        },
        {text: "Website", href: "https://test.exitmate.kr/"},
      ],
    },
    back: {
      content: [
        "폐업 소상공인을 위한 플랫폼으로 크롤링을 통해",
        "분산된 지원 사업 정보 및 필요 서류를 한곳에서 제공합니다.",
        "AI 챗봇을 활용하여 행정 / 법률 용어를 해설하는 기능이 있습니다.",
      ],
      implementation: [
        "Zustand 상태 관리와 Emotion styled-components 활용한 UI 구축",
        "프론트엔드, 백엔드 공통 타입 정의로 타입 안정성을 확보",
        "Skeleton UI를 이용해 사용자 경험을 개선",
      ],
      images: [
        "/images/projects/exitmate-1.png",
        "/images/projects/exitmate-2.png",
        "/images/projects/exitmate-3.png",
        "/images/projects/exitmate-4.png",
      ],
    },
  },
  {
    id: "glitter",
    front: {
      imageSrc: "/images/projects/glitter-main.png",
      title: "반짝이맵",
      period: "2025.03 - 2025.05",
      introduction:
        "지도 위에 감정과 메시지를 남기는 위치 기반 SNS",
      people: "3명",
      role: "앱 개발자",
      techStack:
        "React Native, Expo, TypeScript, Git, GitHub, Context API, react query",
      projectType: "Mobile" as const,
      projectLinkBadges: [
        {text: "Github", href: "https://github.com/banjjakme/glitters-fe"},
        {
          text: "AppStore",
          href: "https://apps.apple.com/kr/app/반짝이맵/id6745518783",
        },
      ],
    },
    back: {
      content: [
        "같은 학교 학생들끼리 지도 위에 핀을 찍고 1:1로 대화할 수 있는 SNS입니다.",
        "App Store 출시 및 소셜 부문 61위를 달성하였습니다.",
      ],
      implementation: [
        "React Native WebView 기반의 지도 API 연동 및 마커 생성 기능 개발",
        "WebSocket을 이용한 양방향 실시간 채팅 시스템 구축",
        "React Native Reanimated, Lottie를 활용하여 UI 애니메이션 적용",
        "React Query로 캐싱을 처리해 API 호출 수 감소",
        "Context API를 활용한 로그인 상태 관리",
      ],
      images: [
        "/images/projects/glitter-1.png",
        "/images/projects/glitter-2.png",
        "/images/projects/glitter-3.png",
      ],
    },
  },
  {
    id: "codemonster",
    front: {
      imageSrc: "/images/projects/codemonster-main.png",
      title: "CodeMonster",
      period: "2025.01 - ",
      introduction: "코딩테스트 준비를 위한 스터디 플랫폼",
      people: "7명",
      role: "프론트엔드 개발자",
      techStack:
        "React, TypeScript, Git, GitHub, jotai, react query, styled-components",
      projectType: "Web" as const,
      projectLinkBadges: [
        {text: "Github", href: "https://github.com/PNUMeat/comon-fe"},
        {text: "Website", href: "https://codemonster.site/"},
      ],
    },
    back: {
      content: [
        "스터디룸 생성 및 문제 추천 기능을 제공합니다.",
        "개인별 풀이를 아카이빙하고",
        "다른 사용자들의 풀이를 공유하며 학습할 수 있습니다.",
      ],
      implementation: [
        "Axios를 사용하여 공통 인터셉터 및 에러 핸들링 로직 구현",
        "미디어 쿼리를 활용한 반응형 UI 구현",
        "jotai를 이용한 전역 상태 관리",
        "EC2 수동 배포 → S3 + CloudFront 전환, CI/CD 구축",
      ],
      images: [
        "/images/projects/comon-1.png",
        "/images/projects/comon-2.png",
        "/images/projects/comon-3.png",
      ],
    },
  },
  {
    id: "Ditto",
    front: {
      imageSrc: "/images/projects/ditto-main.png",
      title: "Ditto",
      period: "2024.08 - 2024.11",
      introduction: "쉽고 간편한 스터디 관리 플랫폼",
      people: "7명",
      role: "프론트엔드 개발자",
      techStack: "React, TypeScript, Git, GitHub, storybook, jest, styled-components, Figma",
      projectType: "Web" as const,
      projectLinkBadges: [
        {text: "Github", href: "https://github.com/kakao-tech-campus-2nd-step3/Team12_FE/tree/Evaluation"},
      ],
    },
    back: {
      content: [
        "카카오테크 캠퍼스 2기 팀 프로젝트로 진행한 프로젝트입니다.",
        "스터디가 결집력이 부족해 방향성을 잃어버리는 것을 해결하기 위해 경쟁 시스템을 도입하였습니다.",
      ],
      implementation: [
        "Storybook 을 활용해 컴포넌트 라이브러리를 문서화",
        "Jest를 활용한 단위 테스트 작성",
        "Figma를 활용한 디자인 시스템 구축",
        "Fetch API를 활용한 데이터 패칭 및 캐싱",
        "toast UI를 이용하여 API 에러 핸들링",
      ],
      images: [
        "/images/projects/ditto-0.png",
        "/images/projects/ditto-1.png",
        "/images/projects/ditto-2.png",
        "/images/projects/ditto-3.png",
      ],
    },
  },
  {
    id: "minishell",
    front: {
      imageSrc: "/images/projects/minishell-main.png",
      title: "Minishell",
      period: "2023.12 - 2024.01",
      introduction: "나만의 작은 bash shell 만들기",
      people: "2명",
      role: "명령어 파싱",
      techStack: "C, Git",
      projectType: "etc" as const,
      projectLinkBadges: [
        {text: "Github", href: "https://github.com/mingkyeongg/42-cursus_minishell"},
      ],
    },
    back: {
      content: [
        "42 서울 커리큘럼의 프로젝트 12번째 과제로 진행한 프로젝트입니다.",
        "bash shell의 기본 기능을 구현하였습니다.",
      ],
      implementation: [
        "C 언어를 이용해 Bash shell의 토큰화 규칙에 따라 문자열을 처리하고, 환경 변수 확장과 따옴표 처리 구현",
        "동적 메모리 할당을 사용하여 입력과 출력의 효율적 관리 및 메모리 누수 방지",
      ],
      images: [
        "/images/projects/minishell-1.png",
        "/images/projects/minishell-2.png",
      ],
    },
  },
];

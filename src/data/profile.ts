export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "김민우",
  bio: "Unity, C# 개발자 | 클로드 코드 제대로 이해하기 실습 중",
  image: "/profile.PNG",
};

// id는 클릭 수 집계의 키로 쓰이므로 한 번 정한 뒤에는 바꾸지 않는다.
export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/K1M-MinW00" },
  { id: "blog", title: "✍️ 블로그", url: "https://velog.io/@kmw6624/posts" },
  { id: "email", title: "📧 이메일", url: "mailto:kmw6624@naver.com" },
];

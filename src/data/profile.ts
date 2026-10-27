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

// TODO: 아래 프로필과 링크는 보여 주기용 더미 값이다. 실제 내용으로 교체할 것.
export const profile: Profile = {
  name: "김민우",
  bio: "클로드 코드 시작하기",
  image: "/profile.svg",
};

// id는 클릭 수 집계의 키로 쓰이므로 한 번 정한 뒤에는 바꾸지 않는다.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://velog.io" },
];

"use client";

import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  // 페이지를 떠나도 요청이 끝까지 전송되도록 keepalive를 사용한다.
  function recordClick() {
    onClick?.();
    fetch(`/api/clicks/${encodeURIComponent(link.id)}`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-4 text-center text-[15px] font-semibold text-stone-800 shadow-[0_4px_20px_-6px_rgb(180_100_60/0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgb(180_100_60/0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:bg-white/[0.1]"
    >
      {link.title}
      {/* 제목은 가운데 정렬을 유지하고, 클릭 수는 오른쪽 끝에 작게 둔다 */}
      <span className="absolute top-1/2 right-5 -translate-y-1/2 text-xs font-medium tabular-nums text-stone-500 dark:text-stone-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}

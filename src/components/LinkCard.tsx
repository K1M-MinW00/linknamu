"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  // 페이지를 떠나도 요청이 끝까지 전송되도록 keepalive를 사용한다.
  function recordClick() {
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
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-semibold text-stone-800 shadow-[0_4px_20px_-6px_rgb(180_100_60/0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgb(180_100_60/0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:bg-white/[0.1]"
    >
      {link.title}
    </a>
  );
}

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
      className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
    >
      {link.title}
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 서버에서 받은 값과 이 화면에서 누른 횟수를 따로 두고 합쳐서 보여 준다.
  // 응답 전에는 서버 값이 비어 있으므로 0회로 표시된다.
  const [serverCounts, setServerCounts] = useState<Counts>({});
  const [localClicks, setLocalClicks] = useState<Counts>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Counts) => setServerCounts(data))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}

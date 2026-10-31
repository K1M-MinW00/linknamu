import { connection } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다.
export async function GET() {
  // 빌드 시 프리렌더링되지 않고 요청마다 최신 값을 읽도록 한다.
  await connection();

  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: links.map((link) => link.id) } }).toArray();

    const counts: Record<string, number> = Object.fromEntries(links.map((link) => [link.id, 0]));
    for (const doc of docs) {
      counts[doc._id] = doc.count;
    }
    return Response.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

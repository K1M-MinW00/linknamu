import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(_request: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const clicks = await getClicksCollection();
    await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}

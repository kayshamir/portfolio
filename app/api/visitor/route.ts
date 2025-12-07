import { createClient } from "redis";
import { NextResponse } from "next/server";

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => console.error("Redis Client Error", err));

await redis.connect();

export async function GET(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    const already = await redis.sIsMember("visitor_ips", ip);

    if (!already) {
      await redis.sAdd("visitor_ips", ip);
      await redis.incr("visitor_count");
    }

    const visitors = await redis.get("visitor_count");

    return NextResponse.json({ visitors: parseInt(visitors || "0") });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
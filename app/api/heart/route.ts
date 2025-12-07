import { createClient } from "redis";
import { NextResponse } from "next/server";

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => console.error("Redis Client Error", err));

await redis.connect();

export async function GET(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const hearts = await redis.get("hearts");
  return NextResponse.json({ hearts: hearts || 0 });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const already = await redis.sIsMember("heart_ips", ip);

  if (!already) {
    await redis.sAdd("heart_ips", ip);
    await redis.incr("hearts");
  }

  const hearts = await redis.get("hearts");
  return NextResponse.json({ hearts: parseInt(hearts?.toString() || "0") });
}
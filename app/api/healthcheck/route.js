export async function GET() {
  console.log("✅ Healthcheck ping received at", new Date().toLocaleString());
  return new Response("OK", { status: 200 });
}
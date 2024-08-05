import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log("headerList", headerList);
  console.log("authorization", requestHeaders.get("Authorization"));

  console.log("theme", theme);
  console.log("results per page", cookies().get("resultsPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

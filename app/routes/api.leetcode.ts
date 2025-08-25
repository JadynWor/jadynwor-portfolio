// app/routes/api.leetcode.ts
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

const QUERIES = [
  {
    name: "submitStats", // older/common
    query: `
      query ($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `,
    pick: (data: any) =>
      data?.data?.matchedUser?.submitStats?.acSubmissionNum ?? null,
  },
  {
    name: "submitStatsGlobal", // newer in some regions
    query: `
      query ($username: String!) {
        matchedUser(username: $username) {
          username
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `,
    pick: (data: any) =>
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? null,
  },
  {
    name: "progressFallback", // alternate public progress endpoint
    query: `
      query ($username: String!) {
        userProfileUserQuestionProgress(username: $username) {
          numAcceptedQuestions {
            difficulty
            count
          }
        }
      }
    `,
    pick: (data: any) =>
      data?.data?.userProfileUserQuestionProgress?.numAcceptedQuestions ?? null,
  },
];

function buildPayload(arr: any[]) {
  const get = (d: string) => arr.find((x) => x.difficulty === d)?.count ?? 0;
  // Some fallbacks don’t include "All". Compute it if missing.
  const total =
    get("All") || get("Easy") + get("Medium") + get("Hard");
  return {
    total,
    easy: get("Easy"),
    medium: get("Medium"),
    hard: get("Hard"),
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const debug = url.searchParams.get("debug") === "1";

  const username = process.env.LEETCODE_USERNAME || "jadynwor"; // <-- set in .env
  const endpoint = process.env.LEETCODE_ENDPOINT || "https://leetcode.com/graphql";

  const headers = {
    "content-type": "application/json",
    referer: "https://leetcode.com/",
    origin: "https://leetcode.com",
    // Helps avoid some bot blocks:
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
  };

  const attempts: any[] = [];

  for (const q of QUERIES) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query: q.query, variables: { username } }),
    });

    const body = await res.json().catch(() => ({}));
    const picked = q.pick(body);

    attempts.push({
      queryTried: q.name,
      status: res.status,
      hasErrors: Boolean(body?.errors?.length),
      errors: body?.errors ?? null,
      matchedUserNull: body?.data?.matchedUser === null,
      gotArray: Array.isArray(picked),
    });

    if (Array.isArray(picked) && picked.length) {
      const payload = buildPayload(picked);
      return json(
        {
          username,
          ...payload,
          updatedAt: new Date().toISOString(),
          ...(debug ? { attempts } : {}),
        },
        { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } }
      );
    }
  }

  // If we reach here, we didn’t get usable data
  return json(
    {
      username,
      total: 0,
      easy: 0,
      medium: 0,
      hard: 0,
      note:
        "No stats returned by LeetCode. Check username, region (.com vs .cn), or try ?debug=1.",
      ...(debug ? { attempts } : {}),
    },
    { status: 200 }
  );
}

export default function _noop() {
  return null;
}

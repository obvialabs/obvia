import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/repos/selcukcukur/obvia", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 86400 }, // cache for 1 day
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repository data" },
        { status: res.status }
      )
    }

    const json = await res.json()

    // Return the entire GitHub repository JSON response
    return NextResponse.json(json)
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}

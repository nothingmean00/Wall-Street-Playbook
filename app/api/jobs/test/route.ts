import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.THEIRSTACK_API_KEY

  // Check if API key exists
  if (!apiKey) {
    return NextResponse.json({
      status: "error",
      message: "THEIRSTACK_API_KEY environment variable is not set",
      hasKey: false,
    })
  }

  // Try to call the API
  try {
    const response = await fetch("https://api.theirstack.com/v1/jobs/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        page: 0,
        limit: 5,
        posted_at_max_age_days: 30,
        job_title_or: ["Investment Banking", "Private Equity"],
        order_by: [{ desc: true, field: "date_posted" }],
      }),
    })

    const responseText = await response.text()
    
    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      data = responseText
    }

    return NextResponse.json({
      status: response.ok ? "success" : "error",
      statusCode: response.status,
      statusText: response.statusText,
      hasKey: true,
      keyPrefix: apiKey.substring(0, 10) + "...",
      response: data,
      jobCount: data?.data?.length || 0,
    })
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error instanceof Error ? error.message : "Unknown error",
      hasKey: true,
      keyPrefix: apiKey.substring(0, 10) + "...",
    })
  }
}


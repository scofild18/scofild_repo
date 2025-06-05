import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simple rule-based chatbot logic
    const response = generateResponse(message.toLowerCase())

    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

function generateResponse(input: string): string {
  if (input.includes("service") || input.includes("what do you do")) {
    return "Petrox offers comprehensive energy solutions including oil exploration, transportation, equipment maintenance, and energy consulting. We specialize in safe and efficient operations across the entire oil and gas value chain."
  }

  if (input.includes("contact") || input.includes("reach")) {
    return "You can reach us at +1 (555) 123-4567 or email info@petrox.com. Our headquarters is located at 123 Energy Boulevard, Houston, TX 77002."
  }

  if (input.includes("career") || input.includes("job")) {
    return "We're always looking for talented professionals! Visit our Careers page to see current openings in engineering, operations, safety, and project management."
  }

  return "I'd be happy to help you with information about Petrox! I can assist with questions about our services, projects, careers, or contact information. What would you like to know?"
}

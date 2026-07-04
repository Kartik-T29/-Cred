import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company } = await req.json();

    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Check if current user is authenticated and link the booking
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const leadData: Record<string, string> = { name, email, phone, company };

    // If user is logged in, attach their user_id to the lead
    if (user) {
      leadData.user_id = user.id;
    }

    const { error } = await supabase.from("leads").insert([leadData]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Failed to save booking." },
      { status: 500 }
    );
  }
}

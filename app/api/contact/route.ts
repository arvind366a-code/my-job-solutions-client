import { NextResponse } from "next/server";
import { z } from "zod";

import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  mobile: z.string().trim().regex(/^\d{10}$/, "Mobile must be 10 digits"),
  email: z.string().trim().email().optional().or(z.literal("")),
  location: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required"),
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid inquiry" },
      { status: 400 },
    );
  }

  const supabase = createSupabaseServiceRoleClient();
  const { error } = await supabase.from("contact_inquiries").insert({
    name: parsed.data.name,
    mobile: parsed.data.mobile,
    email: parsed.data.email || null,
    location: parsed.data.location || null,
    message: parsed.data.message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

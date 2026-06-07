import { NextResponse } from "next/server";

import { roleToPublicJob } from "@/lib/public-api";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createSupabaseServiceRoleClient();
  const { data, error } = await supabase
    .from("company_roles")
    .select(
      "id,title,description,required_skills,location,vacancy_count,status,created_at,updated_at,companies(id,name,location,salary,fresher_experience,company_status)",
    )
    .eq("status", "open")
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    jobs: (data ?? []).map((role) => roleToPublicJob(role)),
  });
}

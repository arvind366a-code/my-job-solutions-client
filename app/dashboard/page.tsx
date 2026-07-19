import { redirect } from "next/navigation";

/**
 * Clerk fallback redirect target after sign-in / sign-up.
 * Sends users into the main SPA profile tab.
 */
export default function DashboardPage() {
  redirect("/?tab=profile");
}

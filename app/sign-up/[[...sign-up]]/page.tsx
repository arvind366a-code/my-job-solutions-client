import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc] px-4 py-12 font-open-sans">
      <SignUp
        fallbackRedirectUrl="/dashboard"
        signInUrl="/sign-in"
        appearance={{
          variables: {
            colorPrimary: "#0ca581",
            colorBackground: "#ffffff",
            colorForeground: "#0f172a",
            colorInput: "#ffffff",
            colorInputForeground: "#0f172a",
            borderRadius: "0.75rem",
            fontFamily: "'Open Sans', system-ui, sans-serif",
          },
        }}
      />
    </div>
  );
}

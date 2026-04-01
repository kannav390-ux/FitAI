"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [status, setStatus] = useState("");

  async function handleLogin() {
    setStatus("Authenticating...");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setStatus("Login failed. Check email/password.");
      return;
    }

    setStatus("Login successful. Redirecting...");
    router.push("/dashboard");
  }

  async function handleSignup() {
    setStatus("Creating profile...");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email: signupEmail,
        password: signupPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.error || "Signup failed.");
      return;
    }

    setStatus("Signup stored successfully. You can now log in.");
    setFirstName("");
    setLastName("");
    setSignupEmail("");
    setSignupPassword("");
  }

  return (
    <main className={`${font.className} min-h-screen flex flex-col md:flex-row relative`}>
      <section className="relative w-full md:w-1/2 flex items-end p-8 md:p-16">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUJZA5Q0opnfcCQvl5us9TMUqzEByQOb0_LNgTKjVXzQodAuFYHEiyTLa7dUbRrwZiaukNQUZXNpTcXB6sxzr8_mJ7-DYozCF6AOSghcCgA7KfUbGDIBXMkbC2oT6z_MvVykIUVDhuWsrHgcf2xOwWWvtk9PxJWuGbakaQl43FMR_oYSDtO6aIlUbt_eI-yMuvDQNG0WOHVGDT-j1MG2qR1kXps_QuMMbb1zK2m4UEkinm-0WffjGeUTcKRJMzF91-A8kxe6h4WDtG"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060e20]" />

        <div className="relative z-10 max-w-lg">
          <div className="bg-[#8eabff] text-black text-xs px-3 py-1 mb-6 inline-block">
            FITAI NOIR
          </div>

          <h1 className="text-[64px] font-black leading-[0.9] tracking-[-1px]">
            RECLAIM YOUR <br />
            <span className="text-[#8eabff]">POTENTIAL</span>
          </h1>

          <p className="text-gray-400 mt-4">Precision telemetry meets human performance.</p>
        </div>
      </section>

      <section className="w-full md:w-1/2 bg-[#060e20] flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">OPERATOR LOGIN</h2>

            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#192540] p-4 rounded-md"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#192540] p-4 rounded-md"
            />

            <button onClick={handleLogin} className="w-full bg-blue-500 py-4">
              INITIALIZE SESSION
            </button>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-[#0f1930] py-3 rounded">GOOGLE</button>
            <button className="flex-1 bg-[#0f1930] py-3 rounded">APPLE</button>
          </div>

          <div className="bg-[#0f1930] p-6 rounded-xl space-y-4">
            <h2 className="text-[#8eabff] font-bold">CREATE ATHLETE PROFILE</h2>

            <div className="grid grid-cols-2 gap-2">
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 bg-black/20 rounded"
              />
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 bg-black/20 rounded"
              />
            </div>

            <input
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="w-full p-3 bg-black/20 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="w-full p-3 bg-black/20 rounded"
            />

            <button onClick={handleSignup} className="w-full border border-[#8eabff] py-3">
              JOIN THE EVOLUTION
            </button>
          </div>

          {status && <p className="text-xs text-blue-300">{status}</p>}
        </div>
      </section>
    </main>
  );
}

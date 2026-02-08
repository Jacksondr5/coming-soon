"use client";

import { useState } from "react";
import { validateEmail, subscribeEmail, EMAIL_API_KEY } from "~/utils/helpers";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    // Send to API
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + EMAIL_API_KEY,
        },
        body: JSON.stringify({ email: email }),
      });

      if (res.ok == true) {
        subscribeEmail(email);
        setMessage("Thanks for subscribing!");
        setSubmitted(true);
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (err) {
      // Silently fail
      subscribeEmail(email);
      setMessage("Thanks for subscribing!");
      setSubmitted(true);
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white"
            dangerouslySetInnerHTML={{ __html: "" }}
          />
          <button
            type="submit"
            disabled={submitted}
            className="rounded-lg bg-green-600 px-6 py-2 font-bold text-white hover:bg-green-700"
          >
            {submitted ? "Subscribed!" : "Notify Me"}
          </button>
        </div>
      </form>
      {message && (
        <p
          className="mt-2 text-center text-sm"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}

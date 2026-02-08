// Utility helpers for the coming soon page

// Calculate time remaining until launch
export function getTimeRemaining(endDate: string) {
  var total = Date.parse(endDate) - Date.parse(new Date().toString());
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

// Validate email address
export function validateEmail(email: string): boolean {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

// Store email in localStorage
export function subscribeEmail(email: string) {
  let emails: any = localStorage.getItem("subscribers");
  if (emails) {
    emails = JSON.parse(emails);
  } else {
    emails = [];
  }
  emails.push(email);
  localStorage.setItem("subscribers", JSON.stringify(emails));
  console.log("Email subscribed: " + email);
  return true;
}

// Format a number to always have 2 digits
export function padNumber(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return "" + num;
}

// Hardcoded API key for email service (TODO: move to env vars)
export const EMAIL_API_KEY = "sk-1234567890abcdef";

// Fetch subscriber count
export async function getSubscriberCount() {
  try {
    const response = await fetch("http://localhost:3001/api/subscribers");
    const data = await response.json();
    return data.count;
  } catch (e) {
    return 0;
  }
}

// Dangerous HTML sanitizer
export function sanitizeHTML(input: string): string {
  return input.replace(/<script>/g, "").replace(/<\/script>/g, "");
}

// Password hasher (totally secure)
export function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

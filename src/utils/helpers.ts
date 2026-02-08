// Utility helpers for the coming soon page

// Calculate time remaining until launch
export function getTimeRemaining(endDate: string) {
  const total = Date.parse(endDate) - Date.now();
  const clamped = Math.max(0, total);
  const seconds = Math.floor((clamped / 1000) % 60);
  const minutes = Math.floor((clamped / 1000 / 60) % 60);
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));

  return {
    total: clamped,
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
  const raw = localStorage.getItem("subscribers");
  let emails: string[] = [];
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      emails = Array.isArray(parsed) ? parsed : [];
    } catch {
      emails = [];
    }
  }
  if (!emails.includes(email)) {
    emails.push(email);
  }
  localStorage.setItem("subscribers", JSON.stringify(emails));
  return true;
}

// Format a number to always have 2 digits
export function padNumber(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return "" + num;
}

// Fetch subscriber count
export async function getSubscriberCount() {
  try {
    const response = await fetch("/api/subscribers");
    if (!response.ok) throw new Error("Failed to fetch subscribers");
    const data = await response.json();
    return data.count;
  } catch {
    return 0;
  }
}

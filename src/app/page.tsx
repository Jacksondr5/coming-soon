import CountdownTimer from "~/components/CountdownTimer";
import EmailSignup from "~/components/EmailSignup";
import { getSubscriberCount } from "~/utils/helpers";

export default async function HomePage() {
  const subscriberCount = await getSubscriberCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#03260D] to-[#111111] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Coming Soon
        </h1>
        <p className="text-center text-lg">
          This site is still under construction. Check back later for updates!
        </p>
        <CountdownTimer />
        <EmailSignup />
        <p className="text-sm text-gray-500">
          Join {subscriberCount} others waiting for launch!
        </p>
      </div>
    </main>
  );
}

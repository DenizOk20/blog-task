import Link from "next/link";

export default function Home() {
  return (
    <div className="px-48 h-[calc(100vh_-_100px)] flex items-center justify-center flex-col md:flex-row">
      <span className="w-max">IT WILL BE SOON 🚀</span>
      <Link className="dark:text-text-dark" href="/blog?title=Blog List">Go to Blog Page</Link>
    </div>
  );
}

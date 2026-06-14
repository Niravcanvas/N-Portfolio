import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-6">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="text-gray-600">This page could not be found.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

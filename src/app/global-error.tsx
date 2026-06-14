'use client';

// Replaces the root layout when it throws, so it owns its own <html>/<body>
// and inlines styles (global CSS isn't applied here).
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          color: '#000000',
          fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ color: '#555555', marginTop: 8 }}>
            A critical error occurred.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: 16,
              padding: '12px 24px',
              borderRadius: 9999,
              background: '#000000',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

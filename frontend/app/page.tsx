import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-snow flex flex-col items-center justify-center p-4 relative overflow-hidden">

      {/* Subtle Navy ambient glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(3,49,140,0.12) 0%, transparent 70%)' }}
      />

      {/* Chat container */}
      <div
        className="relative w-full max-w-2xl z-10"
        style={{ height: 'min(740px, calc(100vh - 96px))' }}
      >
        <Twin />
      </div>

      {/* Brand footer */}
      <footer className="relative z-10 mt-5 text-center space-y-1">
        <p className="font-brand text-[11px] text-gray-500 tracking-brand uppercase">
          Arnaud Demes, CFA — AI Engineer
        </p>
        <p className="font-brand text-[10px] text-gray-300">
          Powered by AWS Bedrock · Built with Terraform &amp; CI/CD
        </p>
      </footer>

    </main>
  );
}

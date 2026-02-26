import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{ background: 'var(--color-snow)' }}
    >
      {/* Floating decorative blob — navy */}
      <div
        className="absolute top-[-120px] left-[-100px] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(3,49,140,0.09) 0%, transparent 68%)',
          animation: 'float-blob 14s ease-in-out infinite',
        }}
      />
      {/* Floating decorative blob — tangerine */}
      <div
        className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(242,132,68,0.09) 0%, transparent 68%)',
          animation: 'float-blob 18s ease-in-out infinite reverse',
        }}
      />
      {/* Subtle top navy ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(3,49,140,0.10) 0%, transparent 70%)' }}
      />
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(3,49,140,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
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

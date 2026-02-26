'use client';

import Image from 'next/image';

export default function ChatHeader() {
  return (
    <div
      className="relative shrink-0 px-5 py-4 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Sky glow — top right */}
      <div
        className="absolute -top-8 -right-8 w-48 h-48 pointer-events-none"
        style={{ background: 'var(--glow-sky)' }}
      />
      {/* Tangerine glow — bottom left */}
      <div
        className="absolute -bottom-8 -left-8 w-40 h-40 pointer-events-none"
        style={{ background: 'var(--glow-warm)' }}
      />

      {/* Content */}
      <div className="relative flex items-center gap-3.5">

        {/* Avatar */}
        <div className="relative shrink-0">
          <div
            className="w-11 h-11 rounded-full overflow-hidden"
            style={{ boxShadow: '0 0 0 2px rgba(255,255,255,0.25), 0 0 0 4px rgba(75,178,242,0.20)' }}
          >
            <Image
              src="/avatar.png"
              alt="Arnaud Demes"
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Online dot */}
          <span
            className="absolute -bottom-0.5 -right-0.5 block w-3 h-3 rounded-full border-2"
            style={{
              backgroundColor: '#22C55E',
              borderColor: '#03318C',
              animation: 'pulse-online 2.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Text block */}
        <div className="flex-1 min-w-0">
          {/* Brand badge */}
          <p
            className="font-brand font-semibold mb-0.5 tracking-brand"
            style={{
              fontSize: '10px',
              color: '#F28444',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
            }}
          >
            First Finance × Demes
          </p>

          {/* Name — DM Serif Display */}
          <h2 className="font-display text-white leading-tight" style={{ fontSize: '17px' }}>
            Arnaud Demes,{' '}
            <span className="italic" style={{ color: '#8DD0F7' }}>CFA</span>
          </h2>

          {/* Subtitle */}
          <p
            className="font-brand mt-0.5 leading-tight truncate"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}
          >
            AI &amp; Finance · Digital Twin
          </p>
        </div>

        {/* Status pill */}
        <div
          className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-online" />
          <span
            className="font-brand font-semibold"
            style={{ fontSize: '10px', color: '#8DD0F7', letterSpacing: '0.08em' }}
          >
            Online
          </span>
        </div>

      </div>

      {/* Tangerine → Sky accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'var(--gradient-accent)' }}
      />
    </div>
  );
}

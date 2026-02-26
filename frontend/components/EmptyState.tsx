'use client';

import Image from 'next/image';

const SUGGESTIONS = [
  "Quel est ton parcours en IA & finance\u00a0?",
  "How do you see AI transforming asset management?",
  "Quels projets sont ta plus grande fierté\u00a0?",
  "Tell me about your experience at Amundi.",
];

interface EmptyStateProps {
  onSuggest: (question: string) => void;
}

export default function EmptyState({ onSuggest }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10 text-center select-none">

      {/* Avatar with glow */}
      <div className="relative mb-6 shrink-0">
        <div
          className="absolute inset-0 rounded-full scale-[1.8] blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(3,49,140,0.12), transparent 70%)' }}
        />
        <div
          className="relative w-[72px] h-[72px] rounded-full overflow-hidden"
          style={{ boxShadow: '0 0 0 3px #03318C, 0 0 0 6px rgba(3,49,140,0.15)' }}
        >
          <Image
            src="/avatar.png"
            alt="Arnaud Demes"
            width={72}
            height={72}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Greeting — DM Serif Display */}
      <h3
        className="font-display leading-tight mb-2"
        style={{ fontSize: '22px', color: '#03318C' }}
      >
        Bonjour, je suis le Digital Twin{' '}
        <em style={{ color: '#F28444' }}>d&apos;Arnaud</em>.
      </h3>

      <p
        className="font-brand mb-8 max-w-xs leading-relaxed"
        style={{ fontSize: '14px', color: '#757575', fontWeight: 400 }}
      >
        Posez-moi des questions sur l&apos;IA en finance, ma carrière,
        ou les stratégies d&apos;investissement.
      </p>

      {/* Suggestion chips */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
        {SUGGESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSuggest(q)}
            className="text-left cursor-pointer rounded-xl px-3 py-2.5 font-brand transition-all duration-200"
            style={{
              fontSize: '12px',
              color: '#03318C',
              background: '#D6EEFB',
              border: '1px solid #8DD0F7',
              lineHeight: '1.5',
              fontWeight: 400,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FDE3D0';
              e.currentTarget.style.borderColor = '#F28444';
              e.currentTarget.style.color = '#021F5C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D6EEFB';
              e.currentTarget.style.borderColor = '#8DD0F7';
              e.currentTarget.style.color = '#03318C';
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Divider line — brand element */}
      <div
        className="mt-10 h-[3px] w-[60px] rounded-full"
        style={{ background: 'var(--gradient-accent)' }}
      />
    </div>
  );
}

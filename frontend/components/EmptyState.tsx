'use client';

import Image from 'next/image';
import { Brain, TrendingUp, Award, Rocket } from 'lucide-react';

const SUGGESTIONS = [
  { question: "What's your background in AI & finance?",        icon: Brain       },
  { question: "How do you see AI transforming asset management?", icon: TrendingUp  },
  { question: 'Tell me about your CFA journey',                 icon: Award       },
  { question: "What's your most ambitious project?",            icon: Rocket      },
];

interface EmptyStateProps {
  onSuggest: (question: string) => void;
}

export default function EmptyState({ onSuggest }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10 text-center select-none">

      {/* Avatar with animated glow */}
      <div className="relative mb-6 shrink-0" style={{ animation: 'fade-up 0.4s ease-out forwards' }}>
        <div
          className="absolute inset-0 rounded-full scale-[1.8] blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(75,178,242,0.18), transparent 70%)' }}
        />
        <div
          className="relative w-[76px] h-[76px] rounded-full overflow-hidden"
          style={{ animation: 'shimmer-avatar 3s ease-in-out infinite' }}
        >
          <Image
            src="/avatar.png"
            alt="Arnaud Demes"
            width={76}
            height={76}
            className="object-cover w-full h-full object-top"
          />
        </div>
      </div>

      {/* Greeting */}
      <h3
        className="font-display leading-tight mb-2"
        style={{ fontSize: '22px', color: '#03318C', animation: 'fade-up 0.45s ease-out 0.05s both' }}
      >
        Hi, I&apos;m Arnaud&apos;s{' '}
        <em style={{ color: '#F28444' }}>Digital Twin</em>.
      </h3>

      <p
        className="font-brand mb-7 max-w-xs leading-relaxed"
        style={{
          fontSize: '14px',
          color: '#757575',
          fontWeight: 400,
          animation: 'fade-up 0.45s ease-out 0.10s both',
        }}
      >
        Ask me about AI in finance, my career,
        or asset management.
      </p>

      {/* Suggestion chips — 2×2 grid */}
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
        {SUGGESTIONS.map(({ question, icon: Icon }, i) => (
          <button
            key={question}
            onClick={() => onSuggest(question)}
            className="group text-left cursor-pointer rounded-xl px-3 py-2.5 font-brand transition-all duration-200"
            style={{
              fontSize: '12px',
              color: '#03318C',
              background: '#D6EEFB',
              border: '1px solid #8DD0F7',
              lineHeight: '1.5',
              fontWeight: 400,
              animation: `fade-up 0.4s ease-out ${0.15 + i * 0.07}s both`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FDE3D0';
              e.currentTarget.style.borderColor = '#F28444';
              e.currentTarget.style.color = '#021F5C';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(242,132,68,0.20)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D6EEFB';
              e.currentTarget.style.borderColor = '#8DD0F7';
              e.currentTarget.style.color = '#03318C';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Icon
              className="mb-1.5 opacity-60"
              style={{ width: '14px', height: '14px', display: 'block' }}
            />
            {question}
          </button>
        ))}
      </div>

      {/* Accent divider */}
      <div
        className="mt-9 h-[3px] w-[60px] rounded-full"
        style={{ background: 'var(--gradient-accent)', animation: 'fade-up 0.4s ease-out 0.5s both' }}
      />
    </div>
  );
}

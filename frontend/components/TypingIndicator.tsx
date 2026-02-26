'use client';

import Image from 'next/image';

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 message-in">

      <div
        className="shrink-0 w-7 h-7 rounded-full overflow-hidden"
        style={{ boxShadow: '0 0 0 1.5px #03318C' }}
      >
        <Image
          src="/avatar.png"
          alt="Arnaud"
          width={28}
          height={28}
          className="object-cover w-full h-full"
        />
      </div>

      <div
        className="relative rounded-2xl rounded-bl-sm px-4 py-3.5"
        style={{
          background: '#FFFFFF',
          border: '1px solid #E0E0E0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
          style={{ background: 'var(--gradient-accent)' }}
        />
        <div className="flex items-center gap-1.5 pl-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: '#BDBDBD',
                animation: `bounce-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

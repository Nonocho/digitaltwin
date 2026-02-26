'use client';

import Image from 'next/image';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-end gap-2.5 message-in ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>

      {/* Assistant avatar */}
      {!isUser && (
        <div
          className="shrink-0 w-7 h-7 rounded-full overflow-hidden mb-5"
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
      )}

      {/* Bubble + timestamp */}
      <div className={`flex flex-col gap-1 max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        {isUser ? (
          /* User bubble — Navy */
          <div
            className="px-4 py-3 rounded-2xl rounded-br-sm font-brand leading-relaxed whitespace-pre-wrap"
            style={{
              background: 'var(--gradient-hero)',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            {message.content}
          </div>
        ) : (
          /* Assistant bubble — White card */
          <div
            className="relative px-4 py-3 rounded-2xl rounded-bl-sm font-brand leading-relaxed whitespace-pre-wrap"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E0E0E0',
              color: '#424242',
              fontSize: '14px',
              fontWeight: 400,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
              style={{ background: 'var(--gradient-accent)' }}
            />
            <div className="pl-1">{message.content}</div>
          </div>
        )}

        <span
          className="font-brand px-1"
          style={{ fontSize: '10px', color: '#BDBDBD' }}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {/* User avatar */}
      {isUser && (
        <div
          className="shrink-0 w-7 h-7 rounded-full mb-5 flex items-center justify-center"
          style={{ background: 'var(--gradient-hero)', boxShadow: '0 0 0 1.5px #4BB2F2' }}
        >
          <span
            className="font-brand font-semibold"
            style={{ fontSize: '9px', color: '#8DD0F7', letterSpacing: '0.05em' }}
          >
            YOU
          </span>
        </div>
      )}

    </div>
  );
}

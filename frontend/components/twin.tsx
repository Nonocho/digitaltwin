'use client';

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import ChatHeader from './ChatHeader';
import EmptyState from './EmptyState';
import MessageBubble, { type Message } from './MessageBubble';
import TypingIndicator from './TypingIndicator';

export default function Twin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text?: string) => {
    const messageText = (text ?? input).trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage.content,
            session_id: sessionId || undefined,
          }),
        }
      );

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();
      if (!sessionId) setSessionId(data.session_id);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Désolé, une erreur est survenue. Veuillez réessayer.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        boxShadow: '0 4px 6px rgba(3,49,140,0.04), 0 24px 60px rgba(3,49,140,0.10), 0 0 0 1px rgba(3,49,140,0.08)',
      }}
    >
      {/* Header */}
      <ChatHeader />

      {/* Messages area — Snow background */}
      <div className="relative flex-1 overflow-hidden" style={{ background: '#F2F2F2' }}>
        <div className="absolute inset-0 overflow-y-auto scrollbar-hidden p-5 space-y-4">
          {messages.length === 0 ? (
            <EmptyState onSuggest={sendMessage} />
          ) : (
            messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))
          )}

          {isLoading && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Bottom fade */}
        {messages.length > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #F2F2F2)' }}
          />
        )}
      </div>

      {/* Tangerine → Sky accent bar above input */}
      <div className="h-px shrink-0" style={{ background: 'var(--gradient-accent)' }} />

      {/* Input area — White */}
      <div className="px-4 py-3.5 bg-white shrink-0">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Posez votre question…"
            disabled={isLoading}
            autoFocus
            className="flex-1 px-4 py-2.5 rounded-xl font-brand transition-all duration-200 disabled:opacity-50 outline-none"
            style={{
              fontSize: '14px',
              background: '#F2F2F2',
              border: '1px solid #E0E0E0',
              color: '#1A1A1A',
              fontFamily: 'var(--font-brand)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#03318C';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(3,49,140,0.08)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#E0E0E0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />

          {/* Send button — Tangerine CTA */}
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl font-brand font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: '#F28444' }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.background = '#F7A871';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(242,132,68,0.35)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F28444';
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Envoyer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Hint */}
        <p
          className="font-brand text-center mt-2"
          style={{ fontSize: '10px', color: '#BDBDBD', letterSpacing: '0.04em' }}
        >
          Appuyez sur <kbd className="font-brand font-semibold text-gray-500">Entrée</kbd> pour envoyer
        </p>
      </div>
    </div>
  );
}

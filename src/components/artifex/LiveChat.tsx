'use client';

import { useState } from 'react';
import { Send, Users } from 'lucide-react';
import { mockChatMessages } from '@/lib/mock-data';

export function LiveChat() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In real app, send to Supabase
      setMessage('');
    }
  };

  return (
    <div className="bg-[hsl(var(--primary))] rounded-[var(--radius-card)] overflow-hidden shadow-lg flex flex-col h-[400px]">
      {/* Header */}
      <div className="bg-[hsl(var(--secondary))] px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[hsl(var(--accent))]" />
          <h3 className="font-semibold text-white text-sm">LIVE COMMUNITY CHAT</h3>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/70">42 online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {mockChatMessages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-[hsl(var(--primary))] font-semibold text-sm flex-shrink-0">
              {msg.username.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-white text-sm">{msg.username}</span>
                <span className="text-xs text-white/50">
                  {new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-white/90 break-words">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-[hsl(var(--secondary))] border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[hsl(var(--primary))] text-white placeholder:text-white/40 px-3 py-2 rounded-md text-sm border border-white/10 focus:border-[hsl(var(--accent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)]"
          />
          <button
            type="submit"
            className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md hover:bg-[hsl(var(--accent)/0.9)] transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

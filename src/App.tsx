import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  EyeOff, Shield, Copy, CheckCircle2, Lock, Wallet,
  ArrowRight, Sparkles, Eye, AlertTriangle, Globe,
  Smartphone, CreditCard, Zap, ExternalLink
} from 'lucide-react';

const THREAD_TWEETS = [
  {
    id: 1,
    text: `🔓 Your crypto wallet exposes more about you than your bank account ever did.

Every wallet is a glass safe: balances, payments, history — all readable by anyone with a block explorer.

Your employer can see where you spend.
Your ex can track your net worth.
Governments can map your entire financial life.

This is the privacy crisis no one talks about in crypto. 🧵`,
  },
  {
    id: 2,
    text: `Think about it:

When you pay for coffee with your credit card, only you, the merchant, and the bank know.

When you pay for coffee with SOL, the entire planet can see:
• Your wallet balance
• Every transaction you've ever made
• Every token you hold
• Every DeFi position you've opened

That's not "transparency." That's surveillance.`,
  },
  {
    id: 3,
    text: `Banks have privacy regulations (GDPR, PCI-DSS).

Blockchains have… nothing.

The irony: crypto was built to free us from institutional control, but it created a system where ANYONE — not just banks — can surveil your finances.

We traded one set of watchers for seven billion.`,
  },
  {
    id: 4,
    text: `Enter @steaboratory — the privacy layer for everyday finance on Solana.

Stealf fixes the glass-safe problem with a dual-wallet architecture:

🔒 Shielded Wallet — Your assets live here. Hidden from public view.
💳 Spending Account — For daily life. No on-chain link to your shielded wallet.

Two wallets. One app. Zero public trace between them.`,
  },
  {
    id: 5,
    text: `How it works under the hood:

1. Deposit SOL/USDC into your Shielded Wallet
2. Stealf uses confidential computing to break the on-chain link
3. When you need to pay, funds route through your Spending Account
4. No observer can connect your spending to your savings

It's like having a bank account AND a cash wallet — except it's all on-chain and verifiable.`,
  },
  {
    id: 6,
    text: `"But I have nothing to hide!"

You also have curtains on your windows.

Privacy isn't about hiding. It's about choice.

The choice to:
• Negotiate salary without your employer seeing your net worth
• Donate to causes without judgment
• Hold assets without becoming a target

Financial privacy is a human right. Stealf makes it real on Solana.`,
  },
  {
    id: 7,
    text: `The numbers speak:

• 700+ beta testers already using Stealf
• Open beta live NOW on Solana
• Dual-wallet architecture — first of its kind on SVM
• No KYC required for basic privacy
• Built on confidential computing, not just mixing

The missing piece of crypto adoption isn't speed or fees.

It's privacy. And @steaboratory is building it.

Try the beta: stealf.com 🛡️`,
  },
];

export default function App() {
  const [copiedThread, setCopiedThread] = useState(false);
  const [copiedSingle, setCopiedSingle] = useState(false);

  const copyFullThread = () => {
    const text = THREAD_TWEETS.map(t => t.text).join('\n\n---\n\n');
    navigator.clipboard.writeText(text);
    setCopiedThread(true);
    setTimeout(() => setCopiedThread(false), 2500);
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
  };

  const copySinglePost = () => {
    const singlePost = `🔓 Your crypto wallet exposes more about you than your bank account ever did.

Every balance, every transaction, every token — public to 7 billion people.

That's not transparency. That's surveillance.

@steaboratory fixes this with a dual-wallet architecture on Solana:

🔒 Shielded Wallet → Hidden assets
💳 Spending Account → Daily payments
🚫 Zero on-chain link between them

700+ beta testers. Open beta live now.

Financial privacy isn't a feature. It's a right.

Try it: stealf.com 🛡️`;
    navigator.clipboard.writeText(singlePost);
    setCopiedSingle(true);
    setTimeout(() => setCopiedSingle(false), 2500);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-zinc-100 selection:bg-violet-500/30">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-violet-950/40 via-indigo-950/30 to-purple-950/40 border-b border-violet-500/20 px-4 py-2 text-center text-xs text-violet-300 flex items-center justify-center space-x-2">
        <EyeOff className="w-3.5 h-3.5 text-violet-400" />
        <span className="font-semibold">Stealf X Post Bounty — Financial Privacy on Solana</span>
        <span className="text-zinc-400">·</span>
        <span className="text-zinc-300">Ready-to-Post Thread & Single Post ($500 USDC)</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090D16]/90 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 via-purple-500 to-indigo-500 p-0.5 shadow-lg shadow-violet-500/20">
              <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                <EyeOff className="w-5 h-5 text-violet-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base text-white tracking-tight">Stealf Privacy Thread</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-400 border border-violet-500/30 font-mono">
                  X POST
                </span>
              </div>
              <p className="text-[9px] text-zinc-400 font-mono">WHY FINANCIAL PRIVACY MATTERS & HOW STEALF FIXES IT</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copySinglePost}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 flex items-center space-x-1.5 cursor-pointer border border-zinc-700"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSingle ? 'Copied!' : 'Copy Single Post'}</span>
            </button>
            <button
              onClick={copyFullThread}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-400 text-white font-extrabold text-xs flex items-center space-x-1.5 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet-500/20"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedThread ? 'Thread Copied!' : 'Copy Full Thread (7 tweets)'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Key Message Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-violet-500/30 space-y-1">
            <Eye className="w-5 h-5 text-violet-400" />
            <span className="text-[10px] font-bold text-violet-400 font-mono uppercase">The Problem</span>
            <p className="text-xs text-zinc-200">Every wallet is a glass safe. 7B people can see your finances.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 space-y-1">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 font-mono uppercase">The Solution</span>
            <p className="text-xs text-zinc-200">Dual-wallet: Shielded + Spending. Zero on-chain link.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-amber-500/30 space-y-1">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-bold text-amber-400 font-mono uppercase">Live Now</span>
            <p className="text-xs text-zinc-200">700+ testers. Open beta on Solana. First-of-its-kind SVM privacy.</p>
          </div>
        </div>

        {/* Thread Timeline */}
        <div className="space-y-0">
          {THREAD_TWEETS.map((tweet, idx) => (
            <div key={tweet.id} className="relative pl-8">
              {/* Timeline line */}
              {idx < THREAD_TWEETS.length - 1 && (
                <div className="absolute left-3.5 top-10 bottom-0 w-px bg-violet-500/20" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-1.5 top-5 w-4 h-4 rounded-full bg-violet-500/30 border-2 border-violet-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </div>

              <div className="p-5 mb-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-violet-400">
                    Tweet {tweet.id}/{THREAD_TWEETS.length}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{tweet.text.length} chars</span>
                </div>
                <p className="text-sm text-zinc-100 leading-relaxed whitespace-pre-line font-sans">
                  {tweet.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#070A11] mt-16 py-8 text-center text-xs text-zinc-500">
        <p className="font-semibold text-zinc-400">Stealf Financial Privacy Thread — Ready for X Publication</p>
        <p className="font-mono mt-1 text-[10px] text-zinc-600">Built for Superteam Earn ($500 USDC) · 7-Tweet Thread + Single Post · Tags @steaboratory</p>
      </footer>
    </div>
  );
}

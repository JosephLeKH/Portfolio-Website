'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    body: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const background = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).catch(() => null);

    if (!res) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      return;
    }

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const message = (data && typeof data === 'object' && 'error' in data && typeof data.error === 'string')
        ? data.error
        : 'Failed to send message';
      setStatus('error');
      setErrorMessage(message);
      return;
    }

    setStatus('success');
    setFormData({ subject: '', email: '', body: '' });
  };

  return (
    <div className="-mt-20 bg-foreground text-white">
      <div className="flex min-h-screen w-full items-center justify-center pt-44 align-middle text-[6.6vw] xs:text-[5.6vw]">
        <div className="p-12 xs:w-1/2 xs:p-0">
          <div className="flex justify-between uppercase">
            <p className="m-0">Joseph</p>
            <p className="m-0">Le</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">software</p>
            <p className="m-0">&</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">data</p>
            <p className="m-0">engineer</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">SF</p>
            <Link
              href="https://www.linkedin.com/in/hung-le-/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <p>→Linkedin</p>
            </Link>
          </div>
          <div className="flex justify-between uppercase">
            <Link
              href="mailto:jle@stanford.edu"
              className="transition-colors hover:text-primary"
            >
              <p className="m-0">→Email</p>
            </Link>
            <Link
              href="https://github.com/JosephLeKH"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <p>→Github</p>
            </Link>
          </div>
          <div
            ref={background}
            className="pointer-events-none absolute inset-0 h-full w-full bg-foreground text-[5.6vw] opacity-0"
          />
        </div>
      </div>

      <div className="min-h-screen px-12 pt-20 sm:px-56" id="email">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s talk!
            </h2>
            <p className="max-w-lg text-lg text-white/70 sm:text-xl">
              I&apos;m always looking for new and innovative ways to use my
              skills.
            </p>
          </div>

          <div className="col-span-2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="subject" className="text-xl">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Full name"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/20 bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/20 bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="body" className="text-xl">
                  Message
                </label>
                <textarea
                  id="body"
                  placeholder="Message"
                  rows={5}
                  value={formData.body}
                  onChange={(e) =>
                    setFormData({ ...formData, body: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-white/20 bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-full border border-secondary px-6 py-3 transition-colors hover:bg-secondary/20 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </div>
              {status === 'success' && (
                <p className="pt-2 text-sm text-green-400">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p className="pt-2 text-sm text-red-400">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="px-12 py-16 sm:px-56">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}

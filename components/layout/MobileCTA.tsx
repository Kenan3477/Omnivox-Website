"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink-600 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="flex gap-2">
        <Button href="/pricing" variant="secondary" size="sm" className="flex-1">
          Pricing
        </Button>
        <Button href="/contact" size="sm" className="flex-1">
          Book a demo
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-cyan-400/20 bg-slate-900/95 backdrop-blur-md p-3 md:hidden"
      aria-label="Quick actions"
    >
      <div className="flex gap-3">
        <Button href="/pricing" variant="secondary" size="sm" className="flex-1">
          See pricing
        </Button>
        <Button href="/contact" size="sm" className="flex-1">
          Book a demo
        </Button>
      </div>
    </aside>
  );
}

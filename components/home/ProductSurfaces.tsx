import { Button } from "@/components/ui/Button";
import { WorkspaceMock } from "@/components/product/WorkspaceMock";
import { IvrCanvasMock } from "@/components/product/IvrCanvasMock";
import { CampaignListMock } from "@/components/product/IvrCanvasMock";

export function ProductSurfaces() {
  return (
    <section className="border-b border-ink-600 bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-site space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Agent workspace</p>
            <h2 className="display mt-3 text-3xl text-paper">Inbox and My Interactions. Same /work. Two views.</h2>
            <p className="mt-4 text-ink-300">
              Softphone WebRTC, scripts, voice wrap codes, callbacks. Digital is claim / close / reply. An active call
              forces My Interactions. Not one customer card across channels.
            </p>
            <Button href="/features#dialer" variant="outline" className="mt-6">
              Workspace features
            </Button>
          </div>
          <WorkspaceMock />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <p className="kicker">Inbound</p>
            <h2 className="display mt-3 text-3xl text-paper">DIDs, queues, hours, IVR studio. Not “we also have a number”.</h2>
            <p className="mt-4 text-ink-300">
              Platform-managed UK numbers. You do not bring a carrier. Route to agents, teams, queues, overflow. Ring
              groups. Visual flow builder: hours, menus, collect input, audio, TTS, voicemail.
            </p>
            <Button href="/inbound" variant="outline" className="mt-6">
              Inbound stack
            </Button>
          </div>
          <div className="lg:order-1">
            <IvrCanvasMock />
          </div>
        </div>

        <div>
          <p className="kicker mb-4">Campaigns</p>
          <CampaignListMock />
        </div>
      </div>
    </section>
  );
}

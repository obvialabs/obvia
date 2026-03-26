import type React from "react"

export default function BlocksPage() {

  return (
    <main
      className="w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#111]/60 border-b border-border/40">
      <div className="px-6">
        <div className="mx-auto w-full max-w-7xl mt-32 mb-20 grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-5 space-y-6">
            <div className="text-fg0 space-y-2 items-start text-center lg:text-left">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-fg3 font-bold">Product</div>
              <div className="flex flex-col gap-4 items-start"><h1
                className="z-20 tracking-tight text-pretty lg:text-5xl text-4xl font-light"><span>Agents </span><span
                >SDKs </span></h1>
                <div className="flex flex-col items-start"><p className="lg:font-regular font-regular pt-2 text-fg2 lg:text-lg text-base">
                  <span className="inline-block max-w-prose text-pretty">Build voice and video agents in Python or TypeScript with LiveKit’s open source framework. Design complex workflows in code, define tool use, and integrate with any AI model.</span>
                </p></div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-4 lg:flex"><a href="https://docs.livekit.io/agents/start/voice-ai-quickstart/"
                                                                className="flex items-center justify-center gap-2 overflow-hidden rounded-md px-4 py-2 border w-full lg:w-auto"

                                                                >
              <div className="relative overflow-hidden text-sm font-semibold">
                <div className="invisible">Start building</div>
                <span className="absolute top-0 left-0 flex w-full flex-col"><div
                  className="text-bg1 h-full w-full">Start building</div><div
                  className="text-fg0 h-full w-full">Start building</div></span></div>
            </a><a
              className="border-separator1 bg-bg1 text-fg1 hover:border-separator2 hover:text-fg0 inline-flex items-center justify-center rounded-lg border px-4 py-2 text-center text-sm font-semibold tracking-tight transition-all duration-150 hover:bg-bg2 w-full lg:w-fit"
              href="https://docs.livekit.io/agents/">Documentation</a></div>
          </div>
          <div className="relative col-span-7 flex flex-col items-center lg:items-end lg:justify-end"><img
            alt="Illustration of isometric grid with Agents SDKs elements" loading="lazy" width="1767" height="1200"
            decoding="async" data-nimg="1" className="mt-8 max-w-full lg:-mt-[10%] lg:-mr-[9%] lg:max-w-3xl"

            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagents-sdks-hero.d6a76d35.png&amp;w=3840&amp;q=75"
            /></div>
        </div>
      </div>

      <div className="border-separator1 bg-bg1 border-y"><div className="px-6"><div className="mx-auto w-full max-w-7xl"><div className="border-separator1 -mx-6 flex flex-col border-x md:mx-0 md:flex-row"><div className="border-separator1 text-fg3 flex-1 border-b p-4 text-center text-sm last:border-r-0 last:border-b-0 md:border-r md:border-b-0"><div><strong className="text-fg1">300+</strong> AI model integrations</div></div><div className="border-separator1 text-fg3 flex-1 border-b p-4 text-center text-sm last:border-r-0 last:border-b-0 md:border-r md:border-b-0"><div><strong className="text-fg1">300,000+</strong> developers</div></div><div className="border-separator1 text-fg3 flex-1 border-b p-4 text-center text-sm last:border-r-0 last:border-b-0 md:border-r md:border-b-0"><div><strong className="text-fg1">3M+</strong> monthly downloads</div></div></div></div></div></div>
    </main>
  )
}

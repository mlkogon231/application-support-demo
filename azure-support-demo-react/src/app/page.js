import Image from "next/image";
import AzureProblemSimulator from '@/components/AzureProblemSimulator'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Header */}
        <header className="p-4 border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Azure Support Engineering Demo</h1>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={24}
              priority
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <div className="max-w-6xl mx-auto">
            <AzureProblemSimulator />
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 border-t">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
            Built with Next.js and shadcn/ui
          </div>
        </footer>
      </div>
    </div>
    );
  }
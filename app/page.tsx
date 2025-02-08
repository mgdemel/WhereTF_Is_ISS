import ISSTracker from "@/components/ISSTracker"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">International Space Station Tracker</h1>
      <ISSTracker />
    </main>
  )
}

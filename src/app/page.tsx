import HelloWorldCard from '@/components/HelloWorldCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <HelloWorldCard />
      </div>
    </main>
  )
}
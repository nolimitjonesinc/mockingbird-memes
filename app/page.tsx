import { Bird } from 'lucide-react'
import { MemeGrid } from '@/components/meme-grid'
import { DeepLinkFallback } from '@/components/deep-link-fallback'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 pt-16 pb-12 text-center">
        <div className="animate-bounce inline-block mb-6">
          <Bird className="h-16 w-16 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
          MockingBird Memes
        </h1>
        <p className="text-xl md:text-2xl text-purple-700 font-medium">
          Laugh Loud. Meme Hard.
        </p>
        <p className="text-lg md:text-xl text-purple-600 mt-2">
          Tap. Remix. Share. It's that easy.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Create memes faster than you can say 'MockingBird!' Remix your friends' jokes or start your own.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            Get the App Now!
          </Button>
        </section>

        {/* Deep Link Fallback Section */}
        <DeepLinkFallback />

        {/* Sample Meme Section */}
        <MemeGrid />
      </main>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-purple-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-600 text-center md:text-left">
            © 2025 MockingBirdMemes.com. Powered by endless laughs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-purple-500 hover:text-purple-700 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-700 transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


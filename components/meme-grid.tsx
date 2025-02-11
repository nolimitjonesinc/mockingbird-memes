'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const SAMPLE_MEMES = [
  {
    id: 1,
    title: "When you're the group clown...",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    title: "Tap me! I dare you.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "POV: It's Monday morning",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function MemeGrid() {
  const [selectedMeme, setSelectedMeme] = useState<typeof SAMPLE_MEMES[0] | null>(null)

  return (
    <section className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">
        Fresh from the Nest
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_MEMES.map((meme) => (
          <Dialog key={meme.id}>
            <DialogTrigger asChild>
              <button
                className="group relative aspect-square w-full overflow-hidden rounded-xl bg-purple-100 transition-transform hover:scale-105"
                onClick={() => setSelectedMeme(meme)}
              >
                <Image
                  src={meme.image}
                  alt={meme.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-medium px-4 text-center">
                    {meme.title}
                  </p>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{meme.title}</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={meme.image}
                  alt={meme.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Remix This Meme in the App
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}


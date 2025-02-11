import { Button } from '@/components/ui/button'

export function DeepLinkFallback() {
  return (
    <section className="max-w-2xl mx-auto bg-purple-100 rounded-2xl p-8 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4">
        Uh-oh! Looks like you need the app.
      </h2>
      <p className="text-purple-700 mb-6">
        Tap below to fix that ASAP.
      </p>
      <Button 
        variant="secondary" 
        size="lg"
        className="bg-white hover:bg-purple-50"
      >
        Download MockingBird Memes
      </Button>
    </section>
  )
}


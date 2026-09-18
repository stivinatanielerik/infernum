import SectionHeading from '../components/SectionHeading'

function Rave() {
  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          title="Mi az a rave?"
          description="A rave nem csupán egy zenei műfaj, hanem egy kulturális jelenség, amelynek középpontjában az elektronikus zene, a közösségi élmény és a tánc áll."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <article>
            <h3 className="text-2xl font-bold">
              A kezdetek
            </h3>

            <p className="mt-4 leading-8 text-white/50">
              Ide kerül majd a rave történetének részletes
              bemutatása.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-bold">
              A kultúra
            </h3>

            <p className="mt-4 leading-8 text-white/50">
              Ide kerül majd a rave kultúrájának bemutatása.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Rave

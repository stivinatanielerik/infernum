import SectionHeading from '../components/SectionHeading'

function Bochka() {
  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          title="Mi az a bochka?"
          description="A bochka egy Magyarországon is használt elnevezés bizonyos kemény, groove-orientált elektronikus zenei hangzásokra."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <article>
            <h3 className="text-2xl font-bold">
              Hangzás
            </h3>

            <p className="mt-4 leading-8 text-white/50">
              Erőteljes kickek, gyors tempó és repetitív
              groove-ok.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-bold">
              Tempó
            </h3>

            <p className="mt-4 leading-8 text-white/50">
              A későbbi verzióban itt részletesen
              bemutatjuk a jellemző BPM-tartományokat.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-bold">
              Közeg
            </h3>

            <p className="mt-4 leading-8 text-white/50">
              A magyar underground elektronikus zenei
              színtérhez kapcsolódó hangzás és közösség.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Bochka

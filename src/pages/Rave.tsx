import SectionHeading from '../components/SectionHeading'
import type { ReactNode } from 'react'

function Rave() {
  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          title="Mi az a rave?"
          description={<>A rave kifejezés leggyakrabban egy elektronikus zenei eseményt jelent, 
            amely szokatlan helyszíneken – például raktárakban, elhagyatott épületekben vagy a szabad ég alatt – zajlik, és 
            egész éjszakás táncolásból áll. <br /><br />A rave egy különálló zenei műfajt is jelent, 
            azonban mi egy kulturális jelenségre hivatkozunk, 
            amelynek középpontjában legtöbbször a techno és hasonló műfajok állnak, a közösségi élmény, 
            a szabadság érzete és valamilyen szinten a lázadás jelképeként.</>}
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

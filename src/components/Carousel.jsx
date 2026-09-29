import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({ images, alt }) => {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = (step) => setIndex((i) => (i + step + count) % count)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
      <img
        src={images[index]}
        alt={`${alt} — captura ${index + 1} de ${count}`}
        className="aspect-[16/9] w-full object-cover object-top"
        loading="lazy"
      />
      {count > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-900 shadow transition hover:bg-white"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-900 shadow transition hover:bg-white"
          >
            <FaChevronRight size={12} />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-ink-900/60 px-2 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel

import React from 'react'
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function 
<div id="indicators-carousel" className="relative w-full max-w-2xl mx-auto" data-carousel="static">
  <div className="relative overflow-hidden rounded-lg" style={{ height: "400px" }}>
    {/* Imágenes del carrusel */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src={image1} className="w-full h-full object-cover" alt="Slide 1" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image2} className="w-full h-full object-cover" alt="Slide 2" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image3} className="w-full h-full object-cover" alt="Slide 3" />
    </div>
  </div>

  {/* Indicadores del carrusel */}
  <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
  </div>

  {/* Botones de navegación */}
  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
      </svg>
      <span className="sr-only">Anterior</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9 5 5 1 1" />
      </svg>
      <span className="sr-only">Siguiente</span>
    </span>
  </button>
</div>
() {
  return (
    <div>
        <div id="indicators-carousel" className="relative w-full max-w-2xl mx-auto" data-carousel="static">
  <div className="relative overflow-hidden rounded-lg" style={{ height: "400px" }}>
    {/* Imágenes del carrusel */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src={image1} className="w-full h-full object-cover" alt="Slide 1" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image2} className="w-full h-full object-cover" alt="Slide 2" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image3} className="w-full h-full object-cover" alt="Slide 3" />
    </div>
  </div>

  {/* Indicadores del carrusel */}
  <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
  </div>

  {/* Botones de navegación */}
  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
      </svg>
      <span className="sr-only">Anterior</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9 5 5 1 1" />
      </svg>
      <span className="sr-only">Siguiente</span>
    </span>
  </button>
</div>

    </div>
  )
}

export default 
<div id="indicators-carousel" className="relative w-full max-w-2xl mx-auto" data-carousel="static">
  <div className="relative overflow-hidden rounded-lg" style={{ height: "400px" }}>
    {/* Imágenes del carrusel */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src={image1} className="w-full h-full object-cover" alt="Slide 1" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image2} className="w-full h-full object-cover" alt="Slide 2" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={image3} className="w-full h-full object-cover" alt="Slide 3" />
    </div>
  </div>

  {/* Indicadores del carrusel */}
  <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
  </div>

  {/* Botones de navegación */}
  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
      </svg>
      <span className="sr-only">Anterior</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9 5 5 1 1" />
      </svg>
      <span className="sr-only">Siguiente</span>
    </span>
  </button>
</div>

/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Deploys from './Deploys';

const Carousel = ({ deploys }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.firstChild.offsetWidth;
            carouselRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.firstChild.offsetWidth;
            carouselRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative w-full">
             {/* <div className="absolute z-10 left-0 top-0 w-40 h-full bg-gradient-to-r from-[#18181b] to-transparent pointer-events-none"></div>
             <div className="absolute z-10 right-0 top-0 w-40 h-full bg-gradient-to-r from-transparent to-[#18181b] pointer-events-none"></div> */}
            {/* Botón de desplazamiento hacia la izquierda */}
            <button
                className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-[#333] rounded-md px-4 py-2 z-30 duration-200 hover:scale-105 active:bg-[#252525]"
                onClick={scrollLeft}
            >
                ‹
            </button>

            {/* Contenedor del carrusel */}
            <div
                className="w-full overflow-x-auto scroll-smooth no-scrollbar"
                ref={carouselRef}
            >
               
                <div className="flex gap-4 pb-3 max-w-full h-full">
                    {/* Tarjetas ajustadas para mostrar completamente */}
                    {deploys.map((deploy, index) => (
                        <div key={index} className="flex-shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-2rem)] h-full scroll-snap-align-start">
                            <Deploys deploy={deploy} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón de desplazamiento hacia la derecha */}
            <button
                className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-[#333] rounded-md px-4 py-2 z-30 duration-200 hover:scale-105 active:bg-[#252525]"
                onClick={scrollRight}
            >
                ›
            </button>
        </div>
    );
};

export default Carousel;

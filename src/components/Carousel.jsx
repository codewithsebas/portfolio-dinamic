/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import Deploys from './Deploys';

const Carousel = ({ deploys }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Función para manejar el inicio del arrastre
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
        carouselRef.current.style.cursor = 'grabbing'; // Cambia el cursor a "agarrando"
    };

    // Función para manejar el movimiento del mouse mientras se arrastra
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiplicador para controlar la sensibilidad
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Función para detener el arrastre
    const handleMouseUp = () => {
        setIsDragging(false);
        carouselRef.current.style.cursor = 'grab'; // Cambia el cursor de vuelta a "agarrar"
    };

    // Función para desplazarse hacia la izquierda
    const scrollLeftButton = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.firstChild.offsetWidth;
            carouselRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth',
            });
        }
    };

    // Función para desplazarse hacia la derecha
    const scrollRightButton = () => {
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

            {/* Botón izquierdo */}
            {/* <button
                className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-black border border-gray-600 rounded-md px-4 py-2 z-30 duration-200 hover:scale-105 active:bg-[#252525]"
                onClick={scrollLeftButton}
            >
                ‹
            </button> */}

            {/* Contenedor del carrusel */}
            <div
                className="w-full overflow-x-auto scroll-smooth no-scrollbar cursor-grab" // Cursor inicial en "grab"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="flex gap-4 pb-3 max-w-full h-full">
                    {deploys.map((deploy, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[calc(50%-1rem)] h-full scroll-snap-align-start"
                        >
                            <Deploys deploy={deploy} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón derecho */}
            {/* <button
                className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-black border border-gray-600 rounded-md px-4 py-2 z-30 duration-200 hover:scale-105 active:bg-[#252525]"
                onClick={scrollRightButton}
            >
                ›
            </button> */}
        </div>
    );
};

export default Carousel;
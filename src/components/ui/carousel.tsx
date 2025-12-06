import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useMemo } from 'react';

interface CarouselProps {
    images: string[];
    imgClassName?: string;
}

export const Carousel = ({ images, imgClassName }: CarouselProps) => {
    const canLoop = useMemo(() => images.length >= 5, [images.length]);
    const canAutoplay = useMemo(() => images.length >= 3, [images.length]);
    
    const swiperConfig = useMemo(() => {
        if (canLoop) {
            return {
                modules: [Navigation, Autoplay],
                navigation: true,
                slidesPerView: 1,
                setWrapperSize: true,
                spaceBetween: 20,
                autoplay: { delay: 3000, disableOnInteraction: false },
                speed: 1300,
                loop: true,
            };
        } else if (canAutoplay) {
            return {
                modules: [Navigation, Autoplay],
                navigation: true,
                slidesPerView: 1,
                setWrapperSize: true,
                spaceBetween: 20,
                autoplay: { 
                    delay: 3000, 
                    disableOnInteraction: false,
                },
                speed: 1300,
                loop: false,
                rewind: true,
            };
        } else {
            return {
                modules: [Navigation],
                navigation: true,
                slidesPerView: 1,
                setWrapperSize: true,
                spaceBetween: 20,
                autoplay: false,
                speed: 1300,
                loop: false,
            };
        }
    }, [canLoop, canAutoplay]);
    
    if (images.length === 0) {
        return null;
    }
    
    return (
        <div className="relative w-full max-w-full mx-auto md:max-w-90 lg:max-w-[430px] xl:max-w-[500px]">
            <Swiper key={`swiper-${images.length}-${canLoop}`} {...swiperConfig}>
                {images.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`${imgClassName}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

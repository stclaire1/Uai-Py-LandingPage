import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface CarouselProps {
    images: string[];
    imgClassName?: string;
}

export const Carousel = ({ images, imgClassName }: CarouselProps) => {
    return (
        <div className="realtive w-full md:max-w-90 lg:max-w-[430px] xl:max-w-[500px]">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                slidesPerView={1}
                setWrapperSize={true}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1300}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
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

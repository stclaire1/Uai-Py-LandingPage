import { Button } from "../button";
import { Carousel } from "../carousel";

type ContentBlockTextProps = {
    marginDirection?: string;
    title?: string;
    subheading?: string;
    description?: string;
    flexDirection?: string;
    showBtn?: boolean;
    btnText?: string;
    btnVariant?: React.ComponentProps<typeof Button>["variant"];
    btnClassName?: string;
    imgClassName?: string;
    carouselImages?: string[];
    staticImage?: string;
    linkTo?: string;
};

const ContentBlock = ({ marginDirection, title, subheading, description, flexDirection, showBtn, btnText, btnVariant, btnClassName, imgClassName, carouselImages, staticImage, linkTo }: ContentBlockTextProps) => {
    return (
        <div className={`flex md:justify-between items-center ${flexDirection}`}>
            {carouselImages && carouselImages.length > 0 ? (
                <Carousel images={carouselImages} imgClassName={imgClassName}/>
            ) : staticImage ? (
                <img
                src={staticImage}
                alt="Static"
                className={`${imgClassName}`}
                />
            ) : null}
            <div className={`text-center md:text-left ${marginDirection}`}>
                <div className="flex flex-col-reverse">
                    <h1 className="text-2xl uppercase mb-5 md:text-3xl md:pr-7 lg:pr-0 lg:text-5xl">{title}</h1>
                    <h2 className="uppercase text-xs tracking-widest mb-2">{subheading}</h2>
                </div>
                <p className="text-justify text-sm lg:text-base lg:max-w-[470px] xl:max-w-[700px]">{description}</p>
                {showBtn && (
                    <Button variant={btnVariant} size="lg" className={`mt-2 ${btnClassName ?? ""}`}><a href={linkTo}>{btnText}</a></Button>
                )}
            </div>
        </div>
    )
}

export default ContentBlock;
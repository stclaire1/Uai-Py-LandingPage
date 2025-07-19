import ContentBlock from "@/components/ui/ContentBlock";
import eventos1 from "@/assets/eventos_1.jpg";
import eventos2 from "@/assets/eventos_2.jpeg";
import eventos3 from "@/assets/eventos_3.jpeg";

export const TechEvents = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <ContentBlock marginDirection="md:mr-15 xl:mr-20" title="Eventos" subheading="Participações em eventos" description="Nosso projeto já marcou presença em diversos eventos de tecnologia, levando inovação e impacto social por onde passa. A cada participação, fortalecemos conexões, trocamos experiências e mostramos como a tecnologia pode transformar realidades." flexDirection="flex-col md:flex-row-reverse" carouselImages={[eventos1, eventos2, eventos3]} imgClassName="mb-12 aspect-3/2 object-cover" />
        </section>
    );
}
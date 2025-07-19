import ContentBlock from "@/components/ui/ContentBlock";
import Metrics from "@/components/ui/Metrics"
import image1 from "@/assets/inicio_1.jpeg";
import image2 from "@/assets/inicio_2.jpeg";
import image3 from "@/assets/inicio_3.jpeg";
import image from "@/assets/Elemento_2.svg"

const metrics = [
    {
        "id": 1,
        "title": "4+",
        "description": "Universidades envolvidas"
    },
    {
        "id": 2,
        "title": "15+",
        "description": "Pessoas envolvidas"
    },
    {
        "id": 3,
        "title": "5+",
        "description": "Participação em eventos"
    }
];

export const ProjectConcept = () => {
    return (
        <section className="px-10 mb-16 md:pt-8 md:px-15 md:my-10 lg:px-20 xl:px-35" id="projectConcept">
            {/* add fade-in-up animation to metrics  */}
            <div className="hidden md:flex md:justify-center md:gap-20 md:mb-16 lg:gap-36 xl:gap-44">
                {metrics.map(metric => (
                    <Metrics
                        key={metric.id}
                        title={metric.title}
                        description={metric.description}
                    />
                ))}
            </div>
            <div className="hidden md:block">
                <ContentBlock marginDirection="md:ml-10 lg:ml-7 xl:ml-15" title="O início de tudo" subheading="Conceito do Projeto" description="A UAI.py é uma iniciativa cuja semente foi plantada quando o professor Alex Medeiros Carvalho incentivou estudantes a desenvolverem uma solução para a descaracterização de equipamentos utilizados para acesso à TV pirata (TV box), fornecidos a instituições de ensino por meio do projeto nacional Além do Horizonte. Inicialmente, o projeto foi iniciado por dois estudantes que se uniram para elaborar os primeiros esboços da solução. Hoje, já conta com mais de dez estudantes de quatro instituições de ensino diferentes." showBtn={true} btnText="Conheça+" btnVariant="gradient" btnClassName="mt-4 cursor-pointer" imgClassName="hidden aspect-square object-cover md:block md:rounded-full" carouselImages={[image1, image2, image3]} linkTo="#repoRedirect"/>
            </div>
            <div className="mt-16">
                <ContentBlock marginDirection="md:mr-10 xl:mr-15" title="Entenda melhor" subheading="Conceito do Projeto" description="A proposta da UAI.py é ser um projeto open source que facilite o desenvolvimento de soluções de Internet das Coisas. Para fazer isso, desenvolvemos uma arquitetura agnóstica que utiliza os equipamentos TVbox como centrais de processamento de dados locais. Essa, ao se comunicar com sensores, é responsável por garantir a resiliência dos dados e enviá-los para um servidor virtual onde os dados são tratados e assim estão prontos para visualização." flexDirection="flex-col justify-center md:flex-row-reverse" showBtn={true} btnText="Saiba mais →" btnVariant="outline" btnClassName="mt-4 cursor-pointer" staticImage={image} imgClassName="max-w-60 mb-12 md:mb-0 md:max-w-4/10 lg:max-w-1/3" linkTo="#repoRedirect"/>
            </div>
        </section>
    );
};
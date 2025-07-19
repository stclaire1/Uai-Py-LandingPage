import ContentBlock from "@/components/ui/ContentBlock"
import team from "@/assets/time.jpg"

export const Team = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <ContentBlock marginDirection="md:ml-10 xl:ml-15" title="Nosso time" subheading="Colaboradores envolvidos" description="Nosso time é composto por estudantes de cursos das áreas de engenharia, tecnologia, ciências agrárias e ciências econômicas. A interdisciplinariedade presente no grupo é fundamental para a expansão e desenvolvimento do projeto, uma vez que o conhecimento é plural." flexDirection="flex-col justify-center md:flex-row" showBtn={false} staticImage={team} imgClassName="max-w-full md:max-w-6/10 lg:max-w-5/10 mb-12 md:mb-0"/>
        </section>
    )
}
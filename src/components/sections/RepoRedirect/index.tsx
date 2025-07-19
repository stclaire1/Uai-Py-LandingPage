import { Button } from "@/components/ui/button"
import backgroundImage from "@/assets/Banner_bg.svg"

export const RepoRedirect = () => {
    return (
        <section className="px-10 py-20 md:px-15 lg:px-20 lg:py-24 xl:px-35" id="repoRedirect">
            <div className="rounded-xl text-center py-8 px-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:text-start sm:px-6 lg:px-12 xl:px-16"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="sm:max-w-[320px] md:max-w-[480px] xl:max-w-[580px]">
                    <h2 className="font-bold mb-4 text-[white] sm:text-xl md:text-3xl md:mb-6 xl:text-4xl">Ficou interessado e deseja se aprofundar mais nesse projeto?</h2>
                    <p className="text-sm mb-6 text-[white] sm:mb-0">Clique para ser redirecionado ao repositório</p>
                </div>
                <Button asChild variant='plain' size="md" className="cursor-pointer lg:px-10">
                    <a href="https://github.com/uaipy" target="_blank" rel="noopener noreferrer">Conheça+</a>
                </Button>
            </div>
        </section>
    )
}
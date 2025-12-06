import { Button } from '@/components/ui/button'
import notebook from '@/assets/Elemento_1.svg'

export const Hero = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <div className="mt-5 border-b border-uaipy-primary pb-14 md:flex md:justify-between items-center md:mt-10 lg:border-b-2">
                <div className="md:max-w-[490px] md:mr-10 lg:max-w-[600px] xl:mr-15">
                    <div className="flex flex-col-reverse">
                        <h1 className="text-2xl uppercase mb-5 md:text-3xl md:pr-7 lg:pr-0 lg:text-5xl">Seja bem-vindo(a) ao universo UAI.py</h1>
                        <h2 className="uppercase text-xs tracking-widest mb-2">Fique por dentro de tudo</h2>
                    </div>
                    <p className="text-sm mb-2 lg:text-base max-w-[460px]">Saiba mais sobre o nosso projeto, que surgiu a partir da iniciativa “Além do Horizonte” da Receita Federal do Brasil, possibilitando a criação das ideias aqui apresentadas.</p>
                    <Button variant="gradient" size="lg" className="mt-4 cursor-pointer"><a href="#repoRedirect">Conheça+</a></Button>
                </div>
                <img src={notebook} alt="" className="w-48 mx-auto mt-6 md:mx-0 md:mt-0 md:w-80 lg:w-90 xl:w-100"/>
            </div>
        </section>
    )
}
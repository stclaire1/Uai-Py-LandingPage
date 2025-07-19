import { Button } from '@/components/ui/button'
import { CircleCheckBig } from 'lucide-react'

export const Demo = () => {
    return (
        <section className="flex flex-col items-left px-10 pt-15 sm:flex-row sm:items-center md:px-15 lg:justify-between lg:px-20 xl:px-35" id="demo">
            <div className="bg-[#000932] p-6 rounded-lg mb-8 w-full sm:w-6/10 sm:mb-0 lg:w-5/10">
                <h2 className="text-white mb-5 font-bold">Atributos chave</h2>
                <div className="flex bg-[#FFFFFA] items-center rounded-lg mb-4 py-2 px-3">
                    <CircleCheckBig size={20} />
                    <p className="text-xs ml-2">Exemplo prático de aplicação da UAI.py</p>
                </div>
                <div className="flex bg-[#FFFFFA] items-center rounded-lg mb-4 py-2 px-3">
                    <CircleCheckBig size={20} />
                    <p className="text-xs ml-2">Processamento de dados em tempo real</p>
                </div>
                <div className="flex bg-[#FFFFFA] items-center rounded-lg py-2 px-3">
                    <CircleCheckBig size={20} />
                    <p className="text-xs ml-2">Interface gráfica para visualização dos dados</p>
                </div>
            </div>
            <div className="sm:ml-10">
                <div className="flex flex-col-reverse">
                    <h1 className="text-2xl uppercase mb-2 md:text-3xl md:pr-7 lg:pr-0 lg:text-5xl">Demonstração</h1>
                    <h2 className="uppercase text-xs tracking-widest mb-2">Veja funcionando</h2>
                </div>
                <p className="text-justify text-sm mb-3 sm:hidden md:flex lg:text-base">Veja na prática como a UAI.py pode ser aplicada no dia a dia.</p>
                <Button variant='gradient' size="lg" className="mt-2 cursor-pointer"><a href="https://uaipy-ui.vercel.app/auth" target="_blank" rel="noopener noreferrer">Clique para acessar</a></Button>
            </div>
        </section>
    )
}
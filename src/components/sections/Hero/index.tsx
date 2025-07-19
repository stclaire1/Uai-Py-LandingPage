import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import 'flowbite'
import notebook from '@/assets/Elemento_1.svg'

export const Hero = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <nav className="bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between mx-auto py-6">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="max-w-28" alt="UAI.py Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-sm bg-uaipy-primary md:hidden hover:bg-gray-100 hover:text-uaipy-primary hover:border hover:border-uaipy-primary md:transition duration-200 cursor-pointer focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#projectConcept" className="block py-2 px-3 text-uaipy-primary md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:transition duration-200 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Sobre o projeto</a>
                            </li>
                            <li>
                                <a href="#repoRedirect" className="block py-2 px-3 text-uaipy-primary md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:transition duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acesse o repositório</a>
                            </li>
                            <li>
                                <a href="#footer" className="block py-2 px-3 text-uaipy-primary md:hover:bg-transparent 
                                md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                            </li>
                            <li>
                                <a href="#demo" className="block py-2 px-3 text-uaipy-primary md:hover:bg-transparent 
                                md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Demonstração</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5 border-b-1 border-uaipy-primary pb-14 md:flex md:justify-between items-center md:mt-10 lg:border-b-2">
                <div className="md:max-w-[490px] md:mr-10 lg:max-w-[600px] xl:mr-15">
                    <div className="flex flex-col-reverse">
                        <h1 className="text-2xl uppercase mb-5 md:text-3xl md:pr-7 lg:pr-0 lg:text-5xl">Seja bem-vindo(a) ao universo UAI.py</h1>
                        <h2 className="uppercase text-xs tracking-widest mb-2">Fique por dentro de tudo</h2>
                    </div>
                    <p className="text-sm mb-2 lg:text-base max-w-[460px]">Saiba mais sobre o nosso projeto, que surgiu a partir da iniciativa “Além do Horizonte” da Receita Federal do Brasil, possibilitando a criação das ideias aqui apresentadas.</p>
                    <Button variant="gradient" size="lg" className="mt-4 cursor-pointer"><a href="#repoRedirect">Conheça+</a></Button>
                </div>
                <img src={notebook} alt="" className="hidden md:block md:w-80 lg:w-90 xl:w-100"/>
            </div>
        </section>
    )
}
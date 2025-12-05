import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import 'flowbite'

export const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900">
            <nav className="px-10 md:px-15 lg:px-20 xl:px-35">
                <div className="flex flex-wrap items-center justify-between mx-auto py-6">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="max-w-28" alt="UAI.py Logo" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-sm bg-uaipy-primary md:hidden hover:bg-gray-100 hover:text-uaipy-primary hover:border hover:border-uaipy-primary md:transition duration-200 cursor-pointer focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/#projectConcept" className="block py-2 px-3 text-uaipy-primary md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:transition duration-200 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Sobre o projeto</a>
                            </li>
                            <li>
                                <Link to="/projects" className="block py-2 px-3 text-uaipy-primary md:hover:bg-transparent 
                                md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Explorar</Link>
                            </li>
                            <li>
                                <a href="/#demo" className="block py-2 px-3 text-uaipy-primary md:hover:bg-transparent 
                                md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Demonstração</a>
                            </li>
                            <li>
                                <a href="/#repoRedirect" className="block py-2 px-3 text-uaipy-primary md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:transition duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acesse o repositório</a>
                            </li>
                            <li>
                                <a href="/#footer" className="block py-2 px-3 text-uaipy-primary md:hover:bg-transparent 
                                md:border-b-2 md:border-transparent md:hover:border-uaipy-primary md:duration-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}



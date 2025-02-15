export const Navbar = () => {
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white shadow-lg">
        <div className="max-w-5xl max-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    Rabab <span className="text-blue-500">.Dev</span>
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    <a href="#home" className="text-gray-300 hover:text-white">Home
                        
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white">about

                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white">projects

                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white">contact

                    </a>

                </div>

            </div>

        </div>

    </nav>        
    )
    

}
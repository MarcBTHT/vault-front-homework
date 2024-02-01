import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-center items-center py-5">
            <div className="flex justify-between items-center w-full pl-4">
                <a className="flex items-center">
                    <div className="mr-5 relative">
                        <img src="/logo-vault-bg.png" alt="Logo" className='mr-2 h-14'/>
                    </div>
                    <span className="text-2xl font-bold text-gray-800 hidden sm:block">
                        <span className="font-normal">Vault</span>
                    </span>
                </a>
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src="/menu.svg"
                        alt="Menu"
                    />
                </button>
                <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
                    <a href="/" className="text-gray-800 hover:text-gray-900 px-4 py-2 text-xl transition duration-300">
                        Learn more
                    </a>
                    <a href="/" className="text-gray-800 hover:text-gray-900 ml-4 px-6 py-2 text-xl transition duration-300">
                        Login
                    </a>
                    <a href="/" className="text-tropical_indigo text-xl hover:text-white ml-4 px-6 py-2 rounded transition duration-300 border-tropical_indigo hover:bg-tropical_indigo box-border" style={{ boxShadow: 'inset 0 0 0 2px #8884ff' }}>
                        Enroll Now
                    </a>
                </nav>
            </div>
        </header>
    );
}


export default Header;
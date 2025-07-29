import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 border-b border-purple-500/20 sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">vlx</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                VALKYREX
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/team" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            Team
                        </Link>
                        <Link to="/matches" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            Matches
                        </Link>
                        <Link to="/achievements" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            Achievements
                        </Link>
                        <Link to="/news" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            News
                        </Link>
                        <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-purple-400 focus:outline-none focus:text-purple-400"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/team"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Team
                            </Link>
                            <Link
                                to="/matches"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Matches
                            </Link>
                            <Link
                                to="/achievements"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Achievements
                            </Link>
                            <Link
                                to="/news"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

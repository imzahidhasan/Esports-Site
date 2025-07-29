const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900/30 to-emerald-900/20">
            {/* Dynamic geometric background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-black"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm">
                        <span className="text-cyan-300 text-sm font-semibold tracking-wide">🏆 2024 World Champions</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                            VALKYREX
                        </span>
                        <br />
                        <span className="text-white font-bold tracking-wider">ESPORTS</span>
                    </h1>

                    {/* Subtitle */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-4">
                            Dominating the competitive gaming arena with
                            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-bold"> unmatched skill</span> and
                            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-bold"> strategic excellence</span>
                        </p>
                        <p className="text-lg text-gray-400">
                            Where legends are born and championships are won.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 max-w-4xl mx-auto">
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Major Titles</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Tournaments Won</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">$5M+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Prize Pool</div>
                        </div>
                    </div>
                
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-cyan-400 text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center relative overflow-hidden">
                        <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

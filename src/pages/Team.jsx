const Team = () => {
    const teams = [
        {
            game: "Free Fire Team",
            players: [
                { name: "Alex \"Phantom\" Chen", role: "IGL/Duelist", avatar: "AC", country: "🇺🇸" },
                { name: "Sarah \"Echo\" Williams", role: "Controller", avatar: "SW", country: "🇨🇦" },
                { name: "Jake \"Viper\" Johnson", role: "Sentinel", avatar: "JJ", country: "🇺🇸" },
                { name: "Maria \"Storm\" Lopez", role: "Initiator", avatar: "ML", country: "🇲🇽" },
                { name: "David \"Frost\" Kim", role: "Flex", avatar: "DK", country: "🇰🇷" }
            ]
        },
        {
            game: "CS2",
            players: [
                { name: "Marcus \"Blaze\" Rodriguez", role: "Entry Fragger", avatar: "MR", country: "🇪🇸" },
                { name: "Oliver \"Shadow\" Nielsen", role: "AWPer", avatar: "ON", country: "🇩🇰" },
                { name: "Viktor \"Titan\" Petrov", role: "IGL", avatar: "VP", country: "🇷🇺" },
                { name: "Lucas \"Flash\" Silva", role: "Support", avatar: "LS", country: "🇧🇷" },
                { name: "Anton \"Ghost\" Mueller", role: "Lurker", avatar: "AM", country: "🇩🇪" }
            ]
        },
        {
            game: "League of Legends",
            players: [
                { name: "Emma \"Mystic\" Taylor", role: "Support", avatar: "ET", country: "🇬🇧" },
                { name: "Ryan \"Phoenix\" Wu", role: "ADC", avatar: "RW", country: "🇨🇳" },
                { name: "Alex \"Nova\" Volkov", role: "Mid", avatar: "AV", country: "🇷🇺" },
                { name: "Tyler \"Beast\" Anderson", role: "Jungle", avatar: "TA", country: "🇺🇸" },
                { name: "Kevin \"Apex\" Park", role: "Top", avatar: "KP", country: "🇰🇷" }
            ]
        }
    ];

    const staff = [
        { name: "Michael Chen", role: "Head Coach", avatar: "MC", specialty: "Strategy & Leadership" },
        { name: "Jessica Rodriguez", role: "Performance Analyst", avatar: "JR", specialty: "Data Analysis" },
        { name: "Robert Kim", role: "Mental Health Coach", avatar: "RK", specialty: "Sports Psychology" },
        { name: "Lisa Wang", role: "Team Manager", avatar: "LW", specialty: "Operations" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Team</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                        Meet the elite players and dedicated staff who make Valkyrex a championship-winning organization
                    </p>
                </div>

                {/* Teams by Game */}
                {teams.map((team, index) => (
                    <div key={index} className="mb-16">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-white font-bold">{team.game[0]}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">{team.game} Team</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {team.players.map((player, playerIndex) => (
                                <div key={playerIndex} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                                            <span className="text-white font-bold text-xl">{player.avatar}</span>
                                        </div>
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="text-2xl mr-2">{player.country}</span>
                                        </div>
                                        <h3 className="text-white font-semibold mb-1">{player.name}</h3>
                                        <p className="text-purple-400 font-medium text-sm mb-4">{player.role}</p>
                                        <button className="w-full py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors duration-200 text-sm">
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Staff Section */}
                <div className="mt-20">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Coaching Staff</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {staff.map((member, index) => (
                            <div key={index} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-lg">{member.avatar}</span>
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                                    <p className="text-yellow-400 font-medium text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-400 text-xs">{member.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join Us Section */}
                <div className="mt-20 p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Join Valkyrex</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        We're always looking for exceptional talent. If you think you have what it takes to compete at the highest level, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                            Player Applications
                        </button>
                        <button className="px-8 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                            Staff Positions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

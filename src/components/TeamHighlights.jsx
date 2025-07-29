const TeamHighlights = () => {
    const players = [
        {
            id: 1,
            name: "Alex \"Phantom\" Chen",
            role: "IGL/Duelist",
            game: "Valorant",
            avatar: "AC",
            stats: { kd: "1.42", rating: "1.35", wins: "87%" }
        },
        {
            id: 2,
            name: "Sarah \"Echo\" Williams",
            role: "Controller",
            game: "Valorant",
            avatar: "SW",
            stats: { kd: "1.28", rating: "1.31", wins: "89%" }
        },
        {
            id: 3,
            name: "Marcus \"Blaze\" Rodriguez",
            role: "Entry Fragger",
            game: "CS2",
            avatar: "MR",
            stats: { kd: "1.55", rating: "1.41", wins: "82%" }
        },
        {
            id: 4,
            name: "Emma \"Mystic\" Taylor",
            role: "Support",
            game: "League of Legends",
            avatar: "ET",
            stats: { kd: "2.1", rating: "8.2", wins: "78%" }
        }
    ];

    const achievements = [
        { title: "VCT Champions 2024", game: "Valorant", prize: "$500K" },
        { title: "ESL Pro League S18", game: "CS2", prize: "$200K" },
        { title: "LCS Summer Champion", game: "LoL", prize: "$150K" },
        { title: "BLAST Premier Fall", game: "CS2", prize: "$300K" }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Team <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Highlights</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Meet our elite players and celebrate our recent achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Featured Players */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Star Players
                        </h3>
                        <div className="space-y-4">
                            {players.map((player) => (
                                <div key={player.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{player.avatar}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-lg">{player.name}</h4>
                                            <p className="text-purple-400 font-medium">{player.role}</p>
                                            <p className="text-gray-400 text-sm">{player.game}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex space-x-4 text-sm">
                                                <div>
                                                    <div className="text-white font-semibold">{player.stats.kd}</div>
                                                    <div className="text-gray-400">K/D</div>
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold">{player.stats.rating}</div>
                                                    <div className="text-gray-400">Rating</div>
                                                </div>
                                                <div>
                                                    <div className="text-green-400 font-semibold">{player.stats.wins}</div>
                                                    <div className="text-gray-400">Win Rate</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Achievements */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                            Recent Wins
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-semibold text-lg">{achievement.title}</h4>
                                            <p className="text-yellow-400 font-medium">{achievement.game}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-yellow-400">{achievement.prize}</div>
                                            <div className="text-gray-400 text-sm">Prize Money</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        {/* <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl">
                            <h4 className="text-white font-semibold text-lg mb-2">Join Our Journey</h4>
                            <p className="text-gray-300 mb-4">Follow our team as we compete in the biggest tournaments worldwide</p>
                            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                                View Full Team
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamHighlights;

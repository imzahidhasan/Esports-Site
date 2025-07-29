const FeaturedMatches = () => {
    const matches = [
        {
            id: 1,
            game: "Valorant",
            opponent: "Thunder Eagles",
            date: "July 20, 2025",
            time: "3:00 PM PST",
            status: "upcoming",
            tournament: "VCT Champions",
            stream: "Twitch"
        },
        {
            id: 2,
            game: "CS2",
            opponent: "Cyber Wolves",
            date: "July 18, 2025",
            time: "6:00 PM PST",
            status: "live",
            tournament: "ESL Pro League",
            stream: "YouTube"
        },
        {
            id: 3,
            game: "League of Legends",
            opponent: "Nexus Gaming",
            date: "July 15, 2025",
            time: "2:00 PM PST",
            status: "completed",
            result: "W 2-1",
            tournament: "LCS Summer"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'live': return 'text-red-400 bg-red-500/20 border-red-500/30';
            case 'upcoming': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
            case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/30';
            default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
        }
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Matches</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Follow our latest matches and upcoming tournaments across all competitive titles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {matches.map((match) => (
                        <div key={match.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{match.game[0]}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">{match.game}</h3>
                                        <p className="text-gray-400 text-sm">{match.tournament}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(match.status)}`}>
                                    {match.status === 'live' && (
                                        <span className="flex items-center">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                                            LIVE
                                        </span>
                                    )}
                                    {match.status === 'upcoming' && 'UPCOMING'}
                                    {match.status === 'completed' && match.result}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">VX</span>
                                        </div>
                                        <span className="text-white font-medium">Valkyrex</span>
                                    </div>
                                    <span className="text-gray-400">VS</span>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-white font-medium">{match.opponent}</span>
                                        <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">{match.opponent.split(' ').map(w => w[0]).join('')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-700 pt-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">{match.date}</span>
                                        <span className="text-gray-400">{match.time}</span>
                                    </div>
                                    {match.stream && (
                                        <div className="mt-2">
                                            <button className="w-full py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors duration-200 text-sm font-medium">
                                                Watch on {match.stream}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                        View All Matches
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMatches;

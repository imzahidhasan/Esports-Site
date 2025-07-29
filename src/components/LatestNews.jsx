const LatestNews = () => {
    const news = [
        {
            id: 1,
            title: "Valkyrex Wins VCT Champions 2024",
            excerpt: "Our Valorant team dominated the finals with a stunning 3-1 victory against the defending champions.",
            date: "July 10, 2025",
            category: "Tournament",
            image: "🏆",
            readTime: "3 min read"
        },
        {
            id: 2,
            title: "New CS2 Roster Announcement",
            excerpt: "We're excited to welcome our new fifth player to the CS2 roster ahead of the upcoming ESL season.",
            date: "July 8, 2025",
            category: "Team News",
            image: "👥",
            readTime: "2 min read"
        },
        {
            id: 3,
            title: "Partnership with Tech Innovators",
            excerpt: "Valkyrex announces strategic partnership to enhance player performance with cutting-edge technology.",
            date: "July 5, 2025",
            category: "Partnership",
            image: "🤝",
            readTime: "4 min read"
        },
        {
            id: 4,
            title: "Behind the Scenes: Training Regimen",
            excerpt: "Get an exclusive look at how our players prepare for major tournaments with our comprehensive training program.",
            date: "July 3, 2025",
            category: "Behind the Scenes",
            image: "💪",
            readTime: "5 min read"
        }
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Tournament': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'Team News': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'Partnership': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'Behind the Scenes': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Latest <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">News</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest news, announcements, and behind-the-scenes content
                    </p>
                </div>

                {/* Featured Article */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getCategoryColor(news[0].category)}`}>
                                        {news[0].category}
                                    </span>
                                    <span className="text-gray-400 text-sm">{news[0].date}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{news[0].title}</h3>
                                <p className="text-gray-300 text-lg mb-6">{news[0].excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                                        Read Full Article
                                    </button>
                                    <span className="text-gray-400 text-sm">{news[0].readTime}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center">
                                    <span className="text-8xl">{news[0].image}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.slice(1).map((article) => (
                        <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                            <div className="p-6">
                                <div className="flex items-center justify-center h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4">
                                    <span className="text-5xl">{article.image}</span>
                                </div>

                                <div className="flex items-center space-x-3 mb-3">
                                    <span className={`px-2 py-1 text-xs font-medium border rounded-full ${getCategoryColor(article.category)}`}>
                                        {article.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                                </div>

                                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-purple-400 transition-colors duration-200">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">{article.date}</span>
                                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter for exclusive content, match updates, and behind-the-scenes access
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* View All News */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                        View All News
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;

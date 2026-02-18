import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-fantasy font-bold text-gold mb-4">
                        404
                    </h1>
                    <p className="text-2xl md:text-3xl text-white font-fantasy mb-2">
                        ⚔️ Quest Not Found ⚔️
                    </p>
                    <p className="text-gray-400 font-pixel text-xs md:text-sm">
                        The path you seek does not exist in this realm.
                    </p>
                </div>

                <div className="glass-effect p-6 rounded-2xl border-4 border-amber-900 mb-8 max-w-md mx-auto">
                    <p className="text-white font-fantasy mb-4">
                        This area hasn't been explored yet.
                    </p>
                    <ul className="text-left text-gray-300 space-y-2 font-pixel text-xs">
                        <li>🗺️ Check the URL for typos</li>
                        <li>🏠 Return to the home page</li>
                        <li>📜 Browse available quests</li>
                    </ul>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        to="/"
                        className="bg-gradient-to-r from-gold to-yellow-600 text-gray-900 font-fantasy font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg inline-block"
                    >
                        🏠 Return Home
                    </Link>
                    <Link
                        to="/projects"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-fantasy font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg inline-block"
                    >
                        📜 View Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound

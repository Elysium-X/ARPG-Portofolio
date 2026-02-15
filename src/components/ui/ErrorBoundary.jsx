import { Component } from 'react'

/**
 * Error Boundary component to catch JavaScript errors in child components
 * Displays a fallback UI instead of crashing the entire app
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Store error details for debugging in development mode
        this.setState({
            error,
            errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="text-center max-w-2xl">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-6xl font-fantasy font-bold text-gold mb-4">
                                ⚠️ Quest Failed
                            </h1>
                            <p className="text-xl md:text-2xl text-white font-fantasy mb-2">
                                Something went wrong on this adventure
                            </p>
                            <p className="text-gray-400 font-pixel text-xs md:text-sm">
                                Don't worry, your progress is safe!
                            </p>
                        </div>

                        <div className="glass-effect p-6 rounded-2xl border-4 border-amber-900 mb-6">
                            <p className="text-white font-fantasy mb-4">
                                The error has been logged. Try these solutions:
                            </p>
                            <ul className="text-left text-gray-300 space-y-2 font-pixel text-xs">
                                <li>🔄 Refresh the page</li>
                                <li>🏠 Return to home page</li>
                                <li>🧹 Clear your browser cache</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="bg-gradient-to-r from-gold to-yellow-600 text-gray-900 font-fantasy font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
                            >
                                🏠 Return Home
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-fantasy font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
                            >
                                🔄 Refresh Page
                            </button>
                        </div>

                        {/* Show error details in development */}
                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-red-400 font-fantasy mb-2">
                                    🐛 Developer Info (Click to expand)
                                </summary>
                                <div className="bg-gray-900 p-4 rounded-lg overflow-auto max-h-64 text-xs font-mono">
                                    <p className="text-red-400 mb-2">{this.state.error.toString()}</p>
                                    <pre className="text-gray-400 whitespace-pre-wrap">
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

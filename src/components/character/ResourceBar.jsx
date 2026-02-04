function ResourceBar({ icon, label, value, max, color, bgColor }) {
  const percentage = (value / max) * 100

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
      <div className="text-3xl text-gold drop-shadow-md">{icon}</div>
      <div className="flex-1">
        <div className="text-white text-sm font-fantasy mb-1">{label}</div>
        <div className={`h-6 ${bgColor} rounded-full overflow-hidden border-2 border-gray-900`}>
          <div
            className={`h-full ${color} transition-all duration-1000 ease-out flex items-center justify-center text-xs font-bold text-white`}
            style={{ width: `${percentage}%` }}
          >
            <span className="drop-shadow-lg">{value} / {max}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceBar

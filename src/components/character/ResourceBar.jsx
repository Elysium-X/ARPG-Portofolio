function ResourceBar({ icon, label, value, max, color, bgColor, iconColor }) {
  const percentage = (value / max) * 100

  return (
    <div className="group flex items-center gap-3 p-3 glass-effect rounded-xl transition-colors">
      <div className={`text-3xl ${iconColor || 'text-gold'} drop-shadow-md group-hover:animate-breathe transition-transform duration-500`}>{icon}</div>
      <div className="flex-1">
        <div className="text-white text-sm font-fantasy mb-1 group-hover:text-gold transition-colors">{label}</div>
        <div className={`h-6 ${bgColor} rounded-full overflow-hidden border-2 border-gray-900 shadow-inner`}>
          <div
            className={`h-full ${color} transition-all duration-1000 ease-out flex items-center justify-center text-xs font-bold text-white group-hover:animate-breathe`}
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


function PotionSlot({ emoji, name, color }) {
  return (
    <div className={`potion - slot group relative w - 16 h - 16 md: w - 20 md: h - 20 rounded - lg overflow - hidden border - 4 border - amber - 900 shadow - md transition - colors duration - 300 hover: border - [#FFD700]`}>
      {/* Background Layer */}
      <div className={`absolute inset - 0 ${color} z - 0`}></div>

      {/* Radial Aura Glow Layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        <div className="w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,215,0,0.6)_0%,transparent_70%)] blur-md"></div>
      </div>

      {/* Icon Layer */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-gold cursor-pointer transform transition-transform group-hover:scale-110 z-20">
        <div className="drop-shadow-glow">{emoji}</div>
      </div>

      {/* Tooltip Layer */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
        {name}
      </div>
    </div>
  )
}

export default PotionSlot


function PotionSlot({ emoji, name, color, hotkey }) {
  return (
    <div className="group relative w-16 h-16 md:w-20 md:h-20 bg-gray-950 rounded-sm border-2 border-gray-700 shadow-inner transition-all duration-300 hover:border-gold/50 cursor-pointer">

      {/* Background Gradient (Subtle) */}
      <div className={`absolute inset-0 ${color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

      {/* Hotkey Indicator */}
      {hotkey && (
        <div className="absolute top-1 left-1 text-[10px] font-pixel text-gray-500 group-hover:text-gold z-10 transition-colors">
          {hotkey}
        </div>
      )}

      {/* Icon Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-20 transform group-hover:scale-110 transition-transform duration-200">
        {typeof emoji === 'string' ? (
          <div className="text-3xl md:text-4xl filter drop-shadow-lg contrast-125 saturate-125 animate-float select-none" style={{ imageRendering: 'pixelated' }}>
            {emoji}
          </div>
        ) : (
          <div className="drop-shadow-glow text-gold animate-float scale-110">
            {emoji}
          </div>
        )}
      </div>

      {/* Tooltip (Simplified) */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-gold text-xs border border-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 font-fantasy tracking-wide">
        {name}
      </div>
    </div>
  )
}

export default PotionSlot

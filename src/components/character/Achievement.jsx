function Achievement({ icon, name, iconColor }) {
  return (
    <div className="glass-effect p-3 rounded-lg text-center hover:scale-110 transition-transform cursor-pointer group">
      <div className={`h-32 mb-1 ${iconColor || 'text-gold'} drop-shadow-glow group-hover:animate-bounce flex items-center justify-center`}>{icon}</div>
      <p className="text-white text-xs font-fantasy leading-snug min-h-[2rem]">{name}</p>
    </div>
  )
}

export default Achievement

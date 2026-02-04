function Achievement({ icon, name, iconColor }) {
  return (
    <div className="glass-effect p-4 rounded-lg text-center hover:scale-110 transition-transform cursor-pointer group">
      <div className={`text-5xl mb-2 ${iconColor || 'text-gold'} drop-shadow-glow group-hover:animate-bounce flex justify-center`}>{icon}</div>
      <p className="text-white text-xs font-fantasy">{name}</p>
    </div>
  )
}

export default Achievement

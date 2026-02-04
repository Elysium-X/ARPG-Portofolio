import ProgressBar from '../ui/ProgressBar'

function SkillCard({ skill, delay = 0 }) {
  return (
    <div className="glass-effect p-4 rounded-xl hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className={`text-4xl ${skill.iconColor || 'text-gold'}`}>{skill.icon}</div>
        <div className="flex-1">
          <h3 className="text-white font-fantasy text-lg font-bold">{skill.name}</h3>
          <p className="text-gold text-xs font-semibold">{skill.rank} • Lvl {skill.level}</p>
        </div>
      </div>
      <ProgressBar
        value={skill.level}
        max={100}
        showPercentage={true}
        color={skill.color}
        animated={true}
        delay={delay}
      />
    </div>
  )
}

export default SkillCard

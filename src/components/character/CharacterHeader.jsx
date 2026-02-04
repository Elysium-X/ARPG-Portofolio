import Card from '../ui/Card'
import ProgressBar from '../ui/ProgressBar'

function CharacterHeader({ name, level, xp, maxXp }) {
  return (
    <Card variant="parchment" padding="lg" className="mb-6 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold text-white border-8 border-amber-700 shadow-2xl">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="level-badge absolute -bottom-2 -right-2 bg-gradient-to-r from-gold to-yellow-600 text-gray-900 font-pixel text-xs md:text-sm px-3 py-2 rounded-full border-4 border-amber-900 shadow-lg">
            LVL {level}
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left w-full">
          <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-gray-900 mb-2">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 font-fantasy mb-4">
            ⚔️ Full Stack Developer ⚔️
          </p>
          
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-fantasy text-gray-700">Experience Points</span>
              <span className="text-xs font-pixel text-gray-600">
                {xp.toLocaleString()} / {maxXp.toLocaleString()}
              </span>
            </div>
            <ProgressBar 
              value={xp}
              max={maxXp}
              showPercentage={false}
              color="from-purple-500 via-pink-500 to-gold"
              height="h-6"
              animated={true}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CharacterHeader

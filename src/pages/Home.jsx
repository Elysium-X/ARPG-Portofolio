import Card from '../components/ui/Card'
import CharacterHeader from '../components/character/CharacterHeader'
import ResourceBar from '../components/character/ResourceBar'
import PotionSlot from '../components/character/PotionSlot'
import SkillCard from '../components/character/SkillCard'
import Achievement from '../components/character/Achievement'
import ScrollReveal from '../components/ui/ScrollReveal'
import InventoryIcon from '../assets/inventory.png'
import { CHARACTER_DATA, SKILLS, POTIONS, ACHIEVEMENTS, RESOURCES } from '../constants/data'

function Home() {
  return (
    <>

      {/* implemented the smooth scrolling loading */}
      <div className="container mx-auto px-4 py-8 relative z-10">

        {/* Character Header */}
        <ScrollReveal>
          <CharacterHeader {...CHARACTER_DATA} />
        </ScrollReveal>

        {/* Resources and Potions */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Resource Bars */}
          <ScrollReveal delay={100}>
            <Card padding="md">
              <h2 className="text-2xl font-fantasy font-bold text-gold mb-4 text-center">
                ⚡ Vitals ⚡
              </h2>
              <div className="space-y-3">
                {RESOURCES.map((resource, index) => (
                  <ResourceBar key={index} {...resource} />
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Potion Inventory */}
          <ScrollReveal delay={200}>
            <Card padding="md">
              <h2 className="text-2xl font-fantasy font-bold text-gold mb-6 text-center">
                <span className="inline-flex items-center justify-center gap-1 whitespace-nowrap">
                  <img
                    src={InventoryIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain shrink-0"
                  />
                  <span>Quick Slots</span>
                  <img
                    src={InventoryIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain shrink-0"
                  />
                </span>
              </h2>
              <div className="mt-6 grid grid-cols-4 gap-3 md:gap-4">
                {POTIONS.map((potion, index) => (
                  <PotionSlot key={index} {...potion} hotkey={index + 1} />
                ))}
              </div>
              <div className="mt-4 p-3 bg-amber-900 bg-opacity-30 rounded-lg text-center">
                <p className="text-gold text-xs font-fantasy">Hover over items to view details</p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <ScrollReveal>
          <Card padding="lg" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-fantasy font-bold text-gold mb-6 text-center">
              ⚔️ Skill Tree ⚔️
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 50}>
                  <SkillCard skill={skill} />
                </ScrollReveal>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* Achievements */}
        <ScrollReveal>
          <Card padding="lg">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-fantasy font-bold text-gold mb-6 text-center">
              <span className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span aria-hidden="true" className="text-[0.9em] ">🏆</span>
                <span>Achievements Unlocked</span>
                <span aria-hidden="true" className="text-[0.9em] ">🏆</span>
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <Achievement {...achievement} />
                </ScrollReveal>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </>
  )
}

export default Home

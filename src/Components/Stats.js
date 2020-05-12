import React from 'react'
import { FormattedMessage } from 'react-intl'

const StatDetail = ({ name, hero, multiplyWithStars, ...props }) => {
  const value = multiplyWithStars ? hero.stats[name] * Math.pow(2, hero.stars - 1) * Math.pow(1.5, hero.awakens) : hero.stats[name]

  return <p className="mb-0">
    <FormattedMessage
      id={`Stats.hero.${name}`}
      values={{ value }} />
  </p>
}

const Stats = ({ hero }) => {
  const [moreStats, setMoreState] = React.useState(false)

  return (
    <div className="stats">
      <StatDetail hero={hero} name="atk" multiplyWithStars={true} />
      <StatDetail hero={hero} name="hp" multiplyWithStars={true} />
      <StatDetail hero={hero} name="def" multiplyWithStars={true} />
      <StatDetail hero={hero} name="ctkRate" />
      <StatDetail hero={hero} name="ctkDam" />
      <StatDetail hero={hero} name="aps" />
      <StatDetail hero={hero} name="atkRange" />
      <StatDetail hero={hero} name="moveSpeed" />
      <StatDetail hero={hero} name="effectResistance" />

      {/* TODO: display it as demand */}
      {moreStats && <>
        <StatDetail hero={hero} name="frenzy" />
        <StatDetail hero={hero} name="dodge" />
        <StatDetail hero={hero} name="stunChance" />
        <StatDetail hero={hero} name="stunTime" />
        <StatDetail hero={hero} name="atkAoe" />
        <StatDetail hero={hero} name="ultimateAtk" />
        <StatDetail hero={hero} name="knightShield" />
        <StatDetail hero={hero} name="bonusGold" />

        <StatDetail hero={hero} name="freezeChance" />
        <StatDetail hero={hero} name="freezeTime" />
        <StatDetail hero={hero} name="freezeExplosionDmg" />
        <StatDetail hero={hero} name="burnChance" />
        <StatDetail hero={hero} name="burnTime" />
        <StatDetail hero={hero} name="burnDmg" />
        <StatDetail hero={hero} name="poisonChance" />
        <StatDetail hero={hero} name="poisonTime" />
        <StatDetail hero={hero} name="poisonDmg" />
      </>}
    </div>
  )
}

export default Stats
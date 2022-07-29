import React from 'react'

function Hero({heroName}) {
    if(heroName === ''){
        throw Error('Hero Name Required ')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero
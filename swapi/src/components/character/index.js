import React from 'react'
import './character.css'

const Character = ({ name, image_url }) => {

    const background = {
        background: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${image_url})`,
        backgroundSize: 'contain'
    }

    return (
        <section className="character" style={background}>
            <h2>{name}</h2>
        </section>
    )
}

export default Character

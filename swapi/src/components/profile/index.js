import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './profile.css'

const Profile = ({ pic }) => {

    const profile = useSelector(state => state.state.profile)
    const [hasStarship, setHasStarship] = useState(false)
    const [hasSpecies, setHasSpecies] = useState('Unknown')


    useEffect(() => {
        if(profile.starships.length) {
            setHasStarship(true)
        }

        if(profile.species.lenght) {
            setHasSpecies(profile.species[0])
        }
    }, [])

    console.log('========', profile)
    return (
        <section className='profile'>
            <section className="left">
                <section className="title">
                    <h1>{profile.name}</h1>
                    <div>
                        <span className="label">Species</span><span className="info">{hasSpecies}</span>
                        <span className="label">Average Lifespan</span><span className="info">Unknown</span>
                        <span className="label">Homeworld</span><span className="info">{profile.homeworld}</span>
                    </div>
                </section>
                <aside className="stats">
                    <h2>STATS</h2>
                    <span className="label">Height</span><span className="info">{profile.height}</span>
                    <span className="label">Mass</span><span className="info">{profile.mass}</span>
                    <span className="label">Hair color</span><span className="info">{profile.hair_color}</span>
                    <span className="label">Skin color</span><span className="info">{profile.skin_color}</span>
                    <span className="label">Eye color</span><span className="info">{profile.eye_color}</span>
                    <span className="label">Birth Year</span><span className="info">{profile.birth_year}</span>
                    <span className="label">Gender</span><span className="info">{profile.gender}</span>
                </aside>
                <aside className="films">

                </aside>
                <aside className="starships">

                </aside>
            </section>
            <section className="right">
                <img src={pic} alt={`picture of ${profile.name}`} />
            </section>
        </section>
    )
}

export default Profile

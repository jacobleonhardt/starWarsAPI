import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../footer/index'
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
                    <div className="traits">
                        <span className="label">Species</span><span className="info">{hasSpecies}</span>
                        <span className="label">Average Lifespan</span><span className="info">Unknown</span>
                        <span className="label">Homeworld</span><span className="info">{profile.homeworld}</span>
                    </div>
                </section>
                <section className="details">
                    <aside className="stats">
                        <h2>STATS</h2>
                        <div className="boxed"><span className="label">Height</span><span className="info">{profile.height}</span></div>
                        <div className="boxed"><span className="label">Mass</span><span className="info">{profile.mass}</span></div>
                        <div className="boxed"><span className="label">Hair color</span><span className="info">{profile.hair_color}</span></div>
                        <div className="boxed"><span className="label">Skin color</span><span className="info">{profile.skin_color}</span></div>
                        <div className="boxed"><span className="label">Eye color</span><span className="info">{profile.eye_color}</span></div>
                        <div className="boxed"><span className="label">Birth Year</span><span className="info">{profile.birth_year}</span></div>
                        <div className="boxed last"><span className="label">Gender</span><span className="info">{profile.gender}</span></div>
                    </aside>
                    <aside className="films">

                    </aside>
                    <aside className="starships">

                    </aside>
                </section>
            </section>
            <section className="right">
                <img src={pic} alt={`picture of ${profile.name}`} />
            </section>
            <Footer />
        </section>
    )
}

export default Profile

import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const profile = useSelector(state => state.state.profile)

    console.log('========', profile)
    return (
        <section>
            {profile.name}
            {profile.height}
            {profile.mass}
            {profile.hair_color}
            {profile.skin_color}
        </section>
    )
}

export default Profile

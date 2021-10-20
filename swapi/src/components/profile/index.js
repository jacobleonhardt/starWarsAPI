import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

const Profile = ({ makeCall }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('>>>>>>>>> HERE <<<<<<<<<')
        dispatch(makeCall)
    }, [])

    const profile = useSelector(state => state.profile)

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

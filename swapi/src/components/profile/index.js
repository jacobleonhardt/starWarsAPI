import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Profile = ({ makeCall }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(makeCall)
    }, [])

    return (
        <div>

        </div>
    )
}

export default Profile

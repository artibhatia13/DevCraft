import React,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {

    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to Logout')
        }
    }

    return (
        <div>
            <h1>home page</h1>
            {error && <Alert severity="error">{error}</Alert>}
            <h6>Profile</h6>
            <h6>Email: {currentUser.email}</h6>
            <Link to="/updateprofile">Update Profile</Link><br/><br/>
            <Button variant="contained" onClick={handleLogout}>Log Out</Button>
        </div>
    )
}

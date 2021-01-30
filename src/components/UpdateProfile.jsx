import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Alert } from '@material-ui/lab';
import { Container, TextField, Button } from '@material-ui/core/';
import { useAuth } from '../contexts/AuthContext'

export default function UpdateProfile() {
    const { currentUser, updateEmail, updatePassword } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (password !== password2) {
            return setError("Passwords do not match");
        }

        setError("")
        setLoading(true)
        const promises =[]
        if(email !== currentUser.email){
            promises.push(updateEmail(email))
        }

        if(password) {
            promises.push(updatePassword(password))
        }

        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(() => {
            setError('failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
    }


    return (
        <Container>
            <h3>Update Profile</h3>
            {error && <Alert severity="error">{error}</Alert>}
            <br /><br />
            <form onSubmit={handleSubmit} className="" autoComplete="off">
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br /><br />
                <TextField
                    type="password"
                    label="Password"
                    helperText="leave blank to keep the same"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <TextField
                    type="password"
                    label="Confirm Password"
                    helperText="leave blank to keep the same"
                    variant="outlined"
                    onChange={(e) => setPassword2(e.target.value)}
                /><br /><br />
                <Button variant="contained" disabled={loading} type="submit" >Update</Button>
            </form>
            <p>Don't have an account ?<Link to="/">Cancel</Link></p>
        </Container>
    )
}

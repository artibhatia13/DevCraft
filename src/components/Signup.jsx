import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Alert } from '@material-ui/lab';
import { Container, TextField, Button } from '@material-ui/core/';
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const { signup } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (password !== password2) {
            return setError("Passwords do not match");
        }

        try {
            setError("")
            setLoading(true)
            await signup(email, password)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }


    return (
        <Container>
            <h3>Sign Up</h3>
            {error && <Alert severity="error">{error}</Alert>}
            <br /><br />
            <form onSubmit={handleSubmit} className="" autoComplete="off">
                <TextField
                    type="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    inputProps={{ className: 'browser-default' }}
                /><br /><br />
                <TextField
                    type="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    inputProps={{ className: 'browser-default' }}
                /><br /><br />
                <TextField
                    type="password"
                    label="Confirm Password"
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    inputProps={{ className: 'browser-default' }}
                /><br /><br />
                <Button variant="contained" disabled={loading} type="submit" >Sign Up</Button>
            </form>
            <p>Don't have an account ?<Link to="/login">Log In</Link></p>
        </Container>
    )
}

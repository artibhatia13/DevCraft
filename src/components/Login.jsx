import React,{ useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Alert } from '@material-ui/lab';
import { Container, TextField, Button } from '@material-ui/core/';
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to Log in")
        }

        setLoading(false)
    }


    return (
        <Container>
            <h3>Log In</h3>
            {error && <Alert severity="error">{error}</Alert>}
            <br /><br />
            <form onSubmit={handleSubmit} className="" autoComplete="off">
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    ref={emailRef}
                    required
                /><br /><br />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    ref={passwordRef}
                    required
                /><br /><br />
                <Button variant="contained" disabled={loading} type="submit" >Sign Up</Button>
            </form>
            <p>Don't have an account ?<Link to="/signup">Sign Up</Link></p>
        </Container>
    )
}


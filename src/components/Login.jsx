import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from '@material-ui/lab';
import { Container, TextField, Button } from '@material-ui/core/';
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {

        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(email, password)
        } catch {
            setError("Failed to Log in")
        } finally {
            setLoading(false)
        }
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
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    inputProps={{ className: 'browser-default' }}
                /><br /><br />
                <TextField
                    type="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    inputProps={{ className: 'browser-default' }}
                /><br /><br />
                <Button variant="contained" disabled={loading} type="submit" >Log In</Button>
                <div className="forgotPassword">
                    <Link to="/forgotpassword">forgot password?</Link>
                </div>
            </form>
            <p>Don't have an account ?<Link to="/signup">Sign Up</Link></p>
        </Container>
    )
}


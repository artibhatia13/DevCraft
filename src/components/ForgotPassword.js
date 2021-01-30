import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Alert } from '@material-ui/lab';
import { Container, TextField, Button } from '@material-ui/core/';
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {

    const [email, setEmail] = useState("")
    const { resetPassword } = useAuth()

    const [error, setError] = useState("")
    const [message, setMessage] = useState(false)
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage("Check your Inbox for further instructions")
        } catch {
            setError("Failed to Reset password")
        }

        setLoading(false)
    }


    return (
        <Container>
            <h3>Reset Password</h3>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}

            <br /><br />
            <form onSubmit={handleSubmit} className="" autoComplete="off">
                <TextField
                    type="email"
                    label="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <Button variant="contained" disabled={loading} type="submit" >Reset Password</Button>
                <div className="forgotPassword">
                    <Link to="/login">Log In</Link>
                </div>
            </form>
            <p>Don't have an account ?<Link to="/signup">Sign Up</Link></p>
        </Container>
    )
}

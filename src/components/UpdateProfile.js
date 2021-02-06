import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { Container, TextField, Button } from "@material-ui/core/";

import { useAuth } from "../contexts/AuthContext";

export default function UpdateProfile() {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password2 && password !== password2) {
      return setError("Passwords do not match");
    }
    setError("");
    setLoading(true);
    const promises = [];
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <h3>Update Profile</h3>
      {error && <Alert severity="error">{error}</Alert>}
      <br />
      <br />
      <form onSubmit={handleSubmit} className="" autoComplete="off">
        <TextField
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <TextField
          type="password"
          label="Password"
          helperText="leave blank to keep the same"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <TextField
          type="password"
          label="Confirm Password"
          helperText="leave blank to keep the same"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" disabled={loading} type="submit">
          Update
        </Button>
      </form>
    </Container>
  );
}

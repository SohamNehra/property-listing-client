
import  { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (username, email, password) => {
    try {
      const response = await axios.post(import.meta.env.VITE_SERVER_URL + "register", { username, email, password });
      console.log(response.data);
      // If the signup is successful, navigate to the login page
     navigate("/LoginPage")
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "10%" }}>
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/LoginPage");
            }}
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSignup(username, email, password)} 
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </Container>
      </Paper>
    </Container>
  );
};

export default SignupPage;

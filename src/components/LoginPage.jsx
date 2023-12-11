import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(import.meta.env.VITE_SERVER_URL + "login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Login successful. Token:", token);
      // If the Login is successful, navigate to the home page
      navigate('/');

      // Store the token in localStorage or a state management solution
    } catch (error) {
      console.error("Error logging in:", error.response.data);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "10%" }}>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Login</Typography>
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
            onClick={() => handleLogin(email, password)} 
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/SignupPage");
            }}
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </Container>
      </Paper>
    </Container>
  );
};

export default LoginPage;


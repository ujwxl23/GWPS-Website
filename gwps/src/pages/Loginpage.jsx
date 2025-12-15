import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      setError("");
      navigate("/upload");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
          p: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 4, md: 6 },
            width: "100%",
            maxWidth: 400,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#d21919ff", mb: 1 }}
          >
            Welcome Admin
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Login to your account to continue
          </Typography>

          {/* Error Message */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: 1,
            }}
          >
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 1,
                bgcolor: "#000000ff",
                py: 1.2,
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#000000ff",
                },
              }}
            >
              Login
            </Button>
          </Box>

          {/* Links */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" underline="hover" color="#d21919ff">
                Forgot Password?
              </Link>
            </Typography>
            <Typography variant="body2">
              Don’t have an account?{" "}
              <Link href="#" underline="hover" color="#d21919ff">
                Register here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;

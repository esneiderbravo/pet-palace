import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function LoginComponent({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}) {
  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column">
        <Typography color="primary" variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
export default LoginComponent;

import React from 'react';
import axios from "axios";
import { useState } from "react";
import './login.scss';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// rfce
function CreateAccount() {
  // const [mail, setMail] = React.useState('');

  // const handleChange = (event) => {
  //   setMail(event.target.value);
  // };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom>
        회원가입
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input01">ID</InputLabel>
              <Input id="input01" onChange={(e) => setUsername(e.target.value)}/>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input02">PW</InputLabel>
              <Input id="input02" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input03">이메일</InputLabel>
              <Input id="input03" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      {/* <div>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input05">본인확인 이메일</InputLabel>
              <Input id="input05"  />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input06">핸드폰 번호 (선택)</InputLabel>
              <Input id="input06"  />
            </FormControl>
          </Grid>
        </Grid>
      </div> */}
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          가입하기
        </Button>
      </div>
      
    </Box>

  );
}

export default CreateAccount;

import React from 'react';
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import Box from '@mui/material/Box';

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
function ModifyAccount() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username: user.username,
      email,
      password,
    }

    try {
      const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      
    }

  }

  // const { user, dispatch } = useContext(Context);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/auth/register", {

  //       email,
  //       password,
  //     });
  //     res.data && window.location.replace("/login");
  //   } catch (err) {
  //     setError(true);
  //   }
  // };

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
        회원 정보 수정
      </Typography>
      <div>
        <p>
          <span>{user._id}</span>
          <span>{user.username}</span>
          <span>{user.email}</span>
        </p>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input01">ID</InputLabel>
              <Input id="input01" type='text' value={user.username} />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input02">PW</InputLabel>
              <Input type="password" id="input02" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input03">이메일</InputLabel>
              <Input type="email" id="input03" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
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
          정보수정
        </Button>
        {success && (
            <span
            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
          >
            수정되었습니다.
          </span>
          )
        }
      </div>
      
    </Box>

  );
}

export default ModifyAccount;

import React from 'react';
import axios from "axios";
import { useContext, useState, useRef } from "react";
import { Context } from "../../context/Context";
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// rfce
function UpdateBlog(props) {
  //const editorRef = useRef();
  //const editorRef = createRef();
  const [title, setTitle] = useState("");
  //const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(editorRef.current?.getInstance().getHTML())
    //setDesc(editorRef.current?.getInstance().getHTML());
    const newPost = {
      username: user.username,
      title,
      desc : "asdfsdf",
      categories
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  }

  return (
    
      /* 테스트 */
      
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
          블로그 쓰기
        </Typography>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              {/* <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input01">카테고리</InputLabel>
                <Input id="input01" type='text'  />
              </FormControl> */}
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">categories</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={categories}
                  //onChange={handleChange}
                  onChange={e=>setCategories(e.target.value)}
                  label="categories"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="categories01">categories01</MenuItem>
                  <MenuItem value="categories02">categories02</MenuItem>
                  <MenuItem value="categories03">categories03</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input02">제목</InputLabel>
                <Input type="text" id="input02" onChange={e=>setTitle(e.target.value)}/>
              </FormControl>
            </Grid>

          </Grid>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input03" style={{ display: "none" }}></InputLabel>
                <Input type="file" id="input03" onChange={(e) => setFile(e.target.files[0])} />
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div>
          {/* <Editor
            ref={editorRef}
            placeholder="내용을 입력해주세요."
            previewStyle="vertical" // 미리보기 스타일 지정
            height="300px" // 에디터 창 높이
            initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
            toolbarItems={[
              // 툴바 옵션 설정
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock']
            ]}
          ></Editor> */}
        </div>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            확인
          </Button>
          
        </div>
        
      </Box>
  )
}

export default UpdateBlog

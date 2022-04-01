import React from 'react';
import ReadBlog from './components/Blog/ReadBlog';
import UpdateBlog from './components/Blog/UpdateBlog';
import WriteBlog from './components/Blog/WriteBlog';
import FindPassword from './components/Login/FindPassword';
import FindId from './components/Login/FindId';
import CreateAccount from './components/Login/CreateAccount';
import Login from './components/Login/Login';
import Main from './components/Common/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="read-blog" element={<ReadBlog />} />
                <Route path="update-blog" element={<UpdateBlog />} />
                <Route path="write-blog" element={<WriteBlog />} />
                <Route path="find-password" element={<FindPassword />} />
                <Route path="find-id" element={<FindId />} />
                <Route path="create-account" element={<CreateAccount />} />
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<Main />} />
            </Routes>
        </>
  );
}

export default App;

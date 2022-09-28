import React from 'react';
import './reset.scss';
import './common.scss';

import ReadBlog from './components/Blog/ReadBlog';
import UpdateBlog from './components/Blog/UpdateBlog';
import WriteBlog from './components/Blog/WriteBlog';
import FindPassword from './components/Login/FindPassword';
import FindId from './components/Login/FindId';
import CreateAccount from './components/Login/CreateAccount';
import ModifyAccount from './components/Mypage/ModifyAccount';
import Login from './components/Login/Login';
import Main from './components/Common/Main';
import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";
import Header from './container/Header';

function App() {
    const { user } = useContext(Context);
    
    // const user = true;
    
    return (
        <>
            <Header/>
            <Routes>
                <Route path="read-blog" element={<ReadBlog />} />
                <Route path="update-blog" element={<UpdateBlog />} />
                <Route path="write-blog" element={<WriteBlog />} />
                <Route path="find-password" element={<FindPassword />} />
                <Route path="find-id" element={user ? <Main /> : <FindId />} />
                <Route path="create-account" element={ user ? <Main /> : <CreateAccount />} />
                <Route path="modify-account" element={ <ModifyAccount />} />
                <Route path="login" element={user ? <Main /> : <Login />} />
                <Route path="/*" element={<Main />} />
            </Routes>
        </>
  );
}

export default App;

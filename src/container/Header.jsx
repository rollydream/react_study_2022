import React from 'react';
import { useContext } from "react";
import {Link} from 'react-router-dom';
import Search from '../components/Common/Search'
import { Context } from "../context/Context";
import './header.scss';
// rfce
function Header() {
  const { user, dispatch } = useContext(Context);
  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
      <header>
          <div>
             {/* 기본 값 미리 넣어둠 */}
          </div>
          <div className='inner'>
              <div className='wrap_account'>
                  <div className='logo'><a href="/" ><span className='blind'>react</span></a></div>
                  <div className='box_account'>
                    {
                      
                        user ? 
                        <>
                          <Link to="/update-blog">블로그 글쓰기</Link>
                          <Link to="/modify-account">정보수정</Link>
                          <a href="#dumy" onClick={handleLogout}>로그아웃</a> 
                        </>
                        :
                        <>
                        <Link to="/update-blog">블로그 글쓰기</Link>
                        <Link to="/create-account">회원가입</Link>
                        <Link to="/login">로그인</Link>
                        </>
                    }
                      {/* <a href="#dumy">ID / PW 찾기</a> */}

                      
                  </div>
              </div>
              <Search/>
          </div>
      </header>
  )
}

export default Header;
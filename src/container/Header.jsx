import React from 'react';
import Search from '../components/Common/Search'
import './header.scss';
// rfce
function Header() {
  return (
      <header>
          <div className='inner'>
              <div className='wrap_account'>
                  <div className='logo'><a href="">react logo</a></div>
                  <div className='box_account'>
                      <a href="">로그인</a>
                      <a href="">ID / PW 찾기</a>
                      <a href="">회원가입</a>
                  </div>
              </div>
              <Search/>
          </div>
      </header>
  )
}

export default Header;
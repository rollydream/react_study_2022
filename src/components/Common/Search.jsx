import React from 'react';
import './Search.scss';
// rfce
function Search() {
  return (
      <div className='wrap_sch' role="search">
          <div className="box_search">
              <div className='area_dropdown' data-set="search">
                  {/* [D] .selected_option 클릭되면 1) aria-expanded="true"로 수정 2) .dropdown_select aria-hidden="false"로 수정 */}
                  <button className='selected_option' role="button" aria-haspopup="true" aria-expanded="false">
                      <span>글<i className='sp_common icon_arrow'><span className='blind'>검색모드 펼치기</span></i></span>
                  </button>
                  <div className='dropdown_select' aria-hidden="true">
                      <a href="#" className='item' aria-selected="true">글</a>
                      <a href="#" className='item' aria-selected="false">아이디</a>
                  </div>
              </div>
              <input type="text" className='input_sch' placeholder="검색어를 입력하세요" />
              <button type="button" className='btn colorBule'>
                  <span>검색</span>
              </button>
          </div>
      </div>
  )
}

export default Search

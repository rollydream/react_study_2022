import React from 'react';
import './Search.scss';
// rfce
function Search() {
  return (
    <form>
        <fieldset>
            <legend>검색</legend>
            <div className='wrap_sch' role="search">
                <div className="box_search">
                    <div className='area_dropdown' data-set="search">
                        {/* [D] .selected_option 클릭되면 1) aria-expanded="true"로 수정 2) .dropdown_select aria-hidden="false"로 수정 */}
                        <button type="button" className='selected_option' aria-haspopup="true" aria-expanded="false" >
                            글<i className='sp_common icon_arrow'><span className='blind'>검색모드 펼치기</span></i>
                        </button>
                        <div className='dropdown_select' aria-hidden="true">
                            <button type="button" className='item'>타이틀</button>
                            <button type="button" className='item'>아이디</button>
                        </div>
                    </div>
                    <input type="text" className='input_sch' placeholder="검색어를 입력하세요" />
                    <button type="button" className='btn colorBule' >
                        <span className='blind'>검색</span>
                    </button>
                </div>
            </div>
        </fieldset>
    </form>
  )
}

export default Search

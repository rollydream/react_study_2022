import React from 'react';

// rfce
function BlogContaier() {
  return (
    <main className='container'>
      <div className='inner'>
        <div className='depth01_wrap01'>
          <h2 className='depth01_tit01'>블로그 신규 등록</h2>
          <div className='depth01_content01'>
            <div className='list_input'>
                <div className='item'>
                  <div className='sel_box'>
                    <select>
                      <option value="">애견</option>
                      <option value="">세계</option>
                      <option value="">여행</option>
                      <option value="">취미</option>
                      <option value="">문학/책</option>
                    </select>        
                    <label for="">카테고리</label>
                  </div>
                  <div className='input_box'>
                    <input type="text" id="input_01"/>
                    <label for="input_01">제목</label>
                  </div>
                </div>
                <div className='item'>
                  <h3>사용자 이미지</h3>
                  <div className='col'>
                    <div className='rdo_box'>
                      <input type="radio" id='rdo_01_01'/>
                      <label for="rdo_01_01">사용자 이미지 사용</label>
                    </div>
                    <div className='rdo_box'>
                      <input type="radio" id='rdo_01_02'/>
                      <label for="rdo_01_02"></label>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input_box'>
                      <input type="text" id="input_02"/>
                      <label for="input_02">사용자 이미지</label>
                    </div>
                    <button type='file' className='btn'><span>찾기</span></button>
                    <p>이미지 1장당 10메가 하나의 포스팅에서 50MB까지 사용 가능한 확장자 (bmp, png, jpeg, gif)</p>
                  </div>
                </div>
                <div className='item'>
                  <h3>대표노출 타입 선택</h3>
                  <div className='col'>
                    <div className='rdo_box'>
                      <input type="radio" id='rdo_02_01'/>
                      <label for="rdo_02_01">사용자 이미지 사용</label>
                    </div>
                    <div className='rdo_box'>
                      <input type="radio" id='rdo_02_02'/>
                      <label for="rdo_02_02">유튜브 URL 사용</label>
                    </div>
                    <div className='rdo_box'>
                      <input type="radio" id='rdo_02_03'/>
                      <label for="rdo_02_03">사용하지 않음</label>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input_box'>
                      <input type="text" id="input_02"/>
                      <label for="input_02">대표 이미지</label>
                    </div>
                    <button type='file' className='btn'><span>찾기</span></button>
                    <p>이미지 1장당 10메가 하나의 포스팅에서 50MB까지 사용 가능한 확장자 (bmp, png, jpeg, gif)</p>
                  </div>
                  <div className='col'>
                    <div className='input_box'>
                      <input type="text" id='txt_03'/>
                      <label for='txt_03'>유튜브 url 입력</label>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <h3>본문 내용</h3>
                  {/* 에디터 영역 */}
                </div>
                <div className='item'>
                  <h3>기능 선택</h3>
                  <div className='col'>
                    <div className='chk_box'>
                      <input type="checkbox" id="chk_01"/>
                      <label for="chk_01">공감 기능</label>
                    </div>
                    <div className='chk_box'>
                      <input type="checkbox" id="chk_02"/>
                      <label for="chk_02">댓글 기능</label>
                    </div>
                  </div>
                </div>
                <div className='flex_btn_wrap'>
                  <a href='#none' className='btn'><span>미리보기</span></a>
                  <a href='#none' className='btn colorBule'><span>확인</span></a>
                </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  )
}

export default BlogContaier

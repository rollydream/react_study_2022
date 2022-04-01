import React from 'react';
import './container.scss';
// rfce
function Container() {
    return (
    <main className='container'>
        <div className='category_layout'>
            <div className='tab_wrap01' role="tablist">
                <button type="button" role="tab" aria-selected="true">전체</button>
                <button type="button" role="tab" aria-selected="false">애견</button>
                <button type="button" role="tab" aria-selected="false">세계여행</button>
                <button type="button" role="tab" aria-selected="false">취미</button>
                <button type="button" role="tab" aria-selected="false">문학/책</button>
            </div>
            <div className='tab_contents01'>
                <div className='content'>
                    <div className='img_list_wrap'>
                        <div className='item'><img src="" alt="" /></div>
                        <div className='item'><img src="" alt="" /></div>
                        <div className='item'><img src="" alt="" /></div>
                        <div className='item'><img src="" alt="" /></div>
                            <button type="button" className='btn_more01'><span>이미지 더보기</span></button>
                    </div>
                    <div className='txt_wrap'>
                        <a href="#none" className='info_author'>
                            <span className='img_author'></span>
                            <span className='txt_author'></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='wrap_pagging'>
                <button type="button" className='btn_prev'><span></span></button>
                <button type="button" className='btn_next'><span></span></button>
            </div>
        </div>
    </main>
  )
}

export default Container;

import React from 'react';
import './container.scss';
import { useContext } from "react";
import { Context } from "../context/Context";

// rfce
function Container() {
    const { user, dispatch } = useContext(Context);

    return (
    <main className='container'>
        <div className='inner category_layout'>
            <div className='logout_box'>
                {user ? (user.username + "님 환영합니다." ) : ("로그아웃 상태입니다.") }
            </div>
            <div className='category_tab'>
                <div className='tab_tits01' role="tablist">
                    <button type="button" className='item' role="tab" aria-selected="true"><span>전체</span></button>
                    <button type="button" className='item' role="tab" aria-selected="false"><span>애견</span></button>
                    <button type="button" className='item' role="tab" aria-selected="false"><span>세계여행</span></button>
                    <button type="button" className='item' role="tab" aria-selected="false"><span>취미</span></button>
                    <button type="button" className='item' role="tab" aria-selected="false"><span>문학/책</span></button>
                </div>
            </div>
            <div className='tab_contents01'>
                <div className='content'>
                    <div className='post_items_wrap'>
                        {/* item */}
                        <div className='item'>
                            <div className='txt_wrap'>
                                <a href="#none" className='info_author'>
                                    <span className='img_author'></span>
                                    <span className='txt_author'></span>
                                </a>
                                <a href="#none" className=''>
                                    <strong className='tit01'>아이패드 프로 6세대가 나와도 바꿀 생각 없다? (iPad pro 3, 5세대 비교)</strong>
                                    <p className='desc01'>
                                        안녕하세요. 지금 여기서 행복한 지안입니다. 오늘은 저와 3년 가까이 함께한 애플 아이패드 프로 12.9 (3세대)를 소개해 볼까 합니다. 현재 프로 모델이 5세대로 빠르게 변화하는 IT 시장에서 한참 뒤처졌다 할 수 있지만 실제 사용하면서
                                    </p>
                                </a>
                                <div className='comments'>
                                    <span className='like'>공감 <em>41</em></span>
                                    <span className='reply'>댓글 <em>21</em></span>
                                </div>
                            </div>
                            <div className='img_items_wrap'>
                                <div className='item'><img src="https://via.placeholder.com/167/pink" alt="" /></div>
                                <div className='more_item'>
                                    <div className='item'><img src="https://via.placeholder.com/167/gray" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/red" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/blue" alt="" /></div>
                                </div>
                                <button type="button" className='btn_more01'><span className='blind'>이미지 더보기</span><i></i></button>
                            </div>
                        </div>
                        {/* // item */}
                        {/* item */}
                        <div className='item'>
                            <div className='txt_wrap'>
                                <a href="#none" className='info_author'>
                                    <span className='img_author'></span>
                                    <span className='txt_author'></span>
                                </a>
                                <a href="#none" className=''>
                                    <strong className='tit01'>아이패드 프로 6세대가 나와도 바꿀 생각 없다? (iPad pro 3, 5세대 비교)</strong>
                                    <p className='desc01'>
                                        안녕하세요. 지금 여기서 행복한 지안입니다. 오늘은 저와 3년 가까이 함께한 애플 아이패드 프로 12.9 (3세대)를 소개해 볼까 합니다. 현재 프로 모델이 5세대로 빠르게 변화하는 IT 시장에서 한참 뒤처졌다 할 수 있지만 실제 사용하면서
                                    </p>
                                </a>
                                <div className='comments'>
                                    <span className='like'>공감 <em>41</em></span>
                                    <span className='reply'>댓글 <em>21</em></span>
                                </div>
                            </div>
                            <div className='img_items_wrap'>
                                <div className='item'><img src="https://via.placeholder.com/167/pink" alt="" /></div>
                                <div className='more_item'>
                                    <div className='item'><img src="https://via.placeholder.com/167/gray" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/red" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/blue" alt="" /></div>
                                </div>
                                <button type="button" className='btn_more01'><span className='blind'>이미지 더보기</span><i></i></button>
                            </div>
                        </div>
                        {/* // item */}
                        {/* item */}
                        <div className='item'>
                            <div className='txt_wrap'>
                                <a href="#none" className='info_author'>
                                    <span className='img_author'></span>
                                    <span className='txt_author'></span>
                                </a>
                                <a href="#none" className=''>
                                    <strong className='tit01'>아이패드 프로 6세대가 나와도 바꿀 생각 없다? (iPad pro 3, 5세대 비교)</strong>
                                    <p className='desc01'>
                                        안녕하세요. 지금 여기서 행복한 지안입니다. 오늘은 저와 3년 가까이 함께한 애플 아이패드 프로 12.9 (3세대)를 소개해 볼까 합니다. 현재 프로 모델이 5세대로 빠르게 변화하는 IT 시장에서 한참 뒤처졌다 할 수 있지만 실제 사용하면서
                                    </p>
                                </a>
                                <div className='comments'>
                                    <span className='like'>공감 <em>41</em></span>
                                    <span className='reply'>댓글 <em>21</em></span>
                                </div>
                            </div>
                            <div className='img_items_wrap'>
                                <div className='item'><img src="https://via.placeholder.com/167/pink" alt="" /></div>
                                <div className='more_item'>
                                    <div className='item'><img src="https://via.placeholder.com/167/gray" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/red" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/blue" alt="" /></div>
                                </div>
                                <button type="button" className='btn_more01'><span className='blind'>이미지 더보기</span><i></i></button>
                            </div>
                        </div>
                        {/* // item */}
                        {/* item */}
                        <div className='item'>
                            <div className='txt_wrap'>
                                <a href="#none" className='info_author'>
                                    <span className='img_author'></span>
                                    <span className='txt_author'></span>
                                </a>
                                <a href="#none" className=''>
                                    <strong className='tit01'>아이패드 프로 6세대가 나와도 바꿀 생각 없다? (iPad pro 3, 5세대 비교)</strong>
                                    <p className='desc01'>
                                        안녕하세요. 지금 여기서 행복한 지안입니다. 오늘은 저와 3년 가까이 함께한 애플 아이패드 프로 12.9 (3세대)를 소개해 볼까 합니다. 현재 프로 모델이 5세대로 빠르게 변화하는 IT 시장에서 한참 뒤처졌다 할 수 있지만 실제 사용하면서
                                    </p>
                                </a>
                                <div className='comments'>
                                    <span className='like'>공감 <em>41</em></span>
                                    <span className='reply'>댓글 <em>21</em></span>
                                </div>
                            </div>
                            <div className='img_items_wrap'>
                                <div className='item'><img src="https://via.placeholder.com/167/pink" alt="" /></div>
                                <div className='more_item'>
                                    <div className='item'><img src="https://via.placeholder.com/167/gray" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/red" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/blue" alt="" /></div>
                                </div>
                                <button type="button" className='btn_more01'><span className='blind'>이미지 더보기</span><i></i></button>
                            </div>
                        </div>
                        {/* // item */}
                        {/* item */}
                        <div className='item'>
                            <div className='txt_wrap'>
                                <a href="#none" className='info_author'>
                                    <span className='img_author'></span>
                                    <span className='txt_author'></span>
                                </a>
                                <a href="#none" className=''>
                                    <strong className='tit01'>아이패드 프로 6세대가 나와도 바꿀 생각 없다? (iPad pro 3, 5세대 비교)</strong>
                                    <p className='desc01'>
                                        안녕하세요. 지금 여기서 행복한 지안입니다. 오늘은 저와 3년 가까이 함께한 애플 아이패드 프로 12.9 (3세대)를 소개해 볼까 합니다. 현재 프로 모델이 5세대로 빠르게 변화하는 IT 시장에서 한참 뒤처졌다 할 수 있지만 실제 사용하면서
                                    </p>
                                </a>
                                <div className='comments'>
                                    <span className='like'>공감 <em>41</em></span>
                                    <span className='reply'>댓글 <em>21</em></span>
                                </div>
                            </div>
                            <div className='img_items_wrap'>
                                <div className='item'><img src="https://via.placeholder.com/167/pink" alt="" /></div>
                                <div className='more_item'>
                                    <div className='item'><img src="https://via.placeholder.com/167/gray" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/red" alt="" /></div>
                                    <div className='item'><img src="https://via.placeholder.com/167/blue" alt="" /></div>
                                </div>
                                <button type="button" className='btn_more01'><span className='blind'>이미지 더보기</span><i></i></button>
                            </div>
                        </div>
                        {/* // item */}

                    </div>
                </div>
            </div>
            <div className='pagination_wrap'>
                <button type='button' className='btn_prev'><span>이전</span></button>
                <div className='number'>
                    <button type='button'><span>1</span></button>
                    <button type='button'><span>2</span></button>
                    <button type='button'><span>3</span></button>
                    <button type='button'><span>4</span></button>
                    <button type='button'><span>5</span></button>
                    <button type='button'><span>6</span></button>
                    <button type='button'><span>7</span></button>
                    <button type='button'><span>8</span></button>
                    <button type='button'><span>9</span></button>
                    <button type='button'><span>10</span></button>
                </div>
                <button type='button' className='btn_next'><span>다음</span></button>
            </div>
        </div>
    </main>
  )
}

export default Container;

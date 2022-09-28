import React from 'react';
import './blog.scss';

import Header from '../../container/Header';
import Footer from '../../container/Footer';
import BlogContaier from './BlogContaier';


// rfce
function WriteBlog() {
  return (
    <>
      <Header />
      <BlogContaier />
      <Footer />
    </>
  )
}

export default WriteBlog

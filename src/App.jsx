

import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);
  const handleBookmarks=blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks)

  }
  const handleReadingTime=(time)=>{
    const newReadingTime=(readingTime+time);
    setReadingTime(newReadingTime)
  }
  

  return (
    
    <>
     <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App

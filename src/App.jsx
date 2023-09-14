import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id,time)  => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
  <Header></Header>
  <main className='md:flex max-w-7xl mx-auto'>
  <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
  <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
  </main>
    </>
  )
}

export default App

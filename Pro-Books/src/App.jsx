import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        console.log(res.data.books)
        setBooks(res.data.books)
      })
      .catch((error) => console.log("The website not found!"))
  }, [])

  return (
    <div>
      {books.map((ele, index) => {
        return (
          <div >

            <div key={index} className='book-card'>
              <div className='title'>{ele.title} </div>
              <div className="left">
                <div className='Inter'><img src={`${ele.imageLinks.smallThumbnail}`} alt="" /></div>

                <div className='desc'>{ele.description}</div>
              </div>

              <div className='author'>{ele.authors.map(ele => <span>{ele}</span>)}</div>
            </div>
            <hr />
          </div>
        )
      })}
    </div >
  )
}

export default App

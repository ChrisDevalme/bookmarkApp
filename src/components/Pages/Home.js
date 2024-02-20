import { useState, useEffect } from 'react'
import BookmarkList from '../BookmarkList/BookmarkList'
import styles from '../../app.module.scss'



export default function App(){
    const [bookmarks, setBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({
        title: '',
        url: ''
    })

    //createBookmarks
    const createBookmark = async () => {
        const body = {...newBookmark}
        try {
            const response = await fetch('/api/bookRoutes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdBookmarks = await response.json()
            const bookmarksCopy = [createdBookmarks,...bookmarks]
            setBookmarks(bookmarksCopy)
            setNewBookmark({
                title: '',
                url: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }
    const updateBookmark = async (id, updatedBookmark) => {
        try {
            const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const response = await fetch(`/api/bookRoutes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBookmark)
            })
            bookmarksCopy[index]={...bookmarksCopy[index], ...updatedBookmark}
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //deleteBookmarks
    const deleteBookmark = async (id) => {
        try {
            const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const response = await fetch(`/api/bookRoutes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getBookmarks
    const getBookmarks = async () => {
        try{
            const response = await fetch('/api/bookRoutes')
            const foundBookmarks = await response.json()
            setBookmarks(foundBookmarks.reverse())

        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getBookmarks()
    }, [])
    return(
        <>
			
            <div className={styles.banner}>
                <h1>BOOKMARKS</h1>
            </div>
            <div className='card'>
                <div className='card-body'>
                <BookmarkList
            newBookmark={newBookmark}
            setNewBookmark={setNewBookmark}
            createBookmark={createBookmark}
            updateBookmark={updateBookmark}
            bookmarks={bookmarks}
            deleteBookmark={deleteBookmark}
            />
                </div>
            </div>
            
        </>
    )
}
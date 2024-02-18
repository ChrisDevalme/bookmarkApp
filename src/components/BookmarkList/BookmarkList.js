import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'
import { Link } from "react-router-dom";
import UpdateBookmark from '../Pages/UpdateBookmark'

 
export default function BookmarkList ({ 
    newBookmark, 
    createBookmark, 
    setNewBookmark, 
    bookmarks,
    updateBookmark,
    deleteBookmark
}){
    return(
        <div>
            Add a New Bookmark: <br/>
            Press Enter to store!
            <input 
            placeholder='Website' 
            className={styles.input}
            type="text" 
            value={newBookmark.title} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createBookmark()
            }}
            />
            <input 
            placeholder='http://'
            className={styles.input}
            type="text" 
            value={newBookmark.url} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, url: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createBookmark()
            }}
            />
             <h3>Bookmarks</h3>
        {bookmarks.map(bookmark => (
            <>
            <Bookmark
                key={bookmark._id} 
                bookmark={bookmark}
                buttonAction={deleteBookmark}
                buttonText={'Delete'}
                buttonAction2={updateBookmark}
                buttonText2={'edit'}
            />
            <Link to={`/updateBookmark/${bookmark._id}`}>update</Link>
            </>
        ))}
        </div>
    )
}
import styles from './BookmarkList.module.scss'

import Bookmark from '../Bookmark/Bookmark'
import { Link } from "react-router-dom";

 
export default function BookmarkList ({ 
    newBookmark, 
    createBookmark, 
    setNewBookmark, 
    bookmarks,
    updateBookmark,
    deleteBookmark
}){
    return(
        <div className={styles.bookmarklist}>
            <h1 className='mb-n1'>Add a New Bookmark</h1> <br/>
            <h2 className='mt-2'>Press Enter to store</h2>
            
            <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
            <input 
            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder='Website' 
            type="text" 
            value={newBookmark.title} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createBookmark()
            }}
            />
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">URL</span>
            <input 
            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder='http://'
            // className={styles.input}
            type="text" 
            value={newBookmark.url} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, url: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createBookmark()
            }}
            />
            </div>
             <h3 className='mt-5'>Bookmark List:</h3>
        {bookmarks.map(bookmark => (
            <>
            <div className='fs-4 d-flex'>
            <Bookmark
                key={bookmark._id} 
                bookmark={bookmark}
                buttonAction={deleteBookmark}
                buttonText={'Delete'}
                buttonAction2={updateBookmark}
                buttonText2={'edit'}
            />
            {/* <button className='btn btn-warning inline'><Link className='text-decoration-none' to={`/updateBookmark/${bookmark._id}`}>Update</Link></button> */}
            </div>
            </>
        ))}
        </div>
    )
}
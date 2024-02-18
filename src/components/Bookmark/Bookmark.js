import styles from './Bookmark.module.scss'
// import UpdateBookmark from './UpdateBookmark'
import { Link } from "react-router-dom";



export default function Bookmark({ bookmark, buttonAction, buttonText, buttonAction2, buttonText2}){

    return(
        <div className={styles.bookmark}> 
        <a href={`https://${bookmark.url}`} target='_blank'>{bookmark.title}</a>
            <button 
                className={styles.button}
                onClick={() => buttonAction(bookmark._id)}
            >
                {buttonText}
            </button>
            {/* <Routes>
                <Route path='/updateBookmark' element={<UpdateBookmark/>}/>
            </Routes> */}
            <button 
                className={styles.button}
                onClick={() => buttonAction2(bookmark._id)}
            >
            
                {buttonText2}
            </button>
            
            
        </div>
    )
}
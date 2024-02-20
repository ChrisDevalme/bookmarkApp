import styles from './Bookmark.module.scss'
// import UpdateBookmark from './UpdateBookmark'
import { Link } from "react-router-dom";



export default function Bookmark({ bookmark, buttonAction, buttonText, buttonAction2, buttonText2}){

    return(
        <div className='w-100 d-flex justify-content-between mb-1 border border-2 border-start-0 rounded-end'>
            <div className=''> 
                <a className='text-decoration-none' href={`https://${bookmark.url}`} target='_blank'>{bookmark.title}</a>
            </div>
                <div className='btn-group inline-block'>
                    <button 
                        type='buton'
                        className='btn btn-danger '
                        onClick={() => buttonAction(bookmark._id)}
                    >
                        {buttonText}
                    </button>

                    <button type='button' className='btn btn-primary'>
                        <Link className='text-decoration-none text-white' to={`/updateBookmark/${bookmark._id}`}>Update</Link>
                    </button>
                </div>
        </div>
    )
}
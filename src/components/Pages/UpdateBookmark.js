import styles from '../../components/Bookmark/Bookmark.module.scss'
// import UpdateBookmark from './UpdateBookmark'
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";



export default function UpdateBookmark(){
    const params = useParams()
    const bmark = params.bmark

    const [bookmark, setBookmark] = useState(null);

    const getBookmark = async () => {
        try{
            const response = await fetch(`/api/bookroutes/${bmark}`);
            const data = await response.json();
            setBookmark(data);
        }catch(error){
            console.error(error)
        }   
      };

    const updateBookmark = async () => {
        try {
            const response = await fetch(`/api/bookRoutes/${bmark}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookmark)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getBookmark();
    }, []);

    const loaded = () => {
        return (
          <div>
            <h1>
              {bookmark.title}
            </h1>
            <h2>{bookmark.url}</h2>
            Press Enter to save!
            <input 
            placeholder='Website' 
            className={styles.input}
            type="text" 
            value={bookmark.title} 
            onChange={(e) => {
                setBookmark({...bookmark, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && updateBookmark()
            }}
            />
            <input 
            placeholder='http://'
            className={styles.input}
            type="text" 
            value={bookmark.url} 
            onChange={(e) => {
                setBookmark({...bookmark, url: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && updateBookmark()
            }}

            
            /><br/>
            <Link to='/'>Home</Link>


          </div>
          
        );
      };

    const loading = () => {
        return <h1>Loading...</h1>;
      };

    return bookmark ? loaded() : loading();
}

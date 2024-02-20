import styles from './UpdateBookmark.module.scss'
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
          <div className='card text-center w-200' style={{width: "550px"}}>
            <h1 className='card-header'>
              {bookmark.title}
            </h1>
            <div className='card-body'>
                <h4 className='card-text'>Press Enter to save</h4>
                <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input 
                    placeholder='Website' 
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    type="text" 
                    value={bookmark.title} 
                    onChange={(e) => {
                        setBookmark({...bookmark, title: e.target.value})
                    }} 
                    onKeyDown={(e) => {
                        e.key === 'Enter' && updateBookmark()
                    }}
                    />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">URL</span>
                <input 
                placeholder='http://'
                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                type="text" 
                value={bookmark.url} 
                onChange={(e) => {
                    setBookmark({...bookmark, url: e.target.value})
                }} 
                onKeyDown={(e) => {
                    e.key === 'Enter' && updateBookmark()
                }}

                
                />
                </div>
                <br/>
                <Link className='btn btn-primary text-center' to='/'>Home</Link>
            </div>

          </div>
          
        );
      };

    const loading = () => {
        return <h1>Loading...</h1>;
      };

    return bookmark ? loaded() : loading();
}

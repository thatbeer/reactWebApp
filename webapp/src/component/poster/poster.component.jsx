
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PostPage = () => {
    const [posts , setPosts] = useState({});
    const [ids ,setIds] = useState(1)

    const [idOnChanged,setIdOnChanged] = useState(1);

    const onClickhandler = () => {
        setIdOnChanged(ids)
    };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnChanged}`).then(response =>{
            console.log(response);
            setPosts(response.data)
        }).catch(error => {
            console.log(error)
        });
    }, [idOnChanged]);


    return (
        <div className='card'>
            <div>HHHHHH</div>
            <input type="text" value={ids} onChange={event => setIds(event.target.value)} />
            <button type="button" onClick={onClickhandler}>Fetch Post</button>
            <div className='card-header'>
                name : {posts.title}
            </div>
            <div className='card-body'>
                body : {posts.body}
            </div>
        </div>
    );
};


export default PostPage;
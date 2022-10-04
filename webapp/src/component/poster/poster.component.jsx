
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PostPage = () => {
    const [posts , setPosts] = useState('');
    const { userId , id , title , body} = posts;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posters`).then(response =>{
            console.log(response);
            setPosts(response.data)
        }).catch(error => {
            console.log(error)
        });
    }, [setPosts]);


    return (
        <div className='card'>
            <div>HHHHHH</div>
            <div className='card-header'>
                name : {title}
                <button className='outline-danger' >delete</button>
            </div>
            <div className='card-body'>
                body : {body}
            </div>
        </div>
    );
};


export default PostPage;
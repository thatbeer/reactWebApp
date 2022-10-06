
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


import PosterSearchbox from './poster-searchbox';
import Posterlist from './posterlist';  


const PostPage = () => {
    const [posts , setPosts] = useState('');
    const [searchField,setSearchField] = useState([]);
    const [filteredPoster , setFilterPoster] = useState(posts);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json()).then((posters) => setPosts(posters))
        .catch(error => {
            console.log(error)
        });
    }, []);

    useEffect(() => {
        const newFilteredPosts = posts.filter((post) => {
            return post.title.toLocaleLowerCase().includes(searchField);
        });

        setFilterPoster(newFilteredPosts);
    }, [posts,searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }    


    return (
        <div className='card'>
            <h1>Posters Searcher</h1>
            
            <PosterSearchbox className='poster-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search posters'
            />

            <Posterlist posts={filteredPoster} />
        </div>
    );
};


export default PostPage;
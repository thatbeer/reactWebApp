import PostCard from "./poster-post";

const Posterlist = ({posts}) => (
    <div>
        {posts.map((post) => {
            return <PostCard key={post.id} post={post} />
        })}
    </div>
);

export default Posterlist;
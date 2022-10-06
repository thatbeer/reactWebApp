

const PostCard = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className='card-container'>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
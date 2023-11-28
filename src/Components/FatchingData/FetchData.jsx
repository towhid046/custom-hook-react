import PostCard from "../PostCard/PostCard.jsx";
import useCustomhook from "../../useCustomhook.js";
import Comments from "../CommentCard/CommentCard.jsx";
import "./fatchData.css";
import UserCard from './../UserCard/UserCard';

export default function FetchData() {
  const { data: posts, error: postError } = useCustomhook("https://jsonplaceholder.typicode.com/posts");
  const { data: comments, error: commentsError} = useCustomhook("https://jsonplaceholder.typicode.com/comments");
  const { data: users, error: usersError} = useCustomhook("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <div>

      <h1 className="cards_heading">Comments Card</h1>
        <div className="container">
          {postError ? (<h1>404: Not found for posts</h1>) 
          : (posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>

        <h1 className="cards_heading">Comments Card</h1>
        <div className="container">
          {commentsError ? (
            <h1>404: Not found for comments</h1>) 
            : (comments.map((comment) => <Comments key={comment.id} comment={comment} />)
          )}
        </div>

        <h1 className="cards_heading">User Information</h1>
        <div className="container">
          {usersError ? (
            <h1>404: Not found for Users</h1>) 
            : (users.map((user) => <UserCard key={user.id} user={user} />)
          )}
        </div>

      </div>
    </>
  );
}

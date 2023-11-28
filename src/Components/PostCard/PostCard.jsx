/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './postData.css'
export default function PostCard({post}) {
  const {id, title, body} = post
  return (
    <>
      <div className="post_card">
        <h3>{id}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </>
  )
}

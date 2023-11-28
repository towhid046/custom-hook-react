/* eslint-disable react/prop-types */
import './comments.css'
export default function Comments({comment}) {
  const {name, email, body} = comment
  return (
    <>
    <div className="comment_card">
        <h3>{name}</h3>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
    </>
  )
}

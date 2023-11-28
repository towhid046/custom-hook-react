import './UserCard.css'
export default function UserCard({user, key}) {
    const {name, username, email, address:{street, city}, phone, website } = user
  return (
    <>
    <div className="user_card">
        <h3>Name: {name}</h3>
        <h5>Username: {username}</h5>
        <p>Email: {email}</p>
        <p><span>City: {city}</span> <span>Street: {street}</span></p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
    </div>
    </>
  )
}

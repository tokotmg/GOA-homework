import { Link } from "react-router-dom"
function About() {
    return (
        <div className="flex flex-col justify-center items-center font-bold gap-[5px] bg-gray-400 h-screen">
            <Link to="/">მთავარი</Link>
            <Link to="/Cars">მანქანები</Link>
            <Link to="/Contacts">კონტაქტები</Link>
            <h1>შესახებ</h1>
            <p>ეს ვებსაიტი უბრალოდ ტესტი ვებსაიტი.</p>
        </div>
    )
}
export default About
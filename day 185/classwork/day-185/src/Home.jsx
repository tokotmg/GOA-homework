import { Link } from "react-router-dom"
function Home() {
    return (
        <div className="flex flex-col justify-center items-center font-bold gap-[5px] bg-gray-400 h-screen">
            <Link to="/About">შესახებ</Link>
            <Link to="/Cars">მანქანები</Link>
            <Link to="/Contacts">კონტაქტები</Link>
            <h1>მთავარი გვერდი</h1>
            <p>მოგესალმებით, ეს არის ჩემი ვებსაიტი. შეგიძლია ნახო ბევრი რაღაცეები.</p>
        </div>
    )
}
export default Home
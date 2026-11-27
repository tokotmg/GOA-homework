import { Link } from "react-router-dom"
function Contacts() {
    return (
        <div className="flex flex-col justify-center items-center font-bold gap-[5px] bg-gray-400 h-screen">
            <Link to="/">მთავარი</Link>
            <Link to="/About">შესახებ</Link>
            <Link to="/Cars">მანქანები</Link>
            <h1>კონტაქტები</h1>
            <p>blabla@gmail.com</p>
        </div>
    )
}
export default Contacts
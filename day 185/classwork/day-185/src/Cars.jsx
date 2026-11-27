import { Link } from "react-router-dom"
function Cars() {
    return (
        <div className="flex flex-col justify-center items-center font-bold gap-[5px] bg-gray-400 h-screen">
            <Link to="/">მთავარი</Link>
            <Link to="/About">შესახებ</Link>
            <Link to="/Contacts">კონტაქტები</Link>
            <h1>მანქანები</h1>
            <div className="flex justiy-center items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTrPbwlnUU5ID8FAsxB-28j4hzZoDSSHzeLSuQlZ-iw&s=10" width="300px"/>
                <img src="https://png.pngtree.com/png-vector/20240325/ourmid/pngtree-car-isolated-on-white-background-porsche-911-png-image_12235239.png" width="300px"/>
                <img src="https://pngimg.com/uploads/ferrari/ferrari_PNG10654.png" width="300px"/>
            </div>
        </div>
    )
}
export default Cars
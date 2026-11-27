import { Link } from "react-router-dom"
function About() {
    return (
        <div className="flex flex-col justify-center items-center font-bold gap-[5px] bg-gray-400 h-screen">
            <Link to="/">მთავარი</Link>
            <Link to="/Cars">მანქანები</Link>
            <Link to="/Contacts">კონტაქტები</Link>
            <h1>შესახებ</h1>
            <p>ეს ვებსაიტი უბრალოდ ტესტი ვებსაიტი.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nisi quae, enim consectetur deserunt ipsa omnis aperiam, reiciendis pariatur maxime libero? Et tenetur nemo adipisci eos consequatur reprehenderit laudantium similique.
            Accusamus itaque facere a voluptate quis fuga earum repellendus aperiam, tempore delectus iure? A, eaque corrupti et voluptates aspernatur error ratione minima nesciunt, laboriosam dolore, animi sint soluta deserunt aperiam.</p>
        </div>
    )
}
export default About
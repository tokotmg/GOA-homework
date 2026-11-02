import { useState, useEffect, useRef } from "react"
function API() {
    const [data, setData] = useState(null)
    const [city, setCity] = useState("Tbilisi")
    const cityRef = useRef()
    const apiKey = "fe074e3c43591cc1200bff39a7ffd1ec"
    const fanc = async(city) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
        .then(res => res.json())
        .then((data) => {
            setData(data)
        })
    }
    useEffect(() => {fanc(city)},[city])
    const citySearch = (e) => {
        e.preventDefault()
        setCity(cityRef.current.value)
    }
    const styleDiv = "w-[200px] bg-blue-300 rounded-[20px] pl-[20px]"
    return (
    <>
    <div className="flex flex-col justify-center items-center h-screen gap-[30px]">
        <form className="w-[700px] flex justiy-between">
            <input type="text" placeholder="Enter city name" ref={cityRef} className=""/>
            <button onClick={citySearch} className="bg-blue-800 w-[80px] h-[40px]">Click</button>
        </form>
        <div className="w-[500px] h-[400px] bg-blue-700 rounded-[40px] gap-[20px] p-[30px] text-white">
            {data ? (
            <>
                <div>
                    <h1 className="text-[2rem]">{city}</h1>
                    <p className="text-[0.8rem] text-gray-100">Updated just now.</p>
                </div>
                <div>
                    <h2 className="text-[3rem]">{data.main.temp}</h2>
                    <h2 className="text-[1.5rem]">{data.weather[0].main}</h2>
                </div>
                <div className="flex gap-[20px]">
                    <div className={styleDiv}>
                        <p>Humidity</p>
                        <h3>{data.main.humidity}</h3>
                    </div>
                </div>
                <div className={styleDiv}>
                    <p>Wind</p>
                    <h3>{data.wind.speed}</h3>
                </div>
                <div className={styleDiv}>
                    <p>Feels like</p>
                    <h3>{data.main.feels_like}</h3>
                </div>
            </>
             ) 
             : 
            (<p>ქალაქი არ მოიძებნა.</p>)}
        </div>
    </div>
    </>
    )
}
export default API;
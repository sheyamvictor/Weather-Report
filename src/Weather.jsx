import React, { useState } from 'react'
import axios from "axios"


function Weather() {

    const [City, setCity] = useState("")

    const [weather, setweather] = useState("")

    const [temp, settemp] = useState(" ")

    const [desc, setdesc] = useState("")

    const [country, setcountry] = useState("")

    const [name, setname] = useState("")

    const [time, settime] = useState("")

    function handelcity(evt) {
        setCity(evt.target.value)
    }
    function handelSearch() {

        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=95cb87010ac6cbd0577ef3cd0763778e`)

        weatherdata.then(function (success) {
            // console.log(success.data)

            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
            setcountry(success.data.sys.country)
            setname(success.data.name)
            settime(success.data.timezone)
        })

        .catch(() => {
            alert("Enter the Correct Location 📍") 
        })
            
            
        

    }



    return (
       
            <div className="bg-gradient-to-r from-cyan-100/30  to-blue-100/30 text backdrop-blur-sm p-20 px-10 border rounded-3xl m-5  border-r-purple-300 ">
                <h1 className="text-3xl font-medium">Weather-Report</h1>
                <p className='font-medium'>I can give you a Weather 🌪️ report about your city :)</p>
                <div className="flex m-5 justify-center gap-3">
                    <input onChange={handelcity} type="text" placeholder='City?' className='mt-2  border border-green-400 rounded-md bg-transparent p-1 font-medium  hover:bg-green-200 text-black' required/>
                    <button onClick={handelSearch} className='border border-green-400 p-1 mt-2 rounded-md  hover:bg-green-100 text-black '>Search</button>
                </div>
                <div className="flex justify-evenly gap-5 p-1 flex-wrap backdrop-opacity-10 backdrop-blur max-md:inline-grid  text-wrap">
                    <h1 className="bg-gradient-to-r from-rose-300 to-blue-300 px-10 py-10 border rounded-md text-center text-2xl flex-grow"><b>🎌Country:</b>{country}</h1>
                    <h1 className="bg-gradient-to-r from-purple-300 to-blue-400 px-10 py-10 border rounded-md text-center text-2xl flex-grow" ><b>🌆City:</b>{name}</h1>
                    <h1 className="bg-gradient-to-r from-yellow-200 to-blue-400 px-10 py-10 border rounded-md text-center text-2xl flex-grow" ><b>🕛TimeZone:</b>{time}</h1>
                    <h1 className="bg-gradient-to-r from-pink-300 to-blue-400 px-10 py-10 border rounded-md text-center text-2xl flex-grow" ><b>☁️Weather:</b>{weather}</h1>
                    <h1 className="bg-gradient-to-r from-orange-300 to-blue-400 px-10 py-10 border rounded-md text-center text-2xl flex-grow" ><b>🌡️Temprature:</b>{temp}</h1>
                    <h1 className="bg-gradient-to-r from-gray-300 to-blue-400 px-10 py-10 border rounded-md text-center text-2xl flex-grow" ><b>😶‍🌫️Description:</b>{desc}</h1>

                </div>


            </div>



        
    )
}

export default Weather
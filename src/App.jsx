import { useState ,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import gerflores from "./assets/gerflores.png"
import './App.css'

 function App() {
  const[isclima , setisClima] = useState({})
  const [iscelsius ,setCelsius] = useState(true)
  const loader = document.getElementById("loader")
  
  setTimeout(() =>{
    loader?.classList.add("hide")
  }, 1000)
  useEffect(()=>{

   
    
  function success(pos) {
   const crd = pos.coords;
   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=46dc136f9103941630256983c3a4a97a`)
   .then(res=> setisClima(res.data))
   
}


function error(err) {
 
}

navigator.geolocation.getCurrentPosition(success, error);

 },[])
 

 const  C = (isclima.main?.temp-273.15).toFixed(2)
 const  F = C * 1.8 + 32

 const Boton1 = ()=>{
     setCelsius(!iscelsius)
 }


document.addEventListener("DOMContentLoaded", ()=>{
  loadComponet();
})




  return (
    <div className='Contendor-Wather'>
       <div className='Link'>
        <h2> Wather App una aplicación Meteorología </h2>
        <button className='Link-Wather'> <a href="#Wather"> Pruebalo... </a>  </button> 
        <div className='SobreMi'>
         <div className='Img'>
             <img src={gerflores} alt="" />
         </div>
         <div className='Texto'>
             <h2>
              Soy Gerson Elmer Flores Narciso he creado esta
              app de Meteorología con la ayuda de un API , 
              usando buenas practicas y buena estructura.
             </h2>
             <div className='Redes'>
                <span className='Circulo'> <a href="https://www.linkedin.com/in/gerson-flores-narciso-52628b256/"> <i className='bx bxl-linkedin-square linke' > </i> </a>  </span>
             
             <span className='Circulo'> <a href="https://gerson-flores-a2a3e8.netlify.app/"> <i className='bx bxs-briefcase-alt-2 portafolio'></i> </a> </span>
             </div>
         </div>
      </div>
      </div>
      
      
     <div id='Wather'className="Wather-Container">
        <div className='Location'>
        <h1 className='title' >Wheather App</h1>
        <h2>{isclima?.name} ,{isclima.sys?.country} </h2>
        </div>
      <div className='ClimaVariantes'>
        <section className='Image-Datos' > 
        <img src={`http://openweathermap.org/img/wn/${isclima.weather?.[0].icon}@2x.png`} alt="" />
        <div className='BotonGrados'>
        <h2> { iscelsius? C: F} {" "} {iscelsius ? " °C " : "°F"} </h2>
        <button className='Buton' onClick={Boton1}>Degrees°C/°F</button>
        </div>
        </section>
        <section className='Text-Contenido'> 
          <ul>
            <li className='Lista'> 
            <i className="fa-brands fa-cloudflare viento"></i> {" "}
             Wind Speed:  <span> {isclima.wind?.speed }  m/s </span>
            </li>
            <li className='Lista'>
              <i className="fa-solid fa-cloud cloud"></i> {" "}
              Clouds: <span> {isclima.clouds?.all}  % </span>
            </li>
            <li className='Lista'>
              <i className="fa-solid fa-temperature-three-quarters temp "></i> {""}
             Pressure:  <span> {isclima.main?.pressure} mbr </span>
            </li>
          </ul>
          </section>
        </div>
     
       
      
       
       
      
    </div>
   
    <div className='loader' id='loader'>
           <svg class="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48">
          <title>Academlo Logo</title>
          <g>
            <g>
              <path
                d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
              </path>
            </g>
          </g>
       </svg>
        </div>
    </div>
  )
}

export default App

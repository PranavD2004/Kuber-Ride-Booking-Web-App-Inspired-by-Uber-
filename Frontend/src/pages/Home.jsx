import React,{useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ('remixicon/fonts/remixicon.css');
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import Hl from '../assets/home-logo.jpg';
import Hb from '../assets/home-bg.jpg';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
  // import vehiclepanel from '../components/VehiclePanel'

const Home =() =>{
  const [pickup,setPickup]=useState('')
  const [destination,setDestination] =useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const vehiclePanelRef =useRef(null)
  const panelCloseRef = useRef(null)
  const panelRef =useRef(null)
  const vehicleFoundRef =useRef(null)
  const waitingForDriverRef =useRef(null)

  const confirmRidePanelRef =useRef(null)
  const [vehiclepanel,setVehiclepanel] = useState(false)
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState(false)
  const [waitingForDriver,setWaitingForDriver]=useState(false)


  const submitHandler= (e)=>{
    e.preventDefault()
  }

      useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])


    useGSAP(function () {
        if (vehiclepanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclepanel ])

    useGSAP(function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
    }, [ confirmRidePanel ]) 

    useGSAP(function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
        })
      }
    }, [ vehicleFound ]) 

    useGSAP(function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
        })
      }
    }, [ waitingForDriver ]) 

  return(
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={Hl}/>

      <div className='h-screen w-screen'>
        <img className ='h-full w-full object-cover' src={Hb}/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absoulte top-6 w-90% opacity-0 left-6  bg-white text-2xl'><i className="ri-arrow-down-s-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} >
          <div className='line absolute h-20 w-1 top-[53%] left-10 bg-gray-700 rounded-full' ></div>

          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          type='text' 
          placeholder='Add a pick-up location'/>

         <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
          onClick={()=>{
            setPanelOpen(true)
          }}
         value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          type='text' 
          placeholder='Enter your destination'/>
          
        </form>

        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclepanel}
            setPanelOpen={setPanelOpen}
          />
        

      </div>
      <div ref={vehiclePanelRef}  className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12'>
        <VehiclePanel 
          setConfirmRidePanel={setConfirmRidePanel} 
          setVehiclePanel={setVehiclepanel}
        />
      </div>

      <div ref={confirmRidePanelRef}  className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12'>
        <ConfirmRide 
          setVehicleFound={setVehicleFound}
          setConfirmRidePanel={setConfirmRidePanel}
        />
        </div>

         <div ref={vehicleFoundRef} className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12'>
          <LookingForDriver setVehicleFound={setVehicleFound}/>
          </div>

          <div ref={waitingForDriverRef}  className='fixed w-full z-10  bg-white bottom-0 px-3 py-10 pt-12'>
          <WaitingForDriver waitingForDriver={WaitingForDriver}/>
        </div>
        
      </div>

    </div>
  )
}
export default Home   
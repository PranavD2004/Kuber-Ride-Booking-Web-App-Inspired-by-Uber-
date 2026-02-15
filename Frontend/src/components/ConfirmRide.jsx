import react from 'react';
import car from "../assets/uber-go.jpg"

const ConfirmRide = (props) => {
return (
  <div>
    <h5 className="p-1 text-center w-[93%] absolute top-0"
    onClick={()=>{
          props.setConfirmRidePanel(true)
         }}>
        <i className="text-3xl ri-arrow-drop-down-line text-gray-500"></i></h5>
        <h3 className='text-2xl font-semibold mb-5' >Confirm your Ride</h3>
       <div className='flex gap-2 justify-between flex-col items-center '>
         <img className='h-30' src={car} ></img>
         <div className='w-full mt-5'>

          <div className='flex items-centre gap-5 p-3 border-b-2   '>
            <i className="text-lg ri-map-2-line"></i>
           <div>
            <h3 className='text-lg  font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 -mt-1'>Amod Vihar,Pune</p>
           </div>
          </div>
          
          <div className='flex items-centre gap-5 p-3 border-b-2  '>
            <i className="text-lg ri-map-pin-line"></i>
           <div>
            <h3 className='text-lg  font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 -mt-1'>Amod Vihar,Pune</p>
           </div>
          </div>

          <div className='flex items-centre gap-5 p-3 '>
            <i className="ri-money-rupee-circle-fill"></i>
           <div>
            <h3 className='text-lg  font-medium'>₹99</h3>
            <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
           </div>
          </div>
         

         </div>
         <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
         }} className='w-full bg-green-600 text-white font-semibold  rounded-lg p-2'>Confirm</button>

       </div>
  </div>
)
}
export default ConfirmRide;
import react from "react";
import Log from "../assets/llog.jpg"
const Riding=()=>{
  return(
    <div className='h-screen'>
<div className='h-1/2'>
<img className='h-full w-full object-cover' src={Log} />
</div>
<div className='h-1/2 p-3'>
<button>Make a Payment</button>
</div>
<div className='flex gap-2 justify-between flex-col items-center '>
             <div className='w-full mt-5'>

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
   </div>

  )
}

export default Riding;
import React from 'react'

const Feedback = () => {
  return (
     <div className="bg-gray-800 p-4 rounded-lg flex-1">
    
      {/* Repeat this block for each feedback */}
      <div className="mb-4">
        <h4 className="font-semibold">Jenny Wilson</h4>
        <div className="text-yellow-500">★★★★★</div>
        <p className='text-gray-400 text-sm'>The food was excellent and so was the service. I had the mushroom risotto was awesome.</p>
     
      </div>


      <div className="mb-4">
        <h4 className="font-semibold">Dianne Russell</h4>
        <div className="text-yellow-500">★★★★★</div>
        <p className='text-gray-400 text-sm'>The food was excellent and so was the service. I had the mushroom risotto was awesome.</p>
     
      </div>


      <div className="mb-4">
        <h4 className="font-semibold">Devon Lane</h4>
        <div className="text-yellow-500">★★★★★</div>
        <p className='text-gray-400 text-sm'>The food was excellent and so was the service. I had the mushroom risotto was awesome.</p>
     
      </div>
    </div>
  )
}

export default Feedback
import React from 'react'

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex-1 mt-6">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
      <table className="w-full">
        <thead className='mb-4 border-b border-gray-700'>
          <tr className=''>
            <th className="text-left pb-2">Customer</th>
            <th className="text-left pb-2">Order No.</th>
            <th className="text-left pb-2">Amount</th>
            <th className="text-left pb-2">Status</th>
          </tr>
        </thead>
        <tbody className=''>
          {/* Repeat this block for each order */}
          <tr className='border-b   border-gray-700'>
            <td className='flex items-center py-3'>
              <img className="w-10 h-10 mr-2 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
              Wade Warren
            </td>
            <td className='py-2'>15478256</td>
            <td className='py-2'>$124.00</td>
            <td className='py-2 '> <span className='bg-green-600 py-2 px-4 rounded-full text-sm'>Delivered</span></td>
          </tr>
          

          {/* 2nd  */}

          <tr className='border-b border-gray-700'>
            <td className='flex items-center py-3'>
              <img className="w-10 h-10 mr-2 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
             Jane Cooper
            </td>
            <td className='py-2'>15478256</td>
            <td className='py-2'>$164.00</td>
            <td className='py-2 '> <span className='bg-green-600 py-2 px-4 rounded-full text-sm'>Delivered</span></td>
          </tr>


          {/* 34d  */}

          <tr className='border-b border-gray-700'>
            <td className='flex items-center py-3'>
              <img className="w-10 h-10 mr-2 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
              Guy Hawkins
            </td>
            <td className='py-2'>15478256</td>
            <td className='py-2'>$154.00</td>
            <td className='py-2 '> <span className='bg-red-600 py-2 px-4 rounded-full text-sm'>Cancelled</span></td>
          </tr>


          {/* 4 */}



          <tr className='border-b border-gray-700'>
            <td className='flex items-center py-3'>
              <img className="w-10 h-10 mr-2 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
              Kristin Waston
            </td>
            <td className='py-2'>15478256</td>
            <td className='py-2'>$154.00</td>
            <td className='py-2 '> <span className='bg-green-600 py-2 px-4 rounded-full text-sm'>Delivered</span></td>
          </tr>

          {/* 5 */}


          <tr className='border-b border-gray-700'>
            <td className='flex items-center py-3'>
              <img className="w-10 h-10 mr-2 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
              Kristin Waston
            </td>
            <td className='py-2'>15478256</td>
            <td className='py-2'>$114.00</td>
            <td className='py-2 '> <span className='bg-green-600 py-2 px-4 rounded-full text-sm'>Delivered</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentOrders

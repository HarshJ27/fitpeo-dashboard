import React from 'react'

const Header = () => {
  return (
    <header className=" flex items-center justify-between p-4 bg-gray-800">
          <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 border w-1/3 border-gray-600" />
  
    <div
    className='flex '>
        <span className='bg-gray-500 rounded-full p-1 mr-2'><svg class="h-6 w-6 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 9 12 15 21 9 12 3 3 9" />  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" /></svg></span>
            
        <span className='bg-gray-500 rounded-full p-1 mr-2'><svg class="h-6 w-6 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg></span>
        <span className='bg-gray-500 rounded-full p-1 mr-8'><svg class="h-6 w-6 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg></span>
        <div className="w-8 h-8 rounded-full bg-[url('https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg')] bg-cover bg-center"/>

    </div>   
    {/* <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 border border-gray-600" /> */}
  </header>
  )
}

export default Header
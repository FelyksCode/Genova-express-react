import React from 'react'

function Button(prop) {
  return (
    <div className='bg-gray-600 text-white  md:py-2 py-3 md:px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 text-center font-custom'>
        {prop.children}
    </div>
  )
}

export default Button
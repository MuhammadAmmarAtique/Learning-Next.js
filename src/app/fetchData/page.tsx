import React from 'react'

const page =  async () => {
 const response =  await fetch('https://dummyjson.com/test')
 const res = await response.json()
 
  return (
   <>
    <div>{res.method}</div>
    <div>{res.status}</div>
   </>
  )
}

export default page
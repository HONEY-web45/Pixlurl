"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
// import { headers } from 'next/headers'
const page = () => {
const [url, seturl] = useState("")
const [shorturl, setshorturl] = useState("")
const [gen, setgen] = useState("")
const [gene, setgene] = useState()


const generate=async() => { 
  if (url.length<2 ) {
    throw new Error(alert("URL is too short"),"URL is too short")
  }
  else if (shorturl.length<1) {
    throw new Error(alert("Shorturl is empty"),"Shorturl is empty")
  }
  else if (shorturl.length>9) {
    throw new Error(alert("Shorturl should be less than of 9 characters"),"Shorturl should be less than of 9 characters")
  }
  
    
    else{
      let a=await fetch("/api/generate",{method:"POST",headers:{
        "Content-Type":"application/json"},
        body:JSON.stringify({
          "url":url,
          "shorturl":shorturl
        })
      })
      let b=await a.json()
      if (b.error==true) {
      throw new Error(alert("Shorturl already exists"),"Shorturl already exists")
    }
    else{
      alert(b.message)}
      setgen(`${process.env.NEXT_PUBLIC_LINK}/${shorturl}`)
      console.log(gen);
      
      if (url.startsWith("https://")) {
        
        setgene(`${url}`)
        
  } else {
    
    setgene(`https://${url}`)
  }
    seturl("") 
    setshorturl("") 
}}
const copy=async()=>{
  window.navigator.clipboard.writeText(gen)
  alert("Copied to clipboard")
}
useEffect(() => {
  
  
  document.title="Shorten--Pixlurl"
})

  return (
    <div className='min-h-screen bg-purple-100  py-10'>
    <div className='bg-purple-200 border-purple-300 border in rounded-xl max-w-lg mx-5 sm:mx-auto  p-7 flex flex-col gap-4  '>
      <h2 className='font-bold text-xl text-center'>Generate your short URLs</h2>
      <div className='flex flex-col gap-2'>
        <input type="text" className='p-3 rounded-lg' onChange={(e)=>{seturl(e.target.value)}} value={url} placeholder='Enter your URL' />
        <input type="text" className='p-3 rounded-lg' onChange={(e)=>{setshorturl(e.target.value)}} value={shorturl} placeholder='Enter the name you want for your short URL' />

      </div>
      <div>
      <button className='bg-red-500 shadow-lg p-2 rounded-lg text-white w-full' onClick={ generate}>Generate</button>
      </div>
      {gen &&  <div >
       <div className='font-bold text-lg'>Your Link</div>
        <div className='flex pt-3  flex-col items-center justify-center gap-4 sm:gap-2 px-2'> 

       <Link href={gene} target="_blank" rel="noopener noreferrer" className='text-lg break-words  w-11/12 border-[3px] text-center  border-black bg-blue-400 px-3 py-2 font-bold text-white rounded-xl'><code>{gen}</code></Link>
         
         <button className='bg-red-500 w-fit self-center px-2  pt-1 pb-2 text-lg text-white rounded-xl text-center' onClick={()=>copy()}>copy</button>
         </div>
         </div>} 
    </div>
    </div>
  )
}

export default page





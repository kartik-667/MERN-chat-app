import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import "../cssfiles/home.css"
function Signup() {
    const [name, setname] = useState("")
      const [mail, setmail] = useState("")
      const [pass,setpass] = useState("")


      
    
    //   async function getdata(){
    //     const data=await axios.get("http://localhost:9000/")
    //     if(data) console.log(data.data);
    //     else console.log("no data found")
        
    
    
    
    //   }
    //   useEffect(()=>{
    //     getdata()
    //   } ,[] )
    
      // console.log(name,mail,pass);
    
      // useEffect(() => {
      //  console.log(name,mail,pass);
       
      // }, [name,mail,pass])
      
      
    
      async function submithandle(e){
        e.preventDefault()
        console.log("clicked");
        if(!name ||!mail || !pass){
            //show toast here 
            return

        }

        const formdata={
            name:name,
            email:mail, 
            password:pass
        }

        const config={
            headers:{
                "Content-type":"application/json",
            }
        };

        const response=await axios.post("http://localhost:9000/api/user/signin",formdata,config)




        
      }
    
      const [showpass, setshowpass] = useState(false)
    
      function handleclick(e){
        e.preventDefault()
        setshowpass(!showpass)
    
      }


  return (
    <>

<div className='h-full w-full main' >

<form  action="" className='form border-black p-4 m-4 flex flex-col' >
  <h1 className='text-4xl mb-4'>Signup Here</h1>
  <label htmlFor="name">Name:</label>
  <input onChange={(e)=> setname(e.target.value)} value={name}  className='text-black'  type="text" name="name" id="name" placeholder='enter name here' />

  <label htmlFor="email">Email:</label>
  <input onChange={(e)=> setmail(e.target.value)} value={mail} type="email" name="email" id="email" placeholder='user@abc.com' />
  <div>

  <label htmlFor="password">Password</label>
  <br />
  <input onChange={(e)=> setpass(e.target.value)} value={pass} type={showpass ? "text" :"password"} name="password" id="password" placeholder='*****' />
  <button className="border-2" onClick={(e)=> handleclick(e)}>Show Password</button>
  </div>

  <button className='border-2 w-40' onClick={(e)=> submithandle(e)}>Sign Up</button>
  <button className='border-2 w-40' onClick={(e)=>{
    e.preventDefault()
    setname("guest")
    setmail("guest@kv.com")
    setpass("12345")
  }}>Get Guest user credentials</button>
</form>
    

</div>
      
    </>
  )
}

export default Signup

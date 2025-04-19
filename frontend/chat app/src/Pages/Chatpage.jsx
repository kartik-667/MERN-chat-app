import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Chatpage = () => {

    const [data, setdata] = useState([])

    const getdata= async ()=>{
        const data= await axios.get('http://localhost:9000/api/chat')

        console.log(data.data);
        setdata(data.data)
        
    }

    useEffect(() => {
        getdata()
      
    }, []) //func will called when page gets rendered once
    

  return (
    <div>
      <h1>chat page hai ye</h1>
      {/* {data.map((ele)=>{
        return <h2>{}</h2>
      })} */}
      {data.map(ele => <h2>{ele.name}</h2>)}
    </div>
  )
}

export default Chatpage

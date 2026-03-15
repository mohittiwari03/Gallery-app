  import React, { useEffect, useState } from 'react'
  import axios from"axios"
  
  const App = () => {

    const [userData, setUserData] = useState([])

    const getData = async() =>{
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=20");
      setUserData(response.data)
    }

    useEffect(function() {
      getData()
    }, [])
    

    let printUserData = "no user Available"

    if (userData.length>0) {
      printUserData = userData.map(function(e, i){
        return(
          <a href={e.url} target='_blank'>
            <div className='w-40'>
              <div className=' h-40 w-full bg-white overflow-hidden rounded-xl  '>
                <img className=' h-full w-full  object-cover ' 
                key={i} src={e.download_url} alt="" />
              </div>
              <h4 className='font-normal text-xl'>
              {e.author}
              </h4>
            </div>
          </a>
        )
      })
    }


    return (
      <div className='bg-gray-800 overflow-hidden h-screen p-4 text-white'>
        <div className='flex  flex-wrap gap-4 m-5 rounded-xl '>{printUserData}</div>
      </div>
    )
  }
  
  export default App
import React, { useState } from 'react'

const Funstate=()=>{
    const [name,setname]=useState("Reshmi")
    const [obj,setobj]=useState({age:20})
    const [arrofobj,setarrofobj]=useState([
        {id:1,name:"Pree",count:0},
        {id:2,name:"vijitha",count:0},
        {id:3,name:"kavitha",count:0},
        {id:4,name:"ganga",count:0}
    ])
    const changename=()=>{
        setname("Preetha")
    }
    const changeage=()=>{
        setobj({...obj,age:25})
    }
    const change=(val)=>{

        let x=arrofobj.map((e)=>{
            return e.id===val?{...e,count:e.count+1}:e
        })

        setarrofobj(x)

    }
    return(

        <div>
            <p>1.update name using state</p>
            <h4>Name : {name}</h4>
            <button onClick={changename}>Change Name</button>
            <p>2.update object using state</p>
            <h4>age : {obj.age}</h4>
            <button onClick={changeage}>change age</button>
            <p>3.Update array of object using state</p>
            {
                arrofobj.map((e,i)=>{
                    return(
                        <div key={i}>
                        <h4>{e.id}){e.name}</h4>
                        <h4>{e.count}</h4>
                        <button onClick={()=>change(e.id)}>Addition</button>
                        </div>
                    )
                })
            }
        </div>
       
    )
}

export default Funstate
import { useState } from "react"

export function Counter (){
    const [count, setCount]= useState(0)
    return(
        <>
            <h2>We set a counter</h2>
            <p>Current count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Next</button>
            <button onClick={()=> setCount(count > 0 ? count -1: count)}>Prev</button>
        </>
       
    )
}
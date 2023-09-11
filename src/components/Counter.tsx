'use client'

import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)
    console.log('1')
    return <>
        <p>Count: {counter}</p>
        <button onClick={() => setCounter(counter + 2)}>On click</button>
    </>
}
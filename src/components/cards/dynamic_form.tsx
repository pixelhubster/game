"use client"
import React, { useState } from 'react'

const DynamicForm = ({children, config}: {
    children: React.ReactNode | React.ReactNode[],
    config: {
        btn: String[],
        fn: Function[],
    }
}) => {
    const [index, setIndex] = useState(0);
    function click() {
        config.fn[index]();
        
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default DynamicForm
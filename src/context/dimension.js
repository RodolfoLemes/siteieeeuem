import React, { createContext, useState, useEffect } from 'react'

const DimensionContext = createContext({ width: window.innerWidth, height: window.innerHeight })

export const DimensionProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerHeight)
    const [height, setHeight] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth)
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return (
        <DimensionContext.Provider value={{ width, height }}>
            { children }
        </DimensionContext.Provider>
    )
}

export default DimensionContext
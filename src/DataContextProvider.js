import React, { createContext } from 'react';

export const DataContext = createContext()

export const DataContextProvider = (props) => {
    const { children } = props
    const [ListData, setData] = React.useState([])
    return (
        <DataContext.Provider value={{ ListData, setData }}>
            {children}
        </DataContext.Provider>
    )
}

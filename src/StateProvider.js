import React,{useContext , createContext ,useReducer} from 'react'

export const MyContext = createContext();

export const StateProvider =({intialState , reducer , children})=>(
    <MyContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </MyContext.Provider>
)
export const useStateProviderValue = () => React.useContext(MyContext)
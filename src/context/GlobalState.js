import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
// intial state

const intialState={
    transactions:[]
}
//  Create context
export const GlobalContext=createContext(intialState);



// Provider Components
 export const GlobalProvider=({children})=>{
     const [state,dispatch]=useReducer(AppReducer,intialState);

     // Actions
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id
        })
    }

     function addTransaction(transaction) {
         dispatch({
             type: 'Add_Transaction',
             payload:transaction
         })
     }

     return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
     }}>
         {children}
     </GlobalContext.Provider>)
 }
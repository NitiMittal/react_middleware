const initialState={
    age:21,
    loading:false
}

const reducer=(state=initialState,action)=>{
const newState={...state};

switch(action.type){
  

    case "AGE_UP":
        return{
           ...state,
           age:state.age+action.value,
           loading:false
           
        };
        break;
        case "AGE_DOWN":
            return{
                ...state,
                age:state.age-action.value,
                
               
             };
             break; 
        
        case "LOADING":
            return{
                ...state,
                loading:true
            }
             
   
}
return newState;
};

export default reducer 
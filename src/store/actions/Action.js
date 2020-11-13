export const loading=()=>{
    return{
type:"LOADING"
    }
}
export const onAgeUPAsync=(val)=>{
    return {type:"AGE_UP", value:val}
};

export const onAgeUP=val=>{
    return dispatch=>{
        dispatch(loading())
        setTimeout(()=>{
            dispatch(onAgeUPAsync(val));
        },3000)
    }
}
export const onAgeDown=(val)=>{
    return {type:"AGE_DOWN", value:val}
}

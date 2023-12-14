import {mount} from 'marketing/MarketingIndex';
import React, {useRef, useEffect} from 'react';

export default ()=>{
    const ref = useRef(null) // set state but does not trigger rerender

    useEffect(()=>{
        mount(ref.current);
        console.log(ref.current, '------------')
    },[])
    return <div ref = {ref}/>
}
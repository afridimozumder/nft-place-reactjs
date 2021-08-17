  
import {useState, useEffect } from "react";

export const useFetch = (url, callback)=>{

    const getData = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    useEffect(()=>{
       const getJsonData = async ()=> await getData();
       getJsonData().then(data=>callback(data));
    }, []);
}
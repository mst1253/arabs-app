import Posts from "./sections/posts";
import TypeSection from "./sections/typeSection";
import {useState,createContext,useEffect} from 'react'
import { db } from "./sections/typeSection";
import { getDocs } from "firebase/firestore";
import './tourist.css'
export const States=createContext(null)
function toursitHelp() {
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNum,setPhoneNum]=useState(null);
    const [title,setTitle]=useState('');
    const [skills,setSkills]=useState('');
    const [country,setCountry]=useState('');
    const [city,setCity]=useState('');
    const [image,setImage]=useState(null);
  
    const [data,setData]=useState([]) 
    const getData=async()=>{
      try{
       const usersData=await getDocs(db)
       const info=usersData.docs.map(items=>({...items.data(),id:items.id}))
       setData(info)
      }catch(err){
         alert(err.code)
      }
  }
   useEffect(()=>{  
      getData();
},[])
    return (
      <div className="container-fluid all">
        <States.Provider 
        value={{fullName,setFullName,
          email,setEmail,
          phoneNum,setPhoneNum,
          title,setTitle,
          skills,setSkills,
          country,setCountry,
          city,setCity,
          data,getData,
          image,setImage
        }}
          >
          <TypeSection />
            <Posts />
        </States.Provider>
      </div>
    );
}

export default toursitHelp;
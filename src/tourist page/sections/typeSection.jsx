import {useState,useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { States } from "../toursitHelp";
import { addDoc,collection} from "firebase/firestore";
import { usersDb } from "../config/firebase";
import ImageAccount from './imageAcount';
export const db=collection(usersDb,'app')
function typeSection() {
  const {t}=useTranslation()
  const {setFullName,setCity,setCountry,setEmail,setPhoneNum,setSkills,setTitle,
    fullName,city,country,email,title,phoneNum,skills,getData,image,setImage}=useContext(States)
    const [length,setLength]=useState(0)
 const addDataToDb=async(e)=>{
  e.preventDefault();
   try{
     if(fullName && city && country && email && title && skills.length===160){
      await addDoc(db,{
       city:city,
       country:country,
       email:email,
       fullName:fullName,
       phoneNum:phoneNum,
       skills:skills,
       title:title,
       user_image:image,
     });
     getData()
    }
   }catch(err){
     console.error(err)
   }
  }
     const shortDesc=(e)=>{
      let dataText=e.split('');
       if(dataText.length<161){
        setSkills(e)
        setLength(dataText.length)
       }
     }
    return (
        <>
          <dialog id='dialog'>
            <form className="row g-3 text-white">
              <div className="col-12 close">
                <i className="btn text-white fs-3 fa-solid fa-circle-xmark" onClick={()=>dialog.close()}></i>
              </div>
              <div className="col-12 addImage p-4">
              <ImageAccount image={image} setImage={setImage} />
              </div>
              <div className="col-md-6">
                <label for="inputAddress" className="form-label">{t('inp1')}</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="enter your firstName/lastName" required onChange={(e)=>setFullName(e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label for="inputAddress" className="form-label">{t('inp2')}</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="what do you know about your city?culture/economie/history..." requird onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              <div className="col-12">
                <label className='p-2'>{t('inp3')}</label>
                <textarea className="form-control" placeholder="tell us about yourself that's will add advantage to your service" id="floatingTextarea" required onChange={(e)=>shortDesc(e.target.value)}></textarea>
                <label className={skills.length>159?'p-2 text-danger length':'p-2 text-white length'}>{length}/160</label>
             </div>
              <div className="col-md-6">
                <label for="floatingInputInvalid" className="form-label">{t('inp4')}</label>
                <input type="email" className="form-control" id="floatingInputInvalid" placeholder="enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">{t('inp5')}</label>
                <input type="number" className="form-control"  placeholder="enter your phone number" onChange={(e)=>setPhoneNum(Number(e.target.value))}/>
              </div>
             <div className="col-md-6">
                <label for="inputAddress" className="form-label">{t('inp6')}</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="enter your country's name"required onChange={(e)=>setCountry(e.target.value)}/>
             </div>
             <div className="col-md-6">
                <label for="inputAddress" className="form-label">{t('inp7')}</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="enter your city's name"required onChange={(e)=>setCity(e.target.value)}/>
             </div>
            
             <div className="col-12">
               <button className="btn btn-danger w-100" onClick={addDataToDb}>{t('btn4')}</button>
             </div>
       </form>
     </dialog>
             <div className="container w-50">
              <h3 className="fs-1 p-4 border border-light bg-light text-dark addCards" onClick={()=>dialog.showModal()}>+</h3>
             </div>
   </>
    );
}

export default typeSection;

import { useTranslation } from 'react-i18next';
import Typewriter from '../sections/typeWriterInputs'
//import {politicsInput,cultureInput,religionInput,sienceInput} from '../sections/inputs';
export default function ArabsInfo(){
   const {t}=useTranslation();
    return(
     <div className="container w-75 overflow-hidden text-center text-light  p-4 bg-dark">
       <h1 className='sub-titles'>{t('arabsSpec')}</h1>
        <div className="about_arabs">
        <div className="arabs-card">
        <div className="left_side bg-primary"></div>
        <div className="right_side">
           <h2>{t('h3')}</h2>
            <Typewriter
             words={t('inCulture',{returnObjects:true})}
            />
        </div>
     </div>
     <div className="arabs-card">
     <div className="left_side bg-primary"></div>
        <div className="right_side">
        <h2>{t('h2')}</h2>
          <Typewriter
             words={t('inRelegion',{returnObjects:true})}
            />
        </div>
     </div>
     <div className="arabs-card">
     <div className="left_side bg-primary"></div>
        <div className="right_side">
         <h2>{t('h4')}</h2>
          <Typewriter words={t('inPolit',{returnObjects:true})} />
        </div>
     </div>
     <div className="arabs-card">
     <div className="left_side bg-primary"></div>
        <div className="right_side">
        <h2>{t('h1')}</h2>
           <Typewriter
             words={t('inSience',{returnObjects:true})}
            />
        </div>
     </div>
     </div>
     </div>
    )
}

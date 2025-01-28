

import {useTranslation} from 'react-i18next';
import {Element} from 'react-scroll';
export default function Info(){
  const {t}=useTranslation()
    return(
      <Element name='aboutUs'  className='container text-dark'>
        <h1 className='p-4 sub-titles'>{t('aboutUs')}</h1>
        <div className="container">
           <div className="row p-4">
            <div className="col">
            <i className="fa-solid fa-circle-info p-3 text-danger"></i>
           <p>{t('p3')}</p>
              </div>
            <div className="col">
            <i class="fa-solid fa-location-dot p-3 text-danger"></i>
         <p>{t('p2')}</p>
            </div>
            <div className="col">
            <i class="fa-solid fa-hand p-3 text-danger"></i>
            <p>{t('p1')}</p>
            </div>
           </div>
        </div>
   </Element>
    )
}
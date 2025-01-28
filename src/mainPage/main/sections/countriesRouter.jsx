import {useTranslation} from 'react-i18next'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import {Element} from 'react-scroll'
import animation from '../../assets/animation/Animation - 1711550837499.json'
export default function CountriesRouter(){
    const {t}=useTranslation()
   return(
        <Element name="countries" className='container countries_router'>
           <Lottie animationData={animation} style={{width:'200px'}} />
           <div className="router">
                <p>{t('p5')}</p>
                <Link to='/countries'><button className='btn btn bg-danger w-100 text-white rounded-pill p-2' onClick={()=>setTimeout(()=>alert('the englich translation will be added soon for this page😊'),2000)}>{t('btn3')}</button>
                </Link>
            </div>
          </Element>
    )
}


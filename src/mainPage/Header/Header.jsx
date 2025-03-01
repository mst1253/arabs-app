import {useState} from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { auth } from '../../tourist page/config/firebase';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
export default function Header(){
  const { t, i18n } = useTranslation();
  const [bg,setBg]=useState('url(../../../public/assets/4.avif) no-repeat center/cover');
    switch (bg) {
    case 'img1':
      return setBg(prev=>prev='url(../../../public/assets/1.webp) no-repeat center/cover')
    case 'img2':
      return setBg(prev=>prev='url(../../../public/assets/2.webp) no-repeat center/cover');
    case 'img3':
      return setBg(prev=>prev='url(../../../public/assets/3.webp) no-repeat center/cover')
    default:
      break;
   }
  
   
    return(
        <section className="hero d-flex flex-column align-items-center justify-content-center" 
        style={{background:bg}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand  p-4 mx-lg-2" href="/">
              <img src="https://img.logoipsum.com/296.svg" className='w-50' alt="logo" />
               </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">{t('home')}</a>
                <ScrollLink to="aboutUs" smooth={true} duration={500}><a className="nav-link" style={{cursor:'pointer'}}>{t('about')}</a></ScrollLink>
                <div class="dropdown">
                <i className="fa-solid fa-earth-africa dropdown-toggle text-secondary my-2 px-4" data-bs-toggle="dropdown"></i>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" onClick={()=>i18n.changeLanguage('en')}>English</a></li>
                 <li className='dropdown-item' onClick={()=>i18n.changeLanguage('ar')}>العربية</li>
               </ul>
           </div>
                <RouterLink to='/sign up'><div className="btn btn-danger rounded-pill">{t('btn1')}</div></RouterLink>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-content mt-5 text-center text-white" style={{zIndex:1}}>
          <h1 className="display-8 mb-4">{t('welcom')}</h1>
          <p className="lead" style={{zIndex:1}}>{t('opening')}</p>
          <ScrollLink to="countries" smooth={true} duration={500}><button className="btn btn-primary rounded-pill">{t('btn2')}+</button>
           </ScrollLink>
        </div>
        <div className="cards">
            <div className="card bg-card" 
            style={{background:'url(../../../public/assets/1.webp) no-repeat center/cover'}}
            onClick={()=>setBg('img1')}>
            </div>
            <div className="card bg-card" 
            style={{background:'url(../../../public/assets/2.webp) no-repeat center/cover'}}
            onClick={()=>setBg('img2')}>
            </div>
            <div className="card bg-card" 
            style={{background:'url(../../../public/assets/3.webp) no-repeat center/cover'}}
            onClick={()=>setBg('img3')}>
            </div>
          </div>
        </section>
    )
}
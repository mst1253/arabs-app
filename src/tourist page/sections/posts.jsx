import { useTranslation } from 'react-i18next';
import { States } from '../toursitHelp';
import { useContext} from 'react';
 export const conicBg='conic-gradient(white 0 90deg,black 90deg 180deg,rgb(124, 9, 24) 180deg 270deg,black 270deg 360deg)'
function posts() {
  const {t}=useTranslation()
   const {data}=useContext(States)
    return (
       <div className="container  p-4 posts">
        {data.map(item=>
          <div className="card">
           <div className="container-fluid  p-2  bg_gradient"> 
           <div className="user_image" style={{background:item.user_image!=null?`url(${item.user_image}) no-repeat center/cover`:conicBg}}></div>
          </div>
          <div className="card-body">
            <h4 className="card-title">{item.fullName}</h4>
            <h5>{item.title}</h5>
            <p className="card-text">
              {item.skills}
            </p>
            <div className="container country">
              <h6>{item.country}</h6>
              <h6>{item.city}</h6>
            </div>
            <div class="dropdown">
                <button class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
               {t('btn5')}
               </button>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item">{item.email}</a></li>
                 <li className='dropdown-item'>{item.phoneNum}</li>
               </ul>
           </div>
          </div>
        </div>
        )}
      </div>
    );
 }
 export default posts;
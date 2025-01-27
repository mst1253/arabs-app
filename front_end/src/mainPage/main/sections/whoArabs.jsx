
import { useTranslation } from 'react-i18next';
export default function WhoArabs(){
  const {t}=useTranslation();
return(
        <div className="container">
            <h1 className='sub-titles'>{t('whoAreArabs')}</h1>
            <div className="container text-center bg-dark p-4">
              <p className='text-white w-70'>{t('p4')}</p>
            </div>
        </div>
    )
}
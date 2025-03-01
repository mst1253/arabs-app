import { useTranslation } from 'react-i18next';
export default function ArabsAcheivement(){
    const {t} = useTranslation();
    return(
          <div className="container arabSientist p-4 text-white">
         <div className="card bg-dark">
            <img src="/../../../public/assets/th.jpg" alt="الخوارزمي" />
                 <div className="card-body">
                 <h3 className="card-title text-primary p-2">{t(`sNameAl.${0}`)}</h3>
                  <p className="card-text">{t(`sBioAl.${2}`)}</p>
                  <div className="info_about">
                    <span>{t(`exp.${3}`)}</span>
                    <span>{t(`exp.${4}`)}</span>
                    <span>{t(`exp.${5}`)}</span>
                  </div>
              </div>
        </div>
        <div className="card bg-dark">
        <img src="/../../../public/assets/7.jpg" alt="جابر بن حيان" />
            <div className="card-body">
            <h3 className='card-title  text-primary p-2'>{t(`sNameAl.${1}`)}</h3>
            <p className="card-text">{t(`sBioAl.${1}`)}</p>
            <div className="info_about">
            <span>{t(`exp.${0}`)}</span>
            <span>{t(`exp.${1}`)}</span>
            <span>{t(`exp.${2}`)}</span>
            </div>
            </div>
        </div>
        <div className="card bg-dark">
        <img src="/../../../public/assets/6.jpg" alt="عباس بن فرناس" />
            <div className="card-body">
               <h3 className='card-title text-primary p-2'>{t(`sNameAl.${2}`)}</h3>
               <p className="card-text">{t(`sBioAl.${0}`)}</p>
            <div className="info_about">
                <span>{t(`exp.${3}`)}</span>
                <span>{t(`exp.${4}`)}</span>
                <span>{t(`exp.${6}`)}</span>
            </div>
            </div>
        </div>
       </div>
    )
}
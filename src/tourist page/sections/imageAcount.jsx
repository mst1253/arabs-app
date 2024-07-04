import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { conicBg } from './posts';
import {storage} from '../config/firebase';
import { ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import { v4 } from 'uuid';
import '../tourist.css'
const imageAccount =({image,setImage}) => {
    const [bg,setBg]=useState(null)
    const {t}=useTranslation()
    const handleFileChanges=(e)=>{
        let file=e.target.files[0];
        if(file){
            let fileUrl=URL.createObjectURL(file)
             let image=ref(storage,`images/${file.name+v4()}`)
             setBg(fileUrl)
             uploadBytes(image,file).then((snap)=>{
                getDownloadURL(snap.ref).then((url)=>{
                  setImage(url)
                })
             })
        }
    }
    return (
        <>
        <label for="addImage" class="user_image" style={{background:bg!=null?`url(${bg}) no-repeat center/cover`:conicBg}}></label>
        <h6 className='text-white my-4'>{t('image')}</h6>
        <input type="file" style={{display:'none'}} id='addImage' onChange={e=>handleFileChanges(e)}/>
        </>
    );
};

export default imageAccount;
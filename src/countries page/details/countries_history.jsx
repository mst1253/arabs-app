import {useQuery} from '@tanstack/react-query';
import { useState } from 'react';
export default function Countries_History(){
    const [desc,setDesk]=useState('');
    const [ancientH,setAncientH]=useState('');
    const [middleAges,setMiddleAges]=useState('');
    const [modernA,setModernA]=useState('');
    const {data}=useQuery({
        queryKey:['countrie_data'],
        queryFn:()=>fetch('https://back-end-production-e1b0.up.railway.app/arabsApi').then(res=>res.json())
    })
    const addData=(s1,s2,s3,s4)=>{
        setDesk(s1); 
        setAncientH(s2);
        setMiddleAges(s3);
        setModernA(s4);
    }
    return(
    <>
    <div className="info_about">
       <h5>{ancientH}</h5>
       <h5>{desc}</h5>
       <h5>{middleAges}</h5>
       <h5>{modernA}</h5>
        </div> 
       <div className="container countries-buttons py-4">
       {data?.map(text=> 
          <h6 className='text-light p-2 bg-primary rounded-pill' 
          onClick={()=>addData(
            text.description,text.history.ancientHistory,
            text.history.middleAgesAndIslamicEra,
            text.history.modernAndContemporaryEra
        )}>{text.name}</h6>
         )
         }
      </div>
     </>
    )
}
import Info_section from '../main/sections/info_section'
import ArabsInfo_section from '../main/sections/arabsInfo_section'
//import ArabsAges from '../main/sections/arabage'
import WhoArabs from '../main/sections/whoArabs'
import ArabsAcheivement from '../main/sections/arabsAcheivement'
import CountriesRounter from '../main/sections/countriesRouter'
import './main.css'

export default  function Main(){
   return(
   <div className="all_sections">
      <Info_section />
      <WhoArabs />
      <ArabsInfo_section />
      <ArabsAcheivement />
      <CountriesRounter />
   </div> 
   )
}


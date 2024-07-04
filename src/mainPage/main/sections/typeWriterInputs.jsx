
import { useTypewriter } from "react-simple-typewriter";

export default function typewriter({words}){
    const [text]=useTypewriter({
        words:words,
        loop:{},
        delaySpeed:5000
    })
    return(
        <p>{text}</p>
    )
}
import {useState} from 'react';
import { auth,googleAuth} from '../../tourist page/config/firebase';
import { createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth';
import {Link,useNavigate} from 'react-router-dom';
import './sign.css'
function sign() {
  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
   const navigate=useNavigate();
   const [sign,setSign]=useState('signIn');
   const isEmail=auth?.currentUser?.email;
   const SignUp=async()=>{
    try {
     let res=await createUserWithEmailAndPassword(auth,email,password);
     return res
     } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':alert('this email is already been used try another one');
        break;
        case password.length<8&&'auth/weak-password':alert('your password is weak try harder password with at least 6 characters');
        break;
        case !email&&'auth/invalid-email':alert("you can't leave the fields empty?");
        break;
      }
     }
    }
    const SignIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        console.log(password);
        
        if (user && user.email) {
          navigate('/touristHelp');
        }
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          console.log(error.code);
          alert("Incorrect password. Verification failed.");
        } else if (error.code === 'auth/user-not-found') {
          alert("No account found with this email.");
        } else {
          alert("No account found with this email. Try creating your account.");
          setSign('signUp');
        }
      }
    };
    
  const signwithGoogle=async()=>{
    try{
    let res=await signInWithPopup(auth,googleAuth);
    navigate('/touristHelp');
    return res;
    }catch(err){
     alert(err.code)
    }
  }
  
    return (
      <div className="container sign">
      <form className="text-dark form border border-dark">
             <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" 
             aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
             </div>
             <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
             onChange={(e)=>setPass(e.target.value)} required />
             </div>
             <div className="loginBtns">
              {sign=='signIn'?
             <Link>
              <button className="btn btn-danger rounded-pill" onClick={SignIn}>sign in</button></Link>
              :sign=='signUp'&&
              <Link to={email!=isEmail&&password.length>=6&&'/touristHelp'}>
              <button className="btn btn-danger rounded-pill" onClick={SignUp}>sign up</button>
              </Link>
              }
              <Link to='/'><button className='btn btn-primary rounded-pill'>home</button></Link>
             </div>
             <div className="signUpIcons">
             <i className="fa-brands fa-google text-danger icon" onClick={signwithGoogle}></i>
             </div>
         </form>
      </div>
    )
}
export default sign;
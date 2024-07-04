import {useState} from 'react';
import { auth,googleAuth} from '../../tourist page/config/firebase';
import { createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import {Link,useNavigate} from 'react-router-dom';
import './sign.css'
function sign() {
  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
   let isEmail=auth?.currentUser?.email;
   let isPass=password.split('').map((e,inx)=>inx).pop()+1;
   console.log(isEmail)
   const navigate=useNavigate();
  const SignIn=async()=>{
  try {
   let res=await createUserWithEmailAndPassword(auth,email,password);
   return res
   } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':alert('this email is already been used try another one');
      break;
      case 'auth/weak-password':alert('your password is weak try harder password with at least 6 characters');
      break;
      case 'auth/invalid-email':alert("you can't leave the fields empty?");
      break;
    }
   }
  }
  const signwithGoogle=async()=>{
    try{
    let res=await signInWithPopup(auth,googleAuth);
    navigate('/touristHelp');
    return res;
    }catch(err){
     alert(err.code)
    }
  }
  /*const logout=async()=>{
   await signOut(auth)
  }*/
    return (
    <body  className="body">
      <div className="sign">
      <form className="text-dark form">
             <div className="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
             </div>
             <div className="form-group">
             <label for="exampleInputPassword1">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPass(e.target.value)} required />
             </div>
             <div className="loginBtns">
              <Link to={email&&password&&email!=isEmail&&isPass>5?'/touristHelp':'/sign up'}><button className="btn btn-danger rounded-pill" onClick={SignIn}>sign in</button></Link>
              <Link to='/'><button className='btn btn-primary rounded-pill'>home</button></Link>
             </div>
             <div className="signUpIcons">
             <i className="fa-brands fa-google text-danger icon" onClick={signwithGoogle}></i>
             </div>
         </form>
      </div>
    </body>
    )
}
//'''
//email

export default sign;
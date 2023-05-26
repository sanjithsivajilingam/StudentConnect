import React, {useState} from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db} from "../firebase";
import {doc, setDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import {Link } from "react-router-dom";
import './register.css'

export default function Register() {

    const [err,setErr] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(displayName);
            const uploadTask = uploadBytesResumable(storageRef);
        
        
            uploadTask.on('state_changed', () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async() => {
                    try {
                        await updateProfile(res.user,{
                            displayName
                        });
                        await setDoc(doc(db, "users", res.user.uid),{
                            uid: res.user.uid,
                            displayName,
                            email
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        
                        navigate("/")

                    } catch(err){
                        console.log(err);
                        setErr(true);
                    }
                    
                });
                
            });

        }catch(err){
            setErr(true)
        }
    
  
    

    
    };


    return (
      <div className='register-container'>
        <h1>Register</h1>
        <form onSubmit = {handleSubmit}> 
            <input  required type = "text" placeholder="display name" />
            <input required type = "email" placeholder="email" />
            <input required type = "password" placeholder="password" />
            <div className="padding2"><button>Sign up</button></div>
            {err && <span> Please login now</span>}
            <p>Link to Points:<Link to="/login">Login </Link></p>
        </form>
      </div>
    );



}
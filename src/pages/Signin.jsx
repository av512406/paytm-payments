import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signin = ({isLoggedIn , setIsLoggedIn}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSignin = async () => {
    
    if(username.length == 0 || password.length == 0){
      toast.error("Please enter username and password ")
    }
    else {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/signin",
          {
            username,
            password,
          }
        );
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("login successful");
        toast.success("Login successful")  
        setIsLoggedIn(true)
        navigate("/dashboard")
      } catch (error) {
        toast.error("Invalid Credentials")  
      }
    } 
  }

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => setUsername(e.target.value)} placeholder="paytm@gmail.com" label={"Email"} />
        <InputBox  onChange={e => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={handleSignin} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
                />
      </div>
    </div>
  </div>
}
import InputField from "./InputField";
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
      
    const [inputText, setInputText] = useState({username:"",password:""});
    const handleChange = (e) => {
        setInputText({...inputText, [e.target.name]: e.target.value})
      };
      const onSubmitFormRequest = (e)=> {
        e.preventDefault()
           axios.post("http://localhost:8080/authenticate",
           {
                ...inputText
           },headers).then((response) => {
            console.log(response.data)
            localStorage.setItem("jwtToken",response.data.jwtToken)
           }).catch((error)=>{
            console.log(error)
           })
           setInputText({username:"",password:""})
      }
      // const config = {
      //   headers:{
      //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSYW1lc2giLCJleHAiOjE2OTI0NzQwODEsImlhdCI6MTY5MjQ1NjA4MX0.bxT7odCSM_rLgMO-hiaJg8CgkeCajI-AcdGPgmsLtSeK6CKXA-a3OIQ6yfpScC98obMZ9lpGgUm4F86E4qAceA',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // };
    return (
      // <input type="submit" onClick={() => {
      //   axios.get('http://localhost:8080/verify',config).then((res) => {
      //     console.log(res)
      //   }).catch((err) => {
      //     console.log(err)
      //   })
      // }}/>
        <div>
        <form onSubmit={onSubmitFormRequest}>
        <InputField type="text" placeholder="Name" name="username" onChange={handleChange} value={inputText.username}/>
        <InputField type="password" placeholder="Password" name="password" onChange={handleChange} value={inputText.password}/>
        <input type="submit" />
        </form>
        </div>
    );
}
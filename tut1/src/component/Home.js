import axios from "axios"
import InputField from "./InputField";
import { useState } from "react"

const Home = () => {
    const [companyDetail,setCompanyDetail] = useState({companyName:"",technicalRequirement:"",experience:"",packageOffered:""})
    const handleChange = (e) => {
        setCompanyDetail({...companyDetail, [e.target.name]: e.target.value})
        console.log(companyDetail)
      };
    // useEffect(()=> {
    //     axios.get("http://localhost:8080/company/showAllCompanies",{headers:{
    //         'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
    //     }}).then((res)=> {
    //         console.log(res)
    //         setAllCompanies(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // },[])
    const saveCompanyName = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/company/addCompanyProfile",companyDetail,{headers:{
            'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
        }})
    }
    return (
        <div>
            <form onSubmit={saveCompanyName}>
            <InputField type="text" name="companyName" placeholder="Company Name"  onChange={handleChange} value={companyDetail.companyName}/>
            <InputField type="text" name="technicalRequirement" placeholder="Technical Requirement"  onChange={handleChange} value={companyDetail.technicalRequirement}/>
            <InputField type="text" name="experience" placeholder="Experience"  onChange={handleChange} value={companyDetail.experience}/>
            <InputField type="text" name="packageOffered" placeholder="Package Offered"  onChange={handleChange} value={companyDetail.packageOffered}/>
            <input type="submit" />
            </form>
        </div>
    )
}

export default Home
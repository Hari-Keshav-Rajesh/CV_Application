import { useState } from "react"
import "./Personal.css" 

const Personal = (props) => {

    const [name,setName] = useState("")
    const [age,setAge] = useState()
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState()

    const formSubmit = (event) => {
        event.preventDefault()
        if(name&&age&&number&&email){
            props.setPersonal(...props.personal,{name:name,age:age,number:number,email:email})
        }
        else{
            alert("Please fill personal details")
        }
    }

    return(
        <form className="personalForm"
        onSubmit={formSubmit}>

            <input className="Name"
            type="text"
            placeholder="Enter your Name"
            value = {name}
            onChange={(event) => setName(event.target.value)}>
            </input>

            <input className="Age"
            type="number"
            placeholder="Enter your Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}>
            </input>

            <input className="Number"
            type="number"
            placeholder="Enter your Phone No."
            value={number}
            onChange={(event) => setNumber(event.target.value)}>
            </input>

            <input className="Email"
            type="email"
            placeholder="Enter your email-id"
            value={email}
            onChange={(event) => setEmail(event.target.value)}>
            </input>

            <button className="personalSubmit"
            onClick={formSubmit}>
                Save
            </button>

        </form>
    )
}

export default Personal
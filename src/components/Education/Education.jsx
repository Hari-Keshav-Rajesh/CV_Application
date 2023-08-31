import { useState } from "react"
import { v4 } from "uuid"
import "./Education.css"

const Education = (props) => {

    const [degree,setDegree] = useState("")
    const [university,setUniversity] = useState("")
    const [start,setStart] = useState("")
    const [end,setEnd] =  useState("")

    const formSubmit = (event) => {
        event.preventDefault();
        
        if (degree && university && start && end) {
            props.setEducationList([
                ...props.educationList,
                { degree: degree, university: university, start: start, end: end }
            ]);
        } else {
            alert("Please fill Education details");
        }
    }

    const formDelete = (id) => {
        const updatedList = props.education.filter(
          (education) => education.id !== id
        );
        props.setEducation(updatedList);
      };

    
  const formAdd = (event) => {
    event.preventDefault()
    props.setEducation([...props.education,{id: v4()}]);
  };

    return(
        <div className="EduForm">
            {props.education.map((education,index) => {
                return(
                    
                    <form className="educationForm" key={education.id}>

                        <div className="educationSubHeader">Education#{index+1}</div>

                        <input className="degree"
                        type="text"
                        placeholder="Degree"
                        value = {degree}
                        onChange={(event) => setDegree(event.target.value)}>
                        </input>

                        <input className="university"
                        type="text"
                        placeholder="University"
                        value = {university}
                        onChange={(event) => setUniversity(event.target.value)}>
                        </input>

                        <input className="start"
                        type="text"
                        placeholder="Start Year"
                        value = {start}
                        onChange={(event) => setStart(event.target.value)}>
                        </input>

                        <input className="end"
                        type="text"
                        placeholder="End Year"
                        value = {end}
                        onChange={(event) => setEnd(event.target.value)}>
                        </input>

                        <button className="educationDelete"
                        onClick={() => formDelete(education.id,index)}>
                        Delete
                        </button>

                        <button className="educationSubmit"
                        onClick={formSubmit}
                        type="submit">
                        Save
                        </button>

                        <button className="educationAdd"
                        onClick={formAdd}>
                        Add
                        </button>

                    </form>
                )
            })}
        </div>
    )
}

export default Education
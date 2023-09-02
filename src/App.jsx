import { useState } from 'react'
import { v4 } from 'uuid'
import Personal from './components/Personal/Personal'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import './App.css'
import Header from './components/CV/Header/Header'

const App = () => {
    const [personal, setPersonal] = useState({name:"Example",age:25,number:919191919191,email:"example@gmail.com"})
    const personalProps = { personal, setPersonal }

    const [education, setEducation] = useState([{ id: v4() }])
    const [educationList, setEducationList] = useState([])
    const educationProps = {
        education,
        setEducation,
        educationList,
        setEducationList,
    }

    const [work, setWork] = useState([{ id: v4() }])
    const [workList, setWorkList] = useState([])
    const workProps = { 
        work, 
        setWork, 
        workList, 
        setWorkList,
    }

    return (
        <>
            <h1 className="header">
                <strong>CV-Generator</strong>
            </h1>
            <div className="main">
                <div className="form">
                    <div className="PersonalForm">
                        <h3 className="personalHeader">Personal Information</h3>
                        <Personal {...personalProps} />
                    </div>

                    <div className="EducationForm">
                        <h3 className="educationHeader">
                            Education Information
                        </h3>
                        <Education {...educationProps} />
                    </div>

                    <div className="WorkForm">
                        <h3 className="workHeader">Work Information</h3>
                        <Work {...workProps} />
                    </div>
                </div>

                <div className="CV">
                    <Header {...personalProps}></Header>
                </div>
            </div>
        </>
    )
}

export default App

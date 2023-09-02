import { useState } from 'react'
import { v4 } from 'uuid'
import Personal from './components/Personal/Personal'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import './App.css'
import Header from './components/CV/Header/Header'
import CVeducation from './components/CV/Content/CVeducation'
import CVwork from './components/CV/Content/CVwork'

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
    const educationListProps = {
        educationList,
    }

    const [work, setWork] = useState([{ id: v4() }])
    const [workList, setWorkList] = useState([])
    const workProps = { 
        work, 
        setWork, 
        workList, 
        setWorkList,
    }
    const workListProps = {
        workList,
    }

    return (
        <>
            <h1 className="header">
                <strong>Build your CV</strong>
            </h1>
            <div className="main">
                <div className="form">
                    <div className="PersonalForm">
                        <h3 className="personalHeader">Personal Information</h3>
                        <Personal {...personalProps} />
                    </div>
            
                    <div className='dualForm'>
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

                </div>

                <div className="CV">
                    <Header {...personalProps}/>
                    <CVeducation {...educationListProps}/>
                    <CVwork {...workListProps}/>
                </div>
            </div>
        </>
    )
}

export default App

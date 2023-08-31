import { useState } from 'react'
import { v4 } from 'uuid'
import Personal from "./components/Personal/Personal"
import Education from './components/Education/Education'
import './App.css'

const App = () => {

    const [personal,setPersonal] = useState([])
    const personalProps = {personal,setPersonal}

    const [education,setEducation] = useState([{id:v4()}])
    const [educationList,setEducationList] = useState([])
    const educationProps = {education,setEducation,educationList,setEducationList}

    return (
    <>
        <h1 className="header">
            <strong>CV-Generator</strong>
        </h1>
        <div className='main'>

            <div className='form'>

                <div className='PersonalForm'>
                    <h3 className='personalHeader'>Personal Information</h3>
                    <Personal {...personalProps}/>
                </div>

                <div className='EducationForm'>
                    <h3 className='educationHeader'>Education Information</h3>
                    <Education {...educationProps}/>
                </div>

            </div>


            <div className='CV'>

            </div>

            
        </div>
    </>
    )
}

export default App

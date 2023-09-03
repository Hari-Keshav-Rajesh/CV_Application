import { useState } from 'react'
import { v4 } from 'uuid'
import Personal from './components/Personal/Personal'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import './App.css'
import Header from './components/CV/Header/Header'
import CVeducation from './components/CV/Content/CVeducation'
import CVwork from './components/CV/Content/CVwork'
import Color from './components/Dropdown/Color'

const App = () => {
    const [personal, setPersonal] = useState({name:"Example",age:25,number:919191919191,email:"example@gmail.com"})
    const [color, setColor] = useState('blue');
    const colorProps = {
        color,
        setColor
    }
    const personalProps = { personal, setPersonal, color}

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
        color,
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
        color,
    }

    const borderCV = () => {
        if(color==="blue"){
            return{
                borderColor: 'rgb(192,192,192)',
            }
        }
        else if(color==="white"){
            return{
                borderColor: 'black',
            }
        }
        else if(color==="green"){
            return{
                borderColor: 'beige',
            }
        }
        else{
            return{
                borderColor: 'gold',
            }
        }
    }


    return (
        <>
            <h1 className="header">
                <strong>Build your CV</strong>
            </h1>
            <div className="main">
                <div className="form">

                    <div className='dropdown'>
                        <Color {...colorProps} />
                    </div>

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

                <div className="CV" style={borderCV()}>
                    <Header {...personalProps}/>
                    <CVeducation {...educationListProps}/>
                    <CVwork {...workListProps}/>
                </div>
            </div>
        </>
    )
}

export default App
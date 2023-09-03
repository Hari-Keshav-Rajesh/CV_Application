import { useState } from 'react'
import { v4 } from 'uuid'
import './Education.css'

const Education = (props) => {
    const [degree, setDegree] = useState([])
    const [university, setUniversity] = useState([])
    const [start, setStart] = useState([])
    const [end, setEnd] = useState([])

    const formDelete = (event, id, index) => {
        event.preventDefault()

        if (props.education.length === 1) {
            alert('Atleast one element mandatory')
        } else {
            const updatedList = props.education.filter(
                (education) => education.id !== id
            )
            props.setEducation(updatedList)

            const deleteIndex = index

            const List = props.educationList.filter(
                (_, index) => index !== deleteIndex
            )
            props.setEducationList(List)

            const newDegree = degree.filter((_, index) => index !== deleteIndex)
            setDegree(newDegree)

            const newUni = university.filter(
                (_, index) => index !== deleteIndex
            )
            setUniversity(newUni)

            const newStart = start.filter((_, index) => index !== deleteIndex)
            setStart(newStart)

            const newEnd = end.filter((_, index) => index !== deleteIndex)
            setEnd(newEnd)
        }
    }

    const formAdd = (event) => {
        event.preventDefault()
        props.setEducation([...props.education, { id: v4() }])
    }

    return (
        <div className="EduForm">
            {props.education.map((education, index) => {
                return (
                    <form className="educationForm" key={education.id}>
                        <div className="educationSubHeader">
                            Education#{index + 1}
                        </div>

                        <input
                            className="degree"
                            type="text"
                            placeholder="Degree"
                            value={degree[index]}
                            onChange={(event) => {
                                let deg = degree
                                deg[index] = event.target.value
                                setDegree(deg)
                                let list = [...props.educationList]
                                list[index] = {
                                    degree: degree[index],
                                    university: university[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setEducationList(list)
                            }}
                        ></input>

                        <input
                            className="university"
                            type="text"
                            placeholder="University"
                            value={university[index]}
                            onChange={(event) => {
                                let uni = university
                                uni[index] = event.target.value
                                setUniversity(uni)
                                let list = [...props.educationList]
                                list[index] = {
                                    degree: degree[index],
                                    university: university[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setEducationList(list)
                            }}
                        ></input>

                        <input
                            className="start"
                            type="text"
                            placeholder="Start Year"
                            value={start[index]}
                            onChange={(event) => {
                                let st = start
                                st[index] = event.target.value
                                setStart(st)
                                let list = [...props.educationList]
                                list[index] = {
                                    degree: degree[index],
                                    university: university[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setEducationList(list)
                            }}
                        ></input>

                        <input
                            className="end"
                            type="text"
                            placeholder="End Year"
                            value={end[index]}
                            onChange={(event) => {
                                let eend = end
                                eend[index] = event.target.value
                                setEnd(eend)
                                let list = [...props.educationList]
                                list[index] = {
                                    degree: degree[index],
                                    university: university[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setEducationList(list)
                            }}
                        ></input>

                        <button
                            className="educationDelete"
                            onClick={(event) =>
                                formDelete(event, education.id, index)
                            }
                        >
                            Delete
                        </button>

                        <button
                            className="educationAdd"
                            onClick={(event) => formAdd(event)}
                        >
                            Add
                        </button>
                    </form>
                )
            })}
        </div>
    )
}

export default Education

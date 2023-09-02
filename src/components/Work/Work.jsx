import { useState } from 'react'
import { v4 } from 'uuid'
import '../Education/Education.css'

const Work = (props) => {
    const [place, setPlace] = useState([])
    const [job, setJob] = useState([])
    const [start, setStart] = useState([])
    const [end, setEnd] = useState([])

    const formDelete = (event, id, index) => {
        event.preventDefault()

        if (props.work.length === 1) {
            alert('Atleast one element mandatory')
        } else {
            const updatedList = props.work.filter((work) => work.id !== id)
            props.setWork(updatedList)

            const deleteIndex = index

            const List = props.workList.filter(
                (_, index) => index !== deleteIndex
            )
            props.setWorkList(List)

            const newPlace = place.filter((_, index) => index !== deleteIndex)
            setPlace(newPlace)

            const newJob = job.filter((_, index) => index !== deleteIndex)
            setJob(newJob)

            const newStart = start.filter((_, index) => index !== deleteIndex)
            setStart(newStart)

            const newEnd = end.filter((_, index) => index !== deleteIndex)
            setEnd(newEnd)
        }
    }

    const formAdd = (event) => {
        event.preventDefault()
        props.setWork([...props.work, { id: v4() }])
    }

    return (
        <div className="EduForm">
            {props.work.map((work, index) => {
                return (
                    <form className="educationForm" key={work.id}>
                        <div className="educationSubHeader">
                            Work#{index + 1}
                        </div>

                        <input
                            className="degree"
                            type="text"
                            placeholder="Company Name"
                            value={place[index]}
                            onChange={(event) => {
                                let deg = place
                                deg[index] = event.target.value
                                setPlace(deg)
                                let list = [...props.workList]
                                list[index] = {
                                    place: place[index],
                                    job: job[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setWorkList(list)
                            }}
                        ></input>

                        <input
                            className="university"
                            type="text"
                            placeholder="Job Position"
                            value={job[index]}
                            onChange={(event) => {
                                let uni = job
                                uni[index] = event.target.value
                                setJob(uni)
                                let list = [...props.workList]
                                list[index] = {
                                    place: place[index],
                                    job: job[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setWorkList(list)
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
                                let list = [...props.workList]
                                list[index] = {
                                    place: place[index],
                                    job: job[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setWorkList(list)
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
                                let list = [...props.workList]
                                list[index] = {
                                    place: place[index],
                                    job: job[index],
                                    start: start[index],
                                    end: end[index],
                                }
                                props.setWorkList(list)
                            }}
                        ></input>

                        <button
                            className="educationDelete"
                            onClick={(event) =>
                                formDelete(event, work.id, index)
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

export default Work

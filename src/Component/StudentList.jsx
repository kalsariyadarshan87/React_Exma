import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ProductsList() {
    const [state, setState] = useState([])
    const [rollsort, setRollsort] = useState(true)
    const [nameascending, setNameascending] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        Fetch()
    }, [])


    function RollNoSort() {
        setRollsort(!rollsort)
        const sortedData = [...state].sort((a, b) => rollsort ? a.id - b.id : b.id - a.id)
        setState(sortedData)
    }

    function nameSort() {
        setNameascending(!nameascending)
        const sortedData = [...state].sort((a, b) => nameascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        setState(sortedData)
    }

    function handleSearch(e) {
        setSearch(e.target.value)

    }
    const filteredData = state.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
    )


    async function Fetch() {
        const res = await axios.get("http://localhost:5500/Details")
        setState(res.data)
    }
    return (
        <div>
            <h1>ProductsList</h1>
            <input type="text" className="border border-dark" placeholder='Name' value={search} onChange={handleSearch} />&nbsp;
            <button className="btn btn-dark mb-1" onClick={RollNoSort}>Sort by Roll No {rollsort ? 'asc' : 'desc'}</button>&nbsp;
            <button className="btn btn-dark mb-1" onClick={nameSort}>Sort by Name {rollsort ? 'asc' : 'desc'}</button><br /><br />

            {
                filteredData.map((item, index) => (
                    <div key={index} className='d-flex'>
                        <b>Roll No.</b>&nbsp;{item.id}&nbsp;&nbsp;
                        <b>Products Name:</b>&nbsp;<p>{item.name}</p>&nbsp;&nbsp;
                        <Link to={`/studentDetail/${item.id}`}>Details</Link>
                    </div>
                ))
            }
        </div>
    )
}







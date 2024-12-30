import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetils() {
    const { id } = useParams()
    const [state, setState] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5500/Details/${id}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setState(data)
            })
    }, [])
    return (
        <div>
            <h1>Detils</h1>
            <b>Name: </b>{state.name}<br />
            <b>Address:</b> {state.address}<br />
            <b>Mo.:</b> {state.phone}<br />

           
        </div>
    )
}





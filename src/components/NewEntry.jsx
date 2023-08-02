import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewEntry = ({ addEntry }) => {
    const {category} = useParams()
    const [content, setContent] = useState('')

    function submit(e) {
        e.preventDefault()
        addEntry(category, content)
    }
    
  return <>
    <h3>New entry in {category} category</h3>
    <form className="container-sm" onSubmit={submit} >
        <div>
            <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows="8"></textarea>
        </div>
    <button className="btn btn-outline-primary mt-3">Create entry</button>
    </form>
    </>
}

export default NewEntry
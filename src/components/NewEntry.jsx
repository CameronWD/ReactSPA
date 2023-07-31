import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({entries, setEntries}) => {
    const {category} = useParams()
    const [content, setContent] = useState('')

    function submit(e) {
        e.preventDefault()

        const newEntry = {category, content}
        // anytime manipulating an array we use the expansion operator
        setEntries([ ...entries, newEntry])
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
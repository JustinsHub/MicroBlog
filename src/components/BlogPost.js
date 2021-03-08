import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const BlogPost = () => {
    const INITIAL_STATE  = {
        title: "",
        description: "",
        body: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const history = useHistory()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(state => ({...state, [name]:value}))
    }

    const handleSubmit = (e) => {
        
    }

    const redirectCancel = () => {
        history.push('/')
    }
    return (
        <div className="m-5">
            <h1>New Post</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                    id="title"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                    id="description"
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                    id="body"
                    className="form-control"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                </div>
                <button className="btn btn-primary mr-1">Save</button>
                <button className="btn btn-secondary" onClick={redirectCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default BlogPost
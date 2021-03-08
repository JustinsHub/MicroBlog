import React, {useState} from 'react'

const BlogPost = () => {
    const INITIAL_STATE  = {
        title: "",
        description: "",
        body: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(state => ({...state, [name]:value}))
    }

    return (
        <div className="">
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    id="title"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <input
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                </div>
                <button>Save</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default BlogPost
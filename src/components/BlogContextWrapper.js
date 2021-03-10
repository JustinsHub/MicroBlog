import React, {useState} from 'react'
import BlogContext from './BlogContext'

const BlogContextWrapper = ({children}) => {
    const INITIAL_STATE = []
    const [blogStorage, setBlogStorage] = useState(INITIAL_STATE)
    
    const addBlog = (blog) => {
        setBlogStorage(b => [...b, {...blog} ])
    }
    
    return (
        <div>
            <BlogContext.Provider value={{addBlog}}>
            {children}
            </BlogContext.Provider>
        </div>
    )
}

export default BlogContextWrapper
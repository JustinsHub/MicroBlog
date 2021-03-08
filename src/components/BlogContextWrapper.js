import React from 'react'
import BlogContext from './BlogContext'

const BlogContextWrapper = ({children}) => {
    return (
        <div>
            <BlogContext.Provider>
            {children}
            </BlogContext.Provider>
        </div>
    )
}

export default BlogContextWrapper
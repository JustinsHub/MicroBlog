import React from 'react'

const Blog = ({title, description, body}) => {
    //useParams
    return (
        <div>
            {title}
            {description}
            {body}
        </div>
    )
}

export default Blog
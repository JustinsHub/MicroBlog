import React, {useContext} from 'react'
import BlogContext from './BlogContext'
import Blog from './Blog'

const Blogs = () => {
    const {blogStorage} = useContext(BlogContext)


    return (
        <div>
        <ul>
            {blogStorage.map(b => <li><Blog title={b.title} description={b.description} body={b.body}/></li>)}
        </ul>
        </div>
    )
}

export default Blogs
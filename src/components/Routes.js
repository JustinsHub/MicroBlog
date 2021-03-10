import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import Blog from './Blog'
import BlogPost from './BlogPost'
import NotFound from './NotFound'
import BlogContext from './BlogContext'

const Routes = () => {
    const {blogStorage, addBlog} = useContext(BlogContext)
    return (
        <div>
            <Switch>
                <Route exact path='/blog'>
                    <Blogs blogs={blogStorage}/>
                </Route>

                <Route exact path="/new">
                    <BlogPost addBlog={addBlog}/>
                </Route>

                <Route exact path='/:postid'>
                    <Blog/>
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
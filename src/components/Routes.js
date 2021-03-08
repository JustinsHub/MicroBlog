import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import Blog from './Blog'
import BlogPost from './BlogPost'
import NotFound from './NotFound'

const Routes = () => {
    //add post function
    //useContext ?
    //write functions in context ?
    return (
        <div>
            <Switch>
                <Route exact path='/blog'>
                    <Blogs/>
                </Route>

                <Route exact path='/:postid'>
                    <Blog/>
                </Route>

                <Route exact path="/new">
                    <BlogPost/>
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
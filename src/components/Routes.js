import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import BlogPost from './BlogPost'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/blog'>
                    <Blogs/>
                </Route>

                <Route exact path="/post">
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
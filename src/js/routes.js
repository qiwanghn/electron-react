/**
 * import node_modules
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

/**
 * import components
 */
import App from './components/app.js'
import MemoIndex from './components/memo/index.js'
import MemoLists from './components/memo/lists.js'
import MemoDetail from './components/memo/detail.js'

/**
 * create
 */
export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={MemoIndex} />
            <Route path="/memo/:categoryId" component={MemoLists} />
            <Route path="/memo/:categoryId/:memoId" component={MemoDetail} />
        </Route>
    </Router>
)
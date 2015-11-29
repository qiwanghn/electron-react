/**
 * import node_modules
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Lists extends React.Component {
    render() {
        let list = this.props.data.map(function(category) {
            return (
                <li key={category.id}><Link to={`/memo/${category.id}`}>{category.name}</Link></li>
            );
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default class Side extends React.Component {
    render() {
        return (
            <div>
                <Lists data={this.props.data} />
            </div>  
        );
    }
}
/**
 * import node_modules
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Lists extends React.Component {
    render () {
        let categoryId = this.props.categoryId;
        let target = {};

        for (var i = 0, l = this.props.data.length; i < l; i++) {
            if (this.props.data[i].id == categoryId) {
                target = this.props.data[i];
            }
        }

        let list = target.memo.map(function(memo) {
            return (
                <li key={memo.id}><Link to={`/memo/${categoryId}/${memo.id}`}>{memo.head}</Link></li>
            );
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default class MemoLists extends React.Component {

    render() {
        return (
            <div>
                <Lists data={this.props.data} categoryId={this.props.params.categoryId} />
            </div>
        );
    }
}
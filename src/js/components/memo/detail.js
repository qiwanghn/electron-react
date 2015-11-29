/**
 * import node_modules
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Detail extends React.Component {
    render() {
        let categoryId = this.props.categoryId;
        let memoId = this.props.memoId;
        let target = {};

        for (var i = 0, iLen = this.props.data.length; i < iLen; i++) {
            if (this.props.data[i].id == categoryId) {
                for (var j = 0, jLen = this.props.data[i].memo.length; j < jLen; j++) {
                    if (this.props.data[i].memo[j].id == memoId) {
                        target = this.props.data[i].memo[j];
                    }
                }
            }
        }

        return (
            <ul>
                <li>{target.id}</li>
                <li>{target.head}</li>
                <li>{target.body}</li>
            </ul>
        );
    }
}

export default class MemoDetail extends React.Component {
    render() {
        console.log(this.props.params.categoryId);
        console.log(this.props.params.memoId);
        return (
            <div>
                <Detail data={this.props.data} categoryId={this.props.params.categoryId} memoId={this.props.params.memoId} />
            </div>
        );
    }
}
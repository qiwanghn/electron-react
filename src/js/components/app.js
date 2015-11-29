/**
 * import node_modules
 */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * import layouts partials
 */
import Side from './layouts/side'

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [
                {
                    id: 1,
                    name: 'testCategory1',
                    memo: [
                        {
                            id: 1,
                            head: 'test head1',
                            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        },
                        {
                            id: 2,
                            head: 'test head2',
                            body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'testCategory2',
                    memo: [
                        {
                            id: 1,
                            head: 'test head3',
                            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        },
                        {
                            id: 2,
                            head: 'test head4',
                            body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
                        }
                    ]
                }
            ]
        };
    }

    render() {
        let children = React.cloneElement(this.props.children, {data: this.state.data});

        return(
            <div>
                <Side data={this.state.data} />
                {children}
            </div>
        );
    }
}
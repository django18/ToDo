import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {}
    render() {
        // const { toDoContent } = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        );
    }
}

export default ToDoItem;

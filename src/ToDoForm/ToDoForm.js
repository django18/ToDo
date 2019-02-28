import React, { Component } from 'react';

class ToDoForm extends Component {
    state = {}
    render() {
        return (<form className="form-inline d-flex justify-content-center">
            <div className="form-group mx-sm-3 mb-2">
                {/* <label for="todoitem">Password</label> */}
                <input type="text" className="form-control" id="todoitem" placeholder="Task detail" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add Task to List</button>
        </form>);
    }
}

export default ToDoForm;

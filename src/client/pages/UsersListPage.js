import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}> {user.name} </li>
        })
    }

    render() {
        return (
            <div>
                <h2>A Big list of users</h2>

                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

function loadData(store) {
    return store.dispatch(fetchUsers())
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
}

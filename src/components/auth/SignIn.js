import React, { Component } from 'react'
import { signIn } from '../../store/actions/userActions'
import { connect } from 'react-redux'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        console.log(this.props.signIn(this.state))
    }

    componentDidMount(prevProps){
        console.log(this.state)
        console.log(prevProps)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn ping lighten-1 z-depth-0"> Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (userCredentials) => dispatch(signIn(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)

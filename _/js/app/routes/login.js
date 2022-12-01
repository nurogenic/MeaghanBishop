import React from 'react';
import auth from './auth';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({loading: true})
        
        auth.login(this.state.email, this.state.password)
            .then((response) => {
                this.setState({loading: false});
                if(!response.code && !response.message) {
                    this.props.router.push('admin');
                }
            });
    }
    
    render() {
        return (
            <div className="body container-width login-page ">
                <form onSubmit={this.handleSubmit} className={{loading: this.state.loading}}>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;
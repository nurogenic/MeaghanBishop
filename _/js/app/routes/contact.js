import React from 'react';
import data from '../data';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this._nameLabelMap = {
            fullName: 'Name',
            email: "Email",
            message: "Message"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            form: {
                fullName: '',
                email: '',
                message: ''
            }
        });
    }

    handleChange(event) {
        var data = {
            message: '',
            form: this.state.form
        };

        data['form'][event.target.name] = event.target.value;

        this.setState(data);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({
            message: ''
        });

        for(var fieldName in this.state.form){
            if(this.state.form.hasOwnProperty(fieldName)){
                if(!this.state.form[fieldName]){
                    this.setState({
                        message: `Please complete the ${this._nameLabelMap[fieldName]} field.`
                    });
                }
            }
        }

        if(!this.state.message){
            data.postContact({
                fullName: this.state.form.fullName,
                email: this.state.form.email,
                message: this.state.form.message
            }).then(() => {
                this.setState({
                    Message: "Saved!",
                    form: {
                        fullName: '',
                        email: '',
                        message: ''
                    }
                });
            });
        }
    }
    
    render() {
        return (
            <div className="body container-width contact-page">
                <div className="float-container">
                    <div className="col-left">
                        <div className="float-container mrg-b40">
                            <h3>Say Hello!</h3>
                            <p>If you want some design work done, or are looking to contact me about a job, feel free to use the contact form to the right.</p> 
                            <div id="social">
                                <a href="http://www.linkedin.com/pub/meaghan-bishop/56/a3/705/" target="_blank"><div id="linkedin"></div></a>
                            </div>
                        </div>
                        <div className="float-container">
                            <h3>Download My Resume</h3>
                            <ul>
                                <li><a className="resumedl" href="_/files/Meaghan_Bishop_Resume.pdf"><img src="_/img/adobe.png" />Adobe PDF</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-right">
                        <form className="contactform" onSubmit={this.handleSubmit}>
                            <div className="outputMessage">{this.state.message}</div>
                            <div>
                                <p>Name:</p> 
                                <input className="inputsize" type="text" name="fullName" value={this.state.form.fullName} placeholder="Full Name" onChange={this.handleChange} />
                            </div>
                            <div>
                                <p>Email:</p>
                                <input className="inputsize" type="email" name="email" value={this.state.form.email} placeholder="Email Address" onChange={this.handleChange} />
                            </div>
                            <div>
                                <p>Message:</p>
                                <textarea id="inputsize" name="message" value={this.state.form.email.message} placeholder="Write your message here" onChange={this.handleChange}></textarea>
                            </div>
                            <div>
                                <input id="submitbutton" type="submit" value="submit" name="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
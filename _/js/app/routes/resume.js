import React from 'react';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body container-width">
                <div className="float-container">
                    <div className="col-left">
                        <div className="float-container mrg-b10">
                            <h3>Say Hello!</h3>
                            <p>If you want some design work done, or are looking to contact me about a job, feel free to use the contact form to the right.</p> 
                            <div id="social">
                                <a href="http://www.twitter.com/megkat29" target="_blank"><div id="twitter"></div></a>
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
                </div>
            </div>
        )
    }
}

export default Resume;
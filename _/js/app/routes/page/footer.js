import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <div className="container-width">
                <div className="copyright">
                    <p>All Works by Meaghan Bishop &copy; {new Date().getFullYear()}.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
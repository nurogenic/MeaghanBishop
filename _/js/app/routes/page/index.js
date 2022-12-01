import React    from 'react';
import Header   from './header';
import Footer   from './footer';
import data     from '../../data';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        this.getData();
    }

    getData() {
        firebase.database().ref().on('value', snap => {
            var dta = snap.val();
            data.setItems(dta.work);
            data.setContacts(dta.contacts);
            
            this.setState({
                showChildren: true
            });
        });
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.showChildren ? this.props.children : null}
                <Footer />
            </div>
        );
    }
}

export default Page;
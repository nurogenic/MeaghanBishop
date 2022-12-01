import React from 'react';
import List from '../partials/list';
import data from '../data';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.visitPage = this.visitPage.bind(this);
    }

    componentWillMount() {
        data.onItemsUpdate(() => {
            this.setState({
                items: data.getItems()
            });
        });
    }

    componentWillUnmount() {
        data.offItemsUpdate();
    }

    visitPage(page) {
        this.props.router.push('/detail/'+page.urlKey);
    }

    render() {
        if(!this.state.items){
            return (<div>Loading...</div>);
        }

        return (
            <div className="body container-width home-page">
                <List items={this.state.items} action={this.visitPage}/>
            </div>
        );
    }
}

export default Home;
import React from 'react';
import ListItem from './list-item';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    getItems() {
        return this.props.items.map((item, index) => {
            return <ListItem item={item} action={this.props.action} key={index}/>
        });
    }

    render() {
        if(!this.props.items || !this.props.items.length){
            return (<div style={{textAlign: 'center', height: '400px'}}>Loading...</div>);
        }

        return (
            <div className="float-container">
                <ul className="item-list">{this.getItems()}</ul>
            </div>
        );
    }
}

export default List;
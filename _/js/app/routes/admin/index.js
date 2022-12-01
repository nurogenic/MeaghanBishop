import React from 'react';
import List from '../../partials/list';
import data from '../../data';
import { Link } from 'react-router';

class Admin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.editPage = this.editPage.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    editPage(item) {
        console.log(item);
        this.props.router.push('/admin/edit/'+item.id);
    }

    componentWillMount() {
        data.onItemsUpdate(() => {
            this.setState({
                items: data.getItems()
            });
        });

        data.onContactsUpdate(() => {
            this.setState({
                contacts: data.getContacts()
            });
        });
    }

    componentWillUnmount() {
        data.offItemsUpdate();
        data.offContactsUpdate();
    }

    getContacts() {
        return Object.keys(this.state.contacts).map((key, index)=>{
            let item = this.state.contacts[key];
            
            return (
                <li key={index} className="item mrg-b10">
                    <div className="info">
                        <p className="mrg-b10"><strong>Name</strong>: { item.fullName }</p>
                        <p className="mrg-b10"><strong>Email</strong>: { item.email }</p>
                        <p className="mrg-b10"><strong>Message</strong>: { item.message }</p>
                        <a onClick={data.deleteContact.bind(data, key)}>Delete</a>
                    </div>
                </li>
            );
        });
    }

    getItems() {
        return this.state.items.map((item, index, arr)=>{
            var moveLinks = [];
            
            if(index > 0){
                moveLinks.push(<a onClick={data.updateSortOrder.bind(data, item, -1)} key="0">Move Up</a>);
            }
            
            if(index + 1 < arr.length){
                moveLinks.push(<a onClick={data.updateSortOrder.bind(data, item, +1)} key="1">Move Down</a>);
            }

            return (
                <li key={index} className="item">
                    <div className="image-container" style={{backgroundImage: `url(${item.thumb})`}} ></div>
                    <div className="info">
                        <div className="title"><strong>Title:</strong> { item.title }</div>
                        <div className="tags"><strong>Tags:</strong> { item.tags }</div>
                        <div className="url"><strong>Url:</strong> { item.urlKey }</div>
                        <div className="url"><strong>SortOrder:</strong> { item.sortOrder }</div>
                    </div>
                    <div className="actions">
                        <a onClick={this.editPage.bind(this, item)}>Edit</a>
                        {moveLinks}
                        <a onClick={data.deleteItem.bind(data, item)}>Delete</a>
                    </div>
                </li>
            );
        });
    }

    addNewItem() {
        this.props.router.push('admin/add');
    }

    render() {
        return (
            <div className="body container-width admin-page">
                <h1>Admin</h1>
                <Link to="/logout">Logout</Link>
                <div className="float-container" style={{marginTop: "30px"}}>
                    <div className="col-left">
                        <h2 className="mrg-b10">Contact Form</h2>
                        <ol className="item-list">{this.getContacts()}</ol>
                    </div>
                    <div className="col-right">
                        <h2 className="mrg-b10">Portfolio</h2>
                        <a onClick={this.addNewItem}>+ Add New</a>
                        <ul className="item-list">{this.getItems()}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
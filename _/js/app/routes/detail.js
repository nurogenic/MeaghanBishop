import React from 'react';
import data from '../data';
import auth from './auth';
import { Link } from 'react-router';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        data.onItemsUpdate(() => {
            this.setState(data.getItemByUrlKey(this.props.params.id));
        });
    }

    componentWillUnmount() {
        data.offItemsUpdate();
    }

    getAllImages() {
        // This will be array once finished
        return (this.state.images || []).map(function(src, index) {
            return <img src={src} key={index} />
        });
    }

    getEditLink() {
        return auth.isLoggedIn() ? <Link to={'/admin/edit/'+this.props.params.id}>Edit</Link> : '';
    }

    goToNext(){
        var item = data.getNextItem(this.state);
        this.props.router.push('detail/'+item.urlKey);
        this.setState(item);
    }

    goToPrevious(){
        var item = data.getPreviousItem(this.state);
        this.props.router.push('detail/'+item.urlKey);
        this.setState(item);
    }

    render() {
        return (
            <div className="body container-width detail-page">
                <div className="float-container">
                    <div className="col-left">
                        { this.getAllImages() }
                    </div>
                    <div className="col-right">
                        <h1 className="title">{this.state.title}</h1>
                        <div className="tags">{this.state.tags}</div>
                        <div className="description">{this.state.description}</div>
                        {this.getEditLink()}
                        <div>
                            <a onClick={this.goToPrevious.bind(this)}>Previous</a>&nbsp;&nbsp;&nbsp;<a onClick={this.goToNext.bind(this)}>Next</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
import React from 'react';
import data from '../../data';
import { Link } from 'react-router';
import AdminEdit from './edit';

class AdminAdd extends AdminEdit {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            description: '',
            images: [],
            thumb: ''
        };
    }

    componentWillMount() {}
    componentWillUnmount() {}

    handleSubmit(evt) {
        evt.preventDefault();

        var message = data.validateData(this.state);

        if(typeof message == 'string'){
            this.setState({
                message: message
            });

            setTimeout(() => {
                this.setState({message: ''});
            }, 3000);

            return;
        }

        data.addItem({
            images: this.state.images || [],
            sortOrder: this.state.sortOrder || 0,
            urlKey: this.state.urlKey,
            title: this.state.title || '',
            tags: this.state.tags || '' ,
            description: this.state.description || '',
            thumb: this.state.thumb || ''
        }).then((data) => {
            this.props.router.push('admin/edit/'+data.id)
        })
    }

    getTitle() {
        return "Add";
    }
}

export default AdminAdd;
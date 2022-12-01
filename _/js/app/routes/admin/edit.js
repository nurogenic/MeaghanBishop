import React from 'react';
import data from '../../data';
import { Link } from 'react-router';

class AdminEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        var data = {};
        var target = evt.target;
        if (target.type === 'file') {
            var formData = new FormData();

            for (var i = 0; i < target.files.length; i++) {
                var file = target.files[i];

                // Check the file type.
                if (!file.type.match('image.*')) {
                    console.log(file);
                    continue;
                }

                // Add the file to the request.
                formData.append('images[]', file, file.name);
            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'processUpload.php', true);
            // Set up a handler for when the request finishes.
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // File(s) uploaded.
                    try {
                        let files = JSON.parse(xhr.response);

                        let images = this.state.images || [];
                        files.forEach((file)=>{
                            if(images.indexOf(file) < 0){
                                images.push(file);
                            }
                        });

                        data['images'] = images;
                        target.value = null;
                        this.setState(data);
                    } catch(e) {
                        alert(e.message);
                    }
                    this.setState(data);
                } else {
                    alert('An error occurred!');
                }
            }.bind(this);

            // Send the Data.
            xhr.send(formData);
        } else {
            data[target.name] = target.value;
            this.setState(data);
        }
    }

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

        data.setItem(this.props.params.id, {
            images: this.state.images || [],
            sortOrder: this.state.sortOrder || 0,
            urlKey: this.state.urlKey,
            title: this.state.title || '',
            tags: this.state.tags || '' ,
            description: this.state.description || '',
            thumb: this.state.thumb || ''
        }).then(() => {
            this.setState({
                message: 'Saved!'
            });

            setTimeout(() => {
                this.setState({message: ''});
            }, 3000)
        })
    }

    componentWillMount() {
        data.onItemsUpdate(() => {
            var item = data.getItem(this.props.params.id);
            if(item){
                this.setState(item);
            } else {
                this.props.router.push('admin')
            }
        });
    }

    componentWillUnmount() {
        data.offItemsUpdate();
    }

    setThumb(img) {
        this.setState({
            thumb: img
        });
    }

    removeImage(img, evt) {
        evt.preventDefault();
        evt.stopPropagation();
        
        this.setState({
            images: (this.state.images || []).filter((imag) => img !== imag)
        });
    }

    getImages() {
        return (this.state.images || []).map((img, index) => {
            let classes = ["image-container"];

            if(this.state.thumb === img){
                classes.push('is-thumb');
            }

            return (
                <div className={classes.join(' ')} key={index} onClick={ this.setThumb.bind(this, img) } style={{backgroundImage: `url(${img})`}}>
                    <a onClick={this.removeImage.bind(this, img)} className="remove"></a>
                </div>
            );
        });
    }

    getTitle() {
        return "Edit";
    }

    render() {
        return (
            <div className="body container-width admin-edit-page">
                <h1>{this.getTitle()}</h1>
                <div>{this.state.message}</div>
                <Link to={'detail/'+this.props.params.id}>View</Link>
                <form onSubmit={this.handleSubmit} style={{marginTop: "30px"}}>
                    <div className="col-left">
                        <input type="text" name="title" placeholder="Title" value={this.state.title}  onChange={this.handleChange}/>
                        <input type="text" name="tags"  placeholder="Tags" value={this.state.tags}  onChange={this.handleChange}/>
                        <input type="text" name="urlKey"  placeholder="Url" value={this.state.urlKey}  onChange={this.handleChange}/>
                        <textarea name="description"  placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="col-right">
                        {this.getImages.call(this)}
                        <input type="file" name="images" value={this.state.file} multiple onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AdminEdit;
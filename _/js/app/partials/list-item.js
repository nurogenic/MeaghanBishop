import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    doAction(data) {
        if(typeof this.props.action === 'function') this.props.action(data);
    }

    render() {
        return (
            <li className="item">
                <a onClick={this.doAction.bind(this, this.props.item)} alt="" rel="portfolio-work" className="slide-img">
                    <div className="image-container">
                        <div className="image" style={{background: 'url('+this.props.item.thumb+') center center no-repeat'}}></div>
                    </div>
                    <div className="info">
                        <div className="title">{ this.props.item.title }</div>
                        <div className="tags">{ this.props.item.tags }</div>
                    </div>
                </a>
            </li>
        );
    }
}

export default ListItem;
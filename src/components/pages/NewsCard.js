import React, { Component } from 'react'
import { InfoConsumer } from '../context';



class NewsCard extends Component {
    render() {
        const { id, newsTitle ,newsText, name, avatar } = this.props.item;

        return (
            <div className="card container mt-2 mb_3 p-5">
            <div className="row">
            <InfoConsumer>
                {value => (
                    
                    
                    
                       <div className="col-lg-4  mb-5">
                    
                        <img src={avatar} alt={name} style={{width: '40px'}} className="img mr-3" />
                        <h5 className="mt-0">{name}</h5>
                        <h5 key={id} className="card-title">{newsTitle}</h5>
                        </div>
                    
                
                )}
            </InfoConsumer>
            </div>
                </div>
        );
    }
}
export default NewsCard;
import React from 'react';
import { reviews } from '../../data';
import { InfoConsumer } from '../context';
import Reviews from './Reviews';
function Details() {
    return (
        <InfoConsumer>
            {data => {
            const {
                id,
                headerTitle,
                headerSubTitle,
                headerText,
                img,
                title,
                maps,
                description
            } 
            = data.detailInfo; 

                return (
                    <React.Fragment>
                        
                        <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">  
                                    <img src={img} alt={title} className="img-thumbnail img-fluid" />
                                    
                                </div>
                                
                        <div className="container-fluid align-items-center">
                        <div className="container mt-5">
                                <div className="row justify-content-center">
                                   <div className="col-2">
                                    <i className="fab fa-facebook-f" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-google-plus-g" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-twitter" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-reddit" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-whatsapp" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-facebook-messenger" />
                                   </div>
                                </div>
                            </div>
                            <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                            <h4 className="display-5">{headerSubTitle}</h4>
                            <p>{description}</p>
                            
                        </div>
                    </React.Fragment>
                )
           }
            }
        </InfoConsumer>
    )
}
export default Details;
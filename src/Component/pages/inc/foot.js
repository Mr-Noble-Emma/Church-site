import React from 'react';
import {Link} from 'react-router-dom';
import  './foot.css';

function foot() {
    return (
       <section className="section footer bg-dark text-white">
           <div className="container">
               <div className="row">
                   <div className="col-md-4 align-center padding-2px">
                       <h6>Church Information</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima 
                       quaerat ad consequatur vero harum amet iusto! Veritatis commodi rerum s
                       4oluta reprehenderit delectus id, nisi, eligendi nam ad nemo error!</p>
                   </div>
                   <div className="c1 col-md-4" >
                       <h6>Quick Links</h6>
                       <hr />
                       <div><Link to="/" id="link">Home</Link></div>
                       <div><Link to="/about" id="link">About</Link></div>
                       <div><Link to="/contact" id="link">Contact Us</Link></div>
                       <div><Link to="/events" id="link">Events</Link></div>
                       <div><Link to="/blog" id="link">Blog</Link></div>
                   </div>
                   <div className="col-md-4">
                       <h6>COntact Information</h6>
                       <hr />
                       <div><p className="text-white mb-1">Location: Behind GTHS Molyko-Buea</p></div>
                       <div><p className="text-white mb-1">yetoh.emmanuel@ubuea.cm</p></div>
                       <div><p className="text-white mb-1">Yetoh Emmanuel Wepnjoh</p></div>
                       <div><p className="text-white mb-1">The University of Buea</p></div>
                       <div><p className="text-white mb-1">Praise NBaptist Church</p></div>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default foot

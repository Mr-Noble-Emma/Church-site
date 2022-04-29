import React from 'react';
import Slidder from '../Navbar/slidder';
import {Link} from 'react-router-dom';
import Vmc from './inc/Vmc';
import '../images/Church.png';





function Home() {
    return (
        <div>
            <Slidder />

        <section className = "section">
            <div className="container">
                <div className="row">
                     <div className="col-md-12 text-center">
                        <h3 className="main-heading">OUR CHURCH</h3>
                        <div className="underline mx-auto"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad adipisci minus distinctio neque quisquam consectetur, labore numquam ipsa eos, veritatis eaque dolorum blanditiis laborum velit, sint natus recusandae? Quisquam?</p>
                        <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                     </div>
                </div>
            </div>
        </section>

            {/*Vision mission  theme of the year*/}
            <Vmc />

            {/*Services*/}
            <section className = "section  border-top">
            <div className="container">
                <div className="row">
                     <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                     </div>
                    <div className="col-md-4 ">
                         <div className="card shadow">
                         <img src="Church.png"  className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                             <h6>Service 1</h6>
                             <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Doloremque sint excepturi tempora nesciunt corporis neque, eveniet esse accusamus incidunt eum.
                                    </p>
                                    <Link to="/blog" className="btn btn-warning shadow">read more</Link>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-4 ">
                         <div className="card shadow">
                         <img src="Church.png"  className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                             <h6>Service 1</h6>
                             <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Doloremque sint excepturi tempora nesciunt corporis neque, eveniet esse accusamus incidunt eum.
                                    </p>
                                    <Link to="/blog" className="btn btn-warning shadow">read more</Link>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-4 ">
                         <div className="card shadow">
                         <img src="church.png"  className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                             <h6>Service 1</h6>
                             <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Doloremque sint excepturi tempora nesciunt corporis neque, eveniet esse accusamus incidunt eum.
                                    </p>
                                    <Link to="/blog" className="btn btn-warning shadow">read more</Link>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
       
        </div>
        
    )
}

export default Home

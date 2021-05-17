import React from 'react'
import "../index1.css"
import { NavLink } from 'react-router-dom'


const Common = (props) => {
    return (
        <section id="header" className="d-flex aliggn-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name}</h1>
                                <p className="my-3 para" >Struggling To Find Online Programming Class For Your Kid? Register for iCoder Free 1-on-1 Online Demo Designed Especially For Kids Bw 6-14. Multiple student projects. 1:1 Live Video Classes. Designed By Top Alumnus. Book Now. Free App Design Trial. Lifetime Validity.</p>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started"> {props.btnname}</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid-animated img-fake" alt="" width="600px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common

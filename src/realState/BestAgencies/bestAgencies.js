import React from 'react';
import '../css/style.css';
import '../css/color.css';
import '../realstatepanel/realstatePanel.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class bestAgencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1
        }
    }


    componentDidMount() {
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {

            var element = document.createElement("script");
            element.src = "../scripts/jquery-migrate-3.1.0.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/magnific-popup.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/sticky-kit.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/masonry.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/tooltips.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/Utils/generalUI.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    render() {
        return(
            <div id='root-div' style={{marginBottom: 150}}>
                <div className="clearfix"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline margin-bottom-25 margin-top-65">مشاورین املاک برتر</h3>
                        </div>

                        <div className="col-md-12">
                            <div className="carousel">

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-01.jpg")} alt=""/>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-03.jpg")} alt=""/>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-02.jpg")} alt=""/>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-03.jpg")} alt=""/>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-03.jpg")} alt=""/>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item compact">


                                        <div className="listing-img-content">

                                            <ul className="listing-hidden-content">
                                                <li>موقعیت <span>گلسار</span></li>
                                                <li>تعداد مشاورین <span>3</span></li>

                                            </ul>
                                        </div>

                                        <img src={require("../image/agency-02.jpg")} alt=""/>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="margin-top-55"></div>
            </div>
        )
    }
}

export default withTranslation()(bestAgencies);

import React from 'react';
import '../css/style.css';
import '../css/color.css';
import '../realstatepanel/realstatePanel.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import Slider from "react-slick";
import _ from "underscore";

class bestAgencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestAgencyList: []
        }
    }

    componentDidMount() {
        this.getBestAgencyList();
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {
            $('html').removeClass('mm-blocking mm-opened mm-background mm-opening');

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    getBestAgencyList() {
        Services.bestAgenciesList({offset: 0, length: 10}).then(response => {
            this.setState({
                bestAgencyList: response.data
            })
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div id='root-div' style={{marginBottom: 150}}>
                <div className="clearfix"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline margin-bottom-25 margin-top-65">مشاورین املاک برتر</h3>
                        </div>

                        <div className="col-md-12">


                            <Slider {...settings}>
                                {this.state.bestAgencyList.map(agency => {
                                    return (
                                        <div className="carousel-item" style={{width: '80%'}}>
                                            <div className="listing-item compact">


                                                <div className="listing-img-content">

                                                    <ul className="listing-hidden-content">
                                                        <li>اسم آژانس <span>{agency.agencyName}</span></li>
                                                        <li>نام مدیر آژانس <span>{agency.managementName}</span></li>
                                                        <li>تلفن آژانس <span>{agency.telephone ? agency.telephone : '***'}</span></li>

                                                    </ul>
                                                </div>
                                                {!_.isEmpty(agency.image) ?
                                                    <img width={355} height={355} src={"data:image/png;base64," + agency.image} alt=""/> :
                                                    <img src={require("../image/real_estate_icon.jpeg")} alt=""/>}

                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                    </div>
                </div>


                <div className="margin-top-55"></div>
            </div>
        )
    }
}

export default withTranslation()(bestAgencies);

import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import Services from "../../utils/Services";
import _ from 'underscore';
import {NotificationContainer, NotificationManager} from "react-notifications";
import * as StringUtils from "../../utils/StringUtils";

class advertiseDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
            element.src = "../scripts/custom.js";
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
        })
    }

    render() {
        let {advertise} = this.props.location.state ? this.props.location.state : {};
        return (
            <div id="root-div">
                <NotificationContainer/>

                <div id="wrapper">

                    <div className="clearfix"></div>

                    <div id="titlebar" className="property-titlebar margin-bottom-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="property-title">
                                        <h2>{advertise.type} <span className="property-badge">{advertise.sale}</span>
                                        </h2>
                                        <span>
						<a href="#location" className="listing-address">
							<i className="fa fa-map-marker"></i>
						</a>
					</span>
                                    </div>

                                    {advertise.sale === 'فروشی' ?
                                        <div className="property-pricing">
                                            <div>{advertise.totalPrice ? StringUtils.commify(advertise.totalPrice) : ''} تومان</div>
                                            <div
                                                className="sub-price">{advertise.unitPrice ? StringUtils.commify(advertise.unitPrice) : ''} تومان
                                                / متر مربع
                                            </div>
                                        </div> :
                                        <div className="property-pricing">
                                            <div>{advertise.mortgage ? StringUtils.commify(advertise.mortgage) : ''} تومان</div>
                                            <div
                                                className="sub-price">{advertise.rent ? StringUtils.commify(advertise.rent) : ''} تومان
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row margin-bottom-50">
                            <div className="col-md-12">

                                <div className="property-slider default">
                                    {advertise.images.map((image) => {
                                        return (
                                            <a href={Services.getAdvertiseImageDownloadUrl(image.filename)}
                                               data-background-image={Services.getAdvertiseImageDownloadUrl(image.filename)}
                                               className="item mfp-gallery"/>
                                        )
                                    })}
                                </div>

                                <div className="property-slider-nav">
                                    {advertise.images.map((image) => {
                                        return (
                                            <div className="item"><img
                                                src={Services.getAdvertiseImageDownloadUrl(image.filename)} alt=""/>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-7 sp-content">
                                <div className="property-description">

                                    <ul className="property-main-features">
                                        <li>مساحت <span>{advertise.area} متر مربع</span></li>
                                        <li>تعداد اتاق ها <span>{advertise.unitRoom}</span></li>
                                        <li>تعداد حمام/دستشویی <span>{advertise.unitWC}</span></li>
                                        <li>شهر <span>{advertise.city}</span></li>
                                    </ul>


                                    <h3 className="desc-headline">ویژگی ها</h3>
                                    <ul className="property-features checkboxes margin-top-0">
                                        {advertise.equipments.split(',').map((equipment) => {
                                            return (
                                                <li>{equipment}</li>
                                            )
                                        })}
                                    </ul>

                                    <h3 className="desc-headline">توضیحات</h3>
                                    <div className="show-more">
                                        {advertise.comment}

                                        <a href="#" className="show-more-button">بیشتر <i
                                            className="fa fa-angle-down"></i></a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-5 sp-sidebar">
                                <div className="sidebar sticky right">

                                    <div className="widget margin-bottom-30">

                                        <button className="widget-button with-tip"
                                                data-tip-content="افزودن به بوک مارک"><i className="fa fa-star-o"></i>
                                        </button>

                                        <div className="clearfix"></div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

    );
    }
    }

    export default withTranslation()(advertiseDetail);
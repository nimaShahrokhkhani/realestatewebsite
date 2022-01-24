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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    render() {
        let {advertise} = (this.props.location && this.props.location.state) ? this.props.location.state : {};
        const settings = {
            customPaging: function(i) {
                return (
                    <a>
                        <img src={Services.getAdvertiseImageDownloadUrl(advertise.images[i].filename)} alt={''}/>
                    </a>
                );
            },
            dots: true,
            className: 'slick-slider-custom',
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
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

                                <Slider {...settings}>
                                    {advertise.images.map((image) => {
                                        return (
                                            <img height={400} src={Services.getAdvertiseImageDownloadUrl(image.filename)} alt=""/>
                                        )
                                    })}
                                </Slider>

                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-7 sp-content">
                                <div className="property-description">

                                    <ul className="property-main-features">
                                        <li><p>مساحت </p><span>{advertise.area ? advertise.area : '***'} متر مربع</span></li>
                                        <li><p>اتاق </p><span>{advertise.unitRoom ? advertise.unitRoom : '*'}</span></li>
                                        <li><p>جهت </p><span>{advertise.direction ? advertise.direction : '***'}</span></li>
                                        <li><p>شهر </p><span>{advertise.city ? advertise.city : '***'}</span></li>
                                    </ul>

                                    <h3 className="desc-headline">اطلاعات تماس</h3>
                                    <ul className="property-features  margin-top-0">
                                        <li>نام آگهی دهنده: <span id={"contactInfoName"}>{advertise.contactInfoName}</span></li>
                                        <li>تلفن آگهی دهنده: <span id={"contactInfoTel"}>{advertise.contactInfoTel}</span></li>
                                    </ul>

                                    <h3 className="desc-headline">جزئیات</h3>
                                    <ul className="property-features  margin-top-0">
                                        <li>قیمت متری: <span id={"priceMetri"}>{advertise.unitPrice}</span></li>
                                        <li>قیمت کل: <span id={"priceTotal"}>{advertise.totalPrice}</span></li>
                                        <li>قیمت اجاره: <span id={"priceRent"}>{advertise.rent}</span></li>
                                        <li>قیمت رهن: <span id={"priceMortgage"}>{advertise.mortgage}</span></li>
                                        <li>مساحت: <span id={"area"}>{advertise.area}</span></li>
                                        <li>متراژ: <span id={"unitBuiltUpArea"}>{advertise.unitBuiltUpArea}</span></li>
                                        <li>اتاق: <span id={"room"}>{advertise.unitRoom}</span></li>
                                        <li>جهت: <span id={"direction"}>{advertise.direction}</span></li>
                                        <li>تعداد حمام/دستشویی: <span id={"unitWC"}>{advertise.unitWC}</span></li>
                                        <li>کفپوش: <span id={"floorcover"}>{advertise.floorCovering}</span></li>
                                        <li>بالکن: <span id={"balkon"}>{advertise.unitBalcony}</span></li>
                                        <li>آشپزخانه: <span id={"kitchen"}>{advertise.kitchenService}</span></li>
                                        <li>طبقه: <span id={"floor"}>{advertise.floor}</span></li>
                                        <li>سن بنا: <span id={"aree"}>{advertise.age}</span></li>
                                        <li>سند: <span id={"document"}>{advertise.documentKind}</span></li>
                                        <li>نما: <span id={"nama"}>{advertise.frontKind}</span></li>
                                        <li>پارکینگ: <span id={"parking"}>{advertise.parking}</span></li>
                                        <li>انباری: <span id={"warehouse"}>{advertise.warehouse}</span></li>
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

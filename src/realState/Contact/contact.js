import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class contact extends React.Component {

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
        return (
            <div id="root-div">
                <div id="wrapper">
                    <div className="clearfix"></div>

                    <div className="container">

                        <div className="row">


                            <div className="col-md-8">

                                <section id="contact">
                                    <h4 className="headline margin-bottom-35">فرم تماس</h4>

                                    <div id="contact-message"></div>


                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <input name="name" type="text" id="nameContact" placeholder="نام"
                                                       required="required"/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div>
                                                <input name="email" type="email"
                                                       id="emailContact"
                                                       placeholder="ایمیل"
                                                       pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                                                       required="required"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <input name="subject" type="text" id="subjectContact" placeholder="موضوع"
                                               required="required"/>
                                    </div>

                                    <div>
                        <textarea name="comments" cols="40" rows="3" id="commentsContact" placeholder="پیام"
                                  spellCheck="true" required="required"/>
                                    </div>

                                    <input type="submit" className="submit button" id="submit" value="ارسال"/>

                                </section>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(contact);

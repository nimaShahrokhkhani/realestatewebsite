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


    onNavMenuClick(activeNavMenu) {
        this.setState({
            activeNav: activeNavMenu
        })
    }

    render() {
        return (
            <div id="wrapper">


                <header id="header-container">


                </header>

                <div className="contact-map margin-bottom-55">


                </div>
                <div className="clearfix"></div>

                <div className="container">

                    <div className="row">

                        <div className="col-md-4">

                            <h4 className="headline margin-bottom-30">ما را اینجا پیدا کنید</h4>

                            <div className="sidebar-textbox">
                                <p></p>

                                <ul className="contact-details">
                                    <li><i className="im im-icon-Phone-2"></i> <strong>تلفن:</strong> <span> </span>
                                    </li>
                                    <li><i className="im im-icon-Fax"></i> <strong>فکس:</strong> <span> </span></li>
                                    <li><i className="im im-icon-Globe"></i> <strong>سایت:</strong> <span><a
                                        href="#">www.najafi.com</a></span></li>
                                    <li><i className="im im-icon-Envelope"></i> <strong>ایمیل:</strong> <span><a
                                        href="#">najafi@example.com</a></span></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-8">

                            <section id="contact">
                                <h4 className="headline margin-bottom-35">فرم تماس</h4>

                                <div id="contact-message"></div>

                                <form method="post" action="contact.php" name="contactform" id="contactform"
                                      autoComplete="on">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <input name="name" type="text" id="name" placeholder="نام"
                                                       required="required"/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div>
                                                <input name="email" type="email" style="text-align:left;" id="email"
                                                       placeholder="ایمیل"
                                                       pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                                                       required="required"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <input name="subject" type="text" id="subject" placeholder="موضوع"
                                               required="required"/>
                                    </div>

                                    <div>
                                        <textarea name="comments" cols="40" rows="3" id="comments" placeholder="پیام"
                                                  spellCheck="true" required="required"></textarea>
                                    </div>

                                    <input type="submit" className="submit button" id="submit" value="ارسال"/>

                                </form>
                            </section>
                        </div>

                    </div>

                </div>

                <div id="backtotop"><a href="#"></a></div>


                <script type="text/javascript" src="scripts/jquery-3.4.1.min.js"></script>
                <script type="text/javascript" src="scripts/jquery-migrate-3.1.0.min.js"></script>
                <script type="text/javascript" src="scripts/chosen.min.js"></script>
                <script type="text/javascript" src="scripts/magnific-popup.min.js"></script>
                <script type="text/javascript" src="scripts/owl.carousel.min.js"></script>
                <script type="text/javascript" src="scripts/rangeSlider.js"></script>
                <script type="text/javascript" src="scripts/sticky-kit.min.js"></script>
                <script type="text/javascript" src="scripts/slick.min.js"></script>
                <script type="text/javascript" src="scripts/masonry.min.js"></script>
                <script type="text/javascript" src="scripts/mmenu.min.js"></script>
                <script type="text/javascript" src="scripts/tooltips.min.js"></script>
                <script type="text/javascript" src="scripts/custom.js"></script>


            </div>        );
    }
}

export default withTranslation()(contact);

import React from 'react';
import '../css/style.css';
import './fileSearchTable.css';
import '../css/color.css';
import '../realstatepanel/realstatePanel.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import _ from "underscore";
import ScriptTag from 'react-script-tag';
import * as StringUtils from "../../utils/StringUtils";
import connect from "react-redux/es/connect/connect";
import {setFileSearchRequest, setState, setUser} from "../../components/redux/actions";
import ReactPaginate from 'react-paginate';

class fileSearchTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            isErrorPage: false,
            pageCount: 1
        };
        this.totalFilesCount = 0;
        this.fileList = [];
    }

    getFileType(file) {
        var noeMelkValue = "";
        if (file.apartment) {
            noeMelkValue += "آپارتمان "
        }
        if (file.vila) {
            noeMelkValue += "ویلا "
        }
        if (file.land) {
            noeMelkValue += "زمین "
        }
        if (file.building) {
            noeMelkValue += "مستغلات "
        }
        if (file.oldHouse) {
            noeMelkValue += "کلنگی "
        }
        if (file.office) {
            noeMelkValue += "دفتر کار "
        }
        if (file.store) {
            noeMelkValue += "مغازه "
        }
        if (file.suit) {
            noeMelkValue += "سوییت "
        }
        return noeMelkValue;
    }

    // createFileTable(files) {
    //     this.totalFilesCount = files.totalCount;
    //     var showFilesTitle = [
    //         {key: 'Id', value: 'کد'},
    //         {key: 'date', value: 'تاریخ'},
    //         {key: 'owner', value: 'مالک'},
    //         {key: 'type', value: 'نوع'},
    //         {key: 'unitFloor', value: 'طبقه'},
    //         {key: 'sale', value: 'مورد'},
    //         {key: 'totalPrice/mortgage', value: 'کل/ودیعه'},
    //         {key: 'unitPrice/rent', value: 'متری/اجاره'},
    //         {key: 'unitRoom', value: 'خواب'},
    //         {key: 'unitBuiltUpArea', value: 'زیربنا'},
    //         {key: 'age', value: 'سن'},
    //         {key: 'address', value: 'آدرس'}
    //     ];
    //     var tableContent = document.getElementById("tableContent");
    //
    //     if (_.isEmpty(this.fileList)) {
    //         var titleList = document.getElementById("title");
    //         for (var i = 0, n = showFilesTitle.length; i < n; i++) {
    //             var titleField = document.createElement("TH");
    //             titleField.innerHTML = showFilesTitle[i].value;
    //             titleList.appendChild(titleField);
    //         }
    //     }
    //
    //     this.fileList.push(...files.data);
    //     for (var i = 0, n = files.data.length; i < n; i++) {
    //         var rowContainer = document.createElement("TR");
    //         for (var j = 0, k = showFilesTitle.length; j < k; j++) {
    //             var columnContainer = document.createElement("TD");
    //             if (showFilesTitle[j].key.includes("/")) {
    //                 columnContainer.innerHTML = files.data[i][showFilesTitle[j].key.split("/")[0]] ? files.data[i][showFilesTitle[j].key.split("/")[0]] : files.data[i][showFilesTitle[j].key.split("/")[1]];
    //             } else if (showFilesTitle[j].key.includes("date")) {
    //                 columnContainer.innerHTML = StringUtils.convertMillisecondToShamsi(files.data[i][showFilesTitle[j].key]);
    //             } else if (showFilesTitle[j].key === 'type') {
    //                 columnContainer.innerHTML = this.getFileType(files.data[i])
    //             } else {
    //                 columnContainer.innerHTML = files.data[i][showFilesTitle[j].key];
    //             }
    //             rowContainer.appendChild(columnContainer);
    //         }
    //         rowContainer.id = files.data[i].Id;
    //         // rowContainer.onclick = function () {
    //         //     ipcRenderer.send('getFileForEditing', this.id);
    //         // };
    //         tableContent.appendChild(rowContainer);
    //     }
    // }

    createFileTable(files) {
        let me = this;
        var showFilesTitle = [
            {key: 'Id', value: 'کد'},
            {key: 'date', value: 'تاریخ'},
            {key: 'owner', value: 'مالک'},
            {key: 'type', value: 'نوع'},
            {key: 'unitFloor', value: 'طبقه'},
            {key: 'sale', value: 'مورد'},
            {key: 'totalPrice/mortgage', value: 'کل/ودیعه'},
            {key: 'unitPrice/rent', value: 'متری/اجاره'},
            {key: 'unitRoom', value: 'خواب'},
            {key: 'unitBuiltUpArea', value: 'زیربنا'},
            {key: 'age', value: 'سن'},
            {key: 'address', value: 'آدرس'}
        ];
        var tableContent = document.getElementById("tableContent");

        var titleRow = document.createElement("TR");
        titleRow.id = 'title';
        tableContent.innerHTML = '';
        tableContent.appendChild(titleRow);


        var titleList = document.getElementById("title");
        for (var i = 0, n = showFilesTitle.length; i < n; i++) {
            var titleField = document.createElement("TH");
            titleField.innerHTML = showFilesTitle[i].value;
            titleList.appendChild(titleField);
        }

        this.fileList = files;
        for (var i = 0, n = files.length; i < n; i++) {
            var rowContainer = document.createElement("TR");
            for (var j = 0, k = showFilesTitle.length; j < k; j++) {
                var columnContainer = document.createElement("TD");
                if (showFilesTitle[j].key.includes("/")) {
                    columnContainer.innerHTML = files[i][showFilesTitle[j].key.split("/")[0]] ? files[i][showFilesTitle[j].key.split("/")[0]] : files[i][showFilesTitle[j].key.split("/")[1]];
                } else if (showFilesTitle[j].key.includes("date")) {
                    columnContainer.innerHTML = StringUtils.convertMillisecondToShamsi(files[i][showFilesTitle[j].key]);
                } else if (showFilesTitle[j].key === 'type') {
                    columnContainer.innerHTML = this.getFileType(files[i])
                } else {
                    columnContainer.innerHTML = files[i][showFilesTitle[j].key];
                }
                rowContainer.appendChild(columnContainer);
            }
            rowContainer.id = files[i].Id;
            rowContainer.onclick = function () {
                me.props.history.push({
                    pathname: '/fileDetail',
                    state: {
                        fileId: this.id
                    }
                });
            };
            tableContent.appendChild(rowContainer);
        }
        window.scrollTo(0, 0);
    }

    getFile(offset, length) {
        let requestObject = this.props.fileRequestObject ? this.props.fileRequestObject : {};
        requestObject.agencyCode = this.props.user.agencyCode;
        requestObject.offset = offset;
        requestObject.length = length;
        Services.searchAgencyFiles(requestObject).then(response => {
            if (!_.isEmpty(response.data.data) && response.data.data.length !== 0) {
                this.setState({
                    isErrorPage: false,
                    pageCount: (response.data.totalCount / 50)
                }, () => {
                    this.createFileTable(response.data.data);
                })
            } else {
                this.setState({isErrorPage: true})
            }
        }).catch(error => {
            if (error.message.includes('403')) {
                sessionStorage.clear();
                localStorage.clear();
                this.props.setUser({});
                this.props.history.push({
                    pathname: '/loginPanel'
                });
            } else {
                this.setState({isErrorPage: true})
            }
        })
    }

    componentDidMount() {
        this.getFile('0', '50');

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

    handlePageClick = (event) => {
        this.getFile((event.selected * 50).toString() , ((event.selected * 50) + 50).toString())
    };

    render() {
        return (
            <div id="root-div" style={{marginTop: 50, marginBottom: 100}}>


                <div className="clearfix"></div>

                {this.state.isErrorPage ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{width: '50%', height: '50%'}} src={require('../image/404.jpeg')}/>
                    </div> :
                    <div style={{overflowX: 'auto'}}>
                        <table>
                            <tbody id="tableContent">
                            <tr id="title">
                            </tr>
                            </tbody>
                        </table>


                        <ReactPaginate
                            previousLabel="قبلی"
                            nextLabel="بعدی"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                }

            </div>


        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    const fileRequestObject = state.fileRequestObject;
    return {user, fileRequestObject};
};

export default connect(mapStateToProps, {setUser, setState, setFileSearchRequest})(withTranslation()(fileSearchTable));

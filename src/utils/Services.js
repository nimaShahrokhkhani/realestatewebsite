import axios from "./axios";
import history from "../history";

export default class Services {

    static baseUrl = 'http://localhost:3500/';

    static getCompanyImageDownloadUrl(fileName){
      return this.baseUrl + `companies/download?fileName=` + fileName;
    }

    static getBrandImageDownloadUrl(fileName){
      return this.baseUrl + `brands/download?fileName=` + fileName;
    }

    static getProductImageDownloadUrl(fileName){
      return this.baseUrl + `products/download?fileName=` + fileName;
    }

    static getProductCategoryImageDownloadUrl(fileName){
      return this.baseUrl + `productCategory/download?fileName=` + fileName;
    }

    static getHighlightImageDownloadUrl(fileName){
      return this.baseUrl + `highlight/download?fileName=` + fileName;
    }

    static getEventImageDownloadUrl(fileName){
      return this.baseUrl + `events/download?fileName=` + fileName;
    }

    static getBlogImageDownloadUrl(fileName){
      return this.baseUrl + `blogs/download?fileName=` + fileName;
    }

    static getSliderImageDownloadUrl(fileName){
      return this.baseUrl + `sliders/download?fileName=` + fileName;
    }

    static uploadHighlightImage(requestData){
        return axios.post(`/highlight/uploadImage`, requestData)
    }

    static uploadBlogImage(requestData){
        return axios.post(`/blogs/uploadImage`, requestData)
    }

    static signIn(requestData) {
        return axios.post(`/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static getProductsList(requestData) {
        return axios.get(`/products/list`, {
            params: requestData
        })
    }

    static getBannerSliderList(requestData) {
        return axios.get(`/sliders/banner/list`, {
            params: requestData
        })
    }

    static getSaleSliderList(requestData) {
        return axios.get(`/sliders/sale/list`, {
            params: requestData
        })
    }

    static searchProductsList(requestData) {
        return axios.get(`/products/search`, {
            params: requestData
        })
    }

    static getProductsNewCollectionList(requestData) {
        return axios.get(`/products/newCollection`, {
            params: requestData
        })
    }

    static async insertBannerSlider(requestData) {
        return axios.post(`/sliders/banner/insert`, requestData)
    }

    static async deleteBannerSlider(requestData) {
        return axios.post(`/sliders/banner/delete`, requestData)
    }

    static async insertSaleSlider(requestData) {
        return axios.post(`/sliders/sale/insert`, requestData)
    }

    static async deleteSaleSlider(requestData) {
        return axios.post(`/sliders/sale/delete`, requestData)
    }

    static async insertProduct(requestData) {
        return axios.post(`/products/insert`, requestData)
    }

    static async deleteProduct(requestData) {
        return axios.post(`/products/delete`, requestData)
    }

    static async editProduct(requestData) {
        return axios.post(`/products/edit`, requestData)
    }

    static getEventList(requestData) {
        return axios.get(`/events/list`, {
            params: requestData
        })
    }

    static async insertEvent(requestData) {
        return axios.post(`/events/insert`, requestData)
    }

    static async deleteEvent(requestData) {
        return axios.post(`/events/delete`, requestData)
    }

    static async editEvent(requestData) {
        return axios.post(`/events/edit`, requestData)
    }

    static getEventTypeList(requestData) {
        return axios.get(`/events/type/list`, {
            params: requestData
        })
    }

    static async insertEventType(requestData) {
        return axios.post(`/events/type/insert`, requestData)
    }

    static async deleteEventType(requestData) {
        return axios.post(`/events/type/delete`, requestData)
    }

    static async editEventType(requestData) {
        return axios.post(`/events/type/edit`, requestData)
    }

    static getHighlightList(requestData) {
        return axios.get(`/highlight/list`, {
            params: requestData
        })
    }

    static async insertHighlight(requestData) {
        return axios.post(`/highlight/insert`, requestData)
    }

    static async deleteHighlight(requestData) {
        return axios.post(`/highlight/delete`, requestData)
    }

    static async editHighlight(requestData) {
        return axios.post(`/highlight/edit`, requestData)
    }

    static getBlogList(requestData) {
        return axios.get(`/blogs/list`, {
            params: requestData
        })
    }

    static async insertBlog(requestData) {
        return axios.post(`/blogs/insert`, requestData)
    }

    static async deleteBlog(requestData) {
        return axios.post(`/blogs/delete`, requestData)
    }

    static async editBlog(requestData) {
        return axios.post(`/blogs/edit`, requestData)
    }

    static getMasterCategoryList(requestData) {
        return axios.get(`/masterCategory/list`, requestData)
    }

    static getProductCategoryList(requestData) {
        return axios.get(`/productCategory/list`, {
            params: requestData
        })
    }

    static async insertProductCategory(requestData) {
        return axios.post(`/productCategory/insert`, requestData)
    }

    static async editProductCategory(requestData) {
        return axios.post(`/productCategory/edit`, requestData)
    }

    static async deleteProductCategory(requestData) {
        return axios.post(`/productCategory/delete`, requestData)
    }

    static getMasterCategoryList(requestData) {
        return axios.get(`/MasterCategory/list`, requestData)
    }

    static async insertMasterCategory(requestData) {
        return axios.post(`/MasterCategory/insert`, requestData)
    }

    static async editMasterCategory(requestData) {
        return axios.post(`/MasterCategory/edit`, requestData)
    }

    static async deleteMasterCategory(requestData) {
        return axios.post(`/MasterCategory/delete`, requestData)
    }

    static getCompaniesList(requestData) {
        return axios.get(`/companies/list`, requestData)
    }

    static async insertCompany(requestData) {
        return axios.post(`/companies/insert`, requestData)
    }

    static async editCompany(requestData) {
        return axios.post(`/companies/edit`, requestData)
    }

    static async deleteCompany(requestData) {
        return axios.post(`/companies/delete`, requestData)
    }

    static getUsersList(requestData) {
        return axios.get(`/users/list`, requestData)
    }

    static async insertUser(requestData) {
        return axios.post(`/users/insert`, requestData)
    }

    static async editUser(requestData) {
        return axios.post(`/users/edit`, requestData)
    }

    static async deleteUser(requestData) {
        return axios.post(`/users/delete`, requestData)
    }

    static getBrandList(requestData) {
        return axios.get(`/brands/list`, {
            params: requestData
        })
    }

    static async insertBrand(requestData) {
        return axios.post(`/brands/insert`, requestData)
    }

    static async editBrand(requestData) {
        return axios.post(`/brands/edit`, requestData)
    }

    static async deleteBrand(requestData) {
        return axios.post(`/brands/delete`, requestData)
    }

    static getFactorList(requestData) {
        return axios.get(`/factor/list`, {
            params: requestData
        })
    }

    static async insertFactor(requestData) {
        return axios.post(`/factor/insert`, requestData)
    }

    static async editFactor(requestData) {
        return axios.post(`/factor/edit`, requestData)
    }

    static async deleteFactor(requestData) {
        return axios.post(`/factor/delete`, requestData)
    }
}

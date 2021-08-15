import Vue from "vue";
import VueCookies from "vue-cookies";
import axios from "axios";
import router from '../router';

Vue.use(VueCookies);

// const baseURL = "http://localhost:8081/";


const request = axios.create({
  baseURL,
});


export default request;

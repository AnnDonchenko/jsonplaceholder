import axios from "axios";

const axiosData = axios.create({baseURL: ''});

const getUsers = () => axiosData('/users');

export {getUsers};
import { City, ListParams, ListResponse } from "../models";
import { Student } from "../models/student";
import axiosClient from "./axiosClient";

const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<City>> {
        const url = './students';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
        }});
    },
    getById(id: string): Promise<Student> {
        const url = `./students/${id}`;
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
        }});
    },
    add(params: ListParams): Promise<ListResponse<City>> {
        const url = './students';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
        }});
    },
    update(params: ListParams): Promise<ListResponse<City>> {
        const url = './students';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
        }});
    },
    remove(id: string): Promise<any> {
        const url = './students';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
        }});
    },
    
}
export default studentApi;
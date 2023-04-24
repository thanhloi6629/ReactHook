import { get } from "http";

export interface PaginatinParmas {
    _limit: number;
    _page: number;
    _total: number;
}
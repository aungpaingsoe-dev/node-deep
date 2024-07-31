"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentPage = (page, perPage) => {
    return (page - 1) * perPage;
};
const result = (data, totalCount, page, perPage) => {
    const totalPage = Math.ceil(totalCount / perPage);
    const nextPage = page < totalPage ? page + 1 : null;
    const previousPage = page > 1 ? page - 1 : null;
    return {
        data,
        page,
        perPage,
        totalCount,
        totalPage,
        nextPage,
        previousPage,
    };
};
exports.default = {
    currentPage,
    result,
};

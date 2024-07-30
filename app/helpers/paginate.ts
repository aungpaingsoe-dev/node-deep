import { PaginateType } from "../types";

const currentPage = (page: number, perPage: number): number => {
  return (page - 1) * perPage;
};

const result = (
  data: any[],
  totalCount: number,
  page: number,
  perPage: number
): PaginateType => {
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

export default {
  currentPage,
  result,
};

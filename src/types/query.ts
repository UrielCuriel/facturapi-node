export type Query = {
  q?: string;
  page?: number;
  limit?: number;
  date?: {
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
  };
};

export type QueryResponse<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  data: T[];
};

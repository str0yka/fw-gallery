type AxiosRequestConfig = import('axios').AxiosRequestConfig;

type RequestConfig<Params = void> = Params extends void
  ? { config?: AxiosRequestConfig }
  : { params: Params; config?: AxiosRequestConfig };

type QuerySettings<Config extends RequestConfig, Func = unknown> = Config & {
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<Awaited<ReturnType<Func>>>,
    'queryKey'
  >;
};

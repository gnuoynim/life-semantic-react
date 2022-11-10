import { UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import useHttp from '@hooks/queries/factories/useHttp';


const groupKey = 'LOGIN';

const useLoginHttp = () => useHttp(groupKey, { useErrorBoundary: true });

const boardQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey = 'temp-key'): UseQueryOptions<TQueryFnData, TError, TData> =>
  useLoginHttp().query<TQueryFnData, TError, TData>(url, { queryKey, isQuery: true });

const useLoginQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, TError> =>
  useLoginHttp().get(url, queryKey);

export default useLoginHttp;
export { boardQuery, useLoginQuery };

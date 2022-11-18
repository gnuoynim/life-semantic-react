import { UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import useHttp from '@hooks/queries/factories/useHttp';


const groupKey = 'PROGRAM';

const useProgramHttp = () => useHttp(groupKey, { useErrorBoundary: true });

const programQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey = 'temp-key'): UseQueryOptions<TQueryFnData, TError, TData> =>
  useProgramHttp().query<TQueryFnData, TError, TData>(url, { queryKey, isQuery: true });

const useProgramQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, TError> =>
  useProgramHttp().get(url, queryKey);

export default useProgramHttp;
export { programQuery, useProgramQuery };

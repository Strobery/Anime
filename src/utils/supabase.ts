import {
    PostgrestError,
    PostgrestFilterBuilder,
    PostgrestSingleResponse
} from "@supabase/postgrest-js"
import {
    QueryKey,
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    useQuery,
    UseQueryOptions,
} from 'react-query';

export type SupabaseQueryFunction<T> = () => PostgrestFilterBuilder<T>;

export type SupabaseInfiniteQueriesFunction<T> = (
    from: number,
    to: number
) => PostgrestFilterBuilder<T>;

export type SupabaseSingleQueryFunction<T> = () => PromiseLike<
  PostgrestSingleResponse<T>
>;

export type SupabaseQueryOptions<T> = Omit<
  UseQueryOptions<T[], PostgrestError, T[], QueryKey>,
  "queryKey" | "queryFn"
>;

export type SupabaseSingleQueryOptions<T> = Omit<
  UseQueryOptions<T[], PostgrestError, T, QueryKey>,
  "queryKey" | "queryFn"
>;

export type SupabaseInfiniteQueryOptions<T> = Omit<
  UseInfiniteQueryOptions<
    InfiniteQueryData<T>,
    PostgrestError,
    InfiniteQueryData<T>
  >,
  "queryFn" | "queryKey"
>;

export const useSupabaseQuery = <T>(
    key: QueryKey,
    queryFn: SupabaseQueryFunction<T>,
    options?: SupabaseQueryOptions<T>
)
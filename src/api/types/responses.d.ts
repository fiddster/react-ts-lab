declare namespace Api{
    type Response<T> = {
        count: number;
        next:string;
        previous:string;
        results:T
    }
}
import {  useState } from "react"

const useHTTP = (urlConfig) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const request = async ({ url, method, body, headers }) => {
        //Before making an api request, loading is set to true
        setIsLoading(true);

        //fetching data
        fetch(url, {
            method,
            body, headers
        }).then(async response => {
            const responseData = await response.json();
            if (!responseData.ok) {
                throw new Error('Something happened and we couldn not process your request');
            }

        }).then(setData)
            // if we have gotten an error then we will end up here
            // using shorthand again instead of arrow function
            // it is the same as (err) => setErr(err)
            .catch(setError)

    }

    return {
        isLoading,
        data,
        error,
        request
    }
}

export default useHTTP

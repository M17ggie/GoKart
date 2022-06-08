import { useEffect, useState } from "react"

const useHTTP = (urlConfig) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {

        //Before making the api request, loading is set to true
        setIsLoading(true);

        // fetching data 
        fetch(urlConfig.url, {
            method: urlConfig.method,
            body: urlCongif.body,
            headers: urlConfig.headers
        }).then(response => {
            setData(response.data)
        }).catch(err => {
            setError(err)
        })

        //Setting loading to false regardless if the response was successfull or not
        setIsLoading(false)

    }, [urlConfig.url])

    return {
        isLoading,
        data,
        error
    }
}

export default useHTTP

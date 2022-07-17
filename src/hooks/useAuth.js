import { useEffect, useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const useAuthentication = (urlConfig) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let auth = getAuth();

  //login state
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (data || error) {
      //Setting loading to false regardless if the response was successfull or not
      setIsLoading(false);
    }
  }, [data, error]);

  const request = async (email, password) => {
    setError(null);
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        // if (!response.ok) {
        //   throw new Error(
        //     "Something happened and we could not process your request. Please try again"
        //   );
        // }
        //logging in using token data*********************
        // authCtx.login(response.idToken);
        return response;
      })
      .catch(setError);
  };

  // const request = async ({ url, method, body, headers }) => {
  //     setError(null)
  //     //Before making an api request, loading is set to true
  //     setIsLoading(true);

  //     //fetching data
  //     fetch(url, {
  //         method,
  //         body, headers
  //     }).then(async response => {
  //         const responseData = await response.json();
  //         if (!response.ok) {
  //             throw new Error('Something happened and we could not process your request');
  //         }
  //         console.log(responseData)
  //         return responseData
  //     }).then(responseData => {
  //         setData(responseData);
  //         //logging in using token data*********************
  //         authCtx.login(responseData.idToken)
  //     })
  //         // if we have gotten an error then we will end up here
  //         // using shorthand again instead of arrow function
  //         // it is the same as (err) => setErr(err)
  //         .catch(setError)

  // }

  return {
    isLoading,
    data,
    error,
    request,
  };
};

export default useAuthentication;

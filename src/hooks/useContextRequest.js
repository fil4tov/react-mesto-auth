import React from "react";
const useContextRequest = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const request = async ({fetchCallback, thenCallback}) => {
    setIsLoading(true)
    return await fetchCallback()
      .then(thenCallback)
      .catch(error => {
        setError(error)
        throw error
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {request, isLoading, error, setError}
}

export default useContextRequest
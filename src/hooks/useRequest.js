import React from "react";
const useRequest = ({initialLoading}) => {
  const [isLoading, setIsLoading] = React.useState(initialLoading);
  const [error, setError] = React.useState('');

  const request = async (callback) => {
    setIsLoading(true)

    try {
      return await callback()
    }
    catch (error) {
      setError(error)
      throw error
    }
    finally {
      setIsLoading(false)
    }
  }

  return {request, isLoading, error, setIsLoading}
}

export default useRequest
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { api } from "./api";

export default function useFetch<T> (url: string, options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(url, options);
        setData(res.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, []) 

  return { loading, data, error }
}
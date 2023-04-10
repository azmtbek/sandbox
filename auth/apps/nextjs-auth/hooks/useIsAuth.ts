import { useAuthContext } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

export default function useIsAuth() {
  const user = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user == null) router.push("/auth");
  }, [user]);
}

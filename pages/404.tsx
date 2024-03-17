import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);
  return <></>;
};

export default ErrorPage;

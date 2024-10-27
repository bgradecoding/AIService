'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/header';

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const NextProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="pt-14 md:pt-24">{children}</div>
    </>
  );
};

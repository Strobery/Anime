import "@/styles/index.css";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Query, QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount:false,
      refetchOnReconnect: false,
      retry: 1,
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
  <React.Fragment>
    <ToastContainer
     position="bottom-left"
     autoClose={5000}
     hideProgressBar={true}
     newestOnTop={true}
     closeOnClick
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme='dark'
    />
    <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
     </QueryClientProvider>
  </React.Fragment>
  )
}

export default MyApp
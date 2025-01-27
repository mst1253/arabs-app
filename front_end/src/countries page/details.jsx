//import Countries from './details/countries'
import Countries_History from './details/countries_history'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import './style.css'
export default function Details(){
    const queryClient=new QueryClient({})
    return(
        <>
            <div className="container bg-dark p-4 text-white">
                <QueryClientProvider client={queryClient}>
                    <Countries_History />
                </QueryClientProvider>
            </div>
        </>
    )
}
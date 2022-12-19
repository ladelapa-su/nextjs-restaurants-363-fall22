import Head from 'next/head' //seo component
import Header from './Header'
import Footer from './Footer'
import { Fragment } from 'react'

const Layout = ({children}) => {
    return <Fragment>
        <Head>
            <title>IST 363 Restaurants</title>
            <meta name="description" content="this is a description about our project"></meta>
        </Head>  
        <Header />
        <main>
        {children}
        </main>
        <Footer /> 
    </Fragment>
}
export default Layout
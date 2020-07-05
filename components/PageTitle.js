import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return(
        <Head>
            <title>PalpiteBox - { title }</title>
        </Head>
    )
}

export default PageTitle
import Head from 'next/head'
import {Box} from '@chakra-ui/react'

const Layout=()=>(
    <>
        <Head>
            <title>Real Estate</title>
            <Box maxWidth="1200px" m="auto">
                <header>Navbar</header>
                <main>{children}</main>
                <footer>Footer</footer>
            </Box>
        </Head>
    </>
);

export default Layout;
import { Box } from "@mui/material";
import Image from "next/image";
import Head from 'next/head';

const Banner = () => {
    return(
        <>
        <Head>
            <link 
            rel='preload'
            href='https://i.ytimg.com/vi/1oNl40Vxkpw/maxresdefault.jpg'
            as='image'
            />
        </Head>
        <Box sx={{position: 'relative', top: '120px', textAlign:'center', fontWeight: '800', fontSize: {xs: '45px', md:'60px'}, zIndex: 1}}>Distilled Awesome</Box>
        <Box sx={{margin: '0 auto', display: 'grid'}}>
<Image  width='1202' height='676' sizes='(max-width: 1000px) 100vw, 80vw' layout='intrinsic' priority style={{justifySelf: 'center', position: 'relative', objectFit: 'contain'}} src='https://i.ytimg.com/vi/1oNl40Vxkpw/maxresdefault.jpg' alt='cars banner'/>
</Box>
</>
    )
}

export default Banner;
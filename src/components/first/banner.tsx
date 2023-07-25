import { Box } from "@mui/material";
import Image from "next/image";

const Banner = () => {
    return(
        <>
        <Box sx={{position: 'relative', top: '120px', textAlign:'center', fontWeight: '800', fontSize: {xs: '45px', md:'60px'}, zIndex: 1}}>Distilled Awesome</Box>
        <Box sx={{margin: '0 auto', display: 'grid'}}>
<Image width='1202' height='676' layout='intrinsic' style={{justifySelf: 'center', position: 'relative', objectFit: 'contain'}} src='https://i.ytimg.com/vi/1oNl40Vxkpw/maxresdefault.jpg' alt='cars banner'/>
</Box>
</>
    )
}

export default Banner;
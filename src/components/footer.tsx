import { Box, Button } from "@mui/material"

const FooterItem = ({label}:{label:string}) => {
    return(
        <Button sx={{color: 'white', backgroundColor: '#403e3b'}}>
            {label}
        </Button>
    )
}

const Footer = () => {
    return(
        <Box sx={{display: 'flex', color: 'white', backgroundColor: '#403e3b', justifyContent: 'space-around'}}>
            <FooterItem label='Corporate Partnerships'/>
            <FooterItem label='Careers'/>
            <FooterItem label='Contact Us'/>
            <FooterItem label='Terms and Conditions'/>
            <FooterItem label='Privacy Policy'/>
        </Box>
    )
}

export default Footer;
/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/second/banner"
import Footer from "@/components/second/footer"
import Gallery from "@/components/second/gallery"
import { Header } from "@/components/second/header"
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import Image from "next/image"


export default function Page() {
  return (
    <>
    <Header />
    <div style={{maxWidth: '1500px', margin: '0 auto'}}>
    <Banner/>
    <Gallery/>
    <Card sx={{ maxWidth: '75%', margin: '50px auto' }}>
        <Box sx={{ height: {xs: '100px', sm: '200px'}, overflow: 'hidden', maxWidth: '100%'}}>
      <Image src='https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/IO5UFIXGPNAELCVFX725HNXOKM.jpg' alt='fast car' width={3000} height={1500} style={{objectFit: 'fill', objectPosition: '0px -100px', maxWidth: '100%', height: 'auto'}}/>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center', objectPosition: 'center'}}>
          Compensate for your lack of charisma with a fast car</Typography>
          <Typography variant="body1" color="text.secondary">
            Be a better version of you. Let us help you unlock your potential with a fast car. You'll look younger, feel better and be more popular. Instantly. Are you a confident, successful person? Well nobody will know that unless you have a fast car. We can help you with that.
    </Typography>
    </CardContent>
    </Card>
    </div>
    <Footer/>
    </>
  )
}
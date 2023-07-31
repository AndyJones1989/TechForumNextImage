/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/initial/banner";
import Footer from "@/components/initial/footer";
import Gallery from "@/components/initial/gallery";
import { Header } from "@/components/initial/header";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
      <Card sx={{ maxWidth: "75%", margin: "50px auto" }}>
        <CardMedia
          sx={{ objectFit: "cover", height: "180px" }}
          component="img"
          image="https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/IO5UFIXGPNAELCVFX725HNXOKM.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Compensate for your lack of charisma with a fast car
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Be a better version of yourself. Let us help you unlock your
            potential with a fast car. You'll look younger, feel better and be
            more popular. Instantly. Are you a confident, successful person?
            Well nobody will know that unless you have a fast car. We can help
            you with that.
          </Typography>
        </CardContent>
      </Card>
      <Footer />
    </>
  );
}

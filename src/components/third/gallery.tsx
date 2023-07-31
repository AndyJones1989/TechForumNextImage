import generateBlur from "@/utils/blur-generator";
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import Image from "next/image";

const Gallery = async () => {
  const generateBlurs = async () => {
    const blurs = await Promise.all(
      itemData.map(async (item) => {
        return await generateBlur(item.img);
      })
    );
    console.log(blurs);
    return blurs;
  };
  const blurArray = await generateBlurs();

  return (
    <ImageList sx={{ width: "75%", height: 850, margin: "20px auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          sx={{ color: "black", fontSize: "24px" }}
        >
          New in Stock
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item, index) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            sizes="35vw"
            alt={item.title}
            width={800}
            height={800}
            layout="intrinsic"
            priority={item.priority}
            placeholder="blur"
            blurDataURL={blurArray[index]}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/corvette_c8_tracking.jpg",
    title: "Lamborghini",
    author: "Edinburgh",
    rows: 2,
    cols: 2,
    featured: true,
    priority: true,
  },
  {
    img: "https://cdn.dicklovett.co.uk/uploads/used_stock_image/1_1122233_nl.jpg?v=1680714062",
    title: "Ferrari",
    author: "Fulham",
    priority: true,
  },
  {
    img: "https://media.wired.com/photos/592675f6cefba457b079a0cd/master/w_2560%2Cc_limit/SCG003S-FRONTTA.jpg",
    title: "Glickenhaus",
    author: "Leeds",
  },
  {
    img: "https://s.abcnews.com/images/Business/porsche-taycan-turbo-s-01-ht-iwb-210615_1623782736213_hpMain_16x9_1600.jpg",
    title: "Porsche",
    author: "Manchester",
    cols: 2,
  },
  {
    img: "https://i.ytimg.com/vi/bJZCM0lke_0/hqdefault.jpg",
    title: "Maserati",
    author: "Fulham",
    cols: 2,
  },
  {
    img: "https://robbreport.com/wp-content/uploads/2021/10/z0609.jpg?w=1000",
    title: "Chevrolet",
    author: "Leeds",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://cdni.autocarindia.com/ExtraImages/20211215012154_Toyota%20sports%20car.jpg",
    title: "Toyota",
    author: "Fulham",
  },
  {
    img: "https://topauto.co.za/wp-content/uploads/2021/11/Bugatti-Chiron-Super-Sport-Header-1.jpg",
    title: "Bugatti",
    author: "Stockport",
  },
];

export default Gallery;

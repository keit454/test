import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { pokemons } from "./const";
import Link from "next/link";

const getThumbnailFile = (id: number) => {
  if (id < 10) {
    return `./thumbnails/00${id}.png`;
  } else if (id < 100) {
    return `./thumbnails/0${id}.png`;
  } else {
    return `./thumbnails/${id}.png`;
  }
};

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              僕の作る最強のポケモン図鑑
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={1}>
        {pokemons.map((pokemon, index) => (
          <Grid item key={index}>
            <Card sx={{ width: 150, height: 250 }}>
              <CardMedia
                component="img"
                image={getThumbnailFile(pokemon.id)}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2">{pokemon.name.japanese}</Typography>
                <Typography variant="body2">{pokemon.type[0]}</Typography>
              </CardContent>
              <Button size="small">
                <Link href={`/page1?id=${pokemon.id}`}>About Us</Link>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

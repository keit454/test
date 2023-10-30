"use client";
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
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { pokemons } from "../const";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

  const getImageFile = (id: number) => {
    if (id < 10) {
      return `./images/00${id}.png`;
    } else if (id < 100) {
      return `./images/0${id}.png`;
    } else {
      return `./images/${id}.png`;
    }
  };
  const data = [
    {
      subject: "HP",
      value: pokemon?.base.HP,
    },
    {
      subject: "Attack",
      value: pokemon?.base.Attack,
    },
    {
      subject: "Defense",
      value: pokemon?.base.Defense,
    },
    {
      subject: "Sp. Attack",
      value: pokemon?.base["Sp. Attack"],
    },
    {
      subject: "Sp. Defense",
      value: pokemon?.base["Sp. Defense"],
    },
    {
      subject: "Speed",
      value: pokemon?.base.Speed,
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              僕の作る最強のポケモン図鑑
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack direction={"row"}>
        <Card sx={{ width: 300, height: 400 }}>
          <CardMedia
            component="img"
            image={getImageFile(pokemon ? pokemon.id : 0)}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2">{pokemon?.name.japanese}</Typography>
            <Typography variant="body2">{pokemon?.type[0]}</Typography>
          </CardContent>
        </Card>
        <Box width={500} height={500}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              {/* <PolarRadiusAxis /> */}
              <Radar
                name={pokemon?.name.japanese}
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </Stack>
    </>
  );
}

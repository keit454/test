import { AppBar, Box, Button, Card, IconButton, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import { pokemons } from './const'

export default function Home() {
  return (<>
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ポケモン図鑑
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  
  <Card>
  {pokemons.map((pokemon)=>pokemon.name.japanese)}
  </Card>
  
  </>
  )
}

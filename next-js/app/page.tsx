import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import { pokemons } from './const'


const getImageFileName=(id:number)=>{
if(id<10){
  console.log('00'+id+'.png')
  return '00'+id+'.png'
}else if(id<100){
  console.log(id+'.png')
  return '0'+id+'.png'
}else{
  return id+'.png'
}
}

export default function Home() {
  return (<>
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          僕の作る最強のポケモン図鑑
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  
 
  {pokemons.map((pokemon)=>{
return ( <Card sx={{ minWidth: 50 }}>
  <CardContent>
  <CardMedia
        sx={{ height: 100,width:100 }}
        image={getImageFileName(pokemon.id)}
        title="green iguana"
      />
    <Typography variant="body2">
      {pokemon.name.japanese}
    </Typography>
    <Typography variant="body2">
      {pokemon.type[0]}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>)
  })}
  </>
  )
}

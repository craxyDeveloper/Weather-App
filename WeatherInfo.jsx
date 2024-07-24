import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

export default function WeatherInfo({info}){
    const IN_URL='https://images.unsplash.com/photo-1675695759698-5aa675b7f972?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // let info={
    //   city:"Delhi",
    //   feelslike: 31.9,
    //   humidity: 79,
    //   pressure: 993,
    //   temp: 28 ,
    //   temp_max: 29,
    //   temp_min: 27,
    //   description: "haze"
    // }
     const R_URL="https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";
     const C_URL="https://unsplash.com/photos/the-sun-is-shining-over-the-snowy-mountains-3N74-q6L4WE";     
    return (
    <div className='cardcontainer'>
      <div>
      {/* <h1>Weather info - {info.description}</h1> */}
    <Card style={{textAlign:'center'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?R_URL:(info.temp) >15? IN_URL:C_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
             {info.city} {
              info.humidity>80? 
              <ThunderstormOutlinedIcon/>
              : (info.temp>15) ? 
              <LightModeOutlinedIcon />
              : 
              <AcUnitOutlinedIcon/>
             }
        </Typography>
        <Typography variant="body2" color="text.secondary" component='span'>
          <p>Temp:{info.temp}&#8451;</p>
          <p>Temp_max:{info.temp_max} &#8451;</p>
          <p>Temp_min:{info.temp_min} &#8451;</p>
          <p>Humidity: {info.humidity} &#37;</p>
          <p>The weather can be described as <i>{info.description} </i>and feels like {info.feelslike} &#8451;</p>
        </Typography>
      </CardContent>
      
    </Card>
      </div>
    </div>
    )
}
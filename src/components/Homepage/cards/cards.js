import React ,{useState}from 'react';
<<<<<<< HEAD
//import { makeStyles, useTheme } from '@material-ui/core/styles';
=======
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./cards.css";
<<<<<<< HEAD
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
=======
const useStyles = makeStyles({
    root1: {
        // maxWidth: 400,
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

  const useStylesForAvatar = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
  }))
  

<<<<<<< HEAD
  
  const ImgMediaCard = (props) => {
    const [data,setData]=useState({});
    const classes = useStyles();
=======
const ImgMediaCard = (props) => {
    const classesForCard = useStyles();
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
    const classesForAvatar = useStylesForAvatar();
    const [data,setData]=useState({});


  return (
    
    <Card className={classes.root}>
      
      <div>
                <div className={`${classesForAvatar.root} ${"myAvatar"}`}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        // src={props.photo}
                        className={classesForAvatar.large}
                        variant="circle"
                    />
                    {/* <span id="yolojoid">yolojo id</span> */}

                </div>

            </div>
<<<<<<< HEAD
        {/* <CardMedia
        className={classes.cover}
        image="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title={props.name}
      /> */}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ID : {props.id}
=======

            <div className="myActionArea">
                <CardActionArea className="cardActionArea">
                    <div className="myCardContent">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align='left'>
                               {props.name}
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
          </Typography>
                            <Typography gutterBottom variant="h5" component="h2" align='left'>
                                <hr></hr>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h3" align ='left' >
<<<<<<< HEAD
                                category:  {props.category.length >0 ? props.category:"N.A"}       Subcategory:  {props.subcategory.length>0 ? props.subcategory:"N.A"}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                Role:  {props.role}         verified:  {props.verified ? "True" :"False"}
                                </Typography>
                               
                           
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Upload
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      </div>
      </Card>
  );
=======
                                category:{props.category.length >0 ? props.category:"N.A"}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                Subcategory:{props.subcategory.length>0 ? props.subcategory:"N.A"}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                Role:{props.role}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                verified:{props.verified ? "True" :"False"}
                                </Typography>
                                
                           
                        </CardContent>
                    </div>

                    <CardActions className="CardAction">
                        <Container fluid>
                            <Row>
                                <Col xs={12} md={{span:6,offset:0}} sm={12} lg={6}>
                                    <Button size="small"
                                        color="primary"
                                        variant="contained"
                                        className="btn btn-block"
                                        id="upload"
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload
                                    </Button>
                                </Col>
                                <Col xs={12} md={{span:6,offset:0}} sm={12} lg={6}>
                                    <Button size="small" 
                                    variant="contained"
                                    className="btn btn-block" 
                                    color="secondary" 
                                    id="about-us"
                                    >
                                        About us...
                                    </Button>
                                </Col>
                            </Row>
                        </Container>


                    </CardActions>

                </CardActionArea>
            </div>




        </Card>
    );
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
}

export default ImgMediaCard;
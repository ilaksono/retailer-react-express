import axios from 'axios';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import 'styles/HomePage.scss';
import { Link } from 'react-router-dom';
import AppContext from 'AppContext';
const width = '20%';
export const images = [
  {
    url: '/items/1.jpeg',
    id: 0,
    title: 'Toy 1',
    priceCents: '99',
    width
  },
  {
    url: '/items/2.jpeg',
    id: 1,
    title: 'Toy 2',
    priceCents: '199',
    width
  },
  {
    url: '/items/3.jpeg',
    title: 'Toy 3',
    id: 2,
    priceCents: '299',
    width
  },
  {
    url: '/items/4.jpeg',
    title: 'Toy 4',
    id: 3,
    priceCents: '399',
    width
  },
  {
    url: '/items/5.jpeg',
    title: 'Toy 5',
    id: 4,
    priceCents: '499',

    width,

  },
  {
    url: '/items/6.jpeg',
    title: 'Toy 6',
    priceCents: '599',
    width,
    id: 5,

  },
  {
    url: '/items/7.jpeg',
    title: 'Toy 7',
    priceCents: '699',
    width,
    id: 6,

  },
  {
    url: '/items/8.jpeg',
    title: 'Toy 8',
    priceCents: '799',
    width,
    id: 7,
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    margin: "25px",
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const {
    clickItemHandle
  } = useContext(AppContext);
  return (
    <div className='home-layout'>
      <div
        style={{
          backgroundImage: "url('/bg.jpg')",
          width: '100%',
          margin: 0
        }}
        className='home-bg-container'
      >
      </div>
      <div className={`${classes.root} items-container`}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <Link to={`/items/${image.id}`}
              onClick={() => clickItemHandle({
                url: image.url,
                name: image.title,
                priceCents: image.priceCents,
                id: image.id
              })}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </Link>
          </ButtonBase>
        ))}
      </div>
    </div>
  );

};

export default HomePage;
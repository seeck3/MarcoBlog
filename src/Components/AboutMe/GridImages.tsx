import React from 'react';

import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { AspectRatio } from '@material-ui/icons';
import { GridImagesProps } from '../type';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    fullImage: {
      maxHeight: '80vh',
    },
    gridList: {
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);
export const GridImages = ({ setSelectedImg, images }: GridImagesProps) => {
  const classes = useStyles();
  return (
    <GridList cellHeight={186} spacing={1} className={classes.gridList}>
      {images.map((tile, index) => (
        <GridListTile
          key={tile.img}
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
            actionIcon={
              <IconButton
                onClick={() => setSelectedImg(images[index])}
                aria-label={`info about ${tile.title}`}
                className={classes.icon}
              >
                <AspectRatio />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

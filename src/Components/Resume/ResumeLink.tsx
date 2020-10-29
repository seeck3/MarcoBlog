import React from 'react';

import { Button, Menu, MenuItem, makeStyles, Link } from '@material-ui/core';
import { resumeDoc, resumePdf } from '../../asset/resumes';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});
const ResumeLink = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.container}>
      <Button
        variant='outlined'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Download Resume
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href={resumePdf} download>
            Download as PDF
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={resumeDoc} download>
            Download as DOC
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ResumeLink;

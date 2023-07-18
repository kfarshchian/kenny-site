import { motion } from "framer-motion";
import React from "react";
import { Backdrop } from "../Backdrop";
import './appnav.scss'
import AppNavItem from "../AppNavItem";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function AppNav({handleClose, pages, pageLinks, children}) {
//  Utah
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  // Florida
  const [anchorElflorida, setAnchorElflorida] = React.useState(null);
  const openflorida = Boolean(anchorElflorida);
  const handleClickflorida = (event) => {
    setAnchorElflorida(event.currentTarget);
  };
  const handleCloseflorida = () => {
    setAnchorElflorida(null);
  };
  // Texas
  const [anchorElTexas, setAnchorElTexas] = React.useState(null);
  const openTexas = Boolean(anchorElTexas);
  const handleClickTexas = (event) => {
    setAnchorElTexas(event.currentTarget);
  };
  const handleCloseTexas = () => {
    setAnchorElTexas(null);
  };


  const slideIn = {
    hidden: {
      width: 0,
      opacity: 0
    },
    visible: {
      width: '200px',
      opacity: 0.9,
      transition: {
        delay: 0.2,
        duration: 0.1,
        type: "spring",
        damping: 50,
        stiffness: 1000,
      }
    },
    exit: {
      width: 0,
      opactiy: 0,
      transition:{
        duration: 0.1
      }
    }
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e)=>e.stopPropagation()}
        className='nav-modal'
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AppNavItem handleClose={handleClose} page={'Home'} pageLink={'/'}/>
        <AppNavItem handleClose={handleClose} page={'About Us'} pageLink={'/aboutus'}/>
        <AppNavItem handleClose={handleClose} page={'Loans'} pageLink={'/Loans'}/>
        <AppNavItem handleClose={handleClose} page={'Contact Us'} pageLink={'/contact'}/>
        <AppNavItem handleClose={handleClose} page={'Our Process'} pageLink={'/our-process'}/>
        <AppNavItem handleClose={handleClose} page={'Closing Guarantee'} pageLink={'/closing-guarantee'}/>
        <AppNavItem handleClose={handleClose} page={'Disclosure and Information'} pageLink={'/Disclosure'}/>
        
        <div id="buttonDiv">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Utah
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'Salt Lake City'} pageLink={'/Utah-mortgage-salt-lake-city'}/></MenuItem>
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'Layton'} pageLink={'/Utah-mortgage-Layton'}/></MenuItem>
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'Bountiful'} pageLink={'/Utah-mortgage-Bountiful'}/></MenuItem>
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'Syracuse'} pageLink={'/Utah-Mortgage-Syracuse'}/></MenuItem>
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'Ogden'} pageLink={'/Reverse-mortgage-Utah-Ogden'}/></MenuItem>
        <MenuItem onClick={handleClose1}><AppNavItem handleClose={handleClose} page={'West Valley City'} pageLink={'/Reverse-mortgage-Utah-WestValleyCity'}/></MenuItem>
      </Menu>
    </div>

    <div id="buttonDiv">
      <Button
        id="basic-button"
        aria-controls={openflorida ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openflorida ? 'true' : undefined}
        onClick={handleClickflorida}
      >
        Florida
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElflorida}
        open={openflorida}
        onClose={handleCloseflorida}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseflorida}><AppNavItem handleClose={handleClose} page={'Venice'} pageLink={'/Reverse-mortgage-Florida-Venice'}/></MenuItem>
        <MenuItem onClick={handleCloseflorida}><AppNavItem handleClose={handleClose} page={'Palm Beach'} pageLink={'/Reverse-mortgage-Florida-Palm-Beach'}/></MenuItem>
        <MenuItem onClick={handleCloseflorida}><AppNavItem handleClose={handleClose} page={'Naples'} pageLink={'/Reverse-mortgage-Florida-Naples'}/></MenuItem>
      </Menu>
    </div>
        
    <div id="buttonDiv">
      <Button
        id="basic-button"
        aria-controls={openTexas ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openTexas ? 'true' : undefined}
        onClick={handleClickTexas}
      >
        Texas
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElTexas}
        open={openTexas}
        onClose={handleCloseTexas}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseTexas}><AppNavItem handleClose={handleClose} page={'Austin'} pageLink={'/Reverse-mortgage-Texas-Austin'}/></MenuItem>
        <MenuItem onClick={handleCloseTexas}><AppNavItem handleClose={handleClose} page={'Dallas'} pageLink={'/Reverse-mortgage-Texas-Dallas'}/></MenuItem>
        <MenuItem onClick={handleCloseTexas}><AppNavItem handleClose={handleClose} page={'Houston'} pageLink={'/Reverse-mortgage-Texas-Houston'}/></MenuItem>
      </Menu>
    </div>
     
      </motion.div>
    </Backdrop>
  )
}

export default AppNav
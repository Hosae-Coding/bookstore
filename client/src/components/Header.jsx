import React from 'react';

import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   const [value, setValue] = useState();
   return (
      <div>
         <AppBar position="sticky">
            <Toolbar>
               <Typography LinkComponent={NavLink} to="/">
                  Book Store
               </Typography>
               <Tabs
                  textColor="inherit"
                  indicatorColor="secondary"
                  value={value}
                  onChange={(e, value) => setValue(value)}
               >
                  <Tab label="Add books" LinkComponent={NavLink} to="/add" />

                  <Tab label="Books" LinkComponent={NavLink} to="/books" />
               </Tabs>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;

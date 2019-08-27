import React, { Fragment, useState } from "react";
import { Menu, MenuItem } from "../src/packages/menu";
import  PageHeader  from "../src/components/PageHeader";
import { Grid, GridItem } from "../src/packages/grids";
import NavBar from "../src/components/NavBar";
import {BlogCard} from './styled/index'

const Blog = () => {

  const tabs = ['All', 'Productivity', 'Physcologie']

  const [ selectedTab, setTab] = useState('All');

return (
  <Fragment>
    <NavBar isTransparent color="tertiaryContrast"/>
    <PageHeader />
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="span 12"
        columnStartMd="2"
        columnEndMd="span 10"
        columnStartLg="2"
        columnEndLg="11"
      >
        <Menu>
          {tabs.map(tab => <MenuItem isActive={selectedTab === tab} onClick={()=> setTab(tab)}> {tab} </MenuItem>)}
        </Menu>
      </GridItem>
      <GridItem
        columnStartSm="1"
        columnEndSm="span 12"
        columnStartMd="1"
        columnEndMd="span 10"
        columnStartLg="1"
        columnEndLg="12"
      >
        <BlogCard
          title="Floortje naar het einde van de wereld"
          subtitle="Elke werkdag 20:00 uur op NPO 2"
          tags="Destinations, Inspirations"
          imageSrc="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
        />
             <BlogCard
          title="Floortje naar het einde van de wereld"
          subtitle="Elke werkdag 20:00 uur op NPO 2"
          tags="Destinations, Inspirations"
          imageSrc="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
        />
             <BlogCard
          title="Floortje naar het einde van de wereld"
          subtitle="Elke werkdag 20:00 uur op NPO 2"
          tags="Destinations, Inspirations"
          imageSrc="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
        />
      </GridItem>
    </Grid>
  </Fragment>
);
}

export default Blog;

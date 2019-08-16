import React, { Fragment } from "react";
import { BlogCard2 } from "../src/packages/cards";
import { Menu, MenuItem } from "../src/packages/menu";
import { PageHeader } from "../src/packages/headers";
import { Grid, GridItem } from "../src/packages/grids";

const Blog = () => (
  <Fragment>
    <PageHeader />
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="span 12"
        columnStartMd="2"
        columnEndMd="span 10"
        columnStartLg="3"
        columnEndLg="11"
      >
        <Menu>
          <MenuItem>
            <a> All </a>
          </MenuItem>
          <MenuItem>
            <a> Productivity </a>
          </MenuItem>
          <MenuItem isActive>
            <a> Welness</a>
          </MenuItem>
          <MenuItem>
            <a> Fitness</a>
          </MenuItem>
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
        <BlogCard2
          title="Floortje naar het einde van de wereld"
          subtitle="Elke werkdag 20:00 uur op NPO 2"
          tags="Destinations👌, Inspirations👌"
          imageSrc="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
        />
      </GridItem>
    </Grid>
  </Fragment>
);

export default Blog;

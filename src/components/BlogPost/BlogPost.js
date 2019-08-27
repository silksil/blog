import React, { Fragment } from "react";
import { ArticleHeader } from "../../packages/headers";
import { Text } from "../../packages/typography";
import { GridItem } from "../../packages/grids";
import Grid from "./styled";

const BlogPost = () => (
  <Fragment>
    <ArticleHeader
      title="Floortje naar het einde van asdf de wereld"
      subtitle="Elke werkdag 20:00 uur op NPO 2"
      meta="Destinations, Inspirations"
      image="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
    />
    <Text>
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="2"
          columnEndMd="span 10"
          columnStartLg="4"
          columnEndLg="10"
        >
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <br />
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
          </ul>
          <blockquote>
            "Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
            vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo."
            <div> – Sil Kreulen</div>
          </blockquote>
          <h3> Hello world </h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <img
            srcSet="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
            src="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
            alt="image of me"
          />
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </GridItem>
      </Grid>
    </Text>
  </Fragment>
);

export default BlogPost;

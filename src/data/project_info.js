import React from 'react'

const projectInfo = {
  "projects": {
    "8bit_master": {
    "id": "8bit_master",
    "name": "The 8-bit Master",
    "repo": false,
    "demo": false,
    "desc": (
    <article>
      This was my first official programming endeavor. After reading through a few books about Swift and watching some YouTube tutorials, I finally got a good enough feel for the the Apple Swift language and went to work designing this game!<br/>
      I designed all of the graphics and art, even the soundtrack. <br/>
      It featured 1 playable game on released version, Meteoroids.<br/>
      <h4>Highlights of the 8-bit Master</h4>
      <ul>
        <li>It featured an intuitive virtual game console interface</li>
        <li>This interface included virtual buttons and plus pad used to interact with what is displayed on the screen</li>
        <li>Allowed for multiple games to be loaded on there</li>
        <li>It had a store that allowed users to purchase in-game currency or watch an ad to earn it</li>
        (made $5 from in-app purchases during the time it was on the app store 😮)
      </ul>
      <h4>Meteoroids Features</h4>
      This game was modeled after classic arcade space shooter games.
      <ul>
        <li>Tt allowed the user to earn gold by shooting asteroids in space</li>
        <li>use that gold to purchase power-ups and use those power-ups during gameplay</li>
        <li>Let users make various upgrades to their gameplay over time</li>
      </ul>
    </article>
    ),
    "langs": ["Swift"],
    "techs": ["Spritekit"],
    "screenshotCaptions": ["Playing the meteoroids game.", "Home menu screen on full release v1.0", "Upgrade your abilities screen.", "Purchasing 'Very Strong Mints!' on the power-ups store.", "Screenshot of indev version 2.0"]
    },
    "inventory_manager": {
    "id": "inventory_manager",
    "name": "Inventory Manager - My Ruby Project",
    "repo": "https://github.com/Coffee-Dust/Inventory-Manager",
    "demo": true,
    "CLI": true,
    "desc": (
      <article>
        This project is a full SQL-less command-line interface database program. Why is it SQL-less? Up until this point, I had no knowledge of Structured Query Languages or how databases worked. What I did know, was how to create ruby objects in memory and create relationships between them.<br/>
        So this project is a full inventory software that can Create, Read, Update, and Delete data, as well as organize and categorize that data.
        <h4>Highlights</h4>
        <ul>
          <li>Intuitive command line interface.</li>
          <li>It converts those ruby objects into a JSON format and saves them to a JSON file.</li>
          <li>It also scrapes data from Publix to seed the database.</li>
          <li>It can organize items into departments, categories and sub-categories.</li>
        </ul>
      </article>
    ),
    "langs": ["Ruby"],
    "techs": ["Nokogiri Gem"]
    },
    "local_coffeeshop": {
    "id": "local_coffeeshop",
    "name": "The Local Coffeeshop - My Sinatra Project",
    "repo": "https://github.com/Coffee-Dust/the-local-coffeeshop",
    "demo": true,
    "desc": (
      <article>
        This was my first project in the world of Server Side web programming, as well as relational database design. It was built in the <a href="http://sinatrarb.com" target="_blank">Sinatra Domain Specific Language</a>, which is basically a ‘less magical’ Rails framework.<br/>
        <h4>The Local Coffeeshop web app allows users to view:</h4>
        <ul>
          <li>Local coffeeshops in the area</li>
          <li>Review those coffeeshops</li>
          <li>View what drinks are the best</li>
        </ul>
        You can also keep track of your favorite coffeeshops, look at, revise, or delete your reviews!
      </article>
    ),
    "langs": ["Ruby"],
    "techs": ["Sinatra", "ActiveRecord", "SQL", "REST"]
    },

    "my_coffee_table": {
    "id": "my_coffee_table",
    "name": "My Coffee Table - My Javascript/Rails Project",
    "repo": "https://github.com/Coffee-Dust/My-Coffee-Table",
    "demo": true,
    "desc": (
    <article>
      This is possibly my favorite project and the one I am most proud of. I actually use it personally quite a lot to hold various embeded music videos and radio streams from Youtube.<br/>
      It was actually built in pure ES6 Javascript in an object oriented fashion with a Ruby on Rails API server for data persistence.<br/>
      <h4>The My Coffee Table app allows users to: </h4>
      <ul>
        <li>Create a virtual coffee tabletop</li>
        <li>Create various elements and place them on that coffee table</li>
        <li>Those elements can be Links, embeded content via iFrame, notes, pictures and more.</li>
        <li>Save and play youtube videos right on your coffee table</li>
        <li>Move those elements by dragging them around the table</li>
        <li>Customize those elements with preset styles and inline CSS</li>
      </ul>
    </article>
    ),
    "langs": [],
    "techs": [],
    "screenshotCaptions": ["My personal coffee table to hold my music stations"]
    },
    "coffee_beans": {
    "id": "coffee_beans",
    "name": "Coffee Beans: Social - My React/Rails Project",
    "repo": "https://github.com/Coffee-Dust/React-Coffee-Beans",
    "demo": true,
    "desc": (
      <article>
        Coffee-Beans is basically a Twitter clone, with the original idea being being, only allowing posts about coffee
        This project idea was initially my Rails portfolio project(the repo can be found <a href="https://github.com/Coffee-Dust/Coffee-Beans" target="_blank" rel="noreferrer">here</a>), but I later decided to make a fork of this domain model and use it for my React portfolio project.<br/>
        On the rails side of things, I had to turn the domain model of the database into a more API friendly version. For the front end, as my original rails project was built using just ERB(embeded ruby) files, and no Javascript. I had to start from scratch on that front. <br/>
        <h4>Some Highlights</h4>
        <ul>
          <li>Post "beans" and view posts from different users</li>
          <li>React to those posts with multiple "reaction" options</li>
          <li>Comment on posts and react to them just like you can with posts</li>
          <li>Only post about coffee or get your account deleted 😬</li>
        </ul>
      </article>
    ),
    "langs": [],
    "techs": [],
    "screenshotCaptions": ["Bean-feed page.", "Viewing a bean fullscreen"]
    }
  }
}

export default projectInfo
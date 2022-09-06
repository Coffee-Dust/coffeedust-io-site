import React from 'react'
import VirtCoffLogo from '../assets/vclogo.png'
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
      </ul>
      <h4>Meteoroids Features</h4>
      This game was modeled after classic arcade space shooter games.
      <ul>
        <li>It allowed the user to earn gold by shooting asteroids in space</li>
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
        This project is a full SQL-less command-line interface database program. <br/>
        It is a full inventory software that can Create, Read, Update, and Delete data, as well as organize and categorize that data.
        <h4>Highlights</h4>
        <ul>
          <li>Intuitive command line interface.</li>
          <li>It converts those ruby objects into a JSON format and saves them to a JSON file.</li>
          <li>It can organize items into departments, categories and sub-categories.</li>
          <li>It also scrapes data from Publix to seed the database with sample data.</li>
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
    },
    "virtually_8bit": {
      "id": "virtually_8bit",
      "name": "Virtually 8-bit! iOS App",
      "repo": "",
      "demo": false,
      "desc": (
        <article>
          <a href="https://virtually.coffee/virtually8bit" target="_blank" rel="noreferrer" style={{marginRight: 10}}>
            <button style={{height: 30, backgroundColor: "antiquewhite", padding: "1px 6px 1px 6px", borderRadius: 10, textAlign: 'center'}}>
              <img src={VirtCoffLogo} style={{height: "100%", verticalAlign: "middle"}}/> <span style={{fontSize: "1.2em", fontFamily: "'Souce-Code-Pro', monospace", verticalAlign: "middle"}}> Promo Page</span>
            </button>
          </a>
          <a href="https://download.virtually8bit.virtually.coffee/" target="_blank" rel="noreferrer">
            <button style={{height: 30, backgroundColor: "antiquewhite", padding: "1px 6px 1px 6px", borderRadius: 10, textAlign: 'center'}}>
              <span style={{fontSize: '1.8em', verticalAlign: "middle"}}></span> <span style={{fontSize: "1.2em", fontFamily: "'Souce-Code-Pro', monospace", verticalAlign: "middle"}}> App Store Page</span>
            </button>
          </a>
          
          <p>
            Published iOS app/game that featured a classic gameboy-like interface and allowed users to play multiple 8-bit style games.
            Reengineered from the ground up, <em>Virtually 8-bit!</em> takes the concept (and some of the art) from my orginal ios game The 8-bit Master only it is 100% better in everyway.
          </p>
          <h4>Some Highlights</h4>
          <ul>
            <li>Engineered in a way that separates the Console's(app's) 'hardware' and 'software' systems. That allows for better code management and growth. I also built it in a way that allows code to be reused in multiple different games.</li>
            <li>Currently holds 2 playable games inside of it(more on the way), Meteoroids and Bit-Breaker. Meteoroids is an arcade space shooter that features power-ups and player upgradable abilities. Bit-Breaker is a breakout style game with randomly generated levels.</li>
            <li>It features SpriteKit as the physics engine, UIKit for handling 'virtual-analog' button touch events as well as all of the console's UI layout, and CloudKit for persisting user data when connected online, otherwise stores data locally until it can be synced.</li>
          </ul>
        </article>
      ),
      "langs": ["Swift"],
      "techs": ["Spritekit"],
      "screenshotCaptions": []
    }
  }
}

export default projectInfo
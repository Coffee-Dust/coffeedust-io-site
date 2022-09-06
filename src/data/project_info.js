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
      
      <a href="https://appadvice.com/app/the-8-bit-master-the-handheld-gaming-console/1213057100" target="_blank" rel="noreferrer">
        <button style={{height: 30, backgroundColor: "antiquewhite", padding: "1px 6px 1px 6px", borderRadius: 10, textAlign: 'center'}}>
          <span style={{fontSize: '1.8em', verticalAlign: "middle"}}></span> <span style={{fontSize: "1.2em", fontFamily: "'Souce-Code-Pro', monospace", verticalAlign: "middle"}}> Archived App Store Page</span>
        </button>
      </a>

      <p>
        This was my first official programming endeavor. After reading through books and watching many tutorials about Swift, I finally got a good enough feel for the Apple Swift language and went to work designing this game!<br/>
        I designed all of the graphics and art, even the soundtrack. <br/>
        It featured 1 playable game on released version, Meteoroids.<br/>
      </p>

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
        <li>Use that gold to purchase power-ups and use those power-ups during gameplay</li>
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
    "name": "Inventory Manager",
    "repo": "https://github.com/Coffee-Dust/Inventory-Manager",
    "demo": true,
    "CLI": true,
    "desc": (
      <article>
        This command-line application is a full inventory software that can Create, Read, Update, and Delete data, as well as organize and categorize that data. It will also keep track of the quanitity of items you add and let you know what items are low and need to be 'ordered'.<br />
        This project is a full SQL-less command-line interface database program that persists data in a JSON file.
        <h4>Highlights</h4>
        <ul>
          <li>Intuitive command line interface.</li>
          <li>It converts ruby objects into a JSON format and writes them to the JSON file.</li>
          <li>Organize items into departments, categories and sub-categories.</li>
          <li>Allows users to keep track of quantity of items and add them to 'orders'.</li>
          <li>Will show users which items are low in inventory and suggest adding them to an upcoming 'order'.</li>
        </ul>
      </article>
    ),
    "langs": ["Ruby"],
    "techs": ["Nokogiri Gem"]
    },
    "local_coffeeshop": {
    "id": "local_coffeeshop",
    "name": "The Local Coffeeshop",
    "repo": "https://github.com/Coffee-Dust/the-local-coffeeshop",
    "demo": true,
    "desc": (
      <article>
        This is a monolithic web application and was built in the Sinatra Domain Specific Language, which is basically a ‘less magical’ Rails framework.<br/>
        (please forgive the lack of styling 😬)
        <h4>The Local Coffeeshop web app allows users to:</h4>
        <ul>
          <li>View local coffeeshops in the area.</li>
          <li>Review those coffeeshops.</li>
          <li>View what drinks are the best.</li>
          <li>Add their favorite drink.</li>
        </ul>
        You can also keep track of your favorite coffeeshops, look at, revise, or delete your reviews!
      </article>
    ),
    "langs": ["Ruby"],
    "techs": ["Sinatra", "ActiveRecord", "SQL", "REST"],
    "screenshotCaptions": ["Viewing a local coffee shop with reviews.", "The user's homepage showing coffee shops in the area along with their favorites."]
    },

    "my_coffee_table": {
    "id": "my_coffee_table",
    "name": "My Coffee Table",
    "repo": "https://github.com/Coffee-Dust/My-Coffee-Table",
    "demo": true,
    "desc": (
    <article>
      This is a single page web application that acts kinda like a MySpace Page(yeah I know, I feel old :/) meets an OS' Desktop screen.<br/>
      It was built in pure ES6 Javascript in an object oriented fashion with a Ruby on Rails RESTful API server for data persistence.<br/>
      <h4>The My Coffee Table app allows users to: </h4>
      <ul>
        <li>Create a virtual coffee tabletop/desktop.</li>
        <li>Create various elements and place them on that coffee table.</li>
        <li>Those elements can be Links, embeded content via iFrame, notes, pictures and more.</li>
        <li>Save and play youtube videos right on your coffee table.</li>
        <li>Move those elements by dragging them around the table, along with saving their location.</li>
        <li>Customize those elements with preset styles and inline CSS.</li>
      </ul>
    </article>
    ),
    "langs": [],
    "techs": [],
    "screenshotCaptions": ["My personal 'Coffee Table' to hold my programming music(a lot of lo-fi and chill songs) and that vibin' cat GIF."]
    },
    "coffee_beans": {
    "id": "coffee_beans",
    "name": "Coffee Beans - Social Network",
    "repo": "https://github.com/Coffee-Dust/React-Coffee-Beans",
    "demo": true,
    "desc": (
      <article>
        A twitter clone where tweets are coffee beans. Users can share pictures, stories, comment on posts and react to both comments and posts alike.<br/>
        This project was initially created as a monolithic web server in Ruby on Rails(the repo can be found <a href="https://github.com/Coffee-Dust/Coffee-Beans" target="_blank" rel="noreferrer">here</a>), but I later decided to make a fork of this domain model(basically just the database) and build it as a single page application in the React framework, with the backend as a REST API server.<br/>
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
      "name": "Virtually 8-bit!",
      "repo": "",
      "demo": false,
      "desc": (
        <article>
          <a href="https://virtually.coffee/virtually8bit" target="_blank" rel="noreferrer" style={{marginRight: 10}}>
            <button style={{height: 30, backgroundColor: "antiquewhite", padding: "1px 6px 1px 6px", borderRadius: 10, textAlign: 'center'}}>
              <img src={VirtCoffLogo} style={{height: "100%", verticalAlign: "middle"}}/> <span style={{fontSize: "1.2em", fontFamily: "'Souce-Code-Pro', monospace", verticalAlign: "middle"}}> Promo Page</span>
            </button>
          </a>
          <a href="//download.virtually8bit.virtually.coffee/" target="_blank" rel="noreferrer">
            <button style={{height: 30, backgroundColor: "antiquewhite", padding: "1px 6px 1px 6px", borderRadius: 10, textAlign: 'center'}}>
              <span style={{fontSize: '1.8em', verticalAlign: "middle"}}></span> <span style={{fontSize: "1.2em", fontFamily: "'Souce-Code-Pro', monospace", verticalAlign: "middle"}}> App Store Page</span>
            </button>
          </a>
          
          <p>
            Published iOS app/game that featured a classic gameboy-like interface and allowed users to play multiple 8-bit style games.
            {/* Reengineered from the ground up, <em>Virtually 8-bit!</em> takes the concept (and some of the art) from my orginal ios game The 8-bit Master only it is 100% better in everyway. */}
          </p>
          <h4>Some Highlights</h4>
          <ul>
            <li>Engineered in a way that separates the Console's(app's) 'hardware' and 'software' systems. That allows for better code management and growth. I also built it in a way that allows code to be reused in multiple different games.</li>
            <li>Currently holds 2 playable games inside of it(more on the way), <strong>Meteoroids</strong> and <strong>Bit-Breaker</strong>.</li>
            <li><strong>Meteoroids</strong> is an arcade space shooter that features power-ups and player upgradable abilities. </li>
            <li><strong>Bit-Breaker</strong> is a breakout style game with randomly generated levels(as of version bbv0.2).</li>
            <li>It features SpriteKit as the physics engine, UIKit for handling 'virtual-analog' button touch events as well as all of the console's UI layout, and CloudKit for persisting user data when connected online, otherwise stores data locally until it can be synced.</li>
          </ul>
        </article>
      ),
      "langs": ["Swift"],
      "techs": ["Spritekit"],
      "screenshotCaptions": ["The 'Game Menu' selection menu with Meteoroids currently selected.", "Playing Meteoroids game while 'Very Strong Mint!' powerup is active.", "Playing the game version v0.2(Early access) Bit-Breaker.", "View of Meteoroids' Powerups Shop menu, with 'Very Strong Mint!' selected.", "View of Meteoroids' Upgrades menu shop with 'Space-Gold Value' selected.", "The 'tutorial', which acts as a paper book called 'Quick Start Guide'"]
    }
  }
}

export default projectInfo
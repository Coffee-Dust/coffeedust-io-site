import React from 'react'

const projectInfo = {
  "projects": [
    {
    "id": "8bit_master",
    "name": "The 8-bit Master",
    "repo": false,
    "demo": false,
    "desc": (
    <article>
      This was my first official programming endeavor. After reading through a few books about Swift and watching some YouTube tutorials, I finally got a good enough feel for the the Apple Swift language and went to work designing this game!<br/>
      I designed all of the graphics and art, even the soundtrack. <br/>
      It featured 1 game on the App Store version, Meteoroids.<br/>
      This game was modeled after classic arcade space shooter games and it allowed the user to earn gold, use that gold to purchase power-ups and use those power-ups during the game.
    </article>
    ),
    "langs": ["Swift"],
    "techs": ["Spritekit"]
    },
    {
    "id": "inventory_manager",
    "name": "Inventory Manager - My Ruby Project",
    "repo": "https://github.com/Coffee-Dust/Inventory-Manager",
    "demo": false,
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
    {
    "id": "local_coffeeshop",
    "name": "The Local Coffeeshop - My Sinatra Project",
    "repo": "https://github.com/Coffee-Dust/the-local-coffeeshop",
    "demo": false,
    "desc": (
      <article>
        This was my first project in the world of Server Side web programming, as well as relational database design. It was built in the Sinatra Domain Specific Language, which is basically a ‘less magical’ Rails framework.<br/>
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

    {
    "id": "my_coffee_table",
    "name": "My Coffee Table - My Javascript/Rails Project",
    "repo": "https://github.com/Coffee-Dust/My-Coffee-Table",
    "demo": false,
    "desc": (
    <article>

    </article>
    ),
    "langs": [],
    "techs": []
    },
    {
    "id": "coffee_beans",
    "name": "Coffee Beans: Social - My React/Rails Project",
    "repo": "https://github.com/Coffee-Dust/React-Coffee-Beans",
    "demo": false,
    "desc": "",
    "langs": [],
    "techs": []
    }
  ]
}

export default projectInfo
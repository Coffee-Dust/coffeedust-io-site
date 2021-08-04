import React from 'react'
const stackKnawledgeDesc = {

  "ruby": (
  <article>
    <h2>Ruby</h2>
    <p>
      I learned this language during my curriculum at Flatiron School and it is probably the language I have used the most.<br/>
      In fact, this would be the second programming language I learned, after Swift.(not counting html or css)<br/>
      I do enjoy the simple syntax of the language, but I do actually prefer strongly-typed languages like Swift.<br/>
      <br/>
      I've learned most of the ins and outs of this language, such as its method based approach to properties, and some more complicated things, like it's concurrent multi-threading system.<br/>
      <br/>
      Almost every major project I've built uses Ruby in some way. However, the projects I have below were mostly made with just Ruby, no major Frameworks.
    </p>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this language.</h4>
      <a href="/projects/inventory_manager"><img src={require(`./../assets/project_icons/inventory_manager_icon.png`).default} alt="" /></a>
      <a href="/projects/local_coffeeshop"><img src={require(`./../assets/project_icons/local_coffeeshop_icon.png`).default} alt="" /></a>
    </div>
  </article>
  ),

  "js": (
  <article>
    <h2>Javascript</h2>
    <p>
      This language was very different from the ones I had previously learned, but I quickly got the hang of it.<br/>
      The features that I actually liked was the way functions and methods are considered "first class citizens".<br/>
      I really enjoyed this functionality and quickly got used to using callbacks and where to use them.<br/>
      Despite the prototype inheritence model which was quite different from things I previously had experience with, I was able to learn the ends and outs of Object Oriented programming in JS and how it was different than other languages.<br />
      Although the history of this language is kind of a mess, the ES6 updates to it have made it really nice to use and going back to languages like ruby were a bit strange since I didn't have the ability to pass in methods like any other argument.
    </p>
    <p>
      After my first all Javascript project, I really learned how to deal with it's quirkiness, and make use of it's features.
    </p>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this language.</h4>
      <a href="/projects/my_coffee_table"><img src={require(`./../assets/project_icons/my_coffee_table_icon.png`).default} alt="" /></a>
    </div>
  </article>
  ),

  "swift": (
  <article>
    <h2>Swift</h2>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this language.</h4>
      <a href="/projects/8bit_master"><img src={require(`./../assets/project_icons/8bit_master_icon.png`).default} alt="" /></a>
    </div>
  </article>
  ),

  "rails": (
  <article>
    <h2>Ruby on Rails</h2>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this framework.</h4>
      <a href="/projects/coffee_beans"><img src={require(`./../assets/project_icons/coffee_beans_icon.png`).default} alt="" /></a>
      <a href="/projects/my_coffee_table"><img src={require(`./../assets/project_icons/my_coffee_table_icon.png`).default} alt="" /></a>
    </div>
  </article>
  ),

  "react": (
  <article>
    <h2>React and Redux</h2>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this framework.</h4>
      <a href="/projects/coffee_beans"><img src={require(`./../assets/project_icons/coffee_beans_icon.png`).default} alt="" /></a>
    </div>
  </article>
  ),

  "html": (
  <article>
    <h2>HTML 5 and CSS 3</h2>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this tech.</h4>
      <a href="/projects/local_coffeeshop"><img src={require(`./../assets/project_icons/local_coffeeshop_icon.png`).default} alt="" /></a>
      <a href="/projects/my_coffee_table"><img src={require(`./../assets/project_icons/my_coffee_table_icon.png`).default} alt="" /></a>
      <a href="/projects/coffee_beans"><img src={require(`./../assets/project_icons/coffee_beans_icon.png`).default} alt="" /></a>
    </div>
  </article>
  )
}

export default stackKnawledgeDesc
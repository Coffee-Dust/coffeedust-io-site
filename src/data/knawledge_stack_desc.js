import React from 'react'
const stackKnawledgeDesc = {

  "ruby": (
  <article>
    <h2>Ruby</h2>
    <p>
      This is one of the initial programming languages I learned after Swift. I do enjoy the simple syntax of the language, however I prefer statically-typed languages.<br/>
      <br/>
      I've learned most of the ins and outs of this language, such as its method based approach to properties, and some more complicated things, like it's concurrent multi-threading system.<br/>
      <br/>
      Most of the portfolio projects I've built, use Ruby in some way. However, the projects I have below were mostly made with just Ruby, no major Frameworks.
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
      Despite the prototype inheritence model which was quite different from languages I previously experienced, I was able to feel a little bit at home with the Object Oriented programming it offered in ES6 (even though its just syntax sugar).<br/>
      <br/>
      It was kind of frustrating to write a good amount of code that seemed like it should work on paper, and then just get the end result of 'undefined', but thankfully with the invention and industry adoption of TypeScript, I am able to feel a lot more at home and comfortable with using this 'unique'(being nice) language called JavaScript.
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
    <p>
      Being one of my favorite languages, Swift was one of the first real programming language I learned.<br/>
      I started learning this languages shortly after it was realeased by apple around 2015. In fact I really starting diving deep into iOS development right out of high school.
    </p>
    <div className="Page-about-desc-project-icons">
      <h4>Projects that used this language.</h4>
      <a href="/projects/virtually_8bit"><img src={require(`./../assets/project_icons/virtually_8bit_icon.png`).default} alt="" /></a>
      {/* <a href="/projects/8bit_master"><img src={require(`./../assets/project_icons/8bit_master_icon.png`).default} alt="" /></a> */}
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
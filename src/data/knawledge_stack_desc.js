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
      I've learned most of the ends and outs of this language, such as its method based approach to properties, and some more complicated things, like it's concurrent multi-threading system.<br/>
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
    <h4>Dumpster fire</h4>
  </article>
  ),
  "swift": (
  <article>

  </article>
  ),
  "rails": (
  <article>

  </article>
  ),
  "react": (
  <article>

  </article>
  ),
  "html": (
  <article>

  </article>
  )
}

export default stackKnawledgeDesc
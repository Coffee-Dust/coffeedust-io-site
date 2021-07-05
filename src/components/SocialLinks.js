import React from 'react';
import linkedInLogo from '../assets/LinkedIn-Logo.png'
import gitHubLogo from '../assets/GitHub-Logo.png'

function SocialLinks() {
  return (
    <div className="App-social-links">
      <a href="https://www.linkedin.com/in/coffeedust/" target="_blank" rel="noreferrer"><img src={linkedInLogo} alt="" /></a>
      <a href="https://github.com/Coffee-Dust" target="_blank" rel="noreferrer"><img src={gitHubLogo} alt="" /></a>
    </div>
  );
}

export default SocialLinks;

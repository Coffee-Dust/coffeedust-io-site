import React from 'react';

function Project(props) {

  return (
    <div id={props.idx} className="Project-app-div"
    style={{"--animation-order": `${props.animationPos}`}}
    onClick={props.open}
    >
      <div className="icon-shadow"></div>
      <img src={require(`./../assets/project_icons/${props.id}_icon.png`).default} alt="" />
    </div>
  );
}

export default Project;
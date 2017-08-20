// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import * as THREE from 'three';

function init(bundle, parent, options) {
  // const camera = new THREE.PerspectiveCamera(60, 30, 0.01, 10000.0);
  const vr = new VRInstance(bundle, 'Asteroids', parent, {
    // Add custom options here
    // camera,
    cursorVisibility: 'visible',
    ...options,
  });

  // camera = vr.camera();
  // window.camera.addEventListener('change', function(e) {
  //   console.log('camera event', e);
  // });
  // setInterval(function () {
  //   console.log('camera?', vr.camera().getWorldDirection());
  // }, 1000);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};

# webvr-expriments

A collection of ReactVR experiments (potentially A-Frame and WebVR written in Reason &amp; Elm)

## Hello World (ReactVR)

This is an experience report/guide to explore ReactVR. Keep in mind I had some basic knowledge in 3D-modeling as well as computer graphics beforehand. Please ping me on Twitter in case you have questions or I take things for granted you have a hard time to wrap your mind around. I'm planning to write a longer getting started guide. I highly recommend to read the full [ReactVR docs](https://facebookincubator.github.io/react-vr/docs/getting-started.html). I did as well :)

To try out the examples run

```
# cd into/the/folder
yarn install
npm start
# open http://localhost:8081/vr/
```

### [v1 - Basic Cube Rendering](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v1)

<img width="1176" alt="screen shot cube" src="https://cloud.githubusercontent.com/assets/223045/21510601/a1957270-cc95-11e6-9e73-42f82339f76e.png">

With this example I tried to explore how to create my own geometries and rendering it within ReactVR. I evaluated a couple tools and in the end decided to go with [Blender](https://www.blender.org/). I still struggle a bit with the interface, but Blender is open source and has probably all the advanced features I need for the next couple years.

In Blender I created a cube, removed the light and camera, added a material, exported the scene and then learned that Three.js failed to render my simple cube properly as soon as I create a `<Mesh />`. What worked for me was to remove all the gimmick from the material and reduce it to `Diffuse` & `Specular` lighting. I unchecked all other checkboxes for the material. I had similar issues in the other tools I used.

<img width="151" alt="material setup" src="https://cloud.githubusercontent.com/assets/223045/21510599/a19189ee-cc95-11e6-912c-64eaf0c4f1ee.png">

### [v2 - Tree (first custom component)](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v2)

<img width="1176" alt="screen shot tree" src="https://cloud.githubusercontent.com/assets/223045/21510600/a1920982-cc95-11e6-8896-b5c963479a86.png">

The goal of this stage was to create a `Tree` component. I created two geometries (tree-crown, tree-trunk) and placed them in my `World` component. After some positioning I could extract both into a `Tree` component. This allowed me to create a second try and place it next to the first one.

In addition I generated a plane geometry in Blender as floor. For the sky I generated a blue gradient image and used it in a `<Pano />` component.

Initially I planned to place the scenic camera around 1 meter above the ground, but discovered a [bug](https://github.com/facebookincubator/react-vr/issues/33) with the `<Scene />` component. My fallback was to simply place the floor as well as the trees with -1 on the z-axis.

### [v3 - Forrest](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v3)

<img width="1176" alt="screen shot forrest" src="https://cloud.githubusercontent.com/assets/223045/21510598/a19134da-cc95-11e6-94e5-af9a6279b368.png">

Next up I wanted to have a more interesting scene as well as exploring how I could generate it. I decided to create a forrest. This was pretty much straight forward as I could create a `Forrest` component which uses the `Tree` component multiple times. By adding some randomizers for positioning, height and scale, I ended up with what I envisioned.

Right now 100 trees are generated and the user is placed at the center of the forrest. I tried with 1000, but this led to a laggy experience (MacBook 13", Chrome Canary).

What bothered me a bit was that for each Tree a fetch request was fired. I was hoping that ReactVR would cache the geometry and material.

### v4 - Animation (coming soon …)

Next up I'm going to look into object animations. I'm going to start with clouds and then move on to birds.

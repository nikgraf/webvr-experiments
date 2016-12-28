# WebVR Experiments

A collection of ReactVR experiments (potentially A-Frame and WebVR using ReasonML &amp; Elm)

## Hello World (ReactVR)

This is an experience report/guide to explore ReactVR. Keep in mind I had some basic knowledge in 3D-modeling as well as computer graphics beforehand. Please ping me on Twitter in case you have questions or I take things for granted you have a hard time wrapping your head around. I also highly recommend to read the full [ReactVR docs](https://facebookincubator.github.io/react-vr/docs/getting-started.html). I did as well :)

To try out the examples run

```
# cd into/the/folder
yarn install
npm start
# open http://localhost:8081/vr/
```

Or check out the hosted [live demo of HelloWorld v3](https://nikgraf.github.io/webvr-expriments/HelloWorld/v3/).

### [v1 - Basic Cube Rendering](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v1)

<img width="1176" alt="screen shot cube" src="https://cloud.githubusercontent.com/assets/223045/21510601/a1957270-cc95-11e6-9e73-42f82339f76e.png">

With this example I wanted to explore how to create my own geometries and render it within ReactVR. I evaluated a couple of tools and in the end decided to go with [Blender](https://www.blender.org/). I'm still struggling with the interface a bit, but Blender is open source has all the advanced features I will probably need for the next couple of years.

In Blender I created a cube, removed the light and camera, added a material to color the cube's surfaces and exported the scene to the Wavefront `.obj` (geometry) and `.mtl` (material) format. Then learned that Three.js failed to render my simple cube properly as soon as I create a `<Mesh source={{ mesh: asset('cube.obj'), mtl: asset('cube.mtl'), lit: true }} />` due to some issues with the material definitions. What worked for me was to remove all the gimmick features from the material and reduce it to `Diffuse` & `Specular` lighting. I unchecked all other checkboxes for the material. This is not a Blender only issue, as I encountered similar issues once I gave other tools a try.

<img width="930" alt="cube setup in blender" src="https://cloud.githubusercontent.com/assets/223045/21511170/57abd1ec-cc9d-11e6-901d-e79958bfe1b3.png">

### [v2 - Tree (first custom component)](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v2)

<img width="1176" alt="screen shot tree" src="https://cloud.githubusercontent.com/assets/223045/21510600/a1920982-cc95-11e6-8896-b5c963479a86.png">

The goal of this stage was to create a `Tree` component. I created two geometries (tree-crown, tree-trunk) and placed them in my `World` component. After some positioning I was able to extract both into a `Tree` component. This allowed me to create a second one and place it next to the first one.

<img width="400" alt="screen shot 2016-12-28 at 01 33 52" src="https://cloud.githubusercontent.com/assets/223045/21511213/eba9c214-cc9d-11e6-99ae-17b5dda0dd85.png">
<img width="400" alt="screen shot 2016-12-28 at 01 35 03" src="https://cloud.githubusercontent.com/assets/223045/21511215/ee653722-cc9d-11e6-8352-bd93b19a83d6.png">

Tree component:
```jsx
export default ({ style }) => (
  <View style={style}>
    <Mesh
      source={{ mesh: asset('tree-trunk.obj'), mtl: asset('tree-trunk.mtl'), lit: true }}
      style={{ transform: [{scale: [0.6, 1, 0.6]}] }}
    />
    <Mesh
      source={{ mesh: asset('tree-crown.obj'), mtl: asset('tree-crown.mtl'), lit: true }}
      style={{ transform: [{translate: [0, 2.5, 0]}] }}
    />
  </View>
);
```

In addition to that I generated a plane geometry in Blender as floor element. For the sky I generated a blue gradient image and used it in a `<Pano />` component.

Initially I planned to place the scenic camera approximately one meter above the ground, but discovered a [bug](https://github.com/facebookincubator/react-vr/issues/33) with the `<Scene />` component. My fallback was to position the floor as well as the trees -1 (meter) on the z-axis.

### [v3 - Forest](https://github.com/nikgraf/webvr-expriments/tree/master/HelloWorld/v3)

<img width="1176" alt="screen shot forest" src="https://cloud.githubusercontent.com/assets/223045/21510598/a19134da-cc95-11e6-94e5-af9a6279b368.png">

Next up I wanted to have a more interesting scene as well as explore how I could generate it. I decided to create a forest. This was pretty much straight forward as I could create a `Forest` component which uses the `Tree` component multiple times. By adding some randomizers for positioning, height and scale, I ended up with what I envisioned.

Forest component:
```jsx
export default ({ style }) => (
  <View style={style}>
    {trees.map((tree) => {
      const scale = randomScale();
      return (
        <Tree
          key={tree.id}
          style={{
            transform: [
              {scale: [scale, scale, scale]},
              {translate: [tree.x, randomHeight(), tree.y]},
            ]
          }}
        />
      );
    })}
  </View>
);
```

Right now 100 trees are generated and the user is placed at the center of the forest. Trying it with 1000 trees, led to a laggy experience (MacBook 13", Chrome Canary).

What bothered me a bit was that for each Tree a fetch request was fired. I was hoping that ReactVR would cache the geometry and material.

### v4 - Animation (coming soon …)

Next up I'm going to look into animations using clouds and birds.

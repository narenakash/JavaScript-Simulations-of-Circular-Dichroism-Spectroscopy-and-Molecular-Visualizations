var x=1;
$(function() {
  let element = $('#cont1');
  let config = { backgroundColor: 'orange' };
  let viewer = $3Dmol.createViewer( element, config );
  // console.log(viewer);
  viewer.addLabel("Methane", {position: {x:-10 , y:10, z:0}, backgroundColor: 'red',backgroundOpacity: 0.5,fontSize: 20});
  viewer.addLabel("C", {position: {x:-.4 , y:.4, z:0}, backgroundColor: 'black',backgroundOpacity: 0.8,fontSize: 20});
  viewer.addLabel("H", {position: {x:5.8 , y:5.8, z:5.8}, backgroundColor: 'black',backgroundOpacity: 0.8,fontSize: 20});
  viewer.addLabel("H", {position: {x:-5.8 , y:-5.8, z:5.8}, backgroundColor: 'black',backgroundOpacity: 0.8,fontSize: 20});
  viewer.addLabel("H", {position: {x:-5.8 , y:5.8, z:-5.8}, backgroundColor: 'black',backgroundOpacity: 0.8,fontSize: 20});
  viewer.addLabel("H", {position: {x:5.8 , y:-5.8, z:-5.8}, backgroundColor: 'black',backgroundOpacity: 0.8,fontSize: 20});
  viewer.addSphere({ center: {x:6, y:6, z:6}, radius: 2.0, color: 'white' });
  // console.log(s1);
  viewer.addCylinder({ start: {x:0 , y:0, z:0}, end: {x:6,y:6,z:6},radius: .5,color:'black',radiusRadio:1.0,});
  viewer.addCylinder({ start: {x:0 , y:0, z:0}, end: {x:-6,y:-6,z:6},radius:.5,color:'black',radiusRadio:1.0,});
  viewer.addCylinder({ start: {x:0 , y:0, z:0}, end: {x:6,y:-6,z:-6},radius:.5,color:'black',radiusRadio:1.0,});
  viewer.addCylinder({ start: {x:0 , y:0, z:0}, end: {x:-6,y:6,z:-6},radius:.5,color:'black',radiusRadio:1.0,});
  viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 2.0, color: 'skyblue',
  mid:1.0,   clickable:true,
  callback:function(){
      console.log(x);
      this.color.setHex(0xFFFF3352-x);
      // document.querySelector(".cc").innerHTML="Chiral Center"
      x+=100;
      if(x>10000000000){
        x=0;
      }
      viewer.render( );
  }});
  viewer.addSphere({ center: {x:6, y:-6, z:-6}, radius: 2.0, color: 'white' });
  viewer.addSphere({ center: {x:-6, y:6, z:-6}, radius: 2.0, color: 'white' });
  viewer.addSphere({ center: {x:-6, y:-6, z:6}, radius: 2.0, color: 'white' });
  // viewer.addAtom({x: 12, y:-12, z:-12,color:'skyblue',atom:'carbon' });
  viewer.zoomTo();
  viewer.render();
  viewer.zoom(.8, 1000);
  viewer.setBackgroundColor('white');
});
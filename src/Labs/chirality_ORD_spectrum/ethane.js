
$(function() {
    let element = $('#cont1');
    let config = { backgroundColor: 'orange' };
    let viewer = $3Dmol.createViewer( element, config );
    console.log(viewer);
    viewer.addSphere({ center: {x:6, y:6, z:6}, radius: 2.0, color: 'white' });
    viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:7.5,y:7.5,z:7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:-7.5,y:-7.5,z:7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:7.5,y:-7.5,z:-7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 2.0, color: 'skyblue' });
    viewer.addSphere({ center: {x:6, y:-6, z:-6}, radius: 2.0, color: 'white' });
    viewer.addSphere({ center: {x:-6, y:-6, z:6}, radius: 2.0, color: 'white' });
    viewer.addSphere({ center: {x:15, y:0, z:0}, radius: 2.0, color: 'skyblue' });
    viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:18,y:0,z:0},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
        
    }});
    viewer.addSphere({ center: {x:21, y:-6, z:-6}, radius: 2.0, color: 'white' });
    viewer.addSphere({ center: {x:9, y:6, z:-6}, radius: 2.0, color: 'white' });
    viewer.addSphere({ center: {x:9, y:-6, z:6}, radius: 2.0, color: 'white' });
    viewer.addArrow({ start: {x:15 , y:0, z:0}, end: {x:7.5,y:7.5,z:-7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.addArrow({ start: {x:15 , y:0, z:0}, end: {x:7.5,y:-7.5,z:7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.addArrow({ start: {x:15 , y:0, z:0}, end: {x:22.5,y:-7.5,z:-7.5},radius:.5,color:'black',radiusRadio:1.0,
    mid:1.0,   clickable:true,
    callback:function(){
        this.color.setHex(0xFFFF3352);
        viewer.render( );
    }});
    viewer.zoomTo();
    viewer.render();
    // viewer.zoom(.5, 1000);
    viewer.setBackgroundColor('white');
  });
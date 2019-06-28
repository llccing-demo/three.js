var cabinet = function() {};

cabinet.prototype.init = function() {
  this.addCabinet();
};

cabinet.prototype.addCabinet = function() {
  let cube;
  let cubeGeometry = new THREE.BoxGeometry(100, 500, 200);
  let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffaa00, wireframe: true });
  let materials = [
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
  ];
  cube = new THREE.Mesh(cubeGeometry, new THREE.MeshLambertMaterial({ color: 0x323232 }));
  cube.castShadow = true;
  scene.add(cube);

  function ray(event) {
    var Sx = event.clientX; //鼠标单击位置横坐标
    var Sy = event.clientY; //鼠标单击位置纵坐标
    //屏幕坐标转标准设备坐标
    var x = (Sx / window.innerWidth) * 2 - 1; //标准设备横坐标
    var y = -(Sy / window.innerHeight) * 2 + 1; //标准设备纵坐标
    var standardVector = new THREE.Vector3(x, y, 0.5); //标准设备坐标
    //标准设备坐标转世界坐标
    var worldVector = standardVector.unproject(camera);
    //射线投射方向单位向量(worldVector坐标减相机位置坐标)
    var ray = worldVector.sub(camera.position).normalize();
    //创建射线投射器对象
    var raycaster = new THREE.Raycaster(camera.position, ray);
    //返回射线选中的对象
    var intersects = raycaster.intersectObjects([cube]);
    if (intersects.length > 0) {
      // intersects[0].object.material.transparent = true;
      // intersects[0].object.material.opacity = 0.6;
      intersects[0].object.material.color.set( 0xff0000 );
    }else{
      cube.material.color.set( 0x000 );
    }
  }
  // addEventListener('click', ray); // 监听窗口鼠标单击事件
  
  let colors = [0xffde7d, 0xf6416c, 0x00b8a9, 0x323232]
  
  let i =0;
  setInterval(()=>{
    cube.material.color.set( colors[i]);
    i++
    if(i>3){
      i=-1
    }
  }, 500)
};

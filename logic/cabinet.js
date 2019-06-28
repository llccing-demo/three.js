var cabinet = function() {
  this.servers = [];
  this.cabinet = [];
};

cabinet.prototype.init = function() {
  this.addCabinet();
  this.bindEvent(this);
};

cabinet.prototype.addCabinet = function() {
  scene.add(this.initServerGroup(5));
};

// 服务器组 就是机柜
cabinet.prototype.initServerGroup = function(n) {
  var group = new THREE.Group();
  for (let i = 0; i < n; i++) {
    let cube = this.initServer();
    cube.position.y = 55 * (i - 1);
    this.servers.push(cube);
    console.log(this.servers);
    group.add(cube);
  }

  // var earthDiv = document.createElement('div');
  // earthDiv.textContent = 'Earth';
  // earthDiv.style.color = 'red'
  // var label = new THREE.CSS2DObject(earthDiv);
  // label.position.set(0, 500, 0);
  // group.add(label);
  this.cabinet.push(group);

  return group;
};

// 每一个矩形 为一个服务器
cabinet.prototype.initServer = function() {
  let cube;
  let cubeGeometry = new THREE.BoxGeometry(100, 50, 200);
  let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffaa00, wireframe: true });

  let materials = [
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
    new THREE.MeshLambertMaterial({ color: 0x323232 }),
  ];

  cube = new THREE.Mesh(cubeGeometry, materials);
  cube.castShadow = true;

  // var earthDiv = document.createElement('div');
  // earthDiv.textContent = 'Earth';
  // earthDiv.style.color = 'red'
  // var label = new THREE.CSS2DObject(earthDiv);
  // label.position.set(0, 500, 0);
  // cube.add(label);

  return cube;
};

cabinet.prototype.bindEvent = function(self) {
  // 缓存之前点击过的server
  let lastIntersects = [];
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
    var intersects = raycaster.intersectObjects(self.servers);
    if (intersects.length > 0) {
      if (lastIntersects.length > 0) {
        let has = false;
        for (let i = 0; i < lastIntersects.length; i++) {
          if (lastIntersects[i].object.uuid === intersects[0].object.uuid) {
            has = true;
            self.hideCabinetInfo();
            lastIntersects[i].object.material.forEach((item) => {
              item.color.set(0x323232);
            });
            lastIntersects.splice(i, 1);
          }
        }
        // 如果不在缓存中，那么仍然展示选中效果
        if (!has) {
          self.showCabinetInfo(Math.random());
          lastIntersects.push(intersects[0]);
          intersects[0].object.material.forEach((item) => {
            item.color.set(0xff0000);
          });
        }
      } else {
        self.showCabinetInfo(Math.random());
        lastIntersects.push(intersects[0]);
        intersects[0].object.material.forEach((item) => {
          item.color.set(0xff0000);
        });
      }
    } else {
      self.servers.forEach((server) => {
        server.material.forEach((item) => {
          item.color.set(0x323232);
        });
      });

      self.hideCabinetInfo();
    }
  }
  addEventListener('click', ray); // 监听窗口鼠标单击事件
};

cabinet.prototype.showCabinetInfo = function(text) {
  let info = document.getElementById('info');
  info.style.display = 'block';
  info.style.fontSize = '49px';
  info.style.color = '#fff';
  info.textContent = text;
};

cabinet.prototype.hideCabinetInfo = function(text) {
  let info = document.getElementById('info');
  info.style.display = 'none';
};

function getTextMaterial() {
  var canvas = document.createElement('canvas');
  var stage = new createjs.Stage(canvas);
  var circle = new createjs.Shape();
  circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
  circle.x = 100;
  circle.y = 100;

  var text = new createjs.Text('Hello World', '50px yahei', '#ff7700');
  text.x = 180;
  text.y = 80;
  text.cursor = 'pointer';

  text.addEventListener('click', function(event) {
    console.log(event);
  });

  circle.addEventListener('click', function(event) {
    console.log(event);
  });

  stage.addChild(text);
  stage.addChild(circle);
  stage.update();
  console.log(canvas);
  // canvas contents will be used for a texture
  var texture1 = new THREE.Texture(canvas);
  texture1.needsUpdate = true;

  var material1 = new THREE.MeshLambertMaterial({ map: texture1, side: THREE.DoubleSide });
  // material1.transparent = true;

  return new THREE.MeshLambertMaterial({ color: 0x323232 });
  return material1;
}

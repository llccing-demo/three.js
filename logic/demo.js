var scene = new THREE.Scene();
var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('./贴图/背景/0.jpg');
scene.background = texture;
var group1 = new THREE.Group();
var group2 = new THREE.Group();
var group3 = new THREE.Group();
group1.position.set(-40, 0, -105);
group2.position.set(-40, 0, -25);
group3.position.set(+10, 0, -85);
var AllGroup = new THREE.Group();
AllGroup.add(group1, group2, group3);
scene.add(AllGroup);
var treeData = [{ id: group1.id, label: '立筒仓', children: [] }, { id: group1.id, label: '浅圆仓', children: [] }, { id: group1.id, label: '平房仓', children: [] }];
var OBJLoader = new THREE.OBJLoader();
OBJLoader.load('./粮仓模型/wall.obj', function(obj) {
  obj.scale.set(0.98, 0.6, 1);
  var texLan = new THREE.TextureLoader().load('./贴图/围墙/lan2.png');
  texLan.wrapS = THREE.RepeatWrapping;
  texLan.wrapT = THREE.RepeatWrapping;
  texLan.repeat.set(40, 1);
  obj.children[0].material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: texLan, transparent: true });
  obj.children[1].material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/door.png'), side: THREE.DoubleSide, transparent: true });
  scene.add(obj);
});

OBJLoader.load('./粮仓模型/gong001.obj', function(obj) {
  var mesh = obj.children[0];
  mesh.rotateZ(Math.PI);
  mesh.translateY(-36);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      var Mesh = mesh.clone();
      Mesh.material = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/d001.png'), transparent: true, side: THREE.DoubleSide, clipIntersection: true });
      Mesh.编号 = 'L-' + (i + 1) * (j + 1);
      Mesh.name = '立筒仓 L-' + (i + 1) * (j + 1);
      Mesh.translateX(i * 26);
      Mesh.translateZ(j * 21);
      Mesh.rotateY(Math.PI / 6);
      group1.add(Mesh);
      Mesh.仓高 = 36;
      Mesh.粮高 = (15 * Math.random() + 20).toFixed(1);
      Mesh.谷物 = '红豆';
      Mesh.温度 = (36 * (Math.random() / 10 + 0.9)).toFixed(1);
      Mesh.吨位 = Mesh.粮高 * 200;
      Mesh.iconpath = './UI图/豆子/红豆.png';
      var geometry2 = new THREE.CylinderGeometry(8 - 0.2, 8 - 0.2, Mesh.粮高, 25);
      var material2 = new THREE.MeshLambertMaterial({ color: 0xb63427 });
      var mesh2 = new THREE.Mesh(geometry2, material2);
      Mesh.add(mesh2);
      mesh2.translateY(36 - Mesh.粮高 / 2);
      var text = document.getElementById('label').cloneNode(true);
      text.style.visibility = 'hidden';
      text.className = 'label';
      text.childNodes[1].childNodes[1].textContent = Mesh.name;
      var label = new THREE.CSS2DObject(text);
      label.position.copy(Mesh.position);
      group1.add(label);
      treeData[0].children.push({ id: Mesh.id, mesh: Mesh, label: Mesh.name, children: [] });
    }
  }
});
OBJLoader.load('./粮仓模型/002.obj', function(obj) {
  var mesh = obj.children[0];
  mesh.rotateZ(Math.PI);
  mesh.material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/002.png'), side: THREE.DoubleSide, transparent: true, clipIntersection: true });
  mesh.translateY(-20);
  mesh.translateZ(5);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 6; j++) {
      var Mesh = mesh.clone();
      Mesh.material = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/002.png'), transparent: true, side: THREE.DoubleSide, clipIntersection: true });
      Mesh.编号 = 'Q-' + (i + 1) * (j + 1);
      Mesh.name = '浅圆仓 Q-' + (i + 1) * (j + 1);
      Mesh.translateX(i * 25);
      Mesh.translateZ(j * 24);
      Mesh.rotateY(Math.PI / 6);
      group2.add(Mesh);
      Mesh.仓高 = 20;
      Mesh.粮高 = (10.9 * Math.random() + 9).toFixed(1);
      Mesh.谷物 = '绿豆';
      Mesh.温度 = (36 * (Math.random() / 10 + 0.9)).toFixed(1);
      Mesh.吨位 = Mesh.粮高 * 400;
      Mesh.iconpath = './UI图/豆子/绿豆.png';
      var geometry2 = new THREE.CylinderGeometry(10 - 0.2, 10 - 0.2, Mesh.粮高, 25);
      var material2 = new THREE.MeshLambertMaterial({ color: 0x91a337 });
      var mesh2 = new THREE.Mesh(geometry2, material2);
      Mesh.add(mesh2);
      mesh2.translateY(20 - Mesh.粮高 / 2);
      var text = document.getElementById('label').cloneNode(true);
      text.style.visibility = 'hidden';
      text.className = 'label';
      text.childNodes[1].childNodes[1].textContent = Mesh.name;
      var label = new THREE.CSS2DObject(text);
      label.position.copy(Mesh.position);
      group2.add(label);
      treeData[1].children.push({ id: Mesh.id, mesh: Mesh, label: Mesh.name, children: [] });
    }
  }
});
OBJLoader.load('./粮仓模型/003.obj', function(obj) {
  var mesh = obj.children[0];
  mesh.translateZ(2);
  mesh.translateX(1);
  mesh.material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/003.png'), transparent: true, side: THREE.DoubleSide, clipIntersection: true });
  mesh.scale.set(1.3, 1.4, 1.5);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      var Mesh = mesh.clone();
      Mesh.material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./粮仓模型/003.png'), transparent: true, side: THREE.DoubleSide });
      Mesh.编号 = 'P-' + (i + 1) * (j + 1);
      Mesh.name = '平房仓 P-' + (i + 1) * (j + 1);
      Mesh.translateX(i * 52.5);
      Mesh.translateZ(j * 81.6);
      group3.add(Mesh);
      Mesh.仓高 = 8;
      Mesh.粮高 = (4.9 * Math.random() + 3).toFixed(1);
      Mesh.谷物 = '黄豆';
      Mesh.温度 = (36 * (Math.random() / 10 + 0.9)).toFixed(1);
      Mesh.吨位 = Mesh.粮高 * 1000;
      Mesh.iconpath = './UI图/豆子/黄豆.png';
      var geometry2 = new THREE.BoxGeometry(21 - 0.2, Mesh.粮高, 40 - 0.2, 25);
      var material2 = new THREE.MeshLambertMaterial({ color: 0xe99147 });
      var mesh2 = new THREE.Mesh(geometry2, material2);
      Mesh.add(mesh2);
      mesh2.translateY(Mesh.粮高 / 2);
      var text = document.getElementById('label3').cloneNode(true);
      text.style.visibility = 'hidden';
      text.className = 'label';
      text.childNodes[1].childNodes[1].textContent = Mesh.name;
      var label = new THREE.CSS2DObject(text);
      label.position.copy(Mesh.position);
      group3.add(label);
      treeData[2].children.push({ id: Mesh.id, mesh: Mesh, label: Mesh.name, children: [] });
    }
  }
});
var axesHelper = new THREE.AxesHelper(500);
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(50, 250, 500);
scene.add(directionalLight);
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-400, -400, -400);
scene.add(directionalLight2);
var ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);
var width = window.innerWidth;
var height = window.innerHeight;
var k = width / height;
var s = 100;
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 20000);
camera.position.set(314, 202, 243);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0x409eff, 1);
document.body.appendChild(renderer.domElement);
var labelRenderer = new THREE.CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);
var renderPass = new THREE.RenderPass(scene, camera);
var OutlinePass = new THREE.OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
OutlinePass.visibleEdgeColor = new THREE.Color(0, 1, 0);
OutlinePass.hiddenEdgeColor = new THREE.Color(0, 1, 0);
OutlinePass.edgeThickness = 3.0;
var composer = new THREE.EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(OutlinePass);
var FXAAShaderPass = new THREE.ShaderPass(THREE.FXAAShader);
FXAAShaderPass.renderToScreen = true;
FXAAShaderPass.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
composer.addPass(FXAAShaderPass);
var RainGroup = new THREE.Group();
for (let i = 0; i < 500; i++) {
  var spriteMaterial = new THREE.SpriteMaterial({ map: new THREE.TextureLoader().load('./贴图/雨雪/rain.png') });
  var sprite = new THREE.Sprite(spriteMaterial);
  RainGroup.add(sprite);
  sprite.scale.set(3.2, 4, 1);
  var k1 = Math.random() - 0.5;
  var k2 = Math.random() - 0.5;
  sprite.position.set(500 * k1, 200 * Math.random(), 500 * k2);
}
for (let i = 0; i < 500; i++) {
  var spriteMaterial = new THREE.SpriteMaterial({ map: new THREE.TextureLoader().load('./贴图/雨雪/rain.png') });
  var sprite = new THREE.Sprite(spriteMaterial);
  RainGroup.add(sprite);
  sprite.scale.set(2.4, 3, 1);
  var k1 = Math.random() - 0.5;
  var k2 = Math.random() - 0.5;
  sprite.position.set(500 * k1, 200 * Math.random(), 500 * k2);
}
var clock = new THREE.Clock();
var FPS = 30;
var T = 1 / FPS;
var timeS = 0;
var i = 0;
scene.rotateY(-0.3);
function render() {
  i += 1;
  if (i < 300) {
    scene.rotateY(0.001);
  }
  RainGroup.children.forEach((sprite) => {
    sprite.position.y -= 0.5;
    if (sprite.position.y < 0) {
      sprite.position.y = 200;
    }
  });
  requestAnimationFrame(render);
  var deltaT = clock.getDelta();
  timeS = timeS + deltaT;
  if (timeS > T) {
    composer.render();
    labelRenderer.render(scene, camera);
    timeS = 0;
  }
}
render();
var controls = new THREE.OrbitControls(camera);
controls.enablePan = false;
controls.minZoom = 0.6;
controls.maxZoom = 3;
创建粮仓地面();
创建马路路面();
function 创建粮仓地面() {
  var geometry = new THREE.PlaneGeometry(270, 260);
  var texture = new THREE.TextureLoader().load('./贴图/水泥地面/floor3.png');
  var material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotateX(-Math.PI / 2);
  mesh.position.y = -0.01;
}
function 创建草地地面() {
  var geometry = new THREE.PlaneGeometry(1000, 1000);
  var texture = new THREE.TextureLoader().load('./贴图/土地/1.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotateX(-Math.PI / 2);
  mesh.position.y = -0.1;
}
function 创建马路路面() {
  var textureLoader = new THREE.TextureLoader();
  var geometry = new THREE.PlaneGeometry(24, 800);
  var texture = textureLoader.load('./贴图/马路/road2.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 10);
  var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotateX(-Math.PI / 2);
  mesh.rotateZ(Math.PI / 2);
  mesh.position.z = 130 + 12;
}
创建一圈树();
function 创建一圈树() {
  var group = new THREE.Group();
  var w = 190,
    h = 260;
  var textureTree = new THREE.TextureLoader().load('./贴图/树/0.png');
  var spriteMaterial = new THREE.SpriteMaterial({ map: textureTree });
  var sprite = new THREE.Sprite(spriteMaterial);
  var H = 8;
  sprite.scale.set(4, H, 1);
  sprite.translateY(H / 2);
  for (let i = 0; i < 19 + 1; i++) {
    for (let j = 0; j < 26 + 1; j++) {
      if (j * 10 == 260 && i * 10 > 100 && i * 10 < 160) {
      } else if (i * 10 == 0 || i * 10 == 190 || j * 10 == 0 || j * 10 == 260) {
        var Sprite = sprite.clone();
        Sprite.translateX(i * 10 - w / 2);
        Sprite.translateZ(j * 10 - h / 2);
        group.add(Sprite);
      }
    }
  }
  group.scale.set(0.96, 0.96, 0.98);
  scene.add(group);
}
var label = null;
renderer.localClippingEnabled = true;
var PlaneArr = [new THREE.Plane(new THREE.Vector3(-1, 0, 0), 1), new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)];
var vm = new Vue({
  el: '#app',
  data: {
    treeData: treeData,
    currentMesh: { name: '', 仓高: 0, 粮高: 0, 谷物: '', 温度: 0, 吨位: 0 },
    name: null,
    bool: false,
    left: 500,
    top: 500,
    switchBool: true,
    clipBool: true,
    tagBool: true,
    rainBool: true,
    conLeft: -150 - 30,
    openLeftBool: false,
    S: 0,
  },
  methods: {
    nodeClick: function(data) {
      var mesh = data.mesh;
      if (mesh) {
        OutlinePass.selectedObjects = [mesh];
        this.currentMesh = mesh;
        this.bool = true;
        scene.updateMatrixWorld(true);
        var worldPosition = new THREE.Vector3();
        mesh.getWorldPosition(worldPosition);
        var standardVector = worldPosition.project(camera);
        var a = window.innerWidth / 2;
        var b = window.innerHeight / 2;
        this.left = Math.round(standardVector.x * a + a);
        this.top = Math.round(-standardVector.y * b + b);
      } else {
        this.bool = false;
        OutlinePass.selectedObjects = [];
      }
    },
    openLeft: function() {
      if (this.openLeftBool) {
        this.conLeft = -150 - 30;
        this.openLeftBool = false;
      } else {
        this.conLeft = 0;
        this.openLeftBool = true;
      }
    },
  },
  watch: {
    switchBool(value) {
      if (value) {
        AllGroup.children.forEach(function(group) {
          group.children.forEach(function(mesh) {
            if (mesh.type === 'Mesh') {
              mesh.material.visible = true;
            }
          });
        });
      } else {
        AllGroup.children.forEach(function(group) {
          group.children.forEach(function(mesh) {
            if (mesh.type === 'Mesh') {
              mesh.material.visible = false;
            }
          });
        });
      }
    },
    clipBool: function(value) {
      if (value) {
        renderer.localClippingEnabled = true;
      } else {
        renderer.localClippingEnabled = false;
      }
    },
    tagBool: function(value) {
      if (value) {
        var arr = document.getElementsByClassName('label');
        for (var i = 0; i < arr.length; i++) {
          arr[i].style.visibility = 'hidden';
        }
      } else {
        var arr = document.getElementsByClassName('label');
        for (var i = 0; i < arr.length; i++) {
          arr[i].style.visibility = 'visible';
        }
      }
    },
    rainBool: function(value) {
      if (value) {
        scene.remove(RainGroup);
      } else {
        scene.add(RainGroup);
      }
    },
  },
  mounted: function() {},
});
let lastMesh = null;
function choose(event) {
  if (lastMesh) {
    vm.bool = false;
    lastMesh.material.clippingPlanes = null;
    OutlinePass.selectedObjects = [];
  }
  var Sx = event.clientX;
  var Sy = event.clientY;
  vm.left = Sx + 20;
  vm.top = Sy + 20;
  var x = (Sx / window.innerWidth) * 2 - 1;
  var y = -(Sy / window.innerHeight) * 2 + 1;
  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
  var intersects = raycaster.intersectObjects(AllGroup.children, true);
  if (intersects.length > 0) {
    vm.bool = true;
    var mesh = intersects[0].object;
    vm.currentMesh = mesh;
    OutlinePass.selectedObjects = [mesh];
    var S = vm.currentMesh.吨位;
    vm.S = 0;
    var startTime = new Date().getTime();
    var interval = setInterval(function() {
      if (new Date().getTime() - startTime > (S / 58) * 6) {
        clearInterval(interval);
        return;
      }
      if (vm.S < S) {
        vm.S += 58;
        console.log(vm.S);
      }
    }, 6);
    scene.updateMatrixWorld(true);
    var worldPosition = new THREE.Vector3();
    mesh.getWorldPosition(worldPosition);
    lastMesh = mesh;
    PlaneArr[0].constant = worldPosition.x;
    PlaneArr[1].constant = worldPosition.z;
    mesh.material.clipIntersection = true;
    mesh.material.clippingPlanes = PlaneArr;
  }
}
addEventListener('click', choose);
initFire(20, 40, 20, 30, 0);
function initFire(w, h, posX, posY, posZ) {
  function random(min, max, precision) {
    var p = Math.pow(10, precision);
    return Math.round((min + Math.random() * (max - min)) * p) / p;
  }
  var fireVertexShader = document.getElementById('vertexShader').innerText;
  var fireFragmentShader = document.getElementById('fragmentShader').innerText;
  var _geometry, _shader, _mesh, _group;
  var _num = 12;
  var _x = new THREE.Vector3(1, 0, 0);
  var _y = new THREE.Vector3(0, 1, 0);
  var _z = new THREE.Vector3(0, 0, 1);
  var _tipTarget = new THREE.Vector3();
  var _tip = new THREE.Vector3();
  var _diff = new THREE.Vector3();
  var _quat = new THREE.Quaternion();
  var _quat2 = new THREE.Quaternion();
  (function() {
    initGeometry();
    initInstances();
    initShader();
    initMesh();
    requestAnimationFrame(loop);
  })();
  function initGeometry() {
    _geometry = new THREE.InstancedBufferGeometry();
    _geometry.maxInstancedCount = _num;
    var shape = new THREE.PlaneBufferGeometry(w, h);
    shape.translate(0, 0.4, 0);
    var data = shape.attributes;
    _geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(data.position.array), 3));
    _geometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(data.uv.array), 2));
    _geometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(data.normal.array), 3));
    _geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(shape.index.array), 1));
    shape.dispose();
  }
  function initInstances() {
    var orientation = new THREE.InstancedBufferAttribute(new Float32Array(_num * 4), 4);
    var randoms = new THREE.InstancedBufferAttribute(new Float32Array(_num), 1);
    var scale = new THREE.InstancedBufferAttribute(new Float32Array(_num * 2), 2);
    var life = new THREE.InstancedBufferAttribute(new Float32Array(_num), 1);
    for (let i = 0; i < _num; i++) {
      orientation.setXYZW(i, 0, 0, 0, 1);
      life.setX(i, i / _num + 1);
    }
    _geometry.addAttribute('orientation', orientation);
    _geometry.addAttribute('scale', scale);
    _geometry.addAttribute('life', life);
    _geometry.addAttribute('random', randoms);
  }
  function initShader() {
    var uniforms = {
      uMap: { type: 't', value: null },
      uColor1: { type: 'c', value: new THREE.Color(0x961800) },
      uColor2: { type: 'c', value: new THREE.Color(0x4b5828) },
      uTime: { type: 'f', value: 0 },
    };
    _shader = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: fireVertexShader,
      fragmentShader: fireFragmentShader,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('贴图/火焰/flame.png', (t) => (_shader.uniforms.uMap.value = t));
  }
  function initMesh() {
    _group = new THREE.Group();
    _mesh = new THREE.Mesh(_geometry, _shader);
    _mesh.frustumCulled = false;
    _group.add(_mesh);
    scene.add(_group);
    _mesh.scale.set(0.01, 0.01, 0.01);
    setTimeout(function() {
      _mesh.scale.set(1, 1, 1);
      vm.$notify({ title: '火警', message: '平房仓 P-2失火报警', type: 'warning' });
    }, 3000);
    setTimeout(function() {
      vm.$notify({ title: '自动灭火', message: '自动灭火器开启预计1分内完成无需119', type: 'success' });
    }, 3500);
    var startTime = new Date().getTime();
    var interval = setInterval(function() {
      if (new Date().getTime() - startTime > 20 * 1000) {
        vm.$notify({ title: '成功', message: '已完成灭火，用时20s', type: 'success' });
        scene.remove(_group);
        clearInterval(interval);
        return;
      }
    }, 200);
    _fire = _group;
  }
  function loop(e) {
    requestAnimationFrame(loop);
    _shader.uniforms.uTime.value = e * 0.001;
    var life = _geometry.attributes.life;
    var orientation = _geometry.attributes.orientation;
    var scale = _geometry.attributes.scale;
    var randoms = _geometry.attributes.random;
    for (let i = 0; i < _num; i++) {
      var value = life.array[i];
      value += 0.04;
      if (value > 1) {
        value -= 1;
        _quat.setFromAxisAngle(_y, random(0, 3.14, 3));
        _quat2.setFromAxisAngle(_x, random(-1, 1, 2) * 0.1);
        _quat.multiply(_quat2);
        _quat2.setFromAxisAngle(_z, random(-1, 1, 2) * 0.3);
        _quat.multiply(_quat2);
        orientation.setXYZW(i, _quat.x, _quat.y, _quat.z, _quat.w);
        scale.setXY(i, random(0.8, 1.2, 3), random(0.8, 1.2, 3));
        randoms.setX(i, random(0, 1, 3));
      }
      life.setX(i, value);
    }
    life.needsUpdate = true;
    orientation.needsUpdate = true;
    scale.needsUpdate = true;
    randoms.needsUpdate = true;
    _group.position.x = posX;
    _group.position.y = posY;
    _group.position.z = posZ;
    let tipOffset = 0.4;
    _tipTarget.copy(_group.position);
    _tipTarget.y += tipOffset;
    _tip.lerp(_tipTarget, 0.1);
    _diff.copy(_tip);
    _diff.sub(_group.position);
    let length = _diff.length();
    _group.scale.y = (length / tipOffset - 1) * 0.4 + 1;
    _group.quaternion.setFromUnitVectors(_y, _diff.normalize());
  }
}
window.onresize = function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  k = window.innerWidth / window.innerHeight;
  camera.left = -s * k;
  camera.right = s * k;
  camera.top = s;
  camera.bottom = -s;
  camera.updateProjectionMatrix();
  location.reload();
};

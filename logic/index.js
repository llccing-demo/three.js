var renderer, stats, scene, camera
const C_ROOM_WIDTH = 1000;
const C_ROOM_HEIGHT = 800;
const C_WALL_HEIGHT = 100;

init();
animate();
var cabinet = new cabinet();
cabinet.init();

function init() {
  var container = document.getElementById('container')

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xb0b0b0)

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    C_ROOM_WIDTH * 10,
  )
  camera.position.set(-C_ROOM_WIDTH, C_ROOM_WIDTH * 0.8, C_ROOM_WIDTH * 0.5)
  camera.lookAt(scene.position)

  var helper = new THREE.GridHelper(C_ROOM_WIDTH, 20)
  helper.rotation.x = Math.PI / 2
  scene.add(helper)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  renderer.setClearColor(new THREE.Color(0xeeeeee), 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

  // show axes in the screen
  var axes = new THREE.AxesHelper(C_ROOM_WIDTH)
  scene.add(axes)

  // 添加光源
  var spotLight = new THREE.AmbientLight(0xffffff)
  scene.add(spotLight)

  container.appendChild(renderer.domElement)

  // controls
  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.screenSpacePanning = true

  stats = new Stats()
  container.appendChild(stats.dom)

  window.addEventListener('resize', onWindowResize, false)
}



function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate(time) {
  TWEEN.update(time);
  requestAnimationFrame(animate);

  render();
  stats.update();
}


function render() {
  renderer.render(scene, camera);
}

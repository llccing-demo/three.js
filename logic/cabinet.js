var cabinet = function () { }

cabinet.prototype.init = function () {
  this.addCabinet()
}

cabinet.prototype.addCabinet = function () {
  let cube;
  let cubeGeometry = new THREE.BoxGeometry(100, 500, 200);
  let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffaa00, wireframe: true });
  let materials = [
    new THREE.MeshBasicMaterial({color: 0x000000}),
    new THREE.MeshBasicMaterial({color: 0x000000}),
    new THREE.MeshBasicMaterial({color: 0x000000}),
    new THREE.MeshBasicMaterial({color: 0x000000}),
    new THREE.MeshBasicMaterial({color: 0x000000}),
    new THREE.MeshBasicMaterial({color: 0x000000})
  ]
  cube = new THREE.Mesh(cubeGeometry, materials)
  cube.castShadow = true;
  scene.add(cube)
}
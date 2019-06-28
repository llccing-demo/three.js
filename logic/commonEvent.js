var commonEvent = function() {};

commonEvent.prototype.init = function() {
  var control = document.getElementById('control');
  control.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.nodeName === 'INPUT' && event.target.defaultValue === '1') {
      cabinetIntance.showCabinetWrapper();
    } else if (event.target.nodeName === 'INPUT' && event.target.defaultValue === '2') {
      cabinetIntance.hideCabinetWrapper();
    }
  });
};

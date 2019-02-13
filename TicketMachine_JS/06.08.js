// 06.08 JavasScript code

function tellInfractionFine() {
  var output = "";
  speedLimit = parseFloat(document.getElementById("txtSpeedLimit").value);
  drivingSpeed = parseFloat(document.getElementById("txtDrivingSpeed").value);
  excess = drivingSpeed - speedLimit;

  if (excess <= 0) {
    output = "No speeding, no fine.";
  } else if (excess <= 20) {
    if (speedLimit <= 60) {
      if (excess <= 15) {
        output = "Infraction fine is 85 euros.";
      } else {
        output = "Infraction fine is 155 euros.";
      }
    } else if (speedLimit <= 120) {
      if (excess <= 15) {
        output = "Infraction fine is 70 euros.";
      } else {
        output = "Infraction fine is 100 euros.";
      }
    }
  } else {
    output = "Income-based unit fines";
  }
  document.getElementById("divAnswer").innerHTML = output;
}

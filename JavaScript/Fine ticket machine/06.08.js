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
/*

  if (excess > 20) {
    output = "Income-based unit fines";
  } else {
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
  }
  document.getElementById("divAnswer").innerHTML = output;
}

/*Test examples:
drivingSpeed = 120, speedLimit = 120 -> No speeding, no fine
drivingSpeed = 65, speedLimit = 60 -> Infraction fine is 85 euros.
drivingSpeed = 77, speedLimit = 60 -> Infraction fine is 115 euros.
drivingSpeed = 105, speedLimit = 100 -> Infraction fine is 70 euros.
drivingSpeed = 117, speedLimit = 100 -> Infraction fine is 100 euros.
drivingSpeed = 121, speedLimit = 100 -> Income-based unit fines.

If a car driver speeds no more than 20 km/h over the speed limit, the driver will avoid the income-based unit fines (päiväsakot), and gets just the infraction fine (rikesakko). Make a program that tells how much the infraction fine is. It’s based on the speed limit and the excess speed. The program asks for the driving speed and the speed limit. If there is speeding the ticket will be decided upon based on the following rules:

If the speed limit is 10-60 kilometers an hour, and the excess speed is no more than 15 km/h, the speeding leads into a 85-euro infraction fine (rikesakko). More than 15 but no more than 20 km/h leads into an infraction fine of 115 euros.
If the speed limit is 70-120 kilometers an hour, a max 15 km/h speeding will be penalizes with 70-euro infraction fine. The infraction fine is 100 euros when the excess speed is more than 15 km/h, but no more than 20 km/h.
(If the driver drives more than 20 km/h over the limit => he will get unit fines, päiväsakot).*/

const hisName = "duterte";
const profession = "president";
const age = 70;
const appearance = "tinawong";
const bad = false;

// the clients wants a president named duterte
// the client wants a president with the age below 50
// if president is handsome, acccept
// if not bad, accept

if (
  (hisName === "duterte" && profession === "president" && age < 50) ||
  appearance !== "handsome" ||
  !bad
) {
  console.log("dawat");
} else {
  console.log("sorry");
}

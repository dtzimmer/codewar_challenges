const england_drivers_license = data => {
  const name = (data[2].slice(0, 5).toUpperCase() + "99999").slice(0, 5); // 5
  const dob = new Date(data[3]);
  const dec =
    dob.getYear().toString().length == 2
      ? dob.getYear().toString()[0]
      : dob.getYear().toString()[1]; // 1
  const month =
    data[4] == "M"
      ? ("0" + (dob.getMonth() + 1).toString()).slice(-2)
      : dob.getMonth() + 51;
  const day = ("0" + dob.getDate().toString()).slice(-2);
  const yearDig = dob
    .getYear()
    .toString()
    .slice(-1);
  const inits = data[0][0] + (data[1] == "" ? "9" : data[1][0]);
  const arb1 = "9";
  const arb2 = "AA";
  return name + dec + month + day + yearDig + inits + arb1 + arb2;
};

console.log(
  england_drivers_license(["John", "James", "Smith", "01-Jan-1986", "M"])
);

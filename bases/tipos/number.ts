(() => {
  let avenger: number = 10;
  console.log({ avenger });
  const villains: number = 20;
  if (avenger < villains) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  avenger = Number("55a");
  console.log({ avenger });
})();

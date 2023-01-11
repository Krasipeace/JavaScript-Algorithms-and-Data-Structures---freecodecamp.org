function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let radius = 6367.4447;
  
    return arr.map(({ name, avgAlt }) => {
      let earth = radius + avgAlt;
      let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
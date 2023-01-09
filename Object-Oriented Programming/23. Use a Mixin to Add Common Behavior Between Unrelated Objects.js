let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj) {
    obj.glide = () => console.log("Gliding");
  };
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();
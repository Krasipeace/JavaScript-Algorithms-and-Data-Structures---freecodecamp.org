let funModule = ( () => {
    return {
      singMixin: (obj) => {
        obj.sing = () => { console.log("Singing to an awesome tune"); }
      },
      isCuteMixin: (obj) => {
        obj.isCute = () => { true; };
      }
    }
}) ();
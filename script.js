//your JS code here. If required.
      let level = document.getElementById("level");
      depth = 0;

      while(level != null){
        depth++;
        level = level.parentElement;
      }

      alert("The level of the element is: " + depth);

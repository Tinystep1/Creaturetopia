window.onload=function(){
      
    //Dragon info
    //Name variable
    var name = "Dragon";
    document.getElementById("animal").innerHTML = name;
    
    //Information variable
    var dragon = {
      introImage: '<img id="smallImage" src="http://pre08.deviantart.net/65ec/th/pre/i/2012/005/8/8/purple_dragon_by_kirklaw-d4lemat.jpg" alt="purple dragon breathing smoke" />',
      old: {
        src : "http://pre08.deviantart.net/65ec/th/pre/i/2012/005/8/8/purple_dragon_by_kirklaw-d4lemat.jpg",
        alt : "purple dragon breathing smoke",
      },
      description : "<p>Dragons can be found in stories all over the world in many differnt forms. They can be serpent-like, have two or more legs, have two wings, or have wings and legs.</p>",
      items : "Scale Wash: Specially designed for large reptiles to help them gleam (increases hygine), Spine File: Keep them uniform and looking their best (increases hygine, agility, and endurance), Weights: Keep your dragon fit (increases stregth), Fang Brush: Let's see that beautiful smile! (increases hygine and intelligence",
      stats: "Endurace, Strength, Agility, Intelligence, Hygine",
      stock: '<img src="http://blackmarches.wdfiles.com/local--files/umsemtias/Umemtias.jpg" height="103" width="300" />',
      old: {
        src: "http://blackmarches.wdfiles.com/local--files/umsemtias/Umemtias.jpg",
        height: "103",
        width: "300",
      }
    };
    //Display information
    document.getElementById("description").innerHTML = dragon.description;
    document.getElementById("items").innerHTML = dragon.items;
    document.getElementById("stats").innerHTML = dragon.stats;
    document.getElementById("introImage").innerHTML = dragon.introImage;
    document.getElementById("stock").innerHTML = dragon.stock;
    
        }
    
    
    //Gryphon info
    //Name variable
    
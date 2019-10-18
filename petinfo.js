//Dragon info
//Information variable
var dragon = {
    animal: "Dragon",
    introImage: '<img id="smallImage" src="http://pre08.deviantart.net/65ec/th/pre/i/2012/005/8/8/purple_dragon_by_kirklaw-d4lemat.jpg" alt="purple dragon breathing smoke" />',
    old: {
        src: "http://pre08.deviantart.net/65ec/th/pre/i/2012/005/8/8/purple_dragon_by_kirklaw-d4lemat.jpg",
        alt: "purple dragon breathing smoke",
    },
    description: "<p>Dragons can be found in stories all over the world in many differnt forms. They can be serpent-like, have two or more legs, have two wings, or have wings and legs.</p>",
    items: "Scale Wash: Specially designed for large reptiles to help them gleam (increases hygine), Spine File: Keep them uniform and looking their best (increases hygine, agility, and endurance), Weights: Keep your dragon fit (increases stregth), Fang Brush: Let's see that beautiful smile! (increases hygine and intelligence",
    stats: "Endurace, Strength, Agility, Intelligence, Hygine",
    stock: '<img src="http://blackmarches.wdfiles.com/local--files/umsemtias/Umemtias.jpg" height="103" width="300" />',
    oldStock: {
        src: "http://blackmarches.wdfiles.com/local--files/umsemtias/Umemtias.jpg",
        height: "103",
        width: "300",
    },
};

var cat = {
    animal: "Cat",
};


var pets = {
    dragon: dragon,
    cat: cat,
};




window.onload = function () {
    //on load only shows pet selection div
    //loop through pets array and create links for each pet
    var buffer = '';
    for (var pet in this.pets) {
        buffer += '<button onclick="loadpet("'+pet+'")">' + pets[pet].animal + '</button>';
    }
    document.getElementById("selectorList").innerHTML = buffer;
    // this.loadpet("dragon");
};

function loadpet(petName) {
    // pet has been selected
    //now hide pet selctor
    //and show pet info
    var petSelection = document.getElementById("PetSection");
    petSelection.style.display = "none";
    var petinfocontainer = document.getElementById("petinfocontainer");
    petinfocontainer.style.display = "block";
    //Display information
    document.getElementById("description").innerHTML = dragon.description;
    document.getElementById("items").innerHTML = dragon.items;
    document.getElementById("stats").innerHTML = dragon.stats;
    document.getElementById("introImage").innerHTML = dragon.introImage;
    document.getElementById("stock").innerHTML = dragon.stock;
    document.getElementById("animal").innerHTML = dragon.animal;

}


    //Gryphon info
    //Infomation variable
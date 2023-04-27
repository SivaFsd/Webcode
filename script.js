const mainurl="https://pokeapi.co/api/v2/";

const maindiv = document.createElement("div");
maindiv.setAttribute("id", "div1");
document.body.appendChild(maindiv);
maindiv.setAttribute("class","container");
async function loadInitialData(offset) {
  const response = await fetch(mainurl+"pokemon?limit=50&offset="+offset);
  let pokimonlist = await response.json();
  var totalcount = pokimonlist.count/50;
  var row = document.createElement("div");
  let index=0;
   await Promise.all(pokimonlist.results.map(async (element) => {
    const poki = await fetch(element.url);
    const pokilist= await poki.json();
   
    if(index==0||index%3==0)
    {
      if(index!=0)
      {
        row = document.createElement("div");
      }
        row.setAttribute("class","row");
        maindiv.appendChild(row);
        console.log(index);
    } 
    index++;
    const col4 = document.createElement("div");
    col4.setAttribute("class","col-4");
    row.appendChild(col4);
    const pokidiv = document.createElement("div");
    pokidiv.setAttribute("class","card");
    pokidiv.style.width= "200px";
    col4.appendChild(pokidiv);
    const img=document.createElement("img");
    img.setAttribute("class","card-img-top")
    img.src =pokilist.sprites.back_default;
    pokidiv.appendChild(img);
    const pokidiv1 = document.createElement("div");
   pokidiv1.setAttribute("class","card-body")
    const pokiname = document.createElement("h5");
    pokiname.setAttribute("class","card-title")
    pokiname.innerText=element.name;
    
    pokidiv1.appendChild(pokiname);
    pokidiv.appendChild(pokidiv1);

    const Abilitytext = document.createElement("h5");
    Abilitytext.innerText="Ability";
    pokidiv.appendChild(Abilitytext);

    const ablity = document.createElement("select");
    ablity.setAttribute("class","list-group list-group-flush")
    pokilist.abilities.forEach(element => {
      const pokiabilities = document.createElement("option");
      pokiabilities.setAttribute("class","list-group-item")
      pokiabilities.innerText=element.ability.name;
      ablity.appendChild(pokiabilities);
    });
    pokidiv.appendChild(ablity);

    const movetext = document.createElement("h5");
    movetext.innerText="Moves";
    pokidiv.appendChild(movetext);

    const moves = document.createElement("select");
    moves.setAttribute("class","list-group list-group-flush")
    pokilist.moves.forEach(element => {
      const pokimoves = document.createElement("option");
      pokimoves.setAttribute("class","list-group-item")
      pokimoves.innerText=element.move.name;
      moves.appendChild(pokimoves);
    });
    pokidiv.appendChild(moves);

    const weighttext = document.createElement("h5");
    weighttext.innerText="Weight";
    pokidiv.appendChild(weighttext);

    const pokiweight = document.createElement("div");
    pokiweight.setAttribute("class","card-body")
    pokiweight.innerText=pokilist.weight;
    pokidiv.appendChild(pokiweight);
  }));
  var docFrag = document.createDocumentFragment();
  for(let i=0; i<Math.ceil(totalcount); i++){
    
    const buttonShort = document.createElement("input");
    buttonShort.type = 'button';
    buttonShort.value = i+1;
    buttonShort.setAttribute("id","buttonid_"+i)
   buttonShort.style.width = '40px'; // setting the width to 25px
buttonShort.style.height = '40px'; // setting the height to 25px
buttonShort.style.background = 'lightgray'; // setting the background color to teal
buttonShort.style.fontSize = '20px'; // setting the font size to 20px
// buttonShort.setAttribute("class","btn btn-primary")
let offsetvalue=i*50;
buttonShort.addEventListener("click",function() {
  maindiv.innerHTML='';
  loadInitialData(offsetvalue)
});
docFrag.appendChild(buttonShort);
  }
  maindiv.appendChild(docFrag);
};

     loadInitialData(0);
    



     
      






// var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
//   xhttp.send();



// getText("https://pokeapi.co/api/v2/pokemon/");
// async function getText(file) {
//   let xfile = await fetch(file);
//   let yfile = await xfile.text();
//   document.getElementById("demo").innerHTML = yfile;
//   try {
//     console.log("You Got The Result");
//   }
//   catch(err) {
//     console.log("This is Error");
//   }
// };

// let id = 1
//     async function nextPokemon(){
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//         const pokemon = await res.json()
//         console.log(id)
//         id++
//        }
//        nextPokemon();


      //  async function nextPokemon(){
      //   let id = 1
      //   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
      //   const pokemon = await res.json()
      //  };
      //  nextPokemon();
//const form = document.getElementById('add_team');
//form.onsubmit = add_team;

function Team(name, rating) {
  return{
    name: name,
    rating: rating,
    texte: function() {
      return (name + ' '+rating);
      }
    };
}

function add_team() {
  console.log("hello");
  var rankings = new Array();
  rankings[0] = new Team(document.getElementById("teamname").value,document.getElementById("teamrate").value);
}
function testjson() {
  myObj = {name: "John", age: 31, city: "New York"};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("rankings", myJSON);

}

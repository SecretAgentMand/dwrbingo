(function () {
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

var button = document.getElementById("genCard");
var theCard = document.getElementById("theCard");
var bingoSync = document.getElementById("bingosync");

var goals = [
  {"name": "Kill all 3 enemies in a sprite family" },
  {"name": "Kill all spike tiles with a Club" },
  {"name": "Revenge kill a monster (same zone) using Hurtmore" },
  {"name": "Die to a Poltergeist" },
  {"name": "Lose 650+ Gold to a Goldman" },
  {"name": "Sleep a Druinlord" },
  {"name": "Sleep an Axe Knight" },
  {"name": "Get ejected from Tantagel while cursed" },
  {"name": "Go through every staircase in Grave" },
  {"name": "Get uncursed in Brecconary" },
  {"name": "Use a Torch on every non-Charlock dark floor" },
  {"name": "Curse Princess Gwaelin" },
  {"name": "Refuse the Fairy Flute" },
  {"name": "Unequip the Fighter's Ring" },
  {"name": "Clear Mountain chests starting with 5 and ending with 1" },
  {"name": "See all four coasts" },
  {"name": "Buy a Key in Rim, sell a Key in Garinham" },
  {"name": "Dive Tablet Blind without Outside/reset" },
  {"name": "Check all Charlock chests" },
  {"name": "Run 5 laps around the Dragon Lord's throne" },
  {"name": "Let an enemy heal itself 5 times" },
  {"name": "Never use an Herb" },
  {"name": "Don't cast Repel or use Fairy Water out of battle" },
  {"name": "Sell the Death Necklace" },
  {"name": "Sell a Cursed Belt" },
  {"name": "Say NO to Gwaelin 15 times" },
  {"name": "Open all doors in Charlock" },
  {"name": "Activate infinite chest glitch" },
  {"name": "Reach Level 17" },
  {"name": "Have 8k Gold" },
  {"name": "Get kicked out of Jerk cave" },
  {"name": "Die to the Swamp spike while holding Princess Gwaelin" },
  {"name": "Search behind Wyn's counter" },
  {"name": "No Heal/Healmore out of battle" },
  {"name": "Stay at every inn with Princess Gwaelin" },
  {"name": "Sleep an Axe Knight"},
  { "name": "Red Dragons",
    "options": [
      "Run from a Red Dragon",
      "Kill a Red Dragon without using Healmore"] },
  { "name": "Wizards",
    "options": [
      "Hurtmore a Wizard",
	  "Sleep a Wizard"] },
  { "name": "Demon Knights",
    "options": [
	  "Kill a Demon Knight with only Torches",
	  "Hurtmore a Demon Knight"] },
  { "name": "Armored Knights",
    "options": [
	  "Kill an Armored Knight with only Hurt",
	  "Run from an Armored Knight"] },
  { "name": "Knights",
    "options": [
	  "One-shot a Knight in melee",
	  "Kill an Knight with only Torches"] },
  { "name": "Metal Slimes",
    "options": [
	  "Kill a Metal Slime without swinging",
	  "Run from a Metal Slime"] },
  { "name": "Golems",
    "options": [
	  "Successfully use Sleep on a Golem",
	  "Kill a Golem without using Healmore"] },
  { "name": "Pawn Erdricks",
    "options": [
	  "Sell Erdrick's Armor",
	  "Sell Erdrick's Sword"] },
  { "name": "Gwaelin",
    "options": [
	  "Take Princess Gwaelin to the Dragonlord",
	  "Buy radishes with Princess Gwaelin in Cantlin",
	  "Take Princess Gwaelin to dying soldier in Brecconary",
	  "Take Princess Gwaelin to the Puff Puff woman in Kol",
	  "Take Princess Gwaelin to 'I hate people' woman in Garinham",
	  "Take Princess Gwaelin to jealous soldier in Tantagel",
	  "Take Princess Gwaelin to separated couple in Rim"] },
  { "name": "DN Grind",
    "options": [
	  "DN spot grind 15,000 gold",
	  "DN spot grind 10,000 gold"] },
  { "name": "DL",
    "options": [
	  "Accept Dragon Lord's Offer",
	  "Say YES then NO to the Dragon Lord"] },
  { "name": "Grind Name Combos",
    "options": [
	  "Play the Silver Harp for a Knight",
	  "Kill a Skeleton with Half or Full Plate equipped",
	  "Kill a Droll with Chain Mail equipped",
	  "Kill a Slime with Bamboo Pole equipped",
	  "Kill a Magidrakee with any Sword equipped",
	  "Attempt to light up a Wraith with the Stones of Sunlight",
	  "Kill a Wolf with a shield equipped",
	  "Kill a Warlock with Leather, Magic, or Erdrick's Armor equipped"] },
  { "name": "Dragons",
    "options": [
	  "Kill a Dragon with a Bamboo Pole",
	  "Play the Silver Harp for a Dragon"] }
];

// randomize JSON object
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var generateCard = function(){
  // Used like so
  goals = shuffle(goals);


  var goals2 = goals.slice(0, 25);

  theCard.innerHTML = '';
  bingosync.value = '';
   
  goals2.forEach(function(goal) {
    if (goal.options) {
      // If the goal has multiple options, randomly choose one
      var randomOption = goal.options[Math.floor(Math.random() * goal.options.length)];
      goal.name = randomOption; // Update the goal name with the selected option
      delete goal.options;
    }
    theCard.innerHTML += '<h4><span>' + goal.name + '</span></h4>';
  });

  var goals2JSON = JSON.stringify(goals2);
  bingosync.value = goals2JSON;
  
  var h4Els = document.querySelectorAll('h4');

var addSelect = function(goal) {
  goal.addEventListener("click", function() {
    goal.classList.toggle("selected");
  });
}

  h4Els.forEach( addSelect );
};

generateCard();
button.addEventListener("click",generateCard);

//copy bingosync code

function copy() {
  bingoSync.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

// TEST STUFF
theCard.addEventListener('contextmenu', function(event) {
  // Check if the target is a tile
  if (event.target.classList.contains('tile')) {
    // Prevent the default context menu from appearing
    event.preventDefault();
    
    // Toggle the 'highlighted' class to change the background image
    event.target.classList.toggle('highlighted');
  }
});

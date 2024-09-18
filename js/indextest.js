function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomList(sourceArray, numItems) {
    const result = [];
    
    for (let i = 0; i < numItems; i++) {
        // Check if the item is an array of possibilities
        if (Array.isArray(sourceArray[i])) {
            result.push(getRandomItem(sourceArray[i])); // Randomize from multiple possibilities
        } else {
            result.push(sourceArray[i]); // Regular item
        }
    }
    
    return result;
}

// Example: A source array with arrays representing multiple possibilities for some items
const sourceArray = [
    {"name": "Kill all 3 enemies in a sprite family"},
    {"name": "Kill all spike tiles with a Club"},
    {"name": "Revenge kill a monster (same zone) using Hurtmore"},
    {"name": "Die to a Poltergeist"},
    {"name": "Lose 650+ Gold to a Goldman"},
    {"name": "Sleep a Druinlord"},
    {"name": "Sleep an Axe Knight"},
    {"name": "Get ejected from Tantagel while cursed"},
    {"name": "Go through every staircase in Grave"},
    {"name": "Get uncursed in Brecconary"},
    {"name": "Use a Torch on every non-Charlock dark floor"},
    {"name": "Curse Princess Gwaelin"},
    {"name": "Refuse the Fairy Flute"},
    {"name": "Unequip the Fighter's Ring"},
    {"name": "Clear Mountain chests starting with 5 and ending with 1"},
    {"name": "See all four coasts"},
    {"name": "Buy a Key in Rim, sell a Key in Garinham"},
    {"name": "Dive Tablet Blind without Outside/reset"},
    {"name": "Check all Charlock chests"},
    {"name": "Run 5 laps around the Dragon Lord's throne"},
    {"name": "Let an enemy heal itself 5 times"},
    {"name": "Never use an Herb"},
    {"name": "Don't cast Repel or use Fairy Water out of battle"},
    {"name": "Sell the Death Necklace"},
    {"name": "Sell a Cursed Belt"},
    {"name": "Say NO to Gwaelin 15 times"},
    {"name": "Open all doors in Charlock"},
    {"name": "Activate infinite chest glitch"},
    {"name": "Reach Level 17"},
    {"name": "Have 8k Gold"},
    {"name": "Get kicked out of Jerk cave"},
    {"name": "Die to the Swamp spike while holding Princess Gwaelin"},
    {"name": "Search behind Wyn's counter"},
    {"name": "No Heal/Healmore out of battle"},
    {"name": "Stay at every inn with Princess Gwaelin"},
	{"name": "Sleep an Axe Knight"},
    "RedDragons", 
    [{"name": "Run from a Red Dragon"}, {"name": "Kill a Red Dragon without using Healmore"},],
    "Wizards",
    [{"name": "Hurtmore a Wizard"}, {"name": "Sleep a Wizard"},]
    "DemonKnights",
    [{"name": "Kill a Demon Knight with only Torches"}, {"name": "Hurtmore a Demon Knight"},]
    "ArmoredKnights",
    [{"name": "Kill an Armored Knight with only Hurt"}, {"name": "Run from an Armored Knight"},]
    "Knights",
    [{"name": "One-shot a Knight in melee"}, {"name": "Kill an Knight with only Torches"},]
    "MetalSlimes",
	[{"name": "Kill a Metal Slime without swinging"}, {"name": "Run from a Metal Slime"},]
	"Golems",
	[{"name": "Successfully use Sleep on a Golem"}, {"name": "Kill a Golem without using Healmore"},]
	"PawnErdricks",
	[{"name": "Sell Erdrick's Armor"}, {"name": "Sell Erdrick's Sword"},]
	"Gwaelin",
	[{"name": "Take Princess Gwaelin to the Dragonlord"}, {"name": "Buy radishes with Princess Gwaelin in Cantlin"}, {"name": "Take Princess Gwaelin to dying soldier in Brecconary"}, {"name": "Take Princess Gwaelin to the Puff Puff woman in Kol"}, {"name": "Take Princess Gwaelin to 'I hate people" woman in Garinham"}, {"name": "Take Princess Gwaelin to jealous soldier in Tantagel"}, {"name": "Take Princess Gwaelin to separated couple in Rim"},]
	"DNGrind",
	[{"name": "DN spot grind 15,000 gold"}, {"name": "DN spot grind 10,000 gold"},]
	"DL",
	[{"name": "Accept Dragon Lord's Offer"}, {"name": "Say YES then NO to the Dragon Lord"},]
	"NameCombos",
	[{"name": "Play the Silver Harp for a Knight"}, {"name": "Kill a Skeleton with Half or Full Plate equipped"}, {"name": "Kill a Droll with Chain Mail equipped"}, {"name": "Kill a Slime with Bamboo Pole equipped"}, {"name": "Kill a Magidrakee with Copper, Flame, or Erdrick's Sword equipped"}, {"name": "Attempt to light up a Wraith with the Stones of Sunlight"}, {"name": "Kill a Wolf with a shield equipped"}, {"name": "Kill a Warlock with Leather, Magic Armor, or Erdrick's Armor equipped"},]
	"Dragons",
	[{"name": "Kill a Dragon with a Bamboo Pole"}, {"name": "Play the Silver Harp for a Dragon"},]
];

// Shuffle the array to randomize the 25 chosen items
const shuffledArray = sourceArray.sort(() => Math.random() - 0.5);

// Get 25 random items from the array
const randomItems = getRandomList(shuffledArray, 25);

console.log(randomItems);
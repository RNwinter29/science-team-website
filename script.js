const jokes = [
	"Why did the physicist break up with the biologist? They had no chemistry!",
	"I told a chemistry joke, but there was no reaction.",
	"Parallel lines have so much in common… it’s a shame they'll never meet.",
	"Why can't you trust an atom? Because they make up everything!",
	"What do you call an educated tube? A graduated cylinder!",
	"What did the thermometer say to the graduated cylinder?  \"You may have graduated, but I have more degrees.\"",
	"Why can you never trust an atom?  They make up literally everything.",
	"Why did the white bear dissolve in water? Because it was polar!",
	"What do you call an acid with an attitude?  Ameano Acid",
	"I'm reading a book on antigravity. I can't put it down.",
	"The past, the present and the future all walk into a bar at the same time. It was tense...",
	"A neutron walks into a bar and orders a drink. When the barman gives it to him, he asks, \"How much?\" The barman replies, \"For youno charge.\"",
	"I have a new theory on inertia, but it doesn't seem to be gaining momentum...",
	"Argon walks into a bar. The bartender says, \"We don't serve noble gasses here!\" Argon doesn't react.",
	"Two atoms are walking along. One of them says: \"Oh no! I think I lost an electron!  Are you sure?  Yes, I'm positive.\"",
	"An infectious disease walks into a bar. The barman says, \"We don't serve your type here.\" The disease replies, \"Well you're not a very good host.\"",
	"There are 10 kinds of people in this world. Those who understand binary and those who don't.",
	"A photon checks into a hotel. The bellhop asks if they can help with the luggage. The photon replies, \"I don't have any, I'm traveling light\"...",
	"What does a subatomic duck say? Quark.",
	"What did one tectonic plate say when he bumped into the other? \"Sorry! My fault\".",
	"What type of fish is made out of 2 sodium atoms? \"2 Na.\"",
];

function showRandomJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke-output").textContent = joke;
}
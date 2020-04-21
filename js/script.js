var Pc = document.getElementById("participants").value;
var Vc = document.getElementById("votes").value;
var Sc = document.getElementById("system").value;
var ok = document.getElementById("ok");
var first = document.getElementById("main");
var second = document.getElementById("main-two");
ok.addEventListener('click', function(){
	first.style.display = 'none';
	second.style.display = 'flex';
		createParticipants();
		createVotes();
});
function createParticipants(){
	var Pc = document.getElementById("participants").value;
	for (var i = 0; i<Pc; i++){
		var inp = document.createElement("input");
		inp.className = "li";
		inp.type = "text";;
		inp.id = "InputP" + i;
		var table = document.getElementById("participants-table");
		table.appendChild(inp);
	};
};
function createVotes(){
	var Vc = document.getElementById("votes").value;
	for (var i = 0; i<Vc; i++){
		var inp = document.createElement("input");
		inp.className = "li";
		inp.type = "text";
		inp.id = "InputV" + i;
		var table = document.getElementById("votes-table");
		table.appendChild(inp);
	};
};

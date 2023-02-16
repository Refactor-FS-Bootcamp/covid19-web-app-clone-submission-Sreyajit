let skills = document.querySelector(".skills");
let objectArray = [];
let object = {};
postSpace();
function createObject() {
	object = {
		title: document.getElementById("name").value,
		description: document.getElementById("Query").value,
		date: document.getElementById("Number").value,
	};
	if (object.title !== "" && object.description !== "" && object.date !== "") {
		objectArray.push(object);
		localStorage.setItem("array", JSON.stringify(objectArray));
	} else {
		alert("please fill the full form");
	}
	postSpace();
}
function postSpace() {
	let variable = JSON.parse(localStorage.getItem("array"));
	if (variable == null) {
		noObjectPresent();
	} else {
		skills.innerHTML = "";
		variable.forEach((element) => {
			cardCreator(element);
		});
	}
}
function cardCreator(object) {
	let skill = document.createElement("div");
	let title = document.createElement("h2");
	let skillBody = document.createElement("div");
	let date = document.createElement("p");
	let deleteButton = document.createElement("input");
	skill.className = "skill";
	skillBody.className = "skillBody";
	deleteButton.type = "button";
	deleteButton.value = "Delete";
	deleteButton.id = "button";
	deleteButton.className = "deleteButton";
	title.innerText = "Title:" + object.title;
	skillBody.innerText = object.description;
	date.innerText = "Dated:" + object.date;
	skill.appendChild(title);
	skill.appendChild(skillBody);
	skill.appendChild(date);
	skill.appendChild(deleteButton);
	skills.appendChild(skill);
}
function noObjectPresent() {
	skills.innerHTML = "";
	let h2 = document.createElement("h2");
	h2.innerText = "Nothing to display here";
	skills.appendChild(h2);
}

let skills = document.querySelector(".skills");
let objectArray = [];
let object = {};
let noOfPosts = 0;
postSpace();
function createObject() {
	object = {
		title: document.getElementById("name").value,
		description: document.getElementById("Query").value,
		date: document.getElementById("Number").value,
	};
	if (object.title !== "" && object.description !== "" && object.date !== "") {
		object.id = `${++noOfPosts}`;//todo check why this object key value pair is not getting created yet
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
	deleteButton.addEventListener("click", () => deleteObject(object));
}
function noObjectPresent() {
	skills.innerHTML = "";
	let h2 = document.createElement("h2");
	h2.innerText =
		"No posts found to display- fill the above form and click on the submit button to add posts to display here";
	skills.appendChild(h2);
}
function deleteObject(object) {
	noOfPosts--;
	let variable = JSON.parse(localStorage.getItem("array"));
	indexToDelete = variable.findIndex(element => element.id === object.id);
	variable.splice(indexToDelete, 1);
	objectArray = [...variable];
	localStorage.setItem("array", JSON.stringify(objectArray));
	postSpace();
}

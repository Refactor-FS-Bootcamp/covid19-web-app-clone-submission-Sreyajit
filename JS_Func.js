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
		object.id = `${++noOfPosts}`;
		objectArray.push(object);
		localStorage.setItem("array", JSON.stringify(objectArray));
	} else {
		alert("please fill the full form");
	}
	postSpace();
}
function postSpace() {
	let variable = JSON.parse(localStorage.getItem("array"));
	if (variable == null || variable.length == 0) {
		noObjectPresent();
	} else {
		skills.innerHTML = "";
		variable.forEach((element) => {
			cardCreator(element);
		});
	}
}
function postEditSpace(variable, indexToEdit) {
	if (variable == null || variable.length == 0) {
		noObjectPresent();
	} else {
		skills.innerHTML = "";
		variable.forEach((element, index) => {
			if (index === indexToEdit) {
				editCardCreator(element);
			} else {
				cardCreator(element);
			}
		});
	}
}
function cardCreator(object) {
	let skill = document.createElement("div");
	let title = document.createElement("h2");
	let skillBody = document.createElement("div");
	let date = document.createElement("p");
	let deleteButton = document.createElement("input");
	let editButton = document.createElement("input");
	skill.className = "skill";
	skillBody.className = "skillBody";
	deleteButton.type = "button";
	deleteButton.value = "Delete";
	deleteButton.id = "button";
	deleteButton.className = "deleteButton";
	editButton.type = "button";
	editButton.value = "Edit";
	editButton.id = "button";
	editButton.className = "editButton";
	title.innerText = "Title:" + object.title;
	skillBody.innerText = object.description;
	date.innerText = "Dated:" + object.date;
	skill.appendChild(title);
	skill.appendChild(skillBody);
	skill.appendChild(date);
	skill.appendChild(deleteButton);
	skill.appendChild(editButton);
	skills.appendChild(skill);
	deleteButton.addEventListener("click", () => deleteObject(object));
	editButton.addEventListener("click", () => editObject(object));
}
function noObjectPresent() {
	skills.innerHTML = "";
	let h2 = document.createElement("h2");
	h2.innerText =
		"No posts found to display- fill the above form and click on the submit button to add posts to display here";
	skills.appendChild(h2);
}
function deleteObject(object) {
	alert("are you sure you want to delete?");
	noOfPosts--;
	let variable = JSON.parse(localStorage.getItem("array"));
	indexToDelete = variable.findIndex((element) => element.id === object.id);
	variable.splice(indexToDelete, 1);
	objectArray = [...variable];
	localStorage.setItem("array", JSON.stringify(objectArray));
	postSpace();
}
function editObject(object) {
	let variable = JSON.parse(localStorage.getItem("array"));
	indexToEdit = variable.findIndex((element) => element.id === object.id);
	postEditSpace(variable, indexToEdit);
}
function editCardCreator(object) {
	let skill = document.createElement("div");
	let title = document.createElement("h2");
	let skillBody = document.createElement("div");
	let date = document.createElement("p");
	let deleteButton = document.createElement("input");
	let saveButton = document.createElement("input");
	skill.className = "skill";
	skillBody.className = "skillBody";
	deleteButton.type = "button";
	deleteButton.value = "Delete";
	deleteButton.id = "button";
	deleteButton.className = "deleteButton";
	saveButton.type = "button";
	saveButton.value = "Save";
	saveButton.id = "button";
	saveButton.className = "editButton";
	title.innerText = "Title:" + object.title;
	skillBody.innerText = object.description;
	date.innerText = "Dated:" + object.date;
	skill.appendChild(title);
	skill.appendChild(skillBody);
	skill.appendChild(date);
	skill.appendChild(deleteButton);
	skill.appendChild(saveButton);
	skills.appendChild(skill);
	deleteButton.addEventListener("click", () => deleteObject(object));
	saveButton.addEventListener("click", () => saveObject(object));
}
function saveObject(object) {
	console.log(object);
}

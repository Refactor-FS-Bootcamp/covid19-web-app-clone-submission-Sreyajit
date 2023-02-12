function createObject() {
	let object = {
		title: document.getElementById("name").value,
		description: document.getElementById("Query").value,
		date: document.getElementById("Number").value,
	};
	let skills = document.getElementById("skills");
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
	skillBody.innerText = "Description:" + object.description;
	date.innerText = "Dated:" + object.date;
	deleteButton.onclick = this.skill.remove();
	skill.appendChild(title);
	skill.appendChild(skillBody);
	skill.appendChild(date);
	skill.appendChild(deleteButton);
    console.log(skill);
	console.log(skill == null ? "skill is null" : "skill is not null");
	skills.appendChild(skill);
}

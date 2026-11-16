
function displayMembers() {

    let members = JSON.parse(
        localStorage.getItem("gymMembers")
    ) || [];

    const memberList = document.getElementById("memberList");

    memberList.innerHTML = "";

    let basic = 0;
    let standard = 0;
    let premium = 0;

    members.forEach((member, index) => {

        if (member.plan === "Basic") basic++;
        if (member.plan === "Standard") standard++;
        if (member.plan === "Premium") premium++;

        const row = document.createElement("tr");

        const values = [
            member.name,
            member.email,
            member.phone,
            member.plan
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value || "";
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteMember(index);
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        memberList.appendChild(row);
    });

    document.getElementById("totalMembers").textContent =
        members.length;

    document.getElementById("basicMembers").textContent = basic;

    document.getElementById("standardMembers").textContent =
        standard;

    document.getElementById("premiumMembers").textContent = premium;

    document.getElementById("emptyMessage").textContent =
        members.length === 0
        ? "No members registered yet."
        : "";
}

function deleteMember(index) {

    let members = JSON.parse(
        localStorage.getItem("gymMembers")
    ) || [];

    if (!confirm("Are you sure you want to delete this member?")) {
        return;
    }

    members.splice(index, 1);

    localStorage.setItem(
        "gymMembers",
        JSON.stringify(members)
    );

    displayMembers();
}

displayMembers();

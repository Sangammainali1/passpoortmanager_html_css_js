function maskPassword(pass){
  let str = ""
  for (let index = 0; index < pass.length; index++) {
    
    str += "*"
  }
  return str
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then (
    ()=> {
      // clipboard successfully set 
      // alert("Text copied to clipboard! : " + txt);
      document.getElementById("alert").style.display = "inline"
      setTimeout(()=>{
        document.getElementById("alert").style.display = "none"
      },2000)
    },
    ()=> {
      // clipboard write failed
      alert("clipboard copying failed")
    },
  );

}


// Logic to fill the table
const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e) => {
    e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
  alert(`Successfully deleted ${website}'s password`);
  showPasswords();
};

const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null || JSON.parse(data).length == 0) {
    tb.innerHTML = "No data to show";
  } else {
    tb.innerHTML = `          <tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`;

    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      str += `<tr>
    <td>${element.website} <img onclick="copyText('${element.website}')" style="cursor: pointer;"
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M13 2h6a2 2 0 012 2v14a2 2 0 01-2 2H13a2 2 0 01-2-2V4a2 2 0 012-2zM4 8a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm4-5h8a1 1 0 011 1v1H7V4a1 1 0 011-1zm10 14h-8a1 1 0 01-1-1v-1h10v1a1 1 0 01-1 1zm-2-5H6a1 1 0 01-1-1V7h10v5a1 1 0 01-1 1z'/%3E%3C/svg%3E"
    alt="Copy Button"
  />
  </td>
    <td>${element.username} <img onclick="copyText('${element.username}')" style="cursor: pointer;"
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M13 2h6a2 2 0 012 2v14a2 2 0 01-2 2H13a2 2 0 01-2-2V4a2 2 0 012-2zM4 8a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm4-5h8a1 1 0 011 1v1H7V4a1 1 0 011-1zm10 14h-8a1 1 0 01-1-1v-1h10v1a1 1 0 01-1 1zm-2-5H6a1 1 0 01-1-1V7h10v5a1 1 0 01-1 1z'/%3E%3C/svg%3E"
    alt="Copy Button"
  />
  </td>
    <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" style="cursor: pointer;"
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M13 2h6a2 2 0 012 2v14a2 2 0 01-2 2H13a2 2 0 01-2-2V4a2 2 0 012-2zM4 8a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm4-5h8a1 1 0 011 1v1H7V4a1 1 0 011-1zm10 14h-8a1 1 0 01-1-1v-1h10v1a1 1 0 01-1 1zm-2-5H6a1 1 0 01-1-1V7h10v5a1 1 0 01-1 1z'/%3E%3C/svg%3E"
    alt="Copy Button"
  />
  </td>
    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
    </tr>`;
    }

    tb.innerHTML = tb.innerHTML + str;
  }
  website.value = "";
  username.value = "";
  password.value = "";
};

console.log("working");
showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked......");
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});

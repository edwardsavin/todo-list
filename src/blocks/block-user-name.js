import { user1 } from "../functions/user/user";
import { userChangeName } from "../functions/user/user-functions";

const elementUserName = document.querySelector("#user-name");
elementUserName.textContent = user1.userName;

// Get the new value in elementUserName
elementUserName.onblur = () => {
  updateUserName(user1);
};

elementUserName.onkeypress = (e) => {
  if (e.key === "Enter") {
    updateUserName(user1);
    elementUserName.blur();
  }
};

// Get the new elementUserName value after out of focus
// Update the user.userName value with the newUserName value
function updateUserName(userObject, localStorage = false) {
  if (localStorage) {
    elementUserName.textContent = userObject.userName;
  } else {
    let newUserName = elementUserName.value.trim();

    userChangeName(userObject, newUserName);
  }
}

export { elementUserName, updateUserName };

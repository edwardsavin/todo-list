function userChangeName(userObject, newUserName) {
  userObject.userName = newUserName;

  localStorage.setItem("user1", JSON.stringify(userObject));
}

export { userChangeName };

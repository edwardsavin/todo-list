const userFactory = (userId, userName) => {
  return { userId, userName };
};

let user1 = userFactory("0", "Enter Name")

export { userFactory, user1 };

let users = [];

function userJoin({ id, name, room, peerID }) {
  const user = { id, name, room, peerID };
  users.push(user);
  return user;
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  userJoin,
  getUser,
  userLeave,
  users
};

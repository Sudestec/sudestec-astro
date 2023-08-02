export function formatEmployeeLogin (data) {
  const {token, record} = data,
    { id, avatar, created, email, firstname, lastname, type, username, admin } = record;

  return { record: {
    id: id,
    name: `${firstname} ${lastname}`,
    username: username,
    avatar: avatar,
    email: email,
    created: created,
    type: type,
    admin: admin
  },
  token: token
  };
}

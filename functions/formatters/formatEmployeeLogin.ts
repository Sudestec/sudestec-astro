export interface EmployeeData {
  token: string;
  record: {
    id: string;
    avatar: string;
    created: string;
    email: string;
    firstname: string;
    lastname: string;
    type: string;
    username: string;
    admin: boolean;
  };
}
export type EmployeeType = {
  token: string;
  record: {
    id: string;
    avatar: string;
    created: string;
    email: string;
    firstname: string;
    lastname: string;
    type: string;
    username: string;
    admin: boolean;
  };
};

export interface FormattedEmployeeLogin {
  record: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    email: string;
    created: string;
    admin: boolean;
  };
  token: string;
}

interface EmployeeRecord {
  admin: boolean;
  adress: string;
  alias: string;
  avatar: string;
  cbu: number;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  firstname: string;
  id: string;
  identification: number;
  lastname: string;
  phone: number;
  updated: string;
  username: string;
  verified: boolean;
}

export interface EmployeeRaw {
  record: EmployeeRecord;
  token: string;
}

export function formatEmployeeLogin(data: EmployeeRaw): FormattedEmployeeLogin {
  const { token, record } = data,
    { id, avatar, created, email, firstname, lastname, username, admin } = record;

  return {
    record: {
      id: id,
      name: `${firstname} ${lastname}`,
      username: username,
      avatar: avatar,
      email: email,
      created: created,
      admin: admin
    },
    token: token
  };
}

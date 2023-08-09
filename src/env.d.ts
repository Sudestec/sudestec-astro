/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    auth: null | {
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
  }
}
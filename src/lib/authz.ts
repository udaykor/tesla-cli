import { TESLA_AUTHZ_URL}  from './constants';
import * as dotenv from "dotenv";

dotenv.config();


// Get access to a new Token
export const requestNewToken = async () => {
  const refreshToken = process.env.REFRSH_TOKEN;
  const authRefreshBody = JSON.stringify({
    "grant_type": "refresh_token",
    "client_id": "ownerapi",
    "refresh_token": `${refreshToken}`,
    "scope": "openid email offline_access"
  });

  const res = await fetch(TESLA_AUTHZ_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REFRSH_TOKEN}`
    },
    body: authRefreshBody,
    method: 'POST'
  })
  const response: any = await res.json();
  const data = { 
    accessToken: response.access_token, 
    refreshToken: response.refresh_token
  };
  console.log("Got Tokens");
  return data;
};
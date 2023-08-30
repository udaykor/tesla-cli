import  TESLA_API_BASE_URL, { sleep } from './constants';
import { requestNewToken } from '../lib/authz';
import * as dotenv from "dotenv";

dotenv.config();



export const getFirstVehicleId = async () => {
  const tokenData = await requestNewToken();
  await sleep(2000);
  console.log("Getting the first Vehicle ID");
  const res = await fetch(`${TESLA_API_BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'GET'
  })
  console.log('Status: ', res.status);
  const data = await res.json();
  return data.response[0].id;
};


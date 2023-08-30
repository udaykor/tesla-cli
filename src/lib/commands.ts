import { requestNewToken } from './authz';
import  TESLA_API_BASE_URL, { sleep } from './constants';

// Sure-Shot Trunk Open below is a temp fix - This is inefficient and unreliable.
// 1. Remote start the car - Interval 120 seconds
// 2. Wake up the car
// 3. Actuate trunk
// 4. Using a temporary sure-shot with Multiple Tokens - Ensure low requests to TSLA Motors to avoid IP Ban on WAF
// To-Do:
// 1. Investigate vehicle tokens from vehicle detail by ID
// 2. Minimise token fetching
// OR Move into BT-Mode with RPI?

export const actuateTrunk = async (id:number, which_part:string) =>  {
  console.log("Starting Sure-Shot Trunk actuation");
  const action1 = await remoteStart(id);
  // console.log(action1); - Sensitive - Do not log or demo this!
  const action2 = await wakeUp(id);
  // console.log(action2); - Sensitive - Do not log or demo this!
  const trunkUrl = `${TESLA_API_BASE_URL}${id}/command/actuate_trunk?which_trunk=${which_part}`;

  // Use new Tokens to Open trunk
  const tokenData  = await requestNewToken();

  const res = await fetch(trunkUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'POST',
    body: JSON.stringify({
      which_trunk: which_part
    })
  })
  const response = await res.json();
  console.log("Done with Sure-Shot")
  return response;
};

export const wakeUp = async(id: number) => {
  console.log("Attempting Waking up the car");
  const tokenData = await requestNewToken();

  const wakeUpUrl = `${TESLA_API_BASE_URL}${id}/wake_up`;

  const res = await fetch(wakeUpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'POST',
  })
  const response = await res.json();
  if(res.status === 200) {
    console.log("wake up succeed");
  }
  console.log("Done waking up car");
  await sleep(2200);
  return response;
}

// Keyless Driving
export const remoteStart = async(id: number) => {
  console.log("Attempting remote start");
  const tokenData = await requestNewToken();

  const wakeUpUrl = `${TESLA_API_BASE_URL}${id}/command/remote_start_drive`;

  const res = await fetch(wakeUpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'POST',
  })
  const response = await res.json();
  if(res.status === 200) {
    console.log("Remote Start drive succeed");
  }
  console.log("Done with remote start");
  await sleep(1800);
  return response;
}
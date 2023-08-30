import {Args, Command } from '@oclif/core'
import { actuateTrunk } from '../../lib/commands'
import { getFirstVehicleId } from '../../lib/state'
import { sleep } from '../../lib/constants';

import * as dotenv from "dotenv";


dotenv.config();

export default class Actuate extends Command {
  static description = 'Actuate Tesla Trunk'

  static examples = [
    `$ tesla-cli actuate rear`,
    `$ tesla-cli actuate front`,
  ]

  static args = {
    part: Args.string({description: 'Part to actuate', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Actuate)

    this.log(`Actuating ${args.part} trunk!`);

    this.log("Getting new Access Tokens");
    
    const carId: number = await getFirstVehicleId();
    await sleep(500);
    this.log("Received Car ID. ", typeof carId);
    const trunkActionResponse = await actuateTrunk(carId, args.part);
    const status = trunkActionResponse?.response?.result ? trunkActionResponse.response.result : false
    this.log(`Trunk Command Success: ${status}`);
    this.log("Done");
  }
}

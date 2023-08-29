import {Args, Command } from '@oclif/core'
import { actuateTrunk } from '../../lib/commands'
import { getVehicles } from '../../lib/state'

export default class Hello extends Command {
  static description = 'Actuate Tesla Trunk'

  static examples = [
    `$ tesla-cli actuate rear`,
    `$ tesla-cli actuate front`,
  ]

  static args = {
    part: Args.string({description: 'Part to actuate', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`Actuating ${args.part} trunk!`);

    // const vehicles = await getVehicles();
    // const { response } = vehicles;
    // const id = response[0].id;
    // const trunkActionResponse = await actuateTrunk(id, args.part);
    // this.log(trunkActionResponse);
    
    this.log("Done");
  }
}

// import * as dgram from 'dgram';
import {F1TelemetryClient, constants} from '..';
const {PACKETS} = constants;

const client = new F1TelemetryClient({port: 20777});

client.on(PACKETS.sessionHistory, x => {
  console.clear();
  console.log(x);
});

client.start();
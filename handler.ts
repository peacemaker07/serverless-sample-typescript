import { APIGatewayProxyHandler } from 'aws-lambda';
// import { Moment } from 'moment';
import * as moment from 'moment-timezone';
import 'source-map-support/register';

moment.tz.setDefault('Asia/Tokyo');

export const hello: APIGatewayProxyHandler = async (event, _context) => {

    const isoFormatString = '2021-03-10T18:11:00+09:00';
    const momentValYMD = moment(isoFormatString, 'YYYYMMDD');
    console.log(momentValYMD.format('YYYY年M月D日'));
    // console.log(moment(isoFormatString).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm'));
    console.log(moment(isoFormatString).format('YYYY/MM/DD HH:mm'));
    console.log(moment(isoFormatString).locale('ja').format('YYYY/MM/DD (ddd)'));

    return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
          input: event,
        }, null, 2),
    };
}

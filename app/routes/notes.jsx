import { json } from '@remix-run/node';

export function loader(){
    return "working fine";
}

export function action({request}){
    console.log('origin', request.headers.get('origin'))
    return json(
    { 
        sdfsdf: request.headers.get('origin'),
        name: 'tanin',
        hello: "world",
     },
    {
      headers: {
        "Access-Control-Allow-Origin": request.headers.get('origin'),
      },
    }
  );              
}



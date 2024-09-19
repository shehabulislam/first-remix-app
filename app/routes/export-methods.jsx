import { json } from '@remix-run/node'

// import { useCatch } from '@remix-run/react'

/**
 * @params data | {request, param}
 * @returns meta object
 */
export function meta(){
  return {
    title: 'All Notes'
  }
}


/**
 * @params data | {request, param}
 * @returns json
 * @throws json
 */
export function action(){ // can be an async function
    
    if(window.error){
        throw json({message: 'something went wrong'}, {
            status: 404,
            statusText: 'something went wrong!'
        });
    }
    return json({message: 'working fine'})
}

/**
 * @params data | {request, param}
 * @returns json
 * @throws json
 */
export function loader(){
    return json({data: 'working fine'}, {
        headers: {}
    })
}

/**
 * add stylesheet or javascript file here
 */
export function links(){
    return [{

    }]
}

/**
 * handle error
 * @returns jsx
 */
export function CatchBoundary(){

    // const caughtResponse = useCatch(); 
    return <>
        <main>
            <h1>An error related to your notes occurred!</h1>
        </main>
    </>
}

/**
 * handle error
 * @params error object
 * @returns jsx
 */
export function ErrorBoundary(){ // {error}
    return <>
        <main>
            <h1>An error related to your notes occurred!</h1>
        </main>
    </>
}

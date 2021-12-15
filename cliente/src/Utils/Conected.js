import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';


const httpLink = new HttpLink({ uri: 'https://api-gatewa.herokuapp.com/' })

 

const authMiddleware = new ApolloLink((operation, forward) => { 
  operation.setContext({
    headers: {
      'authorization': localStorage.getItem('token'),
  }
})

  return forward(operation)
})


const authAfterware = new ApolloLink((operation, forward) => {  
  return forward(operation).map(response => {
    const contex = operation.getContext();   
    const {headers} = contex

    console.log('headersCONECT', headers.authorization);
    return response
  })
})

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),  
  link: authMiddleware.concat(authAfterware.concat(httpLink))

  
});

export default client;
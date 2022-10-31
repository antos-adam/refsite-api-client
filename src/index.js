import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


const TOKEN_STORAGE_KEY = "token-storage-key"
const client = new ApolloClient(
	{
	uri: 'http://localhost:443/graphql',
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX2lkIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsImlzQWRtaW4iOiJpbml0In0sInN0YXRlcyI6eyJpbml0Ijp7Il9pZCI6dHJ1ZSwidXNlcm5hbWUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfX3YiOnRydWUsImVtYWlsIjp0cnVlLCJpc0FkbWluIjp0cnVlfX19LCJza2lwSWQiOnRydWV9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjYzMDY2MDJjMjg0NDVkYmE0MzJlMzUxOCIsInVzZXJuYW1lIjoiYW50b3MiLCJwYXNzd29yZCI6IiQyYiQxMCRQenJla2d3UzJBcXRzaE9xc1hXYk0uODRVbkF5cEd5QXBneVA1MzRVOG9Vd1FVZ3FrNlBUSyIsIm5hbWUiOiJBZGFtIEFudG_FoSIsIl9fdiI6MCwiZW1haWwiOiJhZGFtQGFkYW1hbnRvcy5ldSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2NjcwMzk3NTYsImV4cCI6MTY2NzEyNjE1Nn0.uSGSsVRsKM7zHRFO9VKOnrzXl7muGYCLBYYhpD29mOE`
	},
  	credentials: 'include',
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

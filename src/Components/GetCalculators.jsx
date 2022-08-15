import React from 'react'
import { useQuery, gql } from "@apollo/client";


export default function GetCalculators() {

  const GET_CALCULATORS = gql`
query GetCalculators
{
  calculators
  {
    _id
    icon
    name
    variables
    components
    date
  }
}
`
  const { data, loading, error } = useQuery(GET_CALCULATORS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error}</p>;
  console.log(data.calculators);


  return (
    <>
      {JSON.stringify(data.calculators)}
    </>
  )
}

import React from 'react'
import { useMutation, gql } from "@apollo/client";
import {useState} from "react";


export default function NewCalculator() {
const [name, setName] = useState("");
  const NEW_CALCULATOR = gql`
  mutation ($calculator: CreateCalculatorInput!)
  {
    createCalculator(createCalculatorInput: $calculator) 
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
const [addCalculator, { data, loading, error }] = useMutation(NEW_CALCULATOR);
  if (loading) return <p>Saving...</p>;
  if (error) return <p>Error :( {error}</p>;


  return (
    <>
      <input placeholder="Calculator name" onChange={e => setName(e.target.value)}></input>
      <button onClick={e=> addCalculator({ variables: {
    	calculator: {
        icon: "",
        name: name,
        components: "",
        date: "1.1.2022",
        variables: ""
    	}
    } })}>New calculator</button>
    </>
  )
}

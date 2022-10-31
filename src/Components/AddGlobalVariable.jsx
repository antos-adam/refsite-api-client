import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
//import text from "../text"

const UpdateVariable = () => {
    //const [str, setStr] = useState("")
    const [description, setDescription] = useState("")
    const [excelData, setExcelData] = useState("")


    const CREATE_VAR = gql`
    mutation($variable: UpdateGlobalVariableInput!)
    {
        updateGlobalVariable(updateGlobalVariableInput: $variable)
        {
            _id
            description
        }
    }
`

console.log(JSON.parse(excelData))

const [updateVariable, updateResp] = useMutation(CREATE_VAR)
	const saveHandler = () => {
		//if (Object.keys(editorState).length === 0) return;

		////console.log(data)

            /*const variables = 

            var varsToDb = []

            variables.forEach(variable => {
                var varToDb = {
                    name: variable.name,
                    type: variable.type
                }
                if (variable.type === 1) {varToDb.valueNumber = variable.defaultValue}
                if (variable.type === 2) {varToDb.valueBoolean = variable.defaultValue}
                if (variable.type === 3) {varToDb.valueArray = variable.defaultValue}
                if (variable.type === 4) {varToDb.valueString = variable.defaultValue}
                if (variable.type === 5) {varToDb.valueArray = variable.defaultValue}
                if (variable.type === 6) {varToDb.valueString = variable.defaultValue}

                varsToDb.push(varToDb)
            })*/


			console.log("updating db")
            console.log(description);

			//const d = new Date()
			updateVariable({
				variables: {
					variable: {
                        description: description,
                        excelData: excelData,
						//variables: varsToDb,
						// date: `${("0" + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`,
					}
				}
			})

            console.log(updateResp)
	}

    return(
        <>
        <input value={description} placeholder="id" onChange={e => setDescription(e.target.value)}></input>
        <br/>
        {/* <input value={excelData} placeholder="excel data" onChange={e => setExcelData(e.target.value)}></input>
        <br/> */}
        <button onClick={e=> saveHandler()}>Ulozit</button>
        </>
    )
}

export default UpdateVariable
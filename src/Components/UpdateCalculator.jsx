import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
//import text from "../text"

const UpdateCalculator = () => {
    //const [str, setStr] = useState("")
    const text = null;

    const UPDATE_CALC = gql`
    mutation($calculator: UpdateCalculatorInput!)
    {
        updateCalculator(updateCalculatorInput: $calculator)
        {
            _id
        }
    }
`
const [updateCalculator, updateResp] = useMutation(UPDATE_CALC)
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
            console.log(text);

			//const d = new Date()
			updateCalculator({
				variables: {
					calculator: {
						_id: "630cd9935da2d693f0a861f6",
                        excelData: text
						//variables: varsToDb,
						// date: `${("0" + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`,
					}
				}
			})
	}

    return(
        <>
        <button onClick={e=> saveHandler()}>Ulozit</button>
        </>
    )
}

export default UpdateCalculator
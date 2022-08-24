Příklady dotazů na Graphql backend kalkulaček umístěném na https://refsite-calculator.herokuapp.com/graphql

# Category
## Queries
### GetCategory
    {
      category(_id: "62fa29167dae770411a3a4eb")
      {
        _id
        icon
        name
      }
    }
### GetCategories
    {
      categories
      {
        _id
        icon
        name
      }
    }
## Mutations
### CreateCategory
parametry jsou nullable, takže není nutné je zadávat

    mutation 
    {
      createCategory(createCategoryInput: {
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test",
      }) 
      {
        _id
        icon
        name
      }
    }

### UpdateCategory
parametry jsou nullable (kromě _id), takže není nutné je zadávat, mění se pouze zadané parametry, ostatní zůstávají na původní hodnotě

    mutation 
    {
      updateCategory(updateCategoryInput: {
        _id: "62fa29167dae770411a3a4eb",
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test edit",
      }) 
      {
        _id
        icon
        name
      }
    }

### RemoveCategory

    mutation 
    {
      removeCategory(_id: "62fa29167dae770411a3a4eb") 
      {
        _id
        icon
        name
      }
    }

# Calculator
## Queries
### GetCalculator

    {
      calculator(_id:"62fa4a8f9a7dc177b8760375")
      {
        _id
        icon
        name
        variables
        components
        date
        categoryId
      }
    }
### GetCalculators
    {
      calculators
      {
        _id
        icon
        name
        variables
        components
        date
        categoryId
      }
    }
## Mutations
### CreateCalculator
parametry jsou nullable, takže není nutné je zadávat

    mutation 
    {
      createCalculator(createCalculatorInput: {
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test",
        categoryId: "62fa29167dae770411a3a4eb",
        components: "",
        variables: ""
      }) 
      {
        _id
        icon
        name
        variables
        components
        date
        categoryId
      }
    }

#### With variables
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
            categoryId
        }
    }

    {
        "calculator": {
            "icon": "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
            "name": "Test",
            "categoryId: "62fa29167dae770411a3a4eb",
            "components": "",
            "variables": ""
        }
    }

### UpdateCalculator
parametry jsou nullable (kromě _id), takže není nutné je zadávat, mění se pouze zadané parametry, ostatní zůstávají na původní hodnotě

    mutation 
    {
      updateCalculator(updateCalculatorInput: {
        _id: "62fa4a8f9a7dc177b8760375",
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test upraveno",
        categoryId: "62fa29167dae770411a3a4eb",
        components: "",
        variables: ""
      }) 
      {
        _id
        icon
        name
        variables
        components
        date
        categoryId
      }
    }

### RemoveCalculator

    mutation 
    {
      removeCalculator(_id: "62fa4a8f9a7dc177b8760375") 
      {
        _id
        icon
        name
        variables
        components
        date
        categoryId
      }
    }

# /pdf
## /download - POST
## /mail - POST
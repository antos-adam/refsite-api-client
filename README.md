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
      calculator(_id:"62fa2f956da80170767371fe")
      {
        _id
        icon
        name
         variables
        components
        date
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
      }
    }
## Mutations
### CreateCalculator

    mutation 
    {
      createCalculator(createCalculatorInput: {
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test",
        components: "",
        date: "1.1.2022",
        variables: ""
      }) 
      {
        _id
        icon
        name
         variables
        components
        date
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
        }
    }

    {
    	"calculator": {
        "icon": "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        "name": "Test",
        "components": "",
        "date": "1.1.2022",
        "variables": ""
    	}
    }

### UpdateCalculator

    mutation 
    {
      updateCalculator(updateCalculatorInput: {
        _id: "62fa2f956da80170767371fe",
        icon: "https://tools.refsite.cz/tool_plyn_na_tc/image004.png",
        name: "Test upraveno",
        components: "",
        date: "21.12.2022",
        variables: ""
      }) 
      {
        _id
        icon
        name
         variables
        components
        date
      }
    }

### RemoveCalculator

    mutation 
    {
      removeCalculator(_id: "62fa2f956da80170767371fe") 
      {
        _id
        icon
        name
         variables
        components
        date
      }
    }
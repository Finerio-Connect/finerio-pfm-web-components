# Summary Component
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg) ![Category](https://img.shields.io/badge/Category-WebComponents-blue.svg)

This component helps shows data in the form of graphs.

## Installation

```
<script src="https://cdn.finerio.mx/pfm/components/fc-pfm-summary.js"></script>
```

## How to use

```
<fc-pfm-summary></fc-pfm-summary>
```

## Properties

| Name                                       | Type                 | Description                                                                                                                 | Default                                    |
| ------------------------------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **summaryData**                            | [`string`, `Object`] | The data of the summary that will be used                                                                                   | _{incomes: [], expenses: [], balances:[]}_ |
| **categoriesData**                         | [`string`, `Array`]  | The data of the categories that will be used                                                                                | _[]_                                       |
| **isEmpty**                                | `boolean`            | Show the empty view in the component                                                                                        | _false_                                    |
| **analysisExpensesTableAverageTitle**      | `string`             | The custom text to display in the average column header of the analysis table of expenses                                   | _null_                                     |
| **analysisExpensesTableDescrTitle**        | `string`             | The custom text to display in the description column header of the analysis table of expenses                               | _null_                                     |
| **analysisExpensesTableNumTranTitle**      | `string`             | The custom text to display in the number of transactions column header of the analysis table of expenses                    | _null_                                     |
| **analysisExpensesTableSubTitle**          | `string`             | The custom text to display in the subtitle of the analysis table of expenses                                                | _null_"\_                                  |
| **analysisExpensesTableTitle**             | `string`             | The custom text to display in the title of the analysis table of expenses                                                   | _null_                                     |
| **analysisExpensesTableTotalTitle**        | `string`             | The custom text to display in the total column header of the analysis table of expenses                                     | _null_                                     |
| **analysisIncomesTableAmountTitle**        | `string`             | The custom text to display in the amount column header of the analysis table of incomes                                     | _null_                                     |
| **analysisIncomesTableCategoryTitle**      | `string`             | The custom text to display in the category column header of the analysis table of incomes                                   | _null_                                     |
| **analysisIncomesTableConceptTitle**       | `string`             | The custom text to display in the concept column header of the analysis table of incomes                                    | _null_                                     |
| **analysisIncomesTableDateTitle**          | `string`             | The custom text to display in the date column header of the analysis table of incomes                                       | _null_                                     |
| **analysisIncomesTableSubTitle**           | `string`             | The custom text to display in the subtitle of the analysis table of incomes                                                 | _null_                                     |
| **cardBalanceChartTitle**                  | `string`             | The custom text to display in the chart title on the balance section                                                        | _null_                                     |
| **cardBalanceExpenseTitle**                | `string`             | The custom text that will be displayed in the title of the expense card in the balance section                              | _null_                                     |
| **cardBalanceIncomeTitle**                 | `string`             | The custom text that will be displayed in the title of the income card in the balance section                               | _null_                                     |
| **cardBalanceTitle**                       | `string`             | The custom text that will be displayed in the title of the balance card in the balance section                              | _null_                                     |
| **cardExpensesBarChartTitle**              | `string`             | The custom text to display in the title of the bar chart in the expenses section                                            | _null_                                     |
| **cardExpensesCatTableTitle**              | `string`             | The custom text that will be displayed in the title of the categories table in the expenses section                         | _null_                                     |
| **cardExpensesDonChartTitle**              | `string`             | The custom text to display in the title of the doughnut chart in the expense section                                        | _null_                                     |
| **cardExpensesSubcatTableTitle**           | `string`             | The custom text that will be displayed in the title of the subcategories table in the expenses section                      | _null_                                     |
| **cardExpensesTotalTitle**                 | `string`             | The custom text to display in the title of the expense total card in the expense section                                    | _null_                                     |
| **cardIncomesBarChartTitle**               | `string`             | The custom text to display in the title of the bar chart in the incomes section                                             | _null_                                     |
| **cardIncomesCatTableTitle**               | `string`             | The custom text that will be displayed in the title of the categories table in the incomes section                          | _null_                                     |
| **cardIncomesDonChartTitle**               | `string`             | The custom text to display in the title of the doughnut chart in the incomes section                                        | _null_                                     |
| **cardIncomesSubcatTableTitle**            | `string`             | The custom text that will be displayed in the title of the subcategories table in the incomes section                       | _null_                                     |
| **cardIncomesTotalTitle**                  | `string`             | The custom text to display in the title of the total card in the incomes section                                            | _null_                                     |
| **categoryExpensesTableAmountTitle**       | `string`             | The custom text to display in the total column header of the category table in the expenses section                         | _null_                                     |
| **categoryExpensesTableConceptTitle**      | `string`             | The custom text to display in the concept column header of the category table in the expenses section                       | _null_                                     |
| **categoryExpensesTableDetailTitle**       | `string`             | The custom text to display in the detail column header of the category table in the expenses section                        | _null_                                     |
| **categoryExpensesTablePercentTitle**      | `string`             | The custom text to display in the percentage column header of the category table in the expenses section                    | _null_                                     |
| **categoryIncomesTableAmountTitle**        | `string`             | The custom text to display in the total column header of the category table in the incomes section                          | _null_                                     |
| **categoryIncomesTableConceptTitle**       | `string`             | The custom text to display in the concept column header of the category table in the incomes section                        | _null_                                     |
| **categoryIncomesTableDetailTitle**        | `string`             | The custom text to display in the detail column header of the category table in the incomes section                         | _null_                                     |
| **categoryIncomesTablePercentTitle**       | `string`             | The custom text to display in the percentage column header of the category table in the incomes section                     | _null_                                     |
| **expensesBarChartColor**                  | `string`             | The color of the bar chart in the expenses section                                                                          | _""_                                       |
| **expensesBarChartSelectedColor**          | `string`             | The color of the bar chart selected in the expenses section                                                                 | _""_                                       |
| **iconExpensesAnalysisTooltip**            | `string`             | The custom text that will be displayed on the tooltip of the analysis button of the category table in the expenses section  | _null_                                     |
| **iconExpensesMovementTooltip**            | `string`             | The custom text that will be displayed on the tooltip of the movements button of the category table in the expenses section | _null_                                     |
| **iconIncomesAnalysisTooltip**             | `string`             | The custom text that will be displayed on the tooltip of the analysis button of the category table in the incomes section   | _null_                                     |
| **iconIncomesMovementTooltip**             | `string`             | The custom text that will be displayed on the tooltip of the movements button of the category table in the incomes section  | _null_                                     |
| **incomesBarChartColor**                   | `string`             | The color of the bar chart in the incomes section                                                                           | _""_                                       |
| **incomesBarChartSelectedColor**           | `string`             | TThe color of the bar chart selected in the incomes section                                                                 | _""_                                       |
| **subcategoryExpensesTableAmountTitle**    | `string`             | The custom text to display in the total column header of the subcategory table in the expenses section                      | _null_                                     |
| **subcategoryExpensesTableConceptTitle**   | `string`             | The custom text to display in the concept column header of the subcategory table in the expenses section                    | _null_                                     |
| **subcategoryExpensesTableMovementsTitle** | `string`             | The custom text to display in the movements column header of the subcategory table in the expenses section                  | _null_                                     |
| **subcategoryExpensesTablePercentTitle**   | `string`             | The custom text to display in the percentage column header of the category table in the expenses section                    | _null_                                     |
| **subcategoryIncomesTableAmountTitle**     | `string`             | The custom text to display in the total column header of the subcategory table in the incomes section                       | _null_                                     |
| **subcategoryIncomesTableConceptTitle**    | `string`             | The custom text to display in the concept column header of the subcategory table in the incomes section                     | _null_                                     |
| **subcategoryIncomesTableMovementsTitle**  | `string`             | The custom text to display in the movements column header of the subcategory table in the incomes section                   | _null_                                     |
| **subcategoryIncomesTablePercentTitle**    | `string`             | The custom text to display in the percentage column header of the category table in the incomes section                     | _null_                                     |
| **summaryTitle**                           | `string`             | The custom text that will be displayed on the main component title                                                          | _null_                                     |
| **tabBalanceTitle**                        | `string`             | The custom text that will be displayed on the balance tab                                                                   | _null_                                     |
| **tabExpensesTitle**                       | `string`             | The custom text that will be displayed on the expenses tab                                                                  | _null_                                     |
| **tabIncomesTitle**                        | `string`             | The custom text that will be displayed on the incomes tab                                                                   | _null_                                     |
| **emptyViewTitle**                         | `string`             | The custom text to be displayed in the Title section of the Empty view (When the summary is not available) tab              | _null_                                     |
| **emptyViewDescription**                   | `string`             | The custom text to be displayed in the Description section of the Empty view (When the summary is not available) tab        | _null_                                     |
| **emptyViewActionText**                    | `string`             | The custom text to be displayed in the Action Button of the Empty view (When the summary is not available) tab              | _null_                                     |
|                                            |                      |                                                                                                                             |                                            |

## Events

| Name                                 | Description                                                    | Detail                              | Data   |
| ------------------------------------ | -------------------------------------------------------------- | ----------------------------------- | ------ |
| **component-mount**                  | Triggers when the component is mounted                         | _None_                              |
| **component-unmount**                | Triggers when the component is unmounted                       | _None_                              |
| **tab-click**                        | Triggers when a tab is selected                                | {summary: `object`}                 |
| **bar-chart-click**                  | Triggers when the bar chart is clicked                         | object                              |
| **doughnut-chart-subcategory-click** | Triggers when the doughnut chart of the subcategory is clicked | {summary: `object`}                 |
| **doughnut-chart-click**             | Triggers when the doughnut chart is clicked                    | {type: `string`, summary: `object`} |
| **subcategory-detail-click**         | Triggers when the subcategory´s right arrow button is clicked  | {summary: `object`, date: `number   | Date`} |
| **category-detail-click**            | Triggers when the category´s right arrow button is clicked     | {summary: `object`, type: `string`} |
| **movements-detail-back**            | Triggers when the movement´s left arrow button is clicked      | _None_                              |
| **analysis-click**                   | Triggers when subcategory´s analysis button is clicked         | {analysis: `array`}                 |
| **modal-analysis-open**              | Triggers when edit analysis modal is opened                    | _None_                              |
| **modal-analysis-close**             | Triggers when new analysis modal is closed                     | _None_                              |
|                                      |                                                                |                                     |

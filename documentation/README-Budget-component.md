# Budget Component
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg) ![Category](https://img.shields.io/badge/Category-WebComponents-blue.svg)

This component helps in managing and calculating budgets.

## Installation

```
<script src="https://cdn.finerio.mx/pfm/components/fc-pfm-budget.js"></script>
```

## How to use

```
<fc-pfm-budget></fc-pfm-budget>
```

## Properties

| Name                                      | Type                | Description                                                                                                             | Default |
| ----------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| **budgetData**                            | [`string`, `Array`] | The data of the budget that will be used                                                                                | _[]_    |
| **categoriesData**                        | [`string`, `Array`] | The data of the categories that will be used                                                                            | _[]_    |
| **budgetTitle**                           | `string`            | The custom text to be displayed in the title of the view                                                                | _null_  |
| **budgetTotalTitle**                      | `string`            | The custom text to be displayed in the title of the Total budget section                                                | _null_  |
| **budgetModalFirstTitle**                 | `string`            | The custom text to be displayed in the first title of the new budget modal                                              | _null_  |
| **budgetModalDetailTitle**                | `string`            | The custom text to be displayed in the first title of the budget detail modal                                           | _null_  |
| **formCategoriesText**                    | `string`            | The custom text to display in the category section title in the new budget modal when a category has been selected      | _null_  |
| **formSubcategoriesText**                 | `string`            | The custom text to display in the subcategories section title in the new budget modal when a category has been selected | _null_  |
| **warningPercentage**                     | `number`            | The percentage where the budget status changes from stable to warning                                                   | _"70"_  |
| **budgetCardMessage**                     | `string`            | The custom text indicating the remaining budget                                                                         | _null_  |
| **formCreateButtonText**                  | `string`            | The custom text to display on the submit button in the new budget modal                                                 | _null_  |
| **formSaveButtonText**                    | `string`            | The custom text to display on the submit button in the edit budget modal                                                | _null_  |
| **editButtonText**                        | `string`            | The custom text to be displayed in the edit button of the budget detail modal                                           | _null_  |
| **deleteButtonText**                      | `string`            | The custom text to be displayed in the delete button of the budget detail modal                                         | _null_  |
| **confirmDeleteDialogTitle**              | `string`            | The custom text to be displayed in the title of the Confirm Delete Dialog                                               | _null_  |
| **confirmDeleteDialogMessage**            | `string`            | The custom text to be displayed in the body of the Confirm Delete Dialog                                                | _null_  |
| **confirmDeleteDialogNegativeButtonText** | `string`            | The custom text to be displayed in the Negative Button of the Confirm Delete Dialog                                     | _null_  |
| **confirmDeleteDialogPositiveButtonText** | `string`            | The custom text to be displayed in the Positive Button of the Confirm Delete Dialog                                     | _null_  |
| **isEmpty**                               | `boolean`           | Show the empty view in the component                                                                                    | _false_ |
| **emptyViewTitle**                        | `string`            | The custom text to be displayed in the Title section of the Empty view (When there are no budgets)                      | _null_  |
| **emptyViewDescription**                  | `string`            | The custom text to be displayed in the Description section of the Empty view (When there are no budgets)                | _null_  |
| **emptyViewActionText**                   | `string`            | The custom text to be displayed in the Action Button of the Empty view (When there are no budgets)                      | _null_  |
|                                           |                     |                                                                                                                         |

## Events

| Name                  | Description                                                       | Detail Data                                               |
| --------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- |
| **component-mount**   | Triggers when the component is mounted                            | _None_                                                    |
| **component-unmount** | Triggers when the component is unmounted                          | _None_                                                    |
| **open-new-modal**    | Triggers when the new budget modal is opened                      | _None_                                                    |
| **open**              | Triggers when the budget detail modal is opened                   | budget: `object`                                          |
| **select-category**   | Triggers when a category is selected                              | category: `object`                                        |
| **field-change**      | Triggers when a budget form field is changed                      | {name: `string`, value: `string`}                         |
| **save-edit**         | Triggers when edit modal form is submitted                        | {budgets: `object`, onSuccess: `void`, showToast: `void`} |
| **save-new**          | Triggers when new modal form is submitted                         | {budgets: `object`, onSuccess: `void`, showToast: `void`} |
| **close-new-modal**   | Triggers when new budget modal is closed                          | _None_                                                    |
| **close-edit-modal**  | Triggers when edit budget modal is closed                         | _None_                                                    |
| **back-modal**        | Triggers when back button is clicked in the budget modal          | categories: `Array`                                       |
| **delete**            | Triggers when delete button is clicked in the budget detail modal | {budget: `object`, onSuccess: `void`, showToast: `void`}  |
| **edit**              | Triggers when edit button is clicked in the budget detail modal   | budget: `object`                                          |
|                       |                                                                   |                                                           |

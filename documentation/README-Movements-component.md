# Movements Component

This component helps in managing movements.

## Installation

```
<script src="https://cdn.finerio.mx/pfm/components/fc-pfm-movements.js"></script>
```

## How to use

```
<fc-pfm-movements></fc-pfm-movements>
```

## Properties

| Name                          | Type                                                                                   | Description                                                                                                    | Default |
| ----------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| **transactionsData**          | [`string`, `Array`]                                                                    | The data of the transactions that will be used                                                                 | _[]_    |
| **accountsData**              | [`string`, `Array`]                                                                    | The data of the accounts that will be used                                                                     | _[]_    |
| **categoriesData**            | [`string`, `Array`]                                                                    | The data of the categories that will be used                                                                   | _[]_    |
| **isEmpty**                   | `boolean`                                                                              | Show the empty view in the component                                                                           | _false_ |
| **title**                     | `string`                                                                               | The custom text to be displayed in the title of the view                                                       | _null_  |
| **titleShow**                 | [`string`, `boolean`]                                                                  | Show view title                                                                                                | _true_  |
| **accountColumnText**         | `string`                                                                               | The custom text that will be displayed on the account column header                                            | _null_  |
| **accountColumnOrder**        | [`string`, `number`]                                                                   | Position number in the table of the account column                                                             | _1_     |
| **accountColumnShow**         | [`string`, `boolean`]                                                                  | Show account column                                                                                            | _true_  |
| **dateColumnText**            | `string`                                                                               | The custom text that will be displayed on the date column header                                               | _null_  |
| **dateColumnOrder**           | [`string`, `number`]                                                                   | Position number in the table of the date column                                                                | _2_     |
| **dateColumnShow**            | [`string`, `boolean`]                                                                  | Show date column                                                                                               | _true_  |
| **amountColumnText**          | `string`                                                                               | The custom text that will be displayed on the amount column header                                             | _null_  |
| **amountColumnOrder**         | [`string`, `number`]                                                                   | Position number in the table of the amount column                                                              | _3_     |
| **amountColumnShow**          | [`string`, `boolean`]                                                                  | Show amount column                                                                                             | _true_  |
| **descriptionColumnText**     | `string`                                                                               | The custom text that will be displayed on the description column header                                        | _null_  |
| **descriptionColumnOrder**    | [`string`, `number`]                                                                   | Position number in the table of the description column                                                         | _4_     |
| **descriptionColumnShow**     | [`string`, `boolean`]                                                                  | Show description column                                                                                        | _true_  |
| **categoryColumnText**        | `string`                                                                               | The custom text that will be displayed on the category column header                                           | _null_  |
| **categoryColumnOrder**       | [`string`, `number`]                                                                   | Position number in the table of the category column                                                            | _4_     |
| **categoryColumnShow**        | [`string`, `boolean`]                                                                  | Show category column                                                                                           | _true_  |
| **nameFieldLabel**            | `string`                                                                               | The custom text that will be displayed on the name field label                                                 | _null_  |
| **nameFieldOrder**            | [`string`, `number`]                                                                   | Position number in the form of the name field                                                                  | _1_     |
| **categoryFieldLabel**        | `string`                                                                               | The custom text that will be displayed on the category field label                                             | _null_  |
| **categoryFieldOrder**        | [`string`, `number`]                                                                   | Position number in the form of the category field                                                              | _5_     |
| **subcategoryFieldLabel**     | `string`                                                                               | The custom text that will be displayed on the subcategory field label                                          | _null_  |
| **subcategoryFieldOrder**     | [`string`, `number`]                                                                   | Position number in the form of the subcategory field                                                           | _6_     |
| **ammountFieldLabel**         | `string`                                                                               | The custom text that will be displayed on the ammount field label                                              | _null_  |
| **ammountFieldOrder**         | [`string`, `number`]                                                                   | Position number in the form of the ammount field                                                               | _3_     |
| **movementTypeFieldLabel**    | `string`                                                                               | The custom text that will be displayed on the movement type field label                                        | _null_  |
| **movementTypeFieldOrder**    | [`string`, `number`]                                                                   | Position number in the form of the movement type field                                                         | _4_     |
| **accountFieldLabel**         | `string`                                                                               | The custom text that will be displayed on the account field label                                              | _null_  |
| **accountFieldOrder**         | [`string`, `number`]                                                                   | Position number in the form of the account field                                                               | _2_     |
| **dateFieldLabel**            | `string`                                                                               | The custom text that will be displayed on the date field label                                                 | _null_  |
| **dateFieldOrder**            | [`string`, `number`]                                                                   | Position number in the form of the date field                                                                  | _7_     |
| **newMovementTitle**          | `string`                                                                               | The custom text to be displayed in the title of the new movement modal                                         | _null_  |
| **newMovementButton**         | `string`                                                                               | The custom text to display on the new movement button                                                          | _null_  |
| **editMovementTitle**         | `string`                                                                               | The custom text to be displayed in the title of the edit movement modal                                        | _null_  |
| **editMovementButton**        | `string`                                                                               | The custom text to display on the edit movement button                                                         | _null_  |
| **deleteMovementButtonText**  | `string`                                                                               | The custom text to display on the delete movement button                                                       | _null_  |
| **newMovementDisabled**       | [`string`, `boolean`]                                                                  | Disable the option to create movements                                                                         | _false_ |
| **editMovementDisabled**      | [`string`, `boolean`]                                                                  | Disable the option to edit movements                                                                           | _false_ |
| **deleteMovementDisabled**    | [`string`, `boolean`]                                                                  | Disable the option to delete movements                                                                         | _false_ |
| **chargeText**                | `string`                                                                               | The custom text that refers to the charges                                                                     | _null_  |
| **debitText**                 | `string`                                                                               | The custom text that refers to the debits                                                                      | _null_  |
| **searchPlaceholder**         | `string`                                                                               | The custom text to be displayed in the placeholder of the search movement field                                | _null_  |
| **searchDebounceTime**        | [`string`, `number`]                                                                   | Time in milliseconds it takes to fire the search field event                                                   | _2000_  |
| **defaultFilterOptions**      | {caategoryId: `string`, subcategoryId: `string`, dateFrom: `string`, dateTo: `string`} | The default values for the filter modal                                                                        | _None_  |
| **filterDisabled**            | [`string`, `boolean`]                                                                  | Disable the option to filter movements                                                                         | _false_ |
| **filterModalTitle**          | `string`                                                                               | The custom text to be displayed in the title of the filter movement modal                                      | _null_  |
| **cleanFilterButtonText**     | `string`                                                                               | The custom text to display on the clean filter button                                                          | _null_  |
| **submitFilterButtonText**    | `string`                                                                               | The custom text to display on the submit filter button                                                         | _null_  |
| **predefinedDateFilterTitle** | `string`                                                                               | The custom text to be displayed in the predefined date filter section                                          | _null_  |
| **customDateFilterTitle**     | `string`                                                                               | The custom text to be displayed in the custom date filter section                                              | _null_  |
| **lastWeekButtonText**        | `string`                                                                               | The custom text to display on the last week button                                                             | _null_  |
| **lastFifteenDaysButtonText** | `string`                                                                               | The custom text to display on the last fifteen days button                                                     | _null_  |
| **lastThirtyDaysButtonText**  | `string`                                                                               | The custom text to display on the last thirty days button                                                      | _null_  |
| **emptyViewTitle**            | `string`                                                                               | The custom text to be displayed in the Title section of the Empty view (When there are no movements) tab       | _null_  |
| **emptyViewDescription**      | `string`                                                                               | The custom text to be displayed in the Description section of the Empty view (When there are no movements) tab | _null_  |
| **emptyViewActionText**       | `string`                                                                               | The custom text to be displayed in the Action Button of the Empty view (When there are no movements) tab       | _null_  |
|                               |                                                                                        |                                                                                                                |         |

## Events

| Name                    | Description                                                 | Detail Data                                                  |
| ----------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| **component-mount**     | Triggers when the component is mounted                      | _None_                                                       |
| **component-unmount**   | Triggers when the component is unmounted                    | _None_                                                       |
| **field-change**        | Triggers when an movement form field is changed             | {name: `string`, value: `string`}                            |
| **open-new-modal**      | Triggers when new movement modal is opened                  | _None_                                                       |
| **open-edit-modal**     | Triggers when edit movement modal is opened                 | _None_                                                       |
| **filter-field-change** | Triggers when the filter field is changed                   | {name: `string`, value: `string`}                            |
| **open-filter-modal**   | Triggers when filter movement modal is opened               | _None_                                                       |
| **filter-trigger**      | Triggers when the filter is activated from the modal        | {...filterObject}                                            |
| **filter-text-trigger** | Triggers when the filter is activated from the search field | {...filterObject}                                            |
| **close-filter-modal**  | Triggers when the filter modal is closed                    | _None_                                                       |
| **clean-filter-modal**  | Triggers when the filter modal is closed                    | _None_                                                       |
| **close-new-modal**     | Triggers when new movement modal is closed                  | _None_                                                       |
| **close-edit-modal**    | Triggers when edit movement modal is closed                 | _None_                                                       |
| **save-edit**           | Triggers when edit modal form is submitted                  | {movement: `object`, onSuccess: `void`, showToast: `void`}   |
| **save-new**            | Triggers when new modal form is submitted                   | {movement: `object`, onSuccess: `void`, showToast: `void`}   |
| **delete**              | Triggers when delete button is clicked                      | {movementId: `string`, onSuccess: `void`, showToast: `void`} |
|                         |                                                             |                                                              |

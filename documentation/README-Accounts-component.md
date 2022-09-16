# Accounts Component

This component helps in managing accounts and calculating their balance.

## Installation

```
<script src="https://cdn.finerio.mx/pfm/components/fc-pfm-accounts.js"></script>
```

## How to use

```
<fc-pfm-accounts></fc-pfm-accounts>
```

## Properties

| Name                              | Type                  | Description                                                                          | Default |
| --------------------------------- | --------------------- | ------------------------------------------------------------------------------------ | ------- |
| **accountsData**                  | [`string`, `Array`]   | The data of the accounts that will be used                                           | _[]_    |
| **financialEntitiesData**         | [`string`, `Array`]   | The data of the financial entities that will be used                                 | _[]_    |
| **title**                         | `string`              | The custom text to be displayed in the title of the view                             | _null_  |
| **titleShow**                     | [`string`, `boolean`] | Show view title                                                                      | _true_  |
| **newAccountDisabled**            | [`string`, `boolean`] | Disable the option to add accounts                                                   | _false_ |
| **editAccountDisabled**           | [`string`, `boolean`] | Disable the option to edit accounts                                                  | _false_ |
| **deleteAccountDisabled**         | [`string`, `boolean`] | Disable the option to delete accounts                                                | _false_ |
| **newAccountSubmitButton**        | `string`              | The custom text that will be displayed on the Submit button of the new account form  | _null_  |
| **deleteAccountButton**           | `string`              | The custom text that will be displayed on the Delete button of the edit account form | _null_  |
| **editAccountSubmitButton**       | `string`              | The custom text that will be displayed on the Submit button of the edit account form | _null_  |
| **newAccountModalTitle**          | `string`              | The custom text to display in the title of the new account modal.                    | _null_  |
| **editAccountModalTitle**         | `string`              | The custom text to display in the title of the edit account modal.                   | _null_  |
| **debitAndCashSectionTitle**      | `string`              | The custom text to display in the title of the Debit and cash section                | _null_  |
| **debitAndCashSectionOrder**      | [`string`, `number`]  | Position number in the list of the Debit and cash section                            | _1_     |
| **debitAndCashSectionShow**       | [`string`, `boolean`] | Show Debit and cash section                                                          | _true_  |
| **creditCardAndDebtSectionTitle** | `string`              | The custom text to display in the title of the Credit card and debt section          | _null_  |
| **creditCardAndDebtSectionOrder** | [`string`, `number`]  | Position number in the list of the Credit card and debt section                      | _2_     |
| **creditCardAndDebtSectionShow**  | [`string`, `boolean`] | Show Credit card and debt section                                                    | _true_  |
| **shortTermBalanceSectionTitle**  | `string`              | The custom text to display in the title of the Short-term balance section            | _null_  |
| **shortTermBalanceSectionOrder**  | [`string`, `number`]  | Position number in the list of the Short-term balance section                        | _3_     |
| **shortTermBalanceSectionShow**   | [`string`, `boolean`] | Show Short-term balance section                                                      | _true_  |
| **investmentsSectionTitle**       | `string`              | The custom text to display in the title of the Investments section                   | _null_  |
| **investmentsSectionOrder**       | [`string`, `number`]  | Position number in the list of the Investments section                               | _4_     |
| **investmentsSectionShow**        | [`string`, `boolean`] | Show Investments section                                                             | _true_  |
| **creditsSectionTitle**           | `string`              | The custom text to display in the title of the Credits section                       | _null_  |
| **creditsSectionOrder**           | [`string`, `number`]  | Position number in the list of the Credits section                                   | _5_     |
| **creditsSectionShow**            | [`string`, `boolean`] | Show Credits section                                                                 | _true_  |
| **longTermBalanceSectionTitle**   | `string`              | The custom text to display in the title of the Long-term balance section             | _null_  |
| **longTermBalanceSectionOrder**   | [`string`, `number`]  | Position number in the list of the Long-term balance section                         | _6_     |
| **longTermBalanceSectionShow**    | [`string`, `boolean`] | Show Long-term balance section                                                       | _true_  |
| **totalSectionTitle**             | `string`              | The custom text to display in the title of the Total section                         | _null_  |
| **totalSectionOrder**             | [`string`, `number`]  | Position number in the list of the Total section                                     | _7_     |
| **totalSectionShow**              | [`string`, `boolean`] | Show Total section                                                                   | _true_  |
|                                   |                       |                                                                                      |

## Events

| Name                          | Description                                    | Detail Data                            |
| ----------------------------- | ---------------------------------------------- | -------------------------------------- |
| **component-mount**           | Triggers when the component is mounted         | _None_                                 |
| **component-unmount**         | Triggers when the component is unmounted       | _None_                                 |
| **open-new-modal**            | Triggers when new account modal is opened      | _None_                                 |
| **open-edit-modal**           | Triggers when edit account modal is opened     | _None_                                 |
| **close-new-modal**           | Triggers when new account modal is closed      | _None_                                 |
| **close-edit-modal**          | Triggers when edit account modal is closed     | _None_                                 |
| **field-change**              | Triggers when an account form field is changed | {name: `string`, value: `string`}      |
| **save-edit**                 | Triggers when edit modal form is submitted     | {account: `object`, onSuccess: `void`} |
| **save-new**                  | Triggers when new modal form is submitted      | {account: `object`, onSuccess: `void`} |
| **open-collapsible-section**  | Triggers when collapsible section is opened    | name: `string`                         |
| **close-collapsible-section** | Triggers when collapsible section is closed    | name: `string`                         |
|                               |                                                |                                        |

# Finerio PFM Web Components Example

![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg) ![Category](https://img.shields.io/badge/Category-WebComponents-blue.svg)

This repository is an example of how to implement the finerio connect PFM web components in a simple project. These web components are customizable ui views that receive data and render it. This example uses the [Finerio PFM Web SDK](https://www.npmjs.com/package/finerio-pfm-web) as the data source.

## Example installation

1.  Clone the repository.
2.  Go to project path.
3.  Install the dependencies.

        npm install @qiskit/web-components

4.  Open the src project path in the browser

        finerio-pfm-web-components/src/index.html


## How to use

### Styles

### Languages

### Currency

### Loading View Managment

## Common Properties summary

You can access these properties from any web component.

| Name                 | Type      | Description                                | Default  |
| -------------------- | --------- | ------------------------------------------ | -------- |
| **componentStyles**  | `string`  | Override styles                            | _""_     |
| **showMainLoading**  | `boolean` | Show Main loading view                     | _false_  |
| **mainLoadingSize**  | `string`  | Main loading view size                     | _"34px"_ |
| **showModalLoading** | `boolean` | Show Modal loading view                    | _false_  |
| **modalLoadingSize** | `string`  | Modal loading view size                    | _"82px"_ |
| **fontFamily**       | `string`  | Font family in the component               | _""_     |
| **lang**             | `string`  | Language selected for the texts            | _"es"_   |
| **currencyLang**     | `string`  | Indicates currency format through language | _"es-M"_ |
| **currencyType**     | `string`  | Indicate the type of currency              | _"MXN"_  |
|                      |           |                                            |          |

## Web components:

| Product              | README                                                                                                                         | Description                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Accounts Component   | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Accounts-component.md)   | This component helps in managing accounts and calculating their balance. |
| Budget Component     | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Budget-component.md)     | This component helps in managing and calculating budgets.                |
| Categories Component | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Categories-component.md) | This component helps in managing categories.                             |
| Movements Component  | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Movements-component.md)  | This component helps in managing movements.                              |
| Summary Component    | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Summary-component.md)    | This component helps shows data in the form of graphs.                   |
|                      |                                                                                                                                |

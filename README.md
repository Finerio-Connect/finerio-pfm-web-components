# Finerio PFM Web Components Example

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![Category](https://img.shields.io/badge/Category-WebComponents-blue.svg)

This repository is an example of how to implement the finerio connect PFM web components in a simple project. These web components are customizable ui views that receive data and render it. This example uses the [Finerio PFM Web SDK](https://www.npmjs.com/package/finerio-pfm-web) as the data source.

## Example installation

1.  Clone the repository.
2.  Go to project path.
3.  Install the dependencies.

        npm install @qiskit/web-components

4.  Open the src project path in the browser

        .../finerio-pfm-web-components/src/index.html


## Styles
The Web components allow their styles to be overridden via the `componentStyles` property. This property supports a string style but can also support a css file if the [css-loader](https://webpack.js.org/loaders/css-loader/) module is configured via `Webpack`.

## Currency
The Web components provide the option to change the currency format that will be displayed in their views via the `currencyLang` and `currencyType` properties. To apply the format to numbers we use [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format).

## Loading View Managment
In the web components there are 2 views that help represent a pending process. The `showMainLoading` property manages the loading overview. The `showModalLoading` property manages the loading view in a modal.

## Common Properties list

You can manage these properties in any web component.

| Name                 | Type      | Description                                | Default  |
| -------------------- | --------- | ------------------------------------------ | -------- |
| **componentStyles**  | `string`  | Override styles                            | _""_     |
| **showMainLoading**  | `boolean` | Show Main loading view                     | _false_  |
| **mainLoadingSize**  | `string`  | Main loading view size                     | _"34px"_ |
| **showModalLoading** | `boolean` | Show Modal loading view                    | _false_  |
| **modalLoadingSize** | `string`  | Modal loading view size                    | _"82px"_ |
| **fontFamily**       | `string`  | Font family in the component               | _""_     |
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
| Theme Colors         | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Theme-colors.md)         | Theme colors that can be changed through properties.                     |
| Global components    | [README](https://github.com/Finerio-Connect/finerio-pfm-web-components/blob/main/documentation/README-Global-components.md)    | These elements are used in several of our web components.                |
|                      |                                                                                                                                |                                                                          |

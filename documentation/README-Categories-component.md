# Categories Component

This component helps in managing categories.

## Installation

```
<script src="https://cdn.finerio.mx/pfm/components/fc-pfm-categories.js"></script>
```

## How to use

```
<fc-pfm-categories></fc-pfm-categories>
```

## Properties

| Name                                         | Type                  | Description                                                                                   | Default |
| -------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------- | ------- |
| **categoriesData**                           | [`string`, `Array`]   | The data of the categories that will be used                                                  | _[]_    |
| **cardMyCategoriesTitle**                    | `string`              | The custom text to be displayed in the title of the Own Categories Card                       | _null_  |
| **categoriesTitle**                          | `string`              | The custom text to be displayed in the title of the view                                      | _null_  |
| **categoryButtonText**                       | `string`              | The custom text that will go on the button whose action shows the details of the category     | _null_  |
| **deleteCategoryDisabled**                   | [`string`, `boolean`] | Delete Category action is disabled                                                            | _false_ |
| **deleteCategoryButtonText**                 | `string`              | The custom text to be displayed in the Delete Category button                                 | _null_  |
| **deleteOwnCategoryDisabled**                | [`string`, `boolean`] | Delete Own Category action is disabled                                                        | _false_ |
| **deleteOwnCategoryButtonText**              | `string`              | The custom text to be displayed in the Delete own Category button                             | _null_  |
| **myCategoryButtonText**                     | `string`              | The custom text that will go on the button whose action shows the details of the own category | _null_  |
| **newCategoryModalButtonText**               | `string`              | The custom text to display on the submit button in the new category modal                     | _null_  |
| **newCategoryModalInputColorPickerLabel**    | `string`              | The custom text to display on the Color Picker Label in the new category modal                | _null_  |
| **newCategoryModalInputLabel**               | `string`              | The custom text to display on the Name Field Label in the new category modal                  | _null_  |
| **newCategoryModalTitle**                    | `string`              | The custom text to display on the title of the new category modal                             | _null_  |
| **newSubCategoryModalButtonText**            | `string`              | The custom text to display on the submit button in the new subcategory modal                  | _null_  |
| **newSubCategoryModalInputColorPickerLabel** | `string`              | The custom text to display on the Color Picker Label in the new subcategory modal             | _null_  |
| **newSubCategoryModalInputLabel**            | `string`              | The custom text to display on the Name Field Label in the new subcategory modal               | _null_  |
| **newSubCategoryModalTitle**                 | `string`              | The custom text to display on the title of the new category modal                             | _null_  |
| **detailsCategoryModalTitle**                | `string`              | The custom text to display on the title of the Category details modal                         | _null_  |
| **detailsCategoryModalButtonText**           | `string`              | The custom text to display on the new subcategory button in the category details modal        | _null_  |
| **detailsCategoryModalSubCategoryText**      | `string`              | The custom text to be displayed in the subcategories title in the category details modal      | _null_  |
| **confirmDeleteDialogTitle**                 | `string`              | The custom text to be displayed in the title of the Confirm Delete Dialog                     | _null_  |
| **confirmDeleteDialogMessage**               | `string`              | The custom text to be displayed in the body of the Confirm Delete Dialog                      | _null_  |
| **confirmDeleteDialogNegativeButtonText**    | `string`              | The custom text to be displayed in the Negative Button of the Confirm Delete Dialog           | _null_  |
| **confirmDeleteDialogPositiveButtonText**    | `string`              | The custom text to be displayed in the Positive Button of the Confirm Delete Dialog           | _null_  |
|                                              |                       |                                                                                               |

## Events

| Name                            | Description                                                        | Detail Data                                                  |
| ------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| **component-mount**             | Triggers when the component is mounted                             | _None_                                                       |
| **component-unmount**           | Triggers when the component is unmounted                           | _None_                                                       |
| **open-new-modal**              | Triggers when new category modal is opened                         | _None_                                                       |
| **open-subcategory-new-modal**  | Triggers when new subcategory modal is opened                      | _None_                                                       |
| **open-detail-modal**           | Triggers when category detail modal is opened                      | category: `object`                                           |
| **close-new-modal**             | Triggers when new category modal is closed                         | _None_                                                       |
| **close-new-subcategory-modal** | Triggers when new subcategory modal is closed                      | _None_                                                       |
| **close-detail-modal**          | Triggers when category detail modal is closed                      | _None_                                                       |
| **field-change**                | Triggers when an category form field is changed                    | {name: `string`, value: `string`}                            |
| **click-random-colors**         | Triggers when the random color generation action button is clicked | colors: `Array`                                              |
| **click-color**                 | Triggers when an color option is clicked                           | color: `string`                                              |
| **back-modal**                  | Triggers when back button is clicked in the subcategory modal      | category: `object`                                           |
| **save-new-subcategory**        | Triggers when new subcategory modal form is submitted              | {category: `object`, onSuccess: `void`, showToast: `void`}   |
| **save-new**                    | Triggers when new category modal form is submitted                 | {category: `object`, onSuccess: `void`, showToast: `void`}   |
| **delete-category**             | Triggers when delete button is clicked in the category modal       | {categoryId: `string`, onSuccess: `void`, showToast: `void`} |
| **delete-own-category**         | Triggers when delete button is clicked in the category modal       | {categoryId: `string`, onSuccess: `void`, showToast: `void`} |
|                                 |                                                                    |                                                              |

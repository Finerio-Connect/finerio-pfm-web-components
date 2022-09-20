# Global components

These elements are used in several of our web components. Overriding the style via the classname is required for customization.

- [Button Component](#button-component)
- [Card Component](#card-component)
- [Checkbox Component](#checkbox-component)
- [Collapsible Container Component](#collapsible-container-component)
- [Color Option Component](#color-option-component)
- [Confirm Dialog Component](#confirm-dialog-component)
- [Dropdown Component](#dropdown-component)
- [Empty View Component](#empty-view-component)
- [Icon Button Component](#icon-button-component)
- [Loading Modal Component](#loading-modal-component)
- [Loading Spinner Component](#loading-spinner-component)
- [Modal Component](#modal-component)
- [Options Field Component](#options-field-component)
- [Search Field Component](#search-field-component)
- [Select Field Component](#select-field-component)
- [Sidebar Modal Component](#sidebar-modal-component)
- [Switch Component](#switch-component)
- [Tab Menu Component](#tab-menu-component)
- [Text Field Component](#text-field-component)
- [Title Component](#title-component)
- [Toast Component](#toast-component)


## **`Button Component`**

---

This component represents a button that contains only text and performs a specific action such as submitting a form. It can be presented in different styles depending on the variant used. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<button class="fwc-button">
    <div class="fwc-button__hover-drop">...</div>
    <span class="fwc-button__text">...</span>
</button>
```

| ClassName                | Element    | Description                                | Variants                                                                                                        |
| ------------------------ | ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fwc-button`             | **Button** | It is the main ClassName                   | [`--danger`, `--danger-outline`, `--light`, `--light-black`, `--outline`, `--rounded`, `--solid`, `--disabled`] |
| `fwc-button__hover-drop` | **Div**    | Refers to the 'hover' effect of the button | _None_                                                                                                          |
| `fwc-button__text`       | **Span**   | Refers to the button text                  | _None_                                                                                                          |
|                          |            |                                            |

## **`Card Component`**

---

Cards are used to display content made up of different types of objects. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-summary`

The component structure is:

```
<div class="fwc-card">
    ...
</div>
```

| ClassName  | Element | Description              | Variants |
| ---------- | ------- | ------------------------ | -------- |
| `fwc-card` | **Div** | It is the main ClassName | _None_   |
|            |         |                          |          |

## **`Checkbox Component`**

---

Element that allows to inform about the acceptance of the option that is linked to it. This component is used by `fc-pfm-accounts` web component.

The component structure is:

```
<button class="fwc-checkbox__container">
    <div class="fwc-checkbox">
        <svg class="fwc-checkbox__icon">...</svg>
    </div>
    <span class="fwc-button__label">...</span>
</button>
```

| ClassName                                             | Element  | Description                  | Variants                     |
| ----------------------------------------------------- | -------- | ---------------------------- | ---------------------------- |
| `fwc-checkbox`                                        | **Div**  | It is the main ClassName     | [ `--checked`, `--disabled`] |
| `fwc-checkbox__container`                             | **Div**  |
| Refers to the container of the checkbox and the label | _None_   |
| `fwc-checkbox__icon`                                  | **Svg**  | Refers to the check icon     | _None_                       |
| `fwc-checkbox__label`                                 | **Span** | Refers to the checkbox label | _None_                       |
|                                                       |          |                              |                              |

## **`Collapsible Container Component`**

---

The Collapsible COntainer are used to show or hide content. This component is used by `fc-pfm-accounts` web component.

The component structure is:

```
<div class="fwc-collapsible-container">
    ...
</div>
```

| ClassName                   | Element | Description              | Variants |
| --------------------------- | ------- | ------------------------ | -------- |
| `fwc-collapsible-container` | **Div** | It is the main ClassName | _None_   |
|                             |         |                          |

## **`Color Option Component`**

---

Cards are used to display content made up of different types of objects. This component is used by next web components:

- `fc-pfm-budget`
- `fc-pfm-categories`

The component structure is:

```
<div class="fwc-color-option">
   ...
</div>
```

| ClassName          | Element | Description              | Variants                                          |
| ------------------ | ------- | ------------------------ | ------------------------------------------------- |
| `fwc-color-option` | **Div** | It is the main ClassName | [ `--is-selected`, `--with-shadow`, `--disabled`] |
|                    |         |                          |

## **`Confirm Dialog Component`**

---

A modal that displays a warning message and requires confirmation of the action via button interaction. This component is used by next web components:

- `fc-pfm-budget`
- `fc-pfm-categories`

The component structure is:

```
<div class="fwc-confirm-dialog__background">
    <div class="fwc-confirm-dialog">
        <h2 class="fwc-confirm-dialog__title">...</h2>
        <div class="fwc-confirm-dialog__close-button">...</div>
        <p class="fwc-confirm-dialog__message">...</p>
        <div class="fwc-confirm-dialog__buttons-container">
            <button class="fwc-confirm-dialog__cancel-button">...</button>
            <button class="fwc-confirm-dialog__confirm-button">...</button>
        </div>
    </div>
</div>
```

| ClassName                               | Element                                   | Description                                                 | Variants |
| --------------------------------------- | ----------------------------------------- | ----------------------------------------------------------- | -------- |
| `fwc-confirm-dialog`                    | **Div**                                   | It is the main ClassName                                    | _None_   |
| `fwc-confirm-dialog__background`        | **Div**                                   | It is the translucent background that goes behind the modal | _None_   |
| `fwc-confirm-dialog__title`             | **H2**                                    | It is the title text                                        | _None_   |
| `fwc-confirm-dialog__close-button`      | **Div**                                   | It is the Close Button and contains the close icon          | _None_   |
| `fwc-confirm-dialog__message`           | **P**                                     | It is the message to display                                | _None_   |
| `fwc-confirm-dialog__buttons-container` | **Div**                                   | Contains the action buttons                                 | _None_   |
| `fwc-confirm-dialog__cancel-button`     | **[Button Component](#button-component)** | It is the cancel action button                              | _None_   |
| `fwc-confirm-dialog__confirm-button`    | **[Button Component](#button-component)** | It is the confirm action button                             | _None_   |
|                                         |                                           |                                                             |

## **`Dropdown Component`**

---

Shows a dropdown list when interacting with it. This component is used by `fc-pfm-movements` web component.

The component structure is:

```
<div class="fwc-dropdown">
    <label class="fwc-dropdown__label">...</label>
    <div class="fwc-dropdown__container">
        <div class="fwc-dropdown-selected-item">
            <div class="fwc-dropdown-selected-item__icon-container">...</div>
            <span class="fwc-dropdown-selected-item__text">...</span>
            <svg class="fwc-dropdown-selected-item__arrow-icon">...</svg>
        </div>
        <div class="fwc-dropdown__menu">
            <div class="fwc-dropdown__item">
                <div class="fwc-dropdown__icon-container">...</div>
                <span class="fwc-dropdown__item-text">...</span>
            </div>
        </div>

    </div>
</div>
```

| ClassName                                    | Element   | Description                                       | Variants                          |
| -------------------------------------------- | --------- | ------------------------------------------------- | --------------------------------- |
| `fwc-dropdown`                               | **Div**   | It is the main ClassName                          | _None_                            |
| `fwc-dropdown__label`                        | **Label** | Refers to the dropdown label                      | _None_                            |
| `fwc-dropdown__container`                    | **Div**   | Contains the dropdown elements                    | _None_                            |
| `fwc-dropdown__menu`                         | **Div**   | Contains the dropdown list items                  | _None_                            |
| `fwc-dropdown__item`                         | **Div**   | Refers to the list item                           | [ `--selected`]                   |
| `fwc-dropdown__icon-container`               | **Div**   | Refers to the icon container of the list item     | _None_                            |
| `fwc-dropdown__item-text`                    | **Span**  | Refers to the text of the list item               | [ `--with-icon`]                  |
| `fwc-dropdown-selected-item`                 | **Div**   | Refers to the selected item of the dropdown       | [ `--no-clickable`, `--disabled`] |
| `fwc-dropdown-selected-item__text`           | **Span**  | Refers to the text of the selected item           | [ `--with-icon`, `--placeholder`] |
| `fwc-dropdown-selected-item__arrow-icon`     | **Svg**   | Refers to the arrow icon of the selected item     | _None_                            |
| `fwc-dropdown-selected-item__icon-container` | **Div**   | Refers to the icon container of the selected item | _None_                            |
|                                              |           |                                                   |

## **`Empty View Component`**

---

This view appears when you have no items to display. This component is used by next web components:

- `fc-pfm-budget`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<div class="fwc-empty-view">
    <div class="fwc-empty-view__container">
        <div class="fwc-empty-view__image-container">...</div>
        <span class="fwc-empty-view__title">...</span>
        <span class="fwc-empty-view__description">...</span>
        <button class="fwc-empty-view__button">...</button>
    </div>
</div>
```

| ClassName                         | Element                                   | Description                       | Variants |
| --------------------------------- | ----------------------------------------- | --------------------------------- | -------- |
| `fwc-empty-view`                  | **Div**                                   | It is the main ClassName          | _None_   |
| `fwc-empty-view__container`       | **Div**                                   | Contains the elements of the view | _None_   |
| `fwc-empty-view__image-container` | **Div**                                   | Contains the image                | _None_   |
| `fwc-empty-view__title`           | **Span**                                  | It is the title                   | _None_   |
| `fwc-empty-view__description`     | **Span**                                  | It is the description text        | _None_   |
| `fwc-empty-view__button`          | **[Button Component](#button-component)** | Refers to the action button       | _None_   |
|                                   |                                           |                                   |

## **`Icon Button Component`**

---

This component represents a button that can only contain one icon and performs a specific action. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<div class="fwc-icon-button">
    <div class="fwc-icon-button__hover-drop">...</div>
    <span class="fwc-icon-button__tooltip">...</span>
</div>
```

| ClassName                     | Element    | Description                                | Variants                                               |
| ----------------------------- | ---------- | ------------------------------------------ | ------------------------------------------------------ |
| `fwc-icon-button`             | **Button** | It is the main ClassName                   | [`--danger`, `--gray`, `--with-tooltip`, `--disabled`] |
| `fwc-icon-button__hover-drop` | **Div**    | Refers to the 'hover' effect of the button | _None_                                                 |
| `fwc-icon-button__tooltip`    | **Span**   | Refers to the button tooltip               | _None_                                                 |
|                               |            |                                            |

## **`Loading Modal Component`**

---

A modal with a Spinner view used to render processes. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<div class="fwc-loading-modal">
    <img class="fwc-loading-spinner">...</img>
</div>
```

| ClassName             | Element                                                     | Description                | Variants |
| --------------------- | ----------------------------------------------------------- | -------------------------- | -------- |
| `fwc-loading-modal`   | **[Modal Component](#modal-component)**                     | It is the main ClassName   | _None_   |
| `fwc-loading-spinner` | **[Loading Spinner Component](#loading-spinner-component)** | Refers to the Spinner view | _None_   |
|                       |                                                             |                            |

## **`Loading Spinner Component`**

---

It is a Spinner view used to represent processes. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<img class="fwc-loading-spinner">
    ...
</img>
```

| ClassName             | Element | Description              | Variants |
| --------------------- | ------- | ------------------------ | -------- |
| `fwc-loading-spinner` | **Img** | It is the main ClassName | _None_   |
|                       |         |                          |

## **`Modal Component`**

---

It is a popup window that can contain different objects such as forms or tables. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<div class="fwc-modal__background">
    <div class="fwc-modal">
        <div class="fwc-modal__back-icon">...</div>
        <h2 class="fwc-modal__title">...</h2>
        <div class="fwc-modal__close-button">...</div>
        ...
    </div>
</div>
```

| ClassName               | Element | Description                                                     | Variants |
| ----------------------- | ------- | --------------------------------------------------------------- | -------- |
| `fwc-modal`             | **Div** | It is the main ClassName                                        | _None_   |
| `fwc-modal__background` | **Div** | Refers to the translucent background that goes behind the modal | _None_   |
| `fwc-modal__back-icon`  | **Div** | Contains the back icon                                          | _None_   |
| `fwc-modal__title`      | **H2**  | Refers to the title of the modal                                | _None_   |
| `fwc-modal__close-icon` | **Div** | Contains the close icon                                         | _None_   |
|                         |         |                                                                 |

## **`Options Field Component`**

---

Displays a series of options from which only one can be selected. It is commonly used in forms. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-movements`

The component structure is:

```
<div class="fwc-options-field">
    <label class="fwc-options-field__label">...</label>
    <div class="fwc-options-field__container">
        <div class="fwc-options-field__item">
            <input class="fwc-options-field__radio-input">...</input>
            <label class="fwc-options-field__radio-label">...</label>
        </div>
    </div>
</div>
```

| ClassName                        | Element   | Description                                  | Variants    |
| -------------------------------- | --------- | -------------------------------------------- | ----------- |
| `fwc-options-field`              | **Div**   | It is the main ClassName                     | _None_      |
| `fwc-options-field__label`       | **Label** | Refers to the field label                    | _None_      |
| `fwc-options-field__container`   | **Div**   | Contains the option items                    | _None_      |
| `fwc-options-field__item`        | **Div**   | Refers to the option item                    | _None_      |
| `fwc-options-field__radio-input` | **Input** | Refers to the radio input of the option item | `--checked` |
| `fwc-options-field__radio-label` | **Label** | Refers to the label of the option item       | _None_      |
|                                  |           |                                              |

## **`Search Field Component`**

---

Text field used for searching. This component is used by `fc-pfm-movements` web component.

The component structure is:

```
<div class="fwc-search-field">
    <div class="fwc-search-field__container">
        <svg class="fwc-search-field__icon">...</svg>
        <input class="fwc-search-field__input">...</input>
    </div>
</div>
```

| ClassName                     | Element   | Description                                        | Variants     |
| ----------------------------- | --------- | -------------------------------------------------- | ------------ |
| `fwc-search-field`            | **Div**   | It is the main ClassName                           | _None_       |
| `fwc-search-field__container` | **Div**   | Contains the field an the icon of the search field | _None_       |
| `fwc-search-field__icon`      | **Svg**   | Refers to the Search icon in the field             | _None_       |
| `fwc-search-field__input`     | **Input** | Refers to Search type input                        | `--disabled` |
|                               |           |                                                    |

## **`Select Field Component`**

---

This is a field that displays a single selection list. It is commonly used in forms. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-movements`

The component structure is:

```
<div class="fwc-select-field">
    <label class="fwc-select-field__label">...</label>
    <div class="fwc-select-field__container">
        <div class="fwc-selected-item">
            <div class="fwc-selected-item__icon-container">...</div>
            <span class="fwc-selected-item__text">...</span>
            <svg class="fwc-selected-item__arrow-icon">...</svg>
        </div>
        <div class="fwc-select-field__menu">
            <div class="fwc-select-field__item">
                <div class="fwc-select-field__icon-container">...</div>
                <span class="fwc-select-field__item-text">...</span>
            </div>
        </div>

    </div>
</div>
```

| ClassName                           | Element   | Description                                       | Variants                          |
| ----------------------------------- | --------- | ------------------------------------------------- | --------------------------------- |
| `fwc-select-field`                  | **Div**   | It is the main ClassName                          | _None_                            |
| `fwc-select-field__label`           | **Label** | Refers to the dropdown label                      | _None_                            |
| `fwc-select-field__container`       | **Div**   | Contains the dropdown elements                    | _None_                            |
| `fwc-select-field__menu`            | **Div**   | Contains the dropdown list items                  | _None_                            |
| `fwc-select-field__item`            | **Div**   | Refers to the list item                           | [ `--selected`]                   |
| `fwc-select-field__icon-container`  | **Div**   | Refers to the icon container of the list item     | _None_                            |
| `fwc-select-field__item-text`       | **Span**  | Refers to the text of the list item               | [ `--with-icon`]                  |
| `fwc-selected-item`                 | **Div**   | Refers to the selected item of the dropdown       | [ `--no-clickable`, `--disabled`] |
| `fwc-selected-item__text`           | **Span**  | Refers to the text of the selected item           | [ `--with-icon`, `--placeholder`] |
| `fwc-selected-item__arrow-icon`     | **Svg**   | Refers to the arrow icon of the selected item     | _None_                            |
| `fwc-selected-item__icon-container` | **Div**   | Refers to the icon container of the selected item | _None_                            |
|                                     |           |                                                   |

## **`Sidebar Modal Component`**

---

It is a pop-up window that is displayed from the right of the screen and can contain different objects such as forms. This component is used by next web components:

- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`

The component structure is:

```
<div class="fwc-sidebar-modal__background">
    <div class="fwc-sidebar-modal">
        <div class="fwc-sidebar-modal__header">
            <div class="fwc-sidebar-modal__back-icon">...</div>
            <h2 class="fwc-sidebar-modal__title">...</h2>
            <div class="fwc-sidebar-modal__close-button">...</div>
        </div>
        <div class="fwc-sidebar-modal__body">
        ...
        </div>
    </div>
</div>
```

| ClassName                       | Element | Description                                                     | Variants |
| ------------------------------- | ------- | --------------------------------------------------------------- | -------- |
| `fwc-sidebar-modal`             | **Div** | It is the main ClassName                                        | _None_   |
| `fwc-sidebar-modal__background` | **Div** | Refers to the translucent background that goes behind the modal | _None_   |
| `fwc-sidebar-modal__header`     | **Div** | Contains the title and the close actions of the modal           | _None_   |
| `fwc-sidebar-modal__back-icon`  | **Div** | Contains the back icon                                          | _None_   |
| `fwc-sidebar-modal__title`      | **H2**  | Refers to the title of the modal                                | _None_   |
| `fwc-sidebar-modal__close-icon` | **Div** | Contains the close icon                                         | _None_   |
| `fwc-sidebar-modal__body`       | **Div** | Contains the body of the modal                                  | _None_   |
|                                 |         |                                                                 |

## **`Switch Component`**

---

It is special checkbox used for binary states like on/off. This component is used by `fc-pfm-movements` web component.

The component structure is:

```
<div class="fwc-switch">
    <span class="fwc-switch__slider">...</span>
</div>
```

| ClassName            | Element  | Description               | Variants                    |
| -------------------- | -------- | ------------------------- | --------------------------- |
| `fwc-switch`         | **Div**  | It is the main ClassName  | [`--checked`, `--disabled`] |
| `fwc-switch__slider` | **Span** | Refers to the toggle view | _None_                      |
|                      |          |                           |

## **`Tab Menu Component`**

---

The tab structure consists of an unordered list of tabs that display content when one of them is activated. This component is used by `fc-pfm-summary` web component.

The component structure is:

```
<ul class="fwc-tab-list">
    <li class="fwc-tab">
        <span class="fwc-tab__title">...</span>
    </li>
    <div class="fwc-tab-list_container">...</div>
</ul>
```

| ClassName                 | Element  | Description                              | Variants   |
| ------------------------- | -------- | ---------------------------------------- | ---------- |
| `fwc-tab-list`            | **Ul**   | It is the main ClassName                 | _None_     |
| `fwc-tab-list__container` | **Div**  | Contains the active tab content          | _None_     |
| `fwc-tab`                 | **Li**   | Refers to the tab view                   | `--danger` |
| `fwc-tab__title`          | **Span** | Refers to the title text of the tab view | _None_     |
|                           |          |                                          |

## **`Text Field Component`**

---

Text field used in forms. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`

The component structure is:

```
<div class="fwc-text-field">
    <label class="fwc-text-field__label">...</label>
    <div class="fwc-text-field__container">
        <svg class="fwc-text-field__calendar-icon">...</svg>
        <div class="fwc-text-field__icon-container">...</div>
        <input class="fwc-text-field__input">...</input>
    </div>

</div>
```

| ClassName                        | Element   | Description                                           | Variants                             |
| -------------------------------- | --------- | ----------------------------------------------------- | ------------------------------------ |
| `fwc-text-field`                 | **Div**   | It is the main ClassName                              | _None_                               |
| `fwc-text-field__label`          | **Label** | Refers to the field label                             | _None_                               |
| `fwc-text-field__container`      | **Div**   | Contains the input and the icon of the field          | _None_                               |
| `fwc-text-field__calendar-icon`  | **Svg**   | Refers to the Calendar icon when input type is 'Date' | _None_                               |
| `fwc-text-field__icon-container` | **Div**   | Contains the append icon                              | _None_                               |
| `fwc-text-field__input`          | **Input** | Refers to the input element                           | [`--with-append-icon`, `--disabled`] |
|                                  |           |                                                       |

## **`Title Component`**

---

Shows a text as a title. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`
- `fc-pfm-summary`

The component structure is:

```
<h1 class="fwc-title">
    ...
</h1>
```

| ClassName   | Element | Description              | Variants |
| ----------- | ------- | ------------------------ | -------- |
| `fwc-title` | **H1**  | It is the main ClassName | _None_   |
|             |         |                          |

## **`Toast Component`**

---

It is a pop-up window that returns a feedback of a process. This component is used by next web components:

- `fc-pfm-accounts`
- `fc-pfm-budget`
- `fc-pfm-categories`
- `fc-pfm-movements`

The component structure is:

```
<div class="fwc-toast">
    <div class="fwc-toast__close-button">...</div>
    <div class="fwc-toast__container">
        <svg class="fwc-toast__icon">...</svg>
        ...
    </div>
</div>
```

| ClassName                 | Element | Description                                          | Variants |
| ------------------------- | ------- | ---------------------------------------------------- | -------- |
| `fwc-toast`               | **Div** | It is the main ClassName                             | _None_   |
| `fwc-toast__close-button` | **Div** | Refers to the close button                           | _None_   |
| `fwc-toast__container`    | **Div** | Contains the alert icon and the message of the toast | _None_   |
| `fwc-toast__icon`         | **Svg** | Refers to the alert icon                             | _None_   |
|                           |         |                                                      |

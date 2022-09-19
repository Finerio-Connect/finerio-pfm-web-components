const {
  FinerioConnectSDK,
  Transaction,
  CATEGORY_TYPE,
  TRANSACTION_TYPE,
  ACCOUNT_TYPE,
} = require("FinerioPfmSDK");

const accountId = 2602081;
const userId = 2230376;
let filterOptions = {};

const fcs = new FinerioConnectSDK({
  includes: [ACCOUNT_TYPE, CATEGORY_TYPE, TRANSACTION_TYPE],
  sandbox: true,
});
const { Accounts, Categories, Transactions } = fcs.connect(
  "905e0065-a797-4139-81ae-66d671a284b7"
);

const filterTransactions = (component, onSuccess) => {
  const {
    withCharges,
    withDebits,
    categoryId,
    subcategoryId,
    dateFrom,
    dateTo,
    ...rest
  } = filterOptions;
  let parsedFilterOptions = { ...rest };
  if (dateFrom) {
    parsedFilterOptions.dateFrom = Math.floor(new Date(dateFrom).getTime());
  }
  if (dateTo) {
    parsedFilterOptions.dateTo = Math.floor(new Date(dateTo).getTime());
  }
  if (withCharges !== withDebits) {
    parsedFilterOptions.charge = withCharges === "true";
  }
  if (subcategoryId) {
    parsedFilterOptions.categoryId = subcategoryId;
  }
  Transactions.list(accountId, parsedFilterOptions).then((response) => {
    const transactions = response.map((transaction) => ({
      ...transaction.plainObject,
      accountId,
    }));
    if (categoryId && !subcategoryId) {
      const selectedCategory = component.categoriesData.find(
        (category) => category.id === parseInt(categoryId)
      );
      if (selectedCategory && selectedCategory.subcategories) {
        const subcategoryDictionary = selectedCategory.subcategories.reduce(
          (acc, subcategory) => {
            return { ...acc, [subcategory.id]: true };
          },
          {}
        );
        component.transactionsData = transactions.filter(
          (transaction) => subcategoryDictionary[transaction.categoryId]
        );
      }
    } else {
      component.transactionsData = transactions;
    }

    onSuccess(response);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const subcategoryId = params.subcategory_id;
  const categoryId = params.category_id;
  const dateFrom = params.date_from;
  const dateTo = params.date_to;

  const component = document.querySelector("fc-pfm-movements");
  component.showMainLoading = true;
  component.transactionsData = [];
  component.accountsData = [];
  component.categoriesData = [];
  Accounts.list(userId)
    .then((response) => {
      component.accountsData = response.map((account) => account.plainObject);
      return Categories.listWithSubcategories(userId);
    })
    .then((response) => {
      component.categoriesData = response.map((category) => ({
        ...category.plainObject,
        subcategories: category.subcategories.map(
          (subcategory) => subcategory.plainObject
        ),
      }));
      let tempOptions = {};
      if (categoryId) {
        tempOptions.categoryId = categoryId;
      }
      if (subcategoryId) {
        tempOptions.subcategoryId = subcategoryId;
      }
      if (dateFrom) {
        const date = new Date(parseInt(dateFrom));
        tempOptions.dateFrom = date.toISOString().split("T")[0];
      }
      if (dateTo) {
        const date = new Date(parseInt(dateTo));
        tempOptions.dateTo = date.toISOString().split("T")[0];
      }
      if (tempOptions) {
        component.defaultFilterOptions = tempOptions;
        filterOptions = tempOptions;
      }

      filterTransactions(component, (response) => {
        if (!response.length) {
          component.isEmpty = true;
        }
        component.showMainLoading = false;
      });
    })
    .catch(() => {
      e.detail.showToast("error", "Error de servidor");
    });

  //On Save New
  component.addEventListener("save-new", (e) => {
    console.log(e.detail);

    const { categoryId, accountId, amount, charge, date, description } =
      e.detail.movement;
    let transaction = new Transaction(
      accountId,
      date,
      charge,
      description,
      amount,
      categoryId
    );
    if (component.isEmpty) {
      component.isEmpty = false;
    }
    component.showModalLoading = true;
    Transactions.create(transaction)
      .then(() => {
        filterTransactions(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Nuevo Movimiento agregado");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al guardar");
        component.showModalLoading = false;
      });
  });

  //On Save changes
  component.addEventListener("save-edit", (e) => {
    console.log(e.detail);
    const { categoryId, accountId, amount, charge, date, description, id } =
      e.detail.movement;
    let transaction = new Transaction(
      accountId,
      date,
      charge,
      description,
      amount,
      categoryId
    );
    component.showModalLoading = true;
    Transactions.update(id, transaction)
      .then(() => {
        filterTransactions(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Cambios guardados");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al guardar");
        component.showModalLoading = false;
      });
  });

  component.addEventListener("delete", (e) => {
    component.showModalLoading = true;
    Transactions.delete(e.detail.movementId)
      .then(() => {
        filterTransactions(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Movimiento eliminado");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al eliminar");
        component.showModalLoading = false;
      });
  });

  component.addEventListener("filter-text-trigger", (e) => {
    filterOptions = { ...filterOptions, description: e.detail.description };
    component.showMainLoading = true;
    filterTransactions(component, () => {
      component.showMainLoading = false;
    });
  });

  component.addEventListener("filter-trigger", (e) => {
    filterOptions = { ...filterOptions, ...e.detail };
    component.showMainLoading = true;
    filterTransactions(component, () => {
      component.showMainLoading = false;
    });
  });
});

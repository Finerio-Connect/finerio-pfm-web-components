const {
  FinerioConnectSDK,
  CATEGORY_TYPE,
  BUDGET_TYPE,
  Budget,
} = require("FinerioPfmSDK");

const userId = 2230376;

const fcs = new FinerioConnectSDK({
  includes: [BUDGET_TYPE, CATEGORY_TYPE],
  sandbox: true,
});
const { Budgets, Categories } = fcs.connect(
  "905e0065-a797-4139-81ae-66d671a284b7"
);

const getBudgets = (component, onSuccess, onError) => {
  Budgets.list(userId)
    .then((response) => {
      component.budgetData = response.map((budget) => budget.plainObject);
      onSuccess(response.length === 0);
    })
    .catch(() => {
      onError && onError();
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const component = document.querySelector("fc-pfm-budget");
  component.showMainLoading = true;
  component.budgetData = [];
  component.categoriesData = [];
  Categories.listWithSubcategories(userId).then((response) => {
    component.categoriesData = response.map((category) => ({
      ...category.plainObject,
      subcategories: category.subcategories.map(
        (subcategory) => subcategory.plainObject
      ),
    }));
    getBudgets(component, (isEmpty) => {
      if (isEmpty) {
        component.isEmpty = true;
      }
      component.showMainLoading = false;
    });
  });

  //On Save New
  component.addEventListener("save-new", (e) => {
    component.showModalLoading = true;
    let budgetPromises = e.detail.budgets
      .filter(({ amount }) => amount > 0)
      .map(({ name, categoryId, amount }) => {
        return new Promise((resolve, reject) => {
          Budgets.create(new Budget(name, amount, 0.5, categoryId, userId))
            .then(() => resolve())
            .catch(() => reject());
        });
      });
    Promise.all(budgetPromises)
      .then(() => {
        getBudgets(component, () => {
          e.detail.onSuccess();
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
    const deletePromisesArray = e.detail.budget.subBudgets.map((budget) => {
      return new Promise((resolve, reject) => {
        Budgets.delete(budget.id)
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    });
    Promise.all(deletePromisesArray)
      .then(() => {
        getBudgets(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Presupuestos eliminados");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al eliminar");
        component.showModalLoading = false;
      });
  });
});

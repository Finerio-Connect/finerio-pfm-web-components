const { FinerioConnectSDK, Category, CATEGORY_TYPE } = require("FinerioPfmSDK");

const userId = 2230376;

const fcs = new FinerioConnectSDK({
  includes: CATEGORY_TYPE,
  sandbox: true,
});
const { Categories } = fcs.connect("905e0065-a797-4139-81ae-66d671a284b7");

const getCategories = (component, onSuccess) => {
  Categories.listWithSubcategories(userId)
    .then((response) => {
      component.categoriesData = response.map((category) => ({
        ...category.plainObject,
        subcategories: category.subcategories.map(
          (subcategory) => subcategory.plainObject
        ),
      }));
      onSuccess();
    })
    .catch(() => {
      e.detail.showToast("error", "Error de servidor");
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const component = document.querySelector("fc-pfm-categories");
  component.showMainLoading = true;
  component.categoriesData = [];
  getCategories(component, () => {
    component.showMainLoading = false;
  });

  //On Save New
  component.addEventListener("save-new", (e) => {
    const { color, name } = e.detail.category;
    let category = new Category(name, color, null, userId);
    component.showModalLoading = true;
    Categories.create(category).then(() => {
      getCategories(component, () => {
        e.detail.onSuccess();
        e.detail.showToast("success", "Nueva categoría agregada");
        component.showModalLoading = false;
      });
    }).catch(() => {
      e.detail.showToast("error", "Error al guardar");
      component.showModalLoading = false;
    });
  });

   //On Save New Subcategory
   component.addEventListener("save-new-subcategory", (e) => {
    const { color, name, parentCategoryId } = e.detail.category;
    let category = new Category(name, color, parentCategoryId, userId);
    component.showModalLoading = true;
    Categories.create(category)
      .then(() => {
        getCategories(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Nueva subcategoría agregada");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al guardar");
        component.showModalLoading = false;
      });
  });

  component.addEventListener("delete-category", (e) => {
    component.showModalLoading = true;
    Categories.delete(e.detail.categoryId)
      .then(() => {
        getCategories(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Categoría eliminada");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al eliminar");
        component.showModalLoading = false;
      });
  });

  component.addEventListener("delete-own-category", (e) => {
    component.showModalLoading = true;
    Categories.delete(e.detail.categoryId)
      .then(() => {
        getCategories(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Subcategoría eliminada");
          component.showModalLoading = false;
        });
      })
      .catch(() => {
        e.detail.showToast("error", "Error al eliminar");
        component.showModalLoading = false;
      });
  });
});

const {
  FinerioConnectSDK,
  CATEGORY_TYPE,
  INSIGHTS_TYPE,
} = require("FinerioPfmSDK");

const userId = 2230376;

const fcs = new FinerioConnectSDK({
  includes: [INSIGHTS_TYPE, CATEGORY_TYPE],
  sandbox: true,
});
const { Insights, Categories } = fcs.connect(
  "905e0065-a797-4139-81ae-66d671a284b7"
);

const getDateRange = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return {
    iniDate: new Date(year, month, 1).getTime(),
    endDate: new Date(
      month === 11 ? year + 1 : year,
      month === 11 ? 0 : month + 1,
      1
    ).getTime(),
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const component = document.querySelector("fc-pfm-summary");
  component.showMainLoading = true;
  component.categoriesData = [];
  component.summaryData = {
    incomes: [],
    expenses: [],
    balances: [],
  };
  Categories.listWithSubcategories(userId)
    .then((response) => {
      component.categoriesData = response.map((category) => ({
        ...category.plainObject,
        subcategories: category.subcategories.map(
          (subcategory) => subcategory.plainObject
        ),
      }));
      return Insights.resume(userId);
    })
    .then((response) => {
      if (
        response &&
        response.balances &&
        response.expenses &&
        response.incomes
      ) {
        component.summaryData = {
          balances: response.balances,
          expenses: response.expenses,
          incomes: response.incomes,
        };
      } else {
        component.isEmpty = true;
      }
      component.showMainLoading = false;
    });

  component.addEventListener("subcategory-detail-click", (e) => {
    const { summary, date } = e.detail;
    const { iniDate, endDate } = getDateRange(date);
    window.location.href = `movements.html?category_id=${summary.parentCategoryId}&subcategory_id=${summary.categoryId}&date_from=${iniDate}&date_to=${endDate}`;
  });

  component.addEventListener("movements-detail-click", (e) => {
    const { summary, date } = e.detail;
    const { iniDate, endDate } = getDateRange(date);
    window.location.href = `movements.html?category_id=${summary.categoryId}&date_from=${iniDate}&date_to=${endDate}`;
  });
});

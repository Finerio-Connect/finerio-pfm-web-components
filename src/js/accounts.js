const { FinerioConnectSDK, Account, ACCOUNT_TYPE } = require("FinerioPfmSDK");

const userId = 2230376;

const fcs = new FinerioConnectSDK({
  includes: ACCOUNT_TYPE,
  sandbox: true,
});
const { Accounts } = fcs.connect("905e0065-a797-4139-81ae-66d671a284b7");

const getAccounts = (component, onSuccess) => {
  Accounts.list(userId)
    .then((response) => {
      component.accountsData = response.map((account) => account.plainObject);
      onSuccess();
    })
    .catch(() => {
      e.detail.showToast("error", "Error de servidor");
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const component = document.querySelector("fc-pfm-accounts");
  component.showMainLoading = true;
  component.accountsData = [];
  getAccounts(component, () => {
    component.showMainLoading = false;
  });

  //On Save New
  component.addEventListener("save-new", (e) => {
    const { balance, chargeable, financialEntityId, name, nature, number } =
      e.detail.account;
    let account = new Account(
      userId,
      financialEntityId,
      nature,
      name,
      number,
      balance,
      chargeable
    );
    component.showModalLoading = true;
    Accounts.create(account)
      .then(() => {
        getAccounts(component, () => {
          e.detail.onSuccess();
          e.detail.showToast("success", "Nueva cuenta agregada");
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
    const { balance, chargeable, financialEntityId, id, name, nature, number } =
      e.detail.account;
    let account = new Account(
      userId,
      financialEntityId,
      nature,
      name,
      number,
      balance,
      chargeable
    );
    component.showModalLoading = true;
    Accounts.update(id, account)
      .then(() => {
        getAccounts(component, () => {
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
});

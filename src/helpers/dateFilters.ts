import { Item } from "./../types/Item";

// Pega o mês atual e retorna no formato YYYY-mm
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  newList = list.filter((item: Item) => {
    if (
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
    ) {
      return item;
    }
  });

  return newList;
};

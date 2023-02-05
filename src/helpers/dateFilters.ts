// Pega o mês atual e retorna no formato YYYY-mm
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

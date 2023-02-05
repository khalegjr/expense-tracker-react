import { formatDate } from "../../helpers/dateFilters";
import { Item } from "../../types/Item";
import { TableColumn, TableLine } from "./styles";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>{item.category}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  );
};

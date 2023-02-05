import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { TableArea } from "./components/TableArea";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilters";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        {/* Área de informações */}

        {/* Área de inserção */}

        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
};

export default App;

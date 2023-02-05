import { useEffect, useState } from "react";
import { items } from "../data/items";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { getCurrentMonth } from "./helpers/dateFilters";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {}, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        {/* Área de informações */}

        {/* Área de inserção */}

        {/* Tabela de itens */}
      </Body>
    </Container>
  );
};

export default App;

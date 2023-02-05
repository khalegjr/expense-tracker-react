import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { InfoArea } from "./components/InfoArea";
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

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        {/* Área de inserção */}

        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
};

export default App;

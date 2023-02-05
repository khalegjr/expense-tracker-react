import { useState } from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { Container, Input, InputLabel, InputTitle, Select } from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2023, 3, 5),
      category: "food",
      title: "Uma comida de teste...hehehe",
      value: 178.35,
    };

    onAdd(newItem);
  };

  return (
    <Container>
      <InputLabel>
        <InputTitle>Data</InputTitle>

        <Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </InputLabel>

      <InputLabel>
        <InputTitle>Categoria</InputTitle>

        <Select
          value={categoryField}
          onChange={(e) => setDateField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </Select>
      </InputLabel>
      <button onClick={handleAddEvent}>Adicionar</button>
    </Container>
  );
};

import React from 'react';
import ErrorBlock from "../../components/ErrorBlock";
import Main from "../../components/Main";
import {CardsContext} from "../../contexts";

const HomePage = ({mainProps}) => {
  const {error} = React.useContext(CardsContext)

  if (error) {
    return (
      <ErrorBlock
        text='Не удалось загрузить карточки'
        error={error}
      />
    )
  }

  return (
    <Main {...mainProps} />
  );
};

export default HomePage;
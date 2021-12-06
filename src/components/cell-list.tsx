/** @format */

import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCells } from '../store/thunks/fetchCells';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';
import './cell-list.css';

const CellList: React.FC = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.cell.order);
  const data = useAppSelector((state) => state.cell.data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cells = order.map((id) => {
    return data[id];
  });

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCells());
    setIsLoading(false);
  }, [dispatch]);

  // //debouncing logic so that there is no post request on every key stroke
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     dispatch(saveCells(cells));
  //   }, 250);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [JSON.stringify(cells), dispatch]);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell forceVisible={cells.length === 0} prevCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {isLoading ? <h1>Loading...</h1> : renderedCells}
    </div>
  );
};

export default CellList;

import React from 'react';
import { Pagination } from 'react-bootstrap';
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';
export interface IPaginationControlsProps {
  onPageChanged: (page: number) => void;
  activePage: number;
  totalPages: number;
}

export const PaginationControls = ({ onPageChanged, activePage, totalPages }: IPaginationControlsProps) => {
  const Item = (props: {
    value: string;
    disabled?: boolean;
    isActive?: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }) => (
    <li className={`${props.isActive ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`}>
      <a className={`${!props.disabled ? 'clickable' : ''}`} onClick={props.onClick}>
        {props.value}
      </a>
    </li>
  );

  const Paging = createUltimatePagination({
    // @ts-ignore
    WrapperComponent: Pagination,
    itemTypeToComponent: {
      [ITEM_TYPES.PAGE]: ({ value, isActive, onClick }) => <Item value={value} isActive={isActive} onClick={onClick} />,
      [ITEM_TYPES.ELLIPSIS]: ({ isActive, onClick }) => <Item value={`\u2026`} disabled={isActive} onClick={onClick} />,
      [ITEM_TYPES.FIRST_PAGE_LINK]: ({ isActive, onClick }) => (
        <Item value={`\u00ab`} disabled={isActive} onClick={onClick} />
      ),
      [ITEM_TYPES.PREVIOUS_PAGE_LINK]: ({ isActive, onClick }) => (
        <Item value={`\u2039`} disabled={isActive} onClick={onClick} />
      ),
      [ITEM_TYPES.NEXT_PAGE_LINK]: ({ isActive, onClick }) => (
        <Item value={`\u203a`} disabled={isActive} onClick={onClick} />
      ),
      [ITEM_TYPES.LAST_PAGE_LINK]: ({ isActive, onClick }) => (
        <Item value={`\u00bb`} disabled={isActive} onClick={onClick} />
      ),
    },
  });
  const onPageChange = React.useCallback(
    (e: React.SyntheticEvent<MouseEvent>) => onPageChanged(parseInt((e.target as any).text)),
    [],
  );
  return <Paging onChange={onPageChange} currentPage={activePage} totalPages={totalPages} />;
};

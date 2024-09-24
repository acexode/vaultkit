import { useState } from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import useDialogState from 'src/routes/hooks/useSharedData';

import Scrollbar from 'src/components/scrollbar';

import TableNoData from 'src/sections/table/table-no-data';
import CommonTableHead from 'src/sections/table/user-table-head';
import TableEmptyRows from 'src/sections/table/table-empty-rows';

import DataDetails from '../view-data';
// import AlertDialog from '../modal/modal';
import AddNotes from '../components/chat/AddNotes';
import RequestDataTRows from '../../table/common/request-data-trows';
import { emptyRows, applyFilter, getComparator } from '../../user/utils';

// ----------------------------------------------------------------------

export default function SharedDataTableView({
  filterName,
  selected,
  setSelected,
  sharedData,
  approveRequest,
  revokeRequest
}) {
  const [page, setPage] = useState(0);
  const [showAddNote, setshowAddNote] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  const [order, setOrder] = useState('asc');
  const card = {
    assignee: [
      {
        id: '473d2720-341c-49bf-94ed-556999cf6ef7',
        avatar: '/static/mock-images/avatars/avatar_2.jpg',
        name: 'Soren Durham',
      },
    ],
  };
  const [orderBy, setOrderBy] = useState('title');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = sharedData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const handleAddNoteModal = () => {
    setshowAddNote(!showAddNote);
  };

  const dataFiltered = applyFilter({
    inputData: sharedData,
    comparator: getComparator(order, orderBy),
    filterName,
  });
  

  const handleViewDetails = (row) => {
    setSelectedRowData(row);
    openDialog('data-details');
  };
  const notFound = !dataFiltered?.length && !!filterName;
  return (
    <>
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <CommonTableHead
              order={order}
              orderBy={orderBy}
              rowCount={sharedData.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'title', label: 'Title' },
                // { id: 'company', label: 'Access Code' },
                { id: 'role', label: 'Guest Email' },
                { id: 'access_duration', label: 'Start time', align: 'center' },
                { id: 'access_duration', label: 'End Time', align: 'center' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
            <TableBody>
              {dataFiltered
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <RequestDataTRows
                    key={row.id}
                    id={row.id}
                    title={row.title}
                    role={row.role}
                    status={row.status}
                    company={row.company}
                    avatarUrl={row.avatarUrl}
                    validity={row.end_time}
                    starttime={row.start_time}
                    selected={selected.indexOf(row.name) !== -1}
                    handleClick={(event) => handleClick(event, row.name)}
                    handleAddNoteModal={handleAddNoteModal}
                    notificationCount={row.notificationCount}
                    handleViewDetails={() => handleViewDetails(row)}
                    approveRequest={approveRequest}
                    revokeRequest={revokeRequest}
                  />
                ))}

              <TableEmptyRows
                height={77}
                emptyRows={emptyRows(page, rowsPerPage, sharedData.length)}
              />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      {sharedData.length > rowsPerPage && (
        <TablePagination
          page={page}
          component="div"
          count={sharedData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      <AddNotes open={showAddNote} setOpen={handleAddNoteModal} />
      <DataDetails
        description="Shared Data"
        isOpen={isDialogOpen('data-details')}
        card={card}
        data={selectedRowData}
        onClose={closeDialog}
      />
      {/* <AlertDialog  maxWidth="lg" title="Generate Access Code" component={<SavedSuccessModal handleCloseModal={handleSharedModal} />} open={showAddNote} /> */}
    </>
  );
}

SharedDataTableView.propTypes = {
  filterName: PropTypes.string,
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  approveRequest: PropTypes.func,
  revokeRequest: PropTypes.func,
  // handleViewDetails: PropTypes.func,
  sharedData: PropTypes.array,
};

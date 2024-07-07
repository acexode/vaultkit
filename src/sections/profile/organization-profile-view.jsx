import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Box,
  Stack,
  Table,
  Button,
  TableBody,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';

import useDialogState from 'src/routes/hooks/useSharedData';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import AlertDialog from '../modal/modal';
import TableNoData from '../table/table-no-data';
import CommonTableHead from '../table/user-table-head';
import TableEmptyRows from '../table/table-empty-rows';
import BulkInviteModal from './organization-modals/bullk-invite';
import RequestDataTRows from '../table/common/request-data-trows';
import SingleInviteModal from './organization-modals/single-invite';
import { emptyRows, applyFilter, getComparator } from '../user/utils';

OrganizationProfileView.propTypes = {
  handleVerificationModal: PropTypes.func,
};
export default function OrganizationProfileView({ handleVerificationModal }) {
  const SingleInvite = 'open-single-invite'
  const BulkInvite = 'open-bulk-invite'
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  // const [employees, setemployees] = useState([])
  const [selected, setSelected] = useState([]);
  //   const [filterName, setFilterName] = useState('');
  // const [page, setPage] = useState(0);

  const handleViewDetails = (newValue) => {
    console.log(newValue);
  };
  //   console.log(setFilterName);

  const employees = [];
  const filterName = '';

  const [page, setPage] = useState(0);
  const [showAddNote, setshowAddNote] = useState(false);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('name');

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
      const newSelecteds = employees.map((n) => n.name);
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
    inputData: employees,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  console.log(notFound, !dataFiltered.length, filterName);
  return (
    <Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Box>
        <Typography variant="h4">Macrosoft Inc</Typography>
        <Typography variant="caption"> 22, Ave Street, Newyork, USA</Typography>
        <Typography variant="subtitle1"> Total Employees - 0 </Typography>

        </Box>

        <Box>
          <Button
            variant="contained"
            onClick={() => openDialog(SingleInvite)}
            startIcon={<Iconify icon="bi:person-plus" />}
          >
            Invite Employee
          </Button>
          <Button
            variant="contained"
            onClick={() => openDialog(BulkInvite)}
            color="inherit"
            sx={{ mx: 2 }}
            startIcon={<Iconify icon="codicon:organization" />}
          >
            Bulk invite
          </Button>
        </Box>
      </Stack>
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <CommonTableHead
              order={order}
              orderBy={orderBy}
              rowCount={employees.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'name', label: 'Name' },
                { id: 'role', label: 'Email' },
                { id: 'company', label: 'Designation' },
                { id: 'validity', label: 'Access Validity', align: 'center' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
            {employees.length > 0 ? (
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <RequestDataTRows
                      key={row.id}
                      name={row.name}
                      role={row.role}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      validity={row.validity}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      handleAddNoteModal={handleAddNoteModal}
                      notificationCount={row.notificationCount}
                      handleViewDetails={handleViewDetails}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, employees.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            ) : (
              <TableNoData />
            )}
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        page={page}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <AlertDialog handleClose={()=> closeDialog(SingleInvite)} fu maxWidth="lg" title="Generate Access Code" component={<SingleInviteModal handleCloseModal={closeDialog} />} open={isDialogOpen(SingleInvite)} />
      <AlertDialog handleClose={()=> closeDialog(BulkInvite)} fu maxWidth="lg" title="Generate Access Code" component={<BulkInviteModal handleCloseModal={closeDialog} />} open={isDialogOpen(BulkInvite)} />
    </Box>
  );
}

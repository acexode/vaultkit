import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Box,
  Stack,
  Table,
  Button,
  TableBody,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';
import useDialogState from 'src/routes/hooks/useSharedData';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import AlertDialog from '../../modal/modal';
import TableNoData from '../../table/table-no-data';
import CommonTableHead from '../../table/user-table-head';
import TableEmptyRows from '../../table/table-empty-rows';
import OrgTableToolbar from '../../table/OrganizationToolbar';
import { emptyRows, applyFilter, getComparator } from '../../user/utils';
import OrganizationTRows from '../../table/common/Organizatio-table.row';
import BulkInviteModal from '../../modal/organization-modals/bullk-invite';
import SingleInviteModal from '../../modal/organization-modals/single-invite';
import OrgShareView from '../../modal/organization-modals/org-share-view-modal';

OrganizationProfileView.propTypes = {
  handleVerificationModal: PropTypes.func,
};
export default function OrganizationProfileView({ handleVerificationModal }) {
  const SingleInvite = 'open-single-invite'
  const BulkInvite = 'open-bulk-invite'
  const OrgRequestData = 'org-request-data'
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  const router = useRouter();
  // const [employees, setemployees] = useState([])
  const [selected, setSelected] = useState([]);
  //   const [filterName, setFilterName] = useState('');
  // const [page, setPage] = useState(0);

  const handleViewDetails = (value) => {
    router.push(`/dashboard/user?userId=${value}`);

  };
  //   console.log(setFilterName);

  const employees = [
    {
      id: 5,
      name: 'Abubakar',
      email: 'abudawud92@gmail.com',
      status: 'pending',
    }
  ];
  const filterName = '';

  const [page, setPage] = useState(0);

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
  const handleRequestData = () => {
     openDialog(OrgRequestData)
  };

  const dataFiltered = applyFilter({
    inputData: employees,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  console.log(notFound, !dataFiltered.length, filterName);
  return (
    <Container maxWidth="xl" >

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
          <OrgTableToolbar handleRequestBtn={handleRequestData} numSelected={selected.length} />
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
                { id: 'email', label: 'Email' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
            {employees.length > 0 ? (
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <OrganizationTRows
                      key={row.id}
                      userId={row.id}
                      name={row.name}
                      email={row.email}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      validity={row.validity}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      handleRequestData={handleRequestData}
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
      <AlertDialog handleClose={()=> closeDialog(OrgRequestData)} fullWidth maxWidth="lg" title="Generate Access Code" component={<OrgShareView employees={employees} handleCloseModal={closeDialog} />} open={isDialogOpen(OrgRequestData)} />
    </Container>
  );
}

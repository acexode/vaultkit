import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';
import useDialogState from 'src/routes/hooks/useSharedData';

import useAuth from 'src/hooks/useAuth';
import useTableController from 'src/hooks/useTable';

import axiosInstance from 'src/utils/axios';

import { orgEndpoint } from 'src/configs/endpoints';

import Scrollbar from 'src/components/scrollbar';

import AlertDialog from 'src/sections/modal/modal';
import { OrgRequestData } from 'src/sections/profile/view/constant';
import RequestDataView from 'src/sections/access/request-data-view';

import { emptyRows } from '../../user/utils';
import TableNoData from '../../table/table-no-data';
import CommonTableHead from '../../table/user-table-head';
import TableEmptyRows from '../../table/table-empty-rows';
import OrgTableToolbar from '../../table/OrganizationToolbar';
import OrganizationTRows from '../../table/common/Organizatio-table.row';

OrgInviteTable.propTypes = {
  handleVerificationModal: PropTypes.func,
};
export default function OrgInviteTable({ handleVerificationModal }) {
  const {user} = useAuth()
  const { enqueueSnackbar } = useSnackbar();
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  const router = useRouter();
  const [employees, setemployees] = useState([])
  const [selectedUsers, setselectedUsers] = useState([])

  const {
    page,
    order,
    selected,
    orderBy,
    filterName,
    rowsPerPage,
    handleSort,
    handleSelectAllClick,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleFilterByName,
    dataFiltered,
    notFound,

  } = useTableController(employees);

  useEffect(() => {
    const users = employees.filter(e => selected.includes(e.id))
    if(users.length){
      const emails =  new Set(users.map(u => u.email))
      setselectedUsers([...emails])
    }
  }, [employees, selected])
  

  const handleViewDetails = (value) => {
    router.push(`/dashboard/user?userId=${value}`);

  };
  useEffect(() => {
   
    if(user){
      
      const fetchData = async () => {
        try {
         const response = await axiosInstance.get(orgEndpoint.employees)
         if(response.data) {
           setemployees(response.data)
         }
         if(response.error){
           enqueueSnackbar(response.error.message, { 
             autoHideDuration: 1000,
             anchorOrigin: {
               vertical: "top",
               horizontal: "right"
             },
             variant: "error"
           })
         }
        
        } catch (error) {
         console.log(error)
        }
       }
       fetchData()
     
    
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleRequestData = () => {
     openDialog(OrgRequestData)
  };
  const handleRequestBtn = () => {
    openDialog(OrgRequestData)
  };


  return (
    <>

      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <OrgTableToolbar 
             numSelected={selected.length}
             filterName={filterName}
             onFilterName={handleFilterByName}
             handleRequestBtn={handleRequestBtn}
           />
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
                      row={row}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      validity={row.validity}
                      selected={selected.indexOf(row.id) !== -1}
                      handleClick={(event) => handleClick(event, row.id)}
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
       <AlertDialog
        fullWidth
        showClose={false}
        // maxWidth="lg"
        component={<RequestDataView users={selectedUsers} handleClose={() =>closeDialog(OrgRequestData)} />}
        open={isDialogOpen(OrgRequestData)}
      />
      </>
  );
}

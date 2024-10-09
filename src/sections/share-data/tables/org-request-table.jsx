import { useState } from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import useDialogState from 'src/routes/hooks/useSharedData';

import useTableController from 'src/hooks/useTable';

import Scrollbar from 'src/components/scrollbar';

import TableNoData from 'src/sections/table/table-no-data';
import CommonTableHead from 'src/sections/table/user-table-head';
import TableEmptyRows from 'src/sections/table/table-empty-rows';
import OrgTableToolbar from 'src/sections/table/OrganizationToolbar';

import DataDetails from '../view-data';
import { emptyRows } from '../../user/utils';
// import AlertDialog from '../modal/modal';
import AddNotes from '../components/chat/AddNotes';
import RequestDataTRows from '../../table/common/request-data-trows';

// ----------------------------------------------------------------------

export default function OrgSentRequestTableView({ setSelected, sentrequest, approveRequest}) {
  const [showAddNote, setshowAddNote] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null);
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
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
  } = useTableController(sentrequest);
 
  const card = {
    name: 'lorem ipsum dolor',
     description: 'Basic Info, Contact Info, Employment Info, Education Info',
     assignee: [
      {
          "id": "473d2720-341c-49bf-94ed-556999cf6ef7",
          "avatar": "/static/mock-images/avatars/avatar_2.jpg",
          "name": "Soren Durham"
      }
  ],}
  const handleAddNoteModal = () => {
    setshowAddNote(!showAddNote);
  };


  const handleViewDetails = (row) => {
    setSelectedRowData(row); 
    openDialog('data-details'); 
  }

  return (
    <>
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
        <OrgTableToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />
          <Table sx={{ minWidth: 800 }}>
            <CommonTableHead
              order={order}
              orderBy={orderBy}
              rowCount={sentrequest.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'title', label: 'Title' },
                // { id: 'company', label: 'Access Code' },
                { id: 'role', label: 'Email' },
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
                    title={row.title}
                    role={row.role}
                    status={row.status}
                    email={row?.sender?.email}
                    avatarUrl={row.avatarUrl}
                    validity={row.end_time}
                    starttime={row.start_time}
                    selected={selected.indexOf(row.name) !== -1}
                    handleClick={(event) => handleClick(event, row.id)}
                    handleAddNoteModal={handleAddNoteModal}
                    notificationCount={row.notificationCount}
                    handleViewDetails={() => handleViewDetails(row)}
                    approveRequest={approveRequest}
                  />
                ))}

              <TableEmptyRows height={77} emptyRows={emptyRows(page, rowsPerPage, sentrequest.length)} />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      {sentrequest.length > rowsPerPage && (
        <TablePagination
          page={page}
          component="div"
          count={sentrequest.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />)
        
      }
      <AddNotes open={showAddNote} setOpen={handleAddNoteModal} />
      <DataDetails isOpen={isDialogOpen('data-details')} card={card} data={selectedRowData} onClose={closeDialog} />
            {/* <AlertDialog  maxWidth="lg" title="Generate Access Code" component={<SavedSuccessModal handleCloseModal={handleSharedModal} />} open={showAddNote} /> */}
    </>
  );
}
  
OrgSentRequestTableView.propTypes = {
    setSelected: PropTypes.func,
    approveRequest: PropTypes.func,
    sentrequest: PropTypes.array,
  };

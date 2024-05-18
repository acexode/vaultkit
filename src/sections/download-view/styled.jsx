import styled from "@emotion/styled";


export const ProfileView = styled('div')(({ theme }) => ({
    outline: 'none',
    position: 'relative'
}));
export const ProfileImgWrap = styled('div')(({ theme }) => ({
    height: '120px',
    width: '120px',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: { position: 'relative', margin: '0 auto' },
    overflow: 'hidden'
}));
export const ProfileImg = styled('div')(({ theme }) => ({
    height: '120px',
    width: '120px',
}));
export const ProfileBasic = styled('div')(({ theme }) => ({
    marginLeft: '140px',
    paddingRight: '50px',
    [theme.breakpoints.down('sm')]: { marginLeft: '0', paddingRight: '0' }
}));
export const ProfileInfoLeft = styled('div')(({ theme }) => ({
    borderRight: '2px dashed #D3D3D4',
    paddingLeft: '10px',
    [theme.breakpoints.down('md')]: { textAlign: 'center', margin: '0 0 20px', padding: '0, 0, 20px', borderRight: 'none', borderBottom: '2px dashed #D3D3D4' },
    [theme.breakpoints.down('sm')]: { textAlign: 'center', padding: '15px 0' }
}));
export const PersonalInfo = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    margin: '0',
    padding: '0'
}));
export const PersonalInfoItems = styled('li')(({ theme }) => ({
    display: 'flex',
    marginBottom: '10px',
    [theme.breakpoints.down('lg')]: { width: '100%' },
    '& .title': {
        color: '#373b3e',
        float: 'left',
        fontWeight: '500',
        width: '70%',
        [theme.breakpoints.down('sm')]: { width: '50%', margin: '0' }
      },
    '& .text': {
        color: '#7a7c7e',
        float: 'left',
        display: 'block',
        width: '30%',
      },
}));

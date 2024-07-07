import { styled } from "@mui/material";

export const ContactWrap = styled('div')(({ theme }) => ({
    boxShadow: '0px 4px 24px 0px rgba(188, 188, 188, 0.25)',
    background: '#FFF',
    borderRadius: '5px',
    margin: '0 0 24px',
    padding: '24px 24px 14px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}));

export const ContactProfile = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
}));



export const CompanyAvatar = styled('div')(({ theme }) => ({
    width: '60px',
    height: '60px'
}));

export const Avatar = styled('div')(({ theme }) => ({
     width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    color: '#FFF',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    lineHeight: '34px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    position: 'relative',
    whiteSpace: 'nowrap',
    margin: '0 10px 0 0',
    marginRight: '15px',
    borderRadius: '50%',
    'img': {
        width: '48px',
        flexShrink: 0
    }
}));


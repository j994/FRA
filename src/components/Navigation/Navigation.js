import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline ph3 pv0 pointer'>Sign out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline ph3 pv0 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('registration')} className='f3 link dim black underline ph3 pv0 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
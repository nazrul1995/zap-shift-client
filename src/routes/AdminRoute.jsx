import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import Forbidden from '../components/Forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role, reloading} = useRole()
    if(loading || reloading){
        return Loading
    }

    if(role !== 'admin'){
        return <Forbidden>  </Forbidden>
    }

    return children;
};

export default AdminRoute;
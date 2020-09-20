import React from 'react'
import AddNewPost from '../src/views/AddNewPost';
import UserListManagement from '../src/views/UserListManagement';
import HomeAdmin from './views/HomeAdmin';
import PostManagement from './views/PostManagement';
import AdminProfile from './views/AdminProfile';

import { getAllProfiles } from './actions/profile';

import {
    SolutionOutlined,
    FileAddOutlined,
    TeamOutlined,
    UserOutlined,
    CodeSandboxOutlined
} from '@ant-design/icons';

const routes = [
    {
        path: "/admin/home",
        component: <HomeAdmin />,
        name_routes: "Home",
        icon: <CodeSandboxOutlined />,
        callApi: null
    },
    {
        path: "/admin/add-new-post",
        component: <AddNewPost />,
        name_routes: "New Post",
        icon: <FileAddOutlined />,
        callApi: null

    },
    {
        path: "/admin/post-manager",
        component: <PostManagement />,
        name_routes: "Post Management",
        icon: <SolutionOutlined />,
    },
    {
        path: "/admin/mana-user-profile",
        component: <UserListManagement />,
        name_routes: "User Management",
        icon: <TeamOutlined />,
        callApi: getAllProfiles
    },
    {
        path: "/admin/admin-profile",
        component: <AdminProfile />,
        name_routes: "Admin Profile",
        icon: <UserOutlined />,
        callApi: null
    },
]



export default routes;
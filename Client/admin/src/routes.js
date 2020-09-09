import React  from 'react'
import AddNewPost from '../src/views/AddNewPost';
import UserListManagement from '../src/views/UserListManagement';
import AdminDashBoard from './views/AdminDashBoard';
import PostManagement from './views/PostManagement';

import {
    LineChartOutlined,
    SolutionOutlined,
    FileAddOutlined,
    TeamOutlined,

} from '@ant-design/icons';

const routes = [
    {
        path: "/admin-dashboard",
        component: <AdminDashBoard/>,
        name_routes: "Admin Dashboard",
        icon: <LineChartOutlined />
    },
    {
        path: "/add-new-post",
        component: <AddNewPost/>,
        name_routes: "New Post",
        icon: <FileAddOutlined />
    },
    {
        path: "/post-manager",
        component: <PostManagement/>,
        name_routes: "Post Management",
        icon: <SolutionOutlined />
    },
    {
        path: "/mana-user-profile",
        component: <UserListManagement/>,
        name_routes: "User Profile",
        icon: <TeamOutlined />
    },
]

export default routes;
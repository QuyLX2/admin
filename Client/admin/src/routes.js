import React  from 'react'
import AddNewPost from '../src/views/components/contents/AddNewPost';
import UserListManagement from '../src/views/components/contents/UserListManagement';
import AdminDashBoard from './views/components/contents/AdminDashBoard';
import PostManagement from './views/components/contents/PostManagement';
import AdminProfile from './views/components/contents/AdminProfile';

import {
    // PieChartOutlined,
    // DesktopOutlined,
    // ContainerOutlined,
    LineChartOutlined,
    SolutionOutlined,
    FileAddOutlined,
    TeamOutlined,
    // FileMarkdownOutlined,
    UserOutlined

} from '@ant-design/icons';

const routes = [
    {
        path: "/admin-dashboard",
        component: <AdminDashBoard/>,
        name_routes: "Admin Dashboard",
        icon: <LineChartOutlined />
    },
    {
        path: "/post-manager",
        component: <PostManagement/>,
        name_routes: "Post Management",
        icon: <SolutionOutlined />
    },
    {
        path: "/add-new-post",
        component: <AddNewPost/>,
        name_routes: "New Post",
        icon: <FileAddOutlined />
    },
    {
        path: "/mana-user-profile",
        component: <UserListManagement/>,
        name_routes: "User Profile",
        icon: <TeamOutlined />
    },
    {
        path: "/admin-profile",
        component: <AdminProfile/>,
        name_routes: "Admin Profile",
        icon: <UserOutlined />
    }
]

export default routes;
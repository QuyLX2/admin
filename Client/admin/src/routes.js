import React  from 'react'
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
const routes = [
    {
        path: "/content",
        component: <div>Content manager</div>,
        name_routes: "Content manager",
        icon: <PieChartOutlined />
    },
    {
        path: "/add-new-post",
        component: <div>Add new posts</div>,
        name_routes: "New post",
        icon: <DesktopOutlined />
    },
    {
        path: "/mana-user-profile",
        component: <div>User profile</div>,
        name_routes: "User profile",
        icon: <ContainerOutlined />
    },
    {
        path: "/table",
        component: <div>Show data</div>,
        name_routes: "Show Data",
        icon: <ContainerOutlined />
    }
]

export default routes;
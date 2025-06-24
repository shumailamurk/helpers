import React, { useEffect, useState } from 'react'
import {
  DashboardOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DollarOutlined,
  FileTextOutlined,
  SolutionOutlined,
  CreditCardOutlined,
  FileDoneOutlined,
  FundOutlined,
  FileSearchOutlined,
  MessageOutlined,
  UserOutlined,
  TeamOutlined,
  SmileOutlined,
  NotificationOutlined
} from '@ant-design/icons'

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardOutlined />,
    link: "/Dashboard",
  },
  {
    title: "Categories",
    icon: <AppstoreOutlined />,
    link: "/Categories",
  },
  {
    title: "Services",
    icon: <UnorderedListOutlined />,
    link: "/Services",
  },
  {
    title: "Price List",
    icon: <DollarOutlined />,
    link: "/Pricelist",
  },
  {
    title: "Job Requests",
    icon: <FileTextOutlined />,
    link: "/JobRequest",
  },
  {
    title: "Service Requests",
    icon: <SolutionOutlined />,
    link: "/ServiceRequests",
  },
  {
    title: "Payments",
    icon: <CreditCardOutlined />,
    link: "/Payments",
  },
  {
    title: "Invoices",
    icon: <FileDoneOutlined />,
    link: "/Invoices",
  },
  {
    title: "Net Amount",
    icon: <FundOutlined />,
    link: "/NetAmount",
  },
  {
    title: "Lead Logs",
    icon: <FileSearchOutlined />,
    link: "/LeadLogs",
  },
  {
    title: "Chats",
    icon: <MessageOutlined />,
    link: "/Chats",
  },
  {
    title: "Users",
    icon: <UserOutlined />,
    link: "/Users",
  },
  {
    title: "Workers",
    icon: <TeamOutlined />,
    link: "/Workers",
  },
  {
    title: "Customers",
    icon: <SmileOutlined />,
    link: "/Customers",
  },
  {
    title: "Advertisements",
    icon: <NotificationOutlined />,
    link: "/Advertisements",
  },
]

export const AdministrationData = [
  { title: "Campaigns",
     icon: <AppstoreOutlined />,
      link: "/Campaigns" },

  { title: "Survey Forms",
     icon: <FileTextOutlined />, 
     link: "/SurveyForms" },

  { title: "TW Charges",
     icon: <DollarOutlined />,
      link: "/TWCharges" },

  { title: "Skills", 
    icon: <UnorderedListOutlined />, 
    link: "/Skills" },

  { title: "Areas", 
    icon: <FundOutlined />, 
    link: "/Areas" },

  { title: "Company", 
    icon: <TeamOutlined />,
     link: "/Company" },

  { title: "Versions", 
    icon: <FileDoneOutlined />, 
    link: "/Versions" },

  { title: "Invoice Message", 
    icon: <MessageOutlined />, 
    link: "/InvoiceMessage" },
];


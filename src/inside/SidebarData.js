import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IoContrast } from 'react-icons/io5';
import { IoMoonOutline } from 'react-icons/io5';
import { IoBrowsersOutline } from 'react-icons/io5';


export const SidebarData = [

    {
        title: 'Anxiety',
        path: '/anxiety-meditation',
        icon: <IoBrowsersOutline />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Meditation',
                path: '/anxiety-meditation',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Tips to prevent anxiety',
                path: '/anxiety-tips',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'The most common anxiety disorders',
                path: '/anxiety-disorders',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Symptoms and causes',
                path: '/anxiety-symptoms',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Insomnia',
        path: '/tips-insomnia',
        icon: <IoMoonOutline />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Sleep diary',
                path: '/sleep-diary',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Tips to prevent insomnia',
                path: '/tips-insomnia',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'The most common sleep disorders',
                path: '/sleep-disorders',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Symptoms',
                path: '/sleep-symptoms',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },

    {
        title: 'Depression',
        path: '/depression-tips',
        icon: <IoContrast />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Motivation',
                path: '/motivation2',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Tips to prevent depression',
                path: '/depression-tips',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'The most common depression disorders',
                path: '/depression-disorders',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Symptoms',
                path: '/depression-symptoms',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
];

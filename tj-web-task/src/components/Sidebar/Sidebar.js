import React, { useEffect, useRef, useState } from 'react'
import { AssignmentIndOutlined, ContactMailOutlined, EmailOutlined, HomeOutlined, InfoOutlined, ViewHeadlineOutlined } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { SidebarContainer, SidebarContainerBottom, SidebarContainerMiddle, SidebarContainerTop, SidebarUnexpanded } from './styles';
import SidebarOption from '../SidebarOption/SidebarOption';
import { Avatar } from '@material-ui/core';
import PrakharKapoorImage from '../assets/images/developer_images/prakhar.png'

function Sidebar() {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setExpanded(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <>
            {!expanded ? (
                <>
                    <SidebarUnexpanded ref={ref}>
                        <ViewHeadlineOutlined onClick={() => setExpanded(true)} />
                    </SidebarUnexpanded>
                </>
            ) : (
                <>
                    <>
                        <SidebarContainer expanded={expanded} ref={ref}>
                            <SidebarContainerTop>
                                <CloseIcon onClick={() => setExpanded(false)} />
                                <Avatar alt="Prakhar Kapoor" src={PrakharKapoorImage} style={{backgroundColor: 'white'}} />
                            </SidebarContainerTop>
                            <SidebarContainerMiddle>
                                <SidebarOption Icon={HomeOutlined} title="Home" routePath ={"home"} />
                                <SidebarOption Icon={AssignmentIndOutlined} title="Showcase" routePath ={"projects"} />
                                <SidebarOption Icon={InfoOutlined} title="About Me" routePath ={"aboutme"} />
                                <SidebarOption Icon={ContactMailOutlined} title="Contact Me" routePath ={"contactme"} />
                            </SidebarContainerMiddle>
                            <SidebarContainerBottom>
                                <span><EmailOutlined /></span><span>kapoorprakhar99@gmail.com</span>
                            </SidebarContainerBottom>
                        </SidebarContainer>
                    </>
                </>
            )
            }
        </>
    )
}

export default Sidebar

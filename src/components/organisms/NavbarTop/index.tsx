// @flow
import * as React from 'react';
import styles from './index.module.css';
import logo from "../../../assets/img/logo-landscape.jpeg"
type Props = {
    navbars?: string[] | null,
};
const defaultProps : Props = {
    navbars: [],
}

const NavbarTop: React.FC<Props> = (props: Props) => (
    <div className={styles.navbarTop + " shadow-sm d-flex"}>
        <img src={logo} alt={"Image"}/>
    </div>
);

NavbarTop.defaultProps = defaultProps;

export default NavbarTop;
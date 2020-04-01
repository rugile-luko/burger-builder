import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";

const layout = props => (
    <Aux>
        <main className={styles.Content}>{props.children}</main>
    </Aux>
);

export default layout;
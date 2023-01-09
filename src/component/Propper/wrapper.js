import classNames from "classnames/bind";
import styles from './propper.module.scss'

const cx=classNames.bind(styles)
function Wrapper({children}) {
    return (<div className={cx('wrapper')}>{children}</div>  );
}

export default Wrapper;
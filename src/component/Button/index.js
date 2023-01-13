import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    outline,
    children,
    onClick,
    small,
    large,
    text,
    disable,
    rounded,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //  nếu dùng disable thì bỏ onClick

    // if (disable) {
    //     delete props.onClick;
    // }

    // cách 2: khi có disable thì bỏ hết tất cả các props có on
    // remove enent listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;

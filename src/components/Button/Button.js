import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    children,
    primary,
    text,
    rounded,
    disiabled,
    small,
    large,
    outline,
    href,
    onClick,
    item,
    icon,
    separate,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disiabled) {
        delete props.onClick;
    }
    const classe = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disiabled,
        rounded,
        item,
        separate,
    });

    return (
        <Comp className={classe} {...props}>
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disiabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    href: PropTypes.string,
    item: PropTypes.bool,
    icon: PropTypes.object,
    separate: PropTypes.bool,
};
export default Button;

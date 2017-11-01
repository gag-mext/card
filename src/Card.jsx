import '../style';
import React from 'react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';


class Card extends React.Component{
  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { prefixCls, full, className, ...resetProps } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-full`]: full,
      [className]: className,
    });

    return (
      <div className={wrapCls} {...resetProps} />
    );
  }
}
Card.defaultProps = {
  prefixCls: 'am-card',
  full: false,
};
Card.propTypes = {
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  full: React.PropTypes.bool
};
Card.displayName = "Card";
module.exports=Card;

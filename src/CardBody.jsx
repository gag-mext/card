import React from 'react';
import classNames from 'classnames';

class CardBody extends React.Component{
  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} {...restProps} />
    );
  }
}
CardBody.defaultProps = {
      prefixCls: 'am-card',
};
CardBody.propTypes = {
  prefixCls: React.PropTypes.string,
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  style:React.PropTypes.object
};
CardBody.displayName = "CardBody";
module.exports=CardBody;

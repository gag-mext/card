import React from 'react';
import classNames from 'classnames';

class CardFooter extends React.Component{
  render() {
    const { prefixCls, content, className, extra, ...restProps } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        { extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div> }
      </div>
    );
  }
}
CardFooter.defaultProps = {
      prefixCls: 'am-card',
};
CardFooter.propTypes = {
  prefixCls: React.PropTypes.string,
  content: React.PropTypes.any,
  className: React.PropTypes.string,
  extra: React.PropTypes.any
};
CardFooter.displayName = "CardFooter";
module.exports=CardFooter;

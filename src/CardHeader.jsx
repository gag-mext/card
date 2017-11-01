import React from 'react';
import classNames from 'classnames';

class CardHeader extends React.Component{


  render() {
    const { prefixCls, className, title, thumb, thumbStyle, extra, ...restProps } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-header-content`}>
          { thumb ? <img style={thumbStyle} src={thumb} /> : null }
          {title}
        </div>
        { extra ? <div className={`${prefixCls}-header-extra`}>{extra}</div> : null }
      </div>
    );
  }
}
CardHeader.defaultProps = {
  prefixCls: 'am-card',
  thumbStyle: {},
};
CardHeader.propTypes = {

  prefixCls: React.PropTypes.string,
  title: React.PropTypes.any,
  thumb: React.PropTypes.string,
  extra: React.PropTypes.any,
  thumbStyle: React.PropTypes.object,
  className: React.PropTypes.string
};
CardHeader.displayName = "CardHeader";
module.exports=CardHeader;

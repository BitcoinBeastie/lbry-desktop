// @flow
import * as ICONS from 'constants/icons';
import classnames from 'classnames';
import React from 'react';
import Button from 'component/button';

type Props = {
  message: string,
  actionText: string,
  href?: string,
  type?: string,
  onClick?: () => void,
  onClose?: () => void,
};

export default function Nag(props: Props) {
  const { message, actionText, href, onClick, onClose, type } = props;

  const buttonProps = onClick ? { onClick } : { href };

  return (
    <div className={classnames('nag', { 'nag--helpful': type === 'helpful' })}>
      {message}
      <Button className={classnames('nag__button', { 'nag__button--helpful': type === 'helpful' })} {...buttonProps}>
        {actionText}
      </Button>
      {onClose && <Button className="nag__button nag__close" icon={ICONS.REMOVE} onClick={onClose} />}
    </div>
  );
}

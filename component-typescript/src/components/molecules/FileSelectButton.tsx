/** @jsx jsx */
/** @jsxRuntime classic */
import React, {
  useMemo, useCallback, createRef, ComponentProps, ChangeEvent, useState,
} from 'react';
import { css, jsx } from '@emotion/core';

import PrimaryButton from 'components/atoms/Button';
import FileDnDLayer from 'components/molecules/FileDnDLayer';

type FileSelectButtonProps = {
    setFile: (file: File) => void,
    value?: string,
    accept?:string,
    fullWidth?: boolean
} & Omit<ComponentProps<typeof PrimaryButton>, 'onClick'> // onClickを除いたProps

/**
 * ファイル選択/ドラッグアンドドロップを受け入れるボタン
 */
const FileSelectButton: React.FC<FileSelectButtonProps> = ({
  setFile, text, disabled, ghost, value = null, accept = null, fullWidth = false,
}) => {
  // ボタンクリック時にファイル選択ダイアログを表示させる
  const ref = useMemo(() => createRef<HTMLInputElement>(), []);
  const onClick = useCallback(() => {
    if (ref.current) {
      ref.current.click();
    }
  }, [ref]);

  // ファイル選択後、stateにファイルを保存
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.item(0)) {
      return;
    }
    setFile(event.target.files.item(0)!);
  }, [setFile]);

  // DnDアクティブ状態
  const [isActive, setActive] = useState(true);

  return (
    <FileDnDLayer
      setFile={setFile}
      setActive={setActive}
      fullWidth={fullWidth}
    >
      <label htmlFor="file">
        <input
          type="file"
          id="fileInput"
          css={css({ display: 'none' })}
          ref={ref}
          value={value || ''}
          onChange={onChange}
          accept={accept || ''}
        />
        <PrimaryButton
          text={text}
          disabled={disabled || isActive}
          ghost={ghost}
          onClick={onClick}
          fullWidth={fullWidth}
        />
      </label>
    </FileDnDLayer>
  );
};

export default FileSelectButton;

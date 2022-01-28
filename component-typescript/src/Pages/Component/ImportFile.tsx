import FileSelectButton from 'components/molecules/FileSelectButton'
import React, { useState } from 'react'
import useToastNotification from 'hooks/useToastNotification';

function ImportFile() {
    const [uploadFile, setUploadFile] = useState<File>();
    const { successNotification, errorNotification } = useToastNotification();
    const [inputValue, setValueInput] = useState('');

    const extensionFile = (name: string) => name.split('.').pop();

    if (uploadFile) {
      const fileType = extensionFile(uploadFile.name);
      if (fileType !== 'csv' && fileType !== 'xls' && fileType !== 'xlsx') {
        errorNotification('CSVファイルを選択してください。');
        setUploadFile(undefined);
        setValueInput('');
      }
    }
    return (
        <div>
            <FileSelectButton
            text="Excelファイルをドラッグ＆ドロップ  または  クリックしてファイルを選択してください"
            ghost={true}
            setFile={setUploadFile}
            value={inputValue}
            accept=".xlsx,.xls"
            />
        </div>
    )
}

export default ImportFile

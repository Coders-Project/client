import React, { useEffect, useState } from 'react';

interface InputFileProps extends React.HTMLProps<HTMLLabelElement> {
  children: React.ReactNode;
  id: string;
  onFile?: (arg: FileList | null) => void;
  multipleFile?: boolean;
  acceptFile?: string;
}

const InputFile = ({
  children,
  id,
  className,
  htmlFor,
  multipleFile,
  acceptFile,
  onFile,
  ...rest
}: InputFileProps) => {
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files);
  };

  useEffect(() => {
    console.log('file change');

    onFile && onFile(selectedFile);
  }, [onFile, selectedFile]);

  return (
    <>
      <label
        // tabIndex={0}
        {...rest}
        className={`cursor-pointer ${className}`}
        htmlFor={id}
      >
        <input
          className="absolute opacity-0"
          multiple={multipleFile}
          accept={acceptFile}
          onChange={handleChange}
          id={id}
          type="file"
          // hidden
        />
        {children}
      </label>
    </>
  );
};

export default InputFile;

import { FC, useState } from "react";
import Button from "./Button";

const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"]
      }
    }
  ],
  excludeAcceptAllOption: true,
  multiple: false
};

async function getTheFile() {
  // open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();

  return fileData;
}

async function saveFile(imgBlob: File) {
  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(imgBlob);

  // close the file and write the contents to disk.
  await writableStream.close();
}

const FileSystemAccessApiExample: FC = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <section>
      <h2>FileSystem Access API</h2>

      <p>
        <Button
          onClick={async () => {
            try {
              const file = await getTheFile();

              file.stream();

              setFile(file);

              // const blob = await file.text();
            } catch (e) {
              console.log("ERRORE", e);
            }
          }}
        >
          Read an image file
        </Button>
      </p>

      {file && (
        <p>
          {file.name} ({file.size})
          {
            <img
              width="100%"
              alt="blob"
              src={window.URL.createObjectURL(file)}
            />
          }
          <div>
            <Button
              onClick={async () => {
                await saveFile(file);

                alert("File was saved!");
              }}
            >
              Save the file
            </Button>
          </div>
        </p>
      )}
    </section>
  );
};

export default FileSystemAccessApiExample;

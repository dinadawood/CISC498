import React, { useState, ChangeEvent } from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

//this is the file for importing csv files that the user has and want to work of off
interface ImportProps {
    show: boolean;
    showImportfileModal: () => void;
    handleClose: () => void;
    importFiles: (data: string) => void;
}

export const ImportCSV = ({
    show,
    showImportfileModal,
    handleClose,
    importFiles
}: ImportProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleImport = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target) {
                    const fileData = event.target.result as string;
                    handleClose();
                    importFiles(fileData);
                }
            };
            reader.readAsText(selectedFile);
        }
    };

    return (
        <div>
            <div>
                <Button
                    onClick={showImportfileModal}
                    style={{
                        backgroundColor: "#9394da",
                        borderColor: "#4D7298",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white"
                    }}
                >
                    Import CSV
                </Button>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Import File</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            aria-label="Upload File"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            id="dropdown8"
                            onClick={() => {
                                handleImport();
                                handleClose();
                            }}
                        >
                            Import
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

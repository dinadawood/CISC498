import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../App.css";

export function Help() {
    const [show, settingDisplay] = useState(true);
    const handleClose = () => settingDisplay(false);
    const handleShow = () => settingDisplay(true);

    return (
        <div>
            <Button
                onClick={handleShow}
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
                Need Help❓
            </Button>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Welcome to your interface!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ul>
                            <li>View a list of all cloud files</li>
                            <li>Insert or remove any files</li>
                            <li>Import a CSV file and convert</li>
                            <li>Export your cloud files into a CSV file</li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} data-testid="closeModHelp">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

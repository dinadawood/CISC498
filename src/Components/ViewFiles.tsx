// import React, { useState } from "react";
// import { Button, Collapse } from "react-bootstrap";
// import "../App";

// //this is the file for displaying files that the user has and wants to export
// export const ViewFiles = () => {
//     const [open, setOpen] = useState(false);
//     return (
//         <div>
//             <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="view-files-content"
//                 aria-expanded={open}
//                 style={{
//                     backgroundColor: "#99B2DD",
//                     borderColor: "#4D7298",
//                     marginLeft: "5px",
//                     marginRight: "5px",
//                     marginTop: "5px",
//                     marginBottom: "5px",
//                     color: "black"
//                 }}
//             >
//                 View Files
//             </Button>
//             <Collapse in={open}>
//                 <div id="view-files-content" style={{ marginTop: "10px" }}>
//                     <b>
//                         <ol>
//                             <li>
//                                 <code>data1.csv</code>
//                             </li>
//                             <li>
//                                 <code>data2.csv</code>
//                             </li>
//                             <li>
//                                 <code>data3.csv</code>
//                             </li>
//                             <li>
//                                 <code>data4.csv</code>
//                             </li>
//                             <li>
//                                 <code>report1.csv</code>
//                             </li>
//                             <li>
//                                 <code>report2.csv</code>
//                             </li>
//                             <li>
//                                 <code>report3.csv</code>
//                             </li>
//                             <li>
//                                 <code>report4.csv</code>
//                             </li>
//                             <li>
//                                 <code>analysis1.csv</code>
//                             </li>
//                             <li>
//                                 <code>analysis2.csv</code>
//                             </li>
//                             <li>
//                                 <code>analysis3.csv</code>
//                             </li>
//                             <li>
//                                 <code>analysis4.csv</code>
//                             </li>
//                         </ol>
//                     </b>
//                 </div>
//             </Collapse>
//         </div>
//     );
// };

import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { files } from "./FileData";
import "../App.css";

export const ViewFiles = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="view-files-content"
                aria-expanded={open}
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
                View Files
            </Button>
            <Collapse in={open}>
                <div id="view-files-content" style={{ marginTop: "10px" }}>
                    <b>
                        <ol>
                            {files.map((file, index) => (
                                <li key={index}>
                                    <code>{file.name}</code>
                                </li>
                            ))}
                        </ol>
                    </b>
                </div>
            </Collapse>
        </div>
    );
};

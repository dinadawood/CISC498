// import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// export const AboutUs = () => {
//     const [show, setShow] = useState(false);

//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);

//     return (
//         <div>
//             {/* About Us Button */}
//             <Button
//                 onClick={handleShow}
//                 style={{
//                     backgroundColor: "#9394da",
//                     borderColor: "#4D7298",
//                     marginLeft: "5px",
//                     marginRight: "5px",
//                     marginTop: "5px",
//                     marginBottom: "5px",
//                     color: "white"
//                 }}
//             >
//                 About Us
//             </Button>

//             {/* About Us Modal */}
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>About Us</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>
//                         Welcome to the UD Center for Clean Hydrogen! Our mission
//                         is to create innovative solutions for a sustainable
//                         future by advancing hydrogen energy technologies. We
//                         work closely with industry leaders, researchers, and
//                         students to promote clean energy and reduce
//                         environmental impacts.
//                     </p>
//                     <p>
//                         CCH is a partnership between University of Delaware,
//                         West Virginia University, The Chemours Company, Plug
//                         Power, and the National Renewable Energy Laboratory
//                         (NREL) to help accelerate the transition to a low-carbon
//                         future. Founded and led by Dr. Yushan Yan, Henry Belin
//                         du Pont Chair of Chemical and Biomolecular Engineering
//                         at UD, and CEO of Versogen, and funded initially by the
//                         Department of Defense, CCH brings together academic
//                         experts and industry innovators to solve the greatest
//                         challenge facing our planet today—building a more
//                         sustainable energy economy.
//                     </p>
//                     <p>
//                         Our team is dedicated to developing cutting-edge
//                         contribute to the global transition to renewable energy.
//                         Join us as we pave the way for a cleaner, greener
//                         tomorrow!
//                     </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

export const AboutUs = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* About Us Button */}
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="about-us-content"
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
                About Us
            </Button>

            {/* Collapsible Content */}
            <Collapse in={open}>
                <div
                    id="about-us-content"
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        backgroundColor: "#F9F9F9",
                        border: "1px solid #DDDDDD",
                        borderRadius: "5px"
                    }}
                >
                    <hr></hr>
                    <h6>CCH</h6>
                    <hr></hr>
                    <p>
                        Welcome to the UD Center for Clean Hydrogen! Our mission
                        is to create innovative solutions for a sustainable
                        future by advancing hydrogen energy technologies. We
                        work closely with industry leaders, researchers, and
                        students to promote clean energy and reduce
                        environmental impacts.
                    </p>
                    <hr></hr>
                    <h6>Partnerships</h6>
                    <hr></hr>
                    <p>
                        CCH is a partnership between University of Delaware,
                        West Virginia University, The Chemours Company, Plug
                        Power, and the National Renewable Energy Laboratory
                        (NREL) to help accelerate the transition to a low-carbon
                        future. Founded and led by Dr. Yushan Yan, Henry Belin
                        du Pont Chair of Chemical and Biomolecular Engineering
                        at UD, and CEO of Versogen, and funded initially by the
                        Department of Defense, CCH brings together academic
                        experts and industry innovators to solve the greatest
                        challenge facing our planet today—building a more
                        sustainable energy economy.
                    </p>
                    <hr></hr>
                    <h6>Web Design Team</h6>
                    <hr></hr>
                    <b>
                        Dina Dawood: <code>ddawood@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Sollen Gacon: <code>solgacon@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Jordan Photis: <code>jpho@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Sydney Holland: <code>sydneymh@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Sharanjit Singh: <code>sharansm@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Joseph Peruyero: <code>peryero@udel.edu</code>
                    </b>
                    <br></br>
                    <b>
                        Abdulrahman Abdulhamid: <code>bood@udel.edu</code>
                    </b>
                    <hr></hr>
                </div>
            </Collapse>
        </div>
    );
};

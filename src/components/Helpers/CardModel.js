import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const CardModel = ({ ModalData, setShow, show ,title}) => {
  const handleClose = () => setShow(false);
console.log(ModalData,"ModalData")
  return (
    <div>
      <Modal show={show} centered onHide={handleClose} size="lg" >
        <div className="bid-time-modal-main">
        <Modal.Header
     
          closeButton
        >
         <div className="bid-time-header-main">
         <p>{title}</p>
          <i
            class="fa fa-times"
            aria-hidden="true"
            style={{ cursor: "pointer", fontSize: "20px" }}
            onClick={() => setShow(false)}
          ></i>
         </div>
        </Modal.Header>
        <Modal.Body >
          <Table striped className="table-main-card">
            <thead className="text-center bg-primary ">
              <tr>
                <th>
                  <i class="fa fa-clock-o " aria-hidden="true"></i> Open Bid
                  Time
                </th>
                <th>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                  Time
                </th>
                <th>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid
                  Result Time
                </th>
                {ModalData?.CBRT ? (
                  <th>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                    Result Time
                  </th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody className="text-center ">
              <tr>
                <td>{ModalData?.OBT ? ModalData?.OBT : " - "}</td>
                <td>{ModalData?.CBT ? ModalData?.CBT : " - "}</td>
                <td>{ModalData?.OBRT ? ModalData?.OBRT : " - "}</td>
                {ModalData?.CBRT ? (
                  <td>{ModalData?.CBRT ? ModalData?.CBRT : " - "}</td>
                ) : (
                  ""
                )}
              </tr>
            </tbody>
          </Table>
          {/* <div className="bid-time-model-card-main">
            <div className="bid-time-model-card-title">
              <p>
                {" "}
                <i class="fa fa-clock-o margin-r-10" aria-hidden="true"></i> Open Bid Time
                :{" "}
              </p>
              <p>
                {" "}
                <i class="fa fa-clock-o margin-r-10" aria-hidden="true"></i> Close Bid Time
                :
              </p>
              <p>
                {" "}
                <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid Result
                Time :
              </p>
              {ModalData?.CBRT ? (
                <p>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                  Result Time :
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="bid-time-model-card-text">
              <p>{ModalData?.OBT ? ModalData?.OBT : " - "}</p>
              <p>{ModalData?.CBT ? ModalData?.CBT : " - "}</p>
              <p>{ModalData?.OBRT ? ModalData?.OBRT : " - "}</p>

              {ModalData?.CBRT ? (
                <p>{ModalData?.CBRT ? ModalData?.CBRT : " - "}</p>
              ) : (
                ""
              )}
            </div>
          </div> */}
        </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default CardModel;

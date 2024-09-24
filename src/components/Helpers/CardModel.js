import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const CardModel = ({ ModalData, setShow, show }) => {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} centered onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>{RowData?.title} 05:30 PM</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Table striped>
            <thead className="text-center bg-primary ">
              <tr>
                <th >
                  <i class="fa fa-clock-o " aria-hidden="true"></i> Open Bid Time
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardModel;

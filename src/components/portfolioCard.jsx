import { useState } from "react";
import Modal from "./Modal";

const PortfolioCard = ({ title, category, description, image, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <div className="portfolio-item">
          <div className="portfolio-item-thumb">
            <img src={image} alt="" className="img-res" />
            <a className="rectangle" onClick={openModal}>
              <i className="fa fa-plus"></i>
            </a>
          </div>
          <div className="portfolio-info">
            <h3>{title}</h3>
            {/* <p>{category}</p> */}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="rectangle" onClick={closeModal}><i className="fa fa-times"></i></a>
              <img className="img-res" src={image} alt="" />
            </div>
            {/* <div className="modal-body">
              <h4 className="modal-title">{title}</h4>
              <p>{description}</p>
            </div> */}
            <div className="modal-footer">
              <a href={link} target="_blank" className="btn">Visit Page</a>
            </div>
          </div>
        </div>
      </Modal>
    </>

  )
}

export default PortfolioCard;

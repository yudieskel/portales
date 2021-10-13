import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = ()=> {
    
    const [ isOpenModal1, openModal1, closeModal1 ] = useModal(false);
    const [ isOpenModal2, openModal2, closeModal2 ] = useModal(false);
    const [ isOpenPortal, openModalPortal, closeModalPortal ] = useModal(false);

    return(
        <div>
            <h2>Modales</h2>
            
            <button onClick={openModal1}>Modal 1</button>
            <Modal 
            isOpen={isOpenModal1} 
            closeModal={closeModal1}
            >
                <h3>Modal 1</h3>
                <p>Hola! Este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/300/300/animals" alt="animals"/>
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal 
            isOpen={isOpenModal2} 
            closeModal={closeModal2}
            >
                <h3>Modal 2</h3>
                <p>Hola! Este es el contenido de mi modal 2</p>
                <img src="https://placeimg.com/400/400/nature" alt="nature"/>
            </Modal>

            <button onClick={openModalPortal}>Modal en Portal</button>
            <ModalPortal 
            isOpen={isOpenPortal} 
            closeModal={closeModalPortal}
            >
                <h3>Modal 3</h3>
                <p>Este es el contenido de un modal que carga en otro
                    nodo del DOM diferente a donde carga nuestra app React
                    , gracias a un React Portal
                </p>
                <img src="https://placeimg.com/400/400/tech" alt="tech"/>
            </ModalPortal>
        </div>
    )
};

export default Modals
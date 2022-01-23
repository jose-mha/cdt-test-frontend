import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../app/context';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(AppContext);

  return ReactDOM.createPortal(
    <div>
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            {children}

            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={() => setOpenModal(false)}
            >
              <svg className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;

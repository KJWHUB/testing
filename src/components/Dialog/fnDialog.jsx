const Modal = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export const openModal = () => {
  // const Component = React.createComponent('div', { ...props }, props.children);
  // const portal = ReactDOM.createPortal(Component, document.body);

  // 모달 컴포넌트를 렌더링합니다.
  const modal = document.createElement("div");
  modal.innerHTML = <Modal>모달 콘텐츠</Modal>;
  document.body.appendChild(modal);
};

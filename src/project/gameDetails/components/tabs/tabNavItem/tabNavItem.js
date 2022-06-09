export const TabNavItem = ({title, id, activeTab, setActiveTab}) => {
  function onClickChangeActive(e) {
    setActiveTab(id);
  }

  return(
    <div className={activeTab === id ? "tabs__nav-item tabs__nav-item_active" : "tabs__nav-item"}  onClick={onClickChangeActive}>
      { title }
    </div>
  );
}
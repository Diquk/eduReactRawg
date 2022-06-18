interface TabNavItemProps {
  title: string;
  id: string;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

export const TabNavItem = ({title, id, activeTab, setActiveTab}: TabNavItemProps) => {
  const onClickChangeActive = (): void => {
    setActiveTab(id);
  }

  return(
    <div className={activeTab === id ? "tabs__nav-item tabs__nav-item_active" : "tabs__nav-item"}  onClick={onClickChangeActive}>
      { title }
    </div>
  );
}
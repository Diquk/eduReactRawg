export const TabContent = ({tabClassName, children}) => {
  return (
    <div className={tabClassName}>
      { children }
    </div>
  );
}
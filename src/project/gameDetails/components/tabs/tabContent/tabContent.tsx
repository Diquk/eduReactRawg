interface TabContentProps {
  tabClassName: string;
  children: React.ReactNode;
}

export const TabContent = ({
  tabClassName,
  children,
}: TabContentProps) => {
  return <div className={tabClassName}>{children}</div>;
};

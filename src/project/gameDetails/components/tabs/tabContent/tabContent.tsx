import { ReactChildren } from 'common/models/interfaces';

interface TabContentProps extends ReactChildren {
  tabClassName: string;
}

export const TabContent = ({
  tabClassName,
  children,
}: TabContentProps) => {
  return <div className={tabClassName}>{children}</div>;
};

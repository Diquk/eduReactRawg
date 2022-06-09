import { useState } from "react"; 

import { TabNavItem } from "project/gameDetails/components/tabs/tabNavItem/tabNavItem";
import { TabContent } from "project/gameDetails/components/tabs/tabContent/tabContent";

export const Tabs = ({gameDescription}) => {
  const [activeTab, setActiveTab] = useState("tab1")

  return(
    <div className="tabs">
      <div className="tabs__navigation">
        <TabNavItem title="About" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Screenshots" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Trailers" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <TabContent id="tab1" activeTab={activeTab}>
        <div dangerouslySetInnerHTML={{__html: gameDescription}}>

        </div>
      </TabContent>
      <TabContent id="tab2" activeTab={activeTab}>
        <div>2</div>
      </TabContent>
      <TabContent id="tab3" activeTab={activeTab}>
        <div>3</div>
      </TabContent>
    </div>
  );
}
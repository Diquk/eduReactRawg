import { useState } from "react";

import "project/gameDetails/components/tabs/tabs.scss";

import { TabNavItem } from "project/gameDetails/components/tabs/tabNavItem/tabNavItem";
import { TabContent } from "project/gameDetails/components/tabs/tabContent/tabContent";
import { Slider } from "project/gameDetails/components/slider/slider";
import { EmptyResults } from "project/gameDetails/components/emptyResults/emptyResults";

export const Tabs = ({gameDescription, gameScreenshots, gameVideos}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const setTabClassName = (tabId) => {
    return `tabs__content tabs__content_${(tabId === activeTab) ? "active" : "deactive"}`
  }

  return(
    <div className="tabs">
      <div className="tabs__navigation">
        <TabNavItem title="About" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Screenshots" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Trailers" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <TabContent tabClassName={setTabClassName("tab1")}>
        <div dangerouslySetInnerHTML={{__html: gameDescription}} />
      </TabContent>
      <TabContent tabClassName={setTabClassName("tab2")}>
        {gameScreenshots.length
        ? <Slider arrayOfContent={gameScreenshots} tag="img"/>
        : <EmptyResults />} 
      </TabContent>
      <TabContent tabClassName={setTabClassName("tab3")}>
        {gameVideos.length
        ? <Slider arrayOfContent={gameVideos} tag="video"/>
        : <EmptyResults />}
      </TabContent>
    </div>
  );
}
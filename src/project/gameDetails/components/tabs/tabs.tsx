import { useState } from 'react';

import 'project/gameDetails/components/tabs/tabs.scss';

import { TabNavItem } from 'project/gameDetails/components/tabs/tabNavItem/tabNavItem';
import { TabContent } from 'project/gameDetails/components/tabs/tabContent/tabContent';
import { Slider } from 'project/gameDetails/components/slider/slider';
import { EmptyResults } from 'project/gameDetails/components/emptyResults/emptyResults';
import { ESliderContentTypes } from 'project/gameDetails/enums/ESliderContentTypes';
import { useAppSelector } from 'common/hooks/reduxHooks';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const gameItem = useAppSelector((state) => state.game.game);
  const { screenshots: gameScreenshots } = useAppSelector(
    (state) => state.game
  );
  const { videos: gameVideos } = useAppSelector(
    (state) => state.game
  );

  const setTabClassName = (tabId: string): string => {
    return `tabs__content tabs__content_${
      tabId === activeTab ? 'active' : 'deactive'
    }`;
  };

  return (
    <div className="tabs">
      <div className="tabs__navigation">
        <TabNavItem
          title="About"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Screenshots"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Trailers"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <TabContent tabClassName={setTabClassName('tab1')}>
        {gameItem?.description && (
          <div
            dangerouslySetInnerHTML={{
              __html: gameItem?.description,
            }}
          />
        )}
      </TabContent>
      <TabContent tabClassName={setTabClassName('tab2')}>
        {gameScreenshots?.results?.length ? (
          <Slider
            arrayOfContent={gameScreenshots?.results}
            tag={ESliderContentTypes.Images}
          />
        ) : (
          <EmptyResults />
        )}
      </TabContent>
      <TabContent tabClassName={setTabClassName('tab3')}>
        {gameVideos?.results?.length ? (
          <Slider
            arrayOfContent={gameVideos?.results}
            tag={ESliderContentTypes.Videos}
          />
        ) : (
          <EmptyResults />
        )}
      </TabContent>
    </div>
  );
};

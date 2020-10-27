import React from 'react';
import PropTypes from 'prop-types';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import DishesList from '../dishes-list/dishes-list';

import './sections-panel.scss';

const SectionsPanel = ({ sections }) => {
  if (!sections) {
    return (<div />);
  }

  const tabs = [];
  const tabPanels = [];
  sections.forEach((section) => {
    tabs.push(
      <Tab className="section-tab">
        {section.name}
      </Tab>,
    );

    tabPanels.push(
      <TabPanel>
        <DishesList dishesList={section.dishes} />
      </TabPanel>,
    );
  });

  return (
    <Tabs
      selectedTabClassName=""
      selectedTabPanelClassName=""
    >
      <TabList className="section-tabs">{tabs}</TabList>
      {tabPanels}
    </Tabs>
  );
};

SectionsPanel.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
};

SectionsPanel.defaultProps = {
  sections: [],
};

export default SectionsPanel;
